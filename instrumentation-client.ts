import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: '/harmony-events',
  ui_host: 'https://us.posthog.com',
  person_profiles: 'always',
  capture_pageview: 'history_change', // Auto-capture pageviews on navigation
  capture_pageleave: true, // Enable pageleave tracking for session duration/scroll depth
})
