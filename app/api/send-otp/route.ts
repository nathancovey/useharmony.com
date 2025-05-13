import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { OtpEmailTemplate } from '@/components/emails/otp-template'
import * as React from 'react'
import { kv } from '@vercel/kv' // Import Vercel KV

const resend = new Resend(process.env.RESEND_API_KEY)

const OTP_EXPIRY_SECONDS = 5 * 60 // 5 minutes
const RATE_LIMIT_SECONDS = 1 * 60 // 1 minute

interface OtpData {
  otp: string
  timestamp: number // Store generation timestamp for rate limiting
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    const emailKey = `otp:${email}`
    const rateLimitKey = `rate_limit:${email}`

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // --- Rate Limiting Check ---
    const rateLimitData = await kv.get<number>(rateLimitKey)
    if (rateLimitData) {
        // If rate limit key exists, user tried recently
        console.log(`Rate limit hit for ${email}`)
        return NextResponse.json({ error: `Please wait ${RATE_LIMIT_SECONDS} seconds before requesting another code.` }, { status: 429 }) // 429 Too Many Requests
    }

    // --- Generate and Store OTP ---
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const timestamp = Date.now()
    const otpData: OtpData = { otp, timestamp }

    // Store OTP data with 5-minute expiry
    await kv.set(emailKey, otpData, { ex: OTP_EXPIRY_SECONDS })

    // Set rate limit flag with 1-minute expiry
    await kv.set(rateLimitKey, timestamp, { ex: RATE_LIMIT_SECONDS })

    console.log(`Generated OTP for ${email}: ${otp}. Stored in KV.`) // Log for debugging

    // --- Send Email ---
    const { data, error } = await resend.emails.send({
      from: 'Harmony <hello@harmony.com.ai>',
      to: [email],
      subject: 'Your Harmony Verification Code',
      react: OtpEmailTemplate({ otp }) as React.ReactElement,
    })

    if (error) {
      console.error('Resend error:', error)
      // Attempt to clean up KV store if email fails
      await kv.del(emailKey)
      await kv.del(rateLimitKey)
      return NextResponse.json({ error: 'Failed to send OTP email' }, { status: 500 })
    }

    console.log('Resend success:', data)
    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Send OTP error:', error)
    // Consider more specific error handling (e.g., KV connection issues)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 