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
  if (!RESEND_WEBHOOK_SECRET) {
    console.error('Resend webhook secret (RESEND_WEBHOOK_SECRET) is not configured.')
    // This is a server configuration error, so 500 is appropriate.
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  // It's crucial to get the raw body for signature verification.
  const rawBody = await request.text()
  const signatureHeader = request.headers.get('resend-signature')

  if (!signatureHeader) {
    console.warn('Resend webhook called without resend-signature header.')
    return NextResponse.json({ error: 'Missing Resend signature' }, { status: 401 })
  }

  try {
    // Verification logic based on Resend documentation
    // Example: t=1700000000,v1=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    const parts = signatureHeader.split(',')
    const timestampPart = parts.find(part => part.startsWith('t='))
    const signaturePart = parts.find(part => part.startsWith('v1='))

    if (!timestampPart || !signaturePart) {
      console.warn('Invalid resend-signature header format:', signatureHeader)
      throw new Error('Invalid signature header format')
    }

    const timestamp = timestampPart.substring(2) // Remove 't='
    const signature = signaturePart.substring(3) // Remove 'v1='

    // Optional: Check timestamp to prevent replay attacks (e.g., within 5 minutes)
    const nowInSeconds = Math.floor(Date.now() / 1000)
    const webhookTimestampInSeconds = parseInt(timestamp, 10)

    if (isNaN(webhookTimestampInSeconds)) {
        console.warn('Invalid timestamp in resend-signature header:', timestamp)
        throw new Error('Invalid timestamp in signature')
    }

    // 5 minutes tolerance for clock skew
    if (Math.abs(nowInSeconds - webhookTimestampInSeconds) > (5 * 60)) {
      console.warn(`Resend webhook timestamp too old or too far in future. Current: ${nowInSeconds}, Webhook: ${webhookTimestampInSeconds}`)
      // Still treat as invalid signature for simplicity, or a specific error for timestamp issues
      return NextResponse.json({ error: 'Timestamp validation failed' }, { status: 401 })
    }

    const signedPayload = `${timestamp}.${rawBody}`
    const expectedSignature = crypto
      .createHmac('sha256', RESEND_WEBHOOK_SECRET)
      .update(signedPayload)
      .digest('hex')

    // Use crypto.timingSafeEqual for comparing signatures to prevent timing attacks
    if (!crypto.timingSafeEqual(Buffer.from(expectedSignature, 'hex'), Buffer.from(signature, 'hex'))) {
      console.warn('Invalid Resend webhook signature.')
      throw new Error('Invalid signature') // This will be caught below and return 401
    }
  } catch (error: any) {
    // Log specific error for better debugging if it's not just "Invalid signature"
    if (error.message !== 'Invalid signature' && error.message !== 'Invalid signature header format' && error.message !== 'Invalid timestamp in signature') {
        console.error('Resend signature verification process error:', error.message)
    }
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  // If signature is valid, parse the JSON body
  let event: ResendWebhookEvent
  try {
    event = JSON.parse(rawBody) as ResendWebhookEvent
  } catch (error) {
    console.error('Failed to parse Resend webhook JSON body:', error)
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  // Handle the specific event type
  if (event.type === 'contact.created') {
    try {
      const audienceId = event.data?.audience_id
      if (!audienceId) {
        console.warn('Missing audience_id in contact.created event data:', event.data)
        // Requirement: Ignore malformed events but return 200 if signature was ok
        return new Response(null, { status: 200 })
      }
      
      const key = `audience:${audienceId}:count`
      await kv.incr(key)
      console.log(`Processed 'contact.created'. Incremented count for audience: ${audienceId}`)
      return new Response(null, { status: 200 })
    } catch (kvError) {
      console.error('Failed to increment KV store for contact.created:', kvError)
      // If KV store fails, this is an internal server error for this webhook handler
      return NextResponse.json({ error: 'Failed to update waitlist count' }, { status: 500 })
    }
  }

  // For all other event types, or if type is missing, return 200 OK as per requirements
  // console.log(`Received and ignored Resend webhook event type: ${event.type || 'unknown'}`)
  return new Response(null, { status: 200 })
} 