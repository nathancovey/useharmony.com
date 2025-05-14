import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import crypto from 'crypto'

const RESEND_WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET

interface ResendContactData {
  audience_id: string
  // Add other relevant fields from contact.created event.data if needed
}

interface ResendWebhookEvent {
  type: string
  created_at: string // ISO 8601 date string
  data: ResendContactData & { [key: string]: any } // Allows other properties in data
}

export async function POST(request: Request) {
  console.log('!!! /api/resend-webhook ENDPOINT HIT - TOP OF FUNCTION !!!')
  // Immediately return 200 for diagnostic purposes
  // return NextResponse.json({ message: "Webhook received by diagnostic handler" }, { status: 200 })
  // ^^^ The above is better if Resend needs a JSON body for success. 
  // If Resend is happy with any 200 (even empty), the Response(null) is fine.
  // Let's use a simple Response for now to minimize potential issues.
  // IMPORTANT: This bypasses all signature verification and logic. FOR DIAGNOSTIC PURPOSES ONLY.

  // Original code starts here, effectively commented out for now by the early return if uncommented:
  // if (!RESEND_WEBHOOK_SECRET) { ... }

  // For this test, we will return directly. If the log appears, then we investigate further.
  // If the log DOES NOT appear, the issue is before this code (URL, Vercel routing, etc.)

  // To make the test cleaner, let's just return the success and keep the original code below it,
  // relying on the fact that the return statement will exit the function.

  // return new Response(null, { status: 200 }) // If using this, comment out the original code below.

  // Let's try to run the original code but add the top log.
  // The issue might be that Resend isn't getting *any* 2xx response if there's an early error.

  if (!RESEND_WEBHOOK_SECRET) {
    console.error('Resend webhook secret (RESEND_WEBHOOK_SECRET) is not configured.')
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  const rawBody = await request.text()
  const signatureHeader = request.headers.get('resend-signature')

  if (!signatureHeader) {
    console.warn('Resend webhook called without resend-signature header.')
    return NextResponse.json({ error: 'Missing Resend signature' }, { status: 401 })
  }

  try {
    const parts = signatureHeader.split(',')
    const timestampPart = parts.find(part => part.startsWith('t='))
    const signaturePart = parts.find(part => part.startsWith('v1='))

    if (!timestampPart || !signaturePart) {
      console.warn('Invalid resend-signature header format:', signatureHeader)
      throw new Error('Invalid signature header format')
    }

    const timestamp = timestampPart.substring(2)
    const signature = signaturePart.substring(3)

    const nowInSeconds = Math.floor(Date.now() / 1000)
    const webhookTimestampInSeconds = parseInt(timestamp, 10)

    if (isNaN(webhookTimestampInSeconds)) {
        console.warn('Invalid timestamp in resend-signature header:', timestamp)
        throw new Error('Invalid timestamp in signature')
    }

    if (Math.abs(nowInSeconds - webhookTimestampInSeconds) > (5 * 60)) {
      console.warn(`Resend webhook timestamp too old or too far in future. Current: ${nowInSeconds}, Webhook: ${webhookTimestampInSeconds}`)
      return NextResponse.json({ error: 'Timestamp validation failed' }, { status: 401 })
    }

    const signedPayload = `${timestamp}.${rawBody}`
    const expectedSignature = crypto
      .createHmac('sha256', RESEND_WEBHOOK_SECRET)
      .update(signedPayload)
      .digest('hex')

    if (!crypto.timingSafeEqual(Buffer.from(expectedSignature, 'hex'), Buffer.from(signature, 'hex'))) {
      console.warn('Invalid Resend webhook signature.')
      throw new Error('Invalid signature') 
    }
  } catch (error: any) {
    if (error.message !== 'Invalid signature' && error.message !== 'Invalid signature header format' && error.message !== 'Invalid timestamp in signature') {
        console.error('Resend signature verification process error:', error.message)
    }
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let event: ResendWebhookEvent
  try {
    event = JSON.parse(rawBody) as ResendWebhookEvent
  } catch (error) {
    console.error('Failed to parse Resend webhook JSON body:', error)
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  if (event.type === 'contact.created') {
    try {
      const audienceId = event.data?.audience_id
      if (!audienceId) {
        console.warn('Missing audience_id in contact.created event data:', event.data)
        return new Response(null, { status: 200 })
      }
      
      const key = `audience:${audienceId}:count`
      await kv.incr(key)
      console.log(`Processed 'contact.created'. Incremented count for audience: ${audienceId}`)
      return new Response(null, { status: 200 })
    } catch (kvError) {
      console.error('Failed to increment KV store for contact.created:', kvError)
      return NextResponse.json({ error: 'Failed to update waitlist count' }, { status: 500 })
    }
  }

  return new Response(null, { status: 200 })
} 