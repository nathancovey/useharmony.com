import { NextResponse } from 'next/server'
import { LoopsClient } from 'loops'
import { kv } from '@vercel/kv'

const loops = new LoopsClient(process.env.LOOPS_API_KEY!)

const OTP_EXPIRY_SECONDS = 5 * 60 // 5 minutes
const RATE_LIMIT_SECONDS = 1 * 60 // 1 minute

interface OtpData {
  otp: string
  timestamp: number
}

export async function POST(request: Request) {
  try {
    const { email, otp: submittedOtp } = await request.json()

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    if (!process.env.LOOPS_API_KEY) {
      console.error('LOOPS_API_KEY is not configured')
      return NextResponse.json({ error: 'Configuration error' }, { status: 500 })
    }

    // If no OTP submitted, send OTP
    if (!submittedOtp) {
      const emailKey = `otp:${email}`
      const rateLimitKey = `rate_limit:${email}`

      // Rate limiting check
      const rateLimitData = await kv.get<number>(rateLimitKey)
      if (rateLimitData) {
        console.log(`Rate limit hit for ${email}`)
        return NextResponse.json({ error: `Please wait ${RATE_LIMIT_SECONDS} seconds before requesting another code.` }, { status: 429 })
      }

      // Generate and store OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString()
      const timestamp = Date.now()
      const otpData: OtpData = { otp, timestamp }

      // Store OTP data with 5-minute expiry
      await kv.set(emailKey, otpData, { ex: OTP_EXPIRY_SECONDS })

      // Set rate limit flag with 1-minute expiry
      await kv.set(rateLimitKey, timestamp, { ex: RATE_LIMIT_SECONDS })

      console.log(`Generated OTP for ${email}: ${otp}`)

      // Send OTP email using Loops template
      try {
        await loops.sendTransactionalEmail({
          transactionalId: 'cmcnn7pzo1780xa0i7sjsziy4',
          email: email,
          dataVariables: {
            verificationCode: otp
          }
        })
        
        console.log(`OTP email sent to ${email} via Loops`)
        return NextResponse.json({ success: true, message: 'OTP sent' }, { status: 200 })
      } catch (error) {
        console.error('Loops email error:', error)
        // Clean up KV store if email fails
        await kv.del(emailKey)
        await kv.del(rateLimitKey)
        return NextResponse.json({ error: 'Failed to send OTP email' }, { status: 500 })
      }
    }

    // If OTP submitted, verify it
    const emailKey = `otp:${email}`

    // Retrieve OTP from KV
    const storedOtpData = await kv.get<OtpData>(emailKey)

    if (!storedOtpData) {
      console.warn(`OTP verification failed for ${email}: OTP not found or expired in KV.`)
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 })
    }

    // Verify OTP
    if (storedOtpData.otp !== submittedOtp) {
      console.warn(`OTP verification failed for ${email}: Incorrect OTP submitted.`)
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 })
    }

    // Verification successful
    console.log(`OTP verified successfully for ${email}`)
    
    // Delete the OTP from KV now that it's used
    await kv.del(emailKey)

    // Create contact in Loops and add to mailing lists
    try {
      const contactResponse = await fetch('https://app.loops.so/api/v1/contacts/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          mailingLists: {
            'cmcnkuibk0drb0ix7e9zgflgu': true,
            'cmcnkv7cn0dme0iyy623nblj5': true,
            'cmcnkxfdd0dwf0ix72pm9hppy': true,
            'cmcnoqdm00pm10iwk5tt02bev': true
          }
        })
      })

      if (!contactResponse.ok) {
        const errorText = await contactResponse.text()
        throw new Error(`Loops API error: ${contactResponse.status} ${errorText}`)
      }

      console.log(`Successfully subscribed ${email} to all mailing lists`)
    } catch (loopsError) {
      console.error(`Exception when trying to add ${email} to Loops:`, loopsError)
      // Log but don't fail the user request just for this
    }

    return NextResponse.json({ success: true, message: 'Email verified and subscribed successfully!' }, { status: 200 })

  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}