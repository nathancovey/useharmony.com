import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

// RESEND_AUDIENCE_ID is still needed to construct the correct KV key
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID
const API_CACHE_KEY = 'waitlist_count_api_cache' // Renamed to avoid confusion with the actual counter key
const API_CACHE_EXPIRATION_SECONDS = 60 * 1 // Cache the KV value for 1 minute at the API level

async function fetchWaitlistCountFromKV() {
  if (!RESEND_AUDIENCE_ID) {
    console.error('Resend Audience ID (RESEND_AUDIENCE_ID) is not configured for KV key construction.')
    // Return 0 or throw error, depending on desired behavior for missing config
    // Throwing an error makes it explicit that configuration is missing.
    throw new Error('Resend Audience ID not configured.')
  }

  const primaryCounterKey = `audience:${RESEND_AUDIENCE_ID}:count`
  const count = await kv.get<number>(primaryCounterKey)
  
  // If the key doesn't exist or fails to fetch, count will be null.
  // Return 0 in such cases, as it implies no contacts have been created yet (or an issue).
  return count || 0
}

export async function GET() {
  try {
    // Check API-level cache first
    const cachedCount = await kv.get<number>(API_CACHE_KEY)
    if (cachedCount !== null) {
      return NextResponse.json({ count: cachedCount, source: 'api_cache' })
    }

    // If not in API-level cache, fetch from the primary KV counter key
    const count = await fetchWaitlistCountFromKV()
    
    // Store in API-level cache
    await kv.set(API_CACHE_KEY, count, { ex: API_CACHE_EXPIRATION_SECONDS })

    return NextResponse.json({ count, source: 'kv_primary' })
  } catch (error) {
    console.error('Error in get-waitlist-count API:', error)
    const errorMessage = error instanceof Error ? error.message : 'Internal server error'
    // If RESEND_AUDIENCE_ID is not configured, fetchWaitlistCountFromKV will throw an error.
    // We might want a specific status code for configuration errors vs. other internal errors.
    const status = errorMessage === 'Resend Audience ID not configured.' ? 400 : 500
    return NextResponse.json({ error: errorMessage }, { status })
  }
} 