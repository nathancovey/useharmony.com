import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import { Webhook } from 'svix'

// We'll assume this secret is for Svix for now. If Resend provides a *different* one for Svix, use that.
const WEBHOOK_SECRET = process.env.RESEND_WEBHOOK_SECRET 

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

  if (!WEBHOOK_SECRET) {
    console.error('Webhook secret (RESEND_WEBHOOK_SECRET) is not configured.')
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  const rawBody = await request.text()
  
  // Convert Next.js Headers object to a plain object for Svix library
  const headers: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    headers[key] = value
  })

  const wh = new Webhook(WEBHOOK_SECRET)

  let verifiedPayload: ResendWebhookEvent
  try {
    verifiedPayload = wh.verify(rawBody, headers) as ResendWebhookEvent
  } catch (err: any) {
    console.error('Svix signature verification failed:', err.message)
    return NextResponse.json({ error: 'Signature verification failed' }, { status: 401 })
  }

  if (verifiedPayload.type === 'contact.created') {
    try {
      const audienceId = verifiedPayload.data?.audience_id
      if (!audienceId) {
        console.warn('Missing audience_id in contact.created event data:', verifiedPayload.data)
        return new Response(null, { status: 200 })
      }
      
      const key = `audience:${audienceId}:count`
      await kv.incr(key)
      return new Response(null, { status: 200 })
    } catch (kvError) {
      console.error('Failed to increment KV store for contact.created:', kvError)
      return NextResponse.json({ error: 'Failed to update waitlist count' }, { status: 500 })
    }
  }

  return new Response(null, { status: 200 })
} 