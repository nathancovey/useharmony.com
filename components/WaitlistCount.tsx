'use client'

import { useEffect, useState } from 'react'
import { GradientText } from '@/components/ui/gradient-text'

function truncateNumber(num: number): string {
  if (num < 1000) {
    return num.toString()
  }
  if (num < 100000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  }
  return (num / 100000).toFixed(1).replace(/\.0$/, '') + 'k' // This will show 100k, 101.2k etc. Let's adjust for just 100k, 1M.
  // Corrected logic for larger numbers:
  // if (num < 1000000) { // Up to 999.9k
  //   return (num / 1000).toFixed(num % 1000 !== 0 ? 1 : 0) + 'k'
  // }
  // if (num < 1000000000) { // Up to 999.9M
  //   return (num / 1000000).toFixed(num % 1000000 !== 0 ? 1 : 0) + 'M'
  // }
  // return (num / 1000000000).toFixed(num % 1000000000 !== 0 ? 1 : 0) + 'B'
}

// Revised truncateNumber based on examples: 54, 123, 1.2k, 100k
function formatWaitlistCount(num: number): string {
  if (num < 1000) {
    return num.toString() // 54, 123
  }
  if (num < 100000) { // 1000 to 99999
    const thousands = num / 1000
    // Show one decimal place if not a whole number, e.g., 1.2k, 10.5k, but 10k, 99k
    return (Math.floor(thousands * 10) / 10).toFixed(thousands % 1 === 0 ? 0 : 1) + 'k' // 1.2k, 10k, 99.9k
  }
  // For 100,000 and above
  return Math.floor(num / 1000) + 'k' // 100k, 101k
}

export function WaitlistCount() {
  const [count, setCount] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchCount() {
      setIsLoading(true)
      try {
        const response = await fetch('/api/get-waitlist-count')
        if (!response.ok) {
          throw new Error('Failed to fetch waitlist count')
        }
        const data = await response.json()
        if (data.error) {
          throw new Error(data.error)
        }
        setCount(formatWaitlistCount(data.count))
      } catch (error) {
        console.error('Error fetching waitlist count:', error)
        setCount('N/A') // Display N/A or similar on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center rounded-full bg-background px-2 py-0.5 border border-white/10">
        <GradientText className="text-sm font-bold">
          ...
        </GradientText>
      </div>
    )
  }

  if (!count || count === 'N/A') {
    return (
      <div className="flex items-center justify-center rounded-full bg-background px-2 py-0.5 border border-white/10">
        <GradientText className="text-sm font-bold">
          --
        </GradientText>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center rounded-full bg-background px-2 py-0.5 border border-white/10">
      <GradientText className="text-sm font-bold">
        {count}
      </GradientText>
    </div>
  )
} 