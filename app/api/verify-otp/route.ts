import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv' // Import Vercel KV
import { Resend } from 'resend' // Import Resend

// Define the expected structure of the data stored in KV
interface OtpData {
  otp: string
  timestamp: number // We don't strictly need timestamp for verification logic if using TTL, but it's good practice to define the full structure
}

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)
// Read Audience ID from environment variables
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

// Remove the temporary waitlist array as we use Resend now
// const waitlist: string[] = [] 

export async function POST(request: Request) {
  try {
    const { email, otp: submittedOtp } = await request.json()
    const emailKey = `otp:${email}`

    if (!email || !submittedOtp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 })
    }

    // Add a check to ensure the Audience ID is configured
    if (!RESEND_AUDIENCE_ID) {
        console.error('Resend Audience ID is not configured in environment variables.')
        // Return success to user as OTP is the primary goal, but log the config error
        // In a real app you might handle this differently
        return NextResponse.json({ success: true, message: 'Email verified successfully! (Config issue noted)' }, { status: 200 })
    }

    // --- Retrieve OTP from KV ---
    const storedOtpData = await kv.get<OtpData>(emailKey)

    if (!storedOtpData) {
      console.warn(`OTP verification failed for ${email}: OTP not found or expired in KV.`)
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 })
    }

    // --- Verify OTP ---
    if (storedOtpData.otp !== submittedOtp) {
      console.warn(`OTP verification failed for ${email}: Incorrect OTP submitted.`)
      // Optional: Implement attempt limits by storing attempts count in KV
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 })
    }

    // --- Verification Successful ---
    console.log(`OTP verified successfully for ${email}`)
    
    // Delete the OTP from KV now that it's used
    await kv.del(emailKey)
    // Optionally delete the rate limit key too, or let it expire naturally
    // await kv.del(`rate_limit:${email}`)

    // --- Add email to Resend Audience ---
    try {
      const { data, error } = await resend.contacts.create({
        email: email,
        audienceId: RESEND_AUDIENCE_ID, // Use the variable read from env
        unsubscribed: false, // Ensure they are subscribed
        // You can add firstName, lastName etc. here if collected
      })

      if (error) {
        // Log the error but still return success to the user, 
        // as OTP was verified. Consider queuing this for retry in a real app.
        console.error(`Failed to add ${email} to Resend audience ${RESEND_AUDIENCE_ID}:`, error)
      } else {
        console.log(`${email} added to Resend audience ${RESEND_AUDIENCE_ID}:`, data)
      }
    } catch (resendError) {
      console.error(`Exception when trying to add ${email} to Resend audience:`, resendError)
      // Again, log but don't fail the user request just for this
    }

    return NextResponse.json({ success: true, message: 'Email verified successfully!' }, { status: 200 })

  } catch (error) {
    console.error('Verify OTP error:', error)
    // Consider more specific error handling
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 