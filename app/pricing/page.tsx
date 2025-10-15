import type { Metadata } from "next"
import { PricingSection } from "@/components/PricingSection"

export const metadata: Metadata = {
  title: "Pricing - Harmony AI",
  description: "Start your 14-day free trial of Harmony AI. Get mission-driven planning, role-based goals, AI suggestions, and daily progress tracking.",
  alternates: {
    canonical: "https://www.useharmony.com/pricing"
  },
  openGraph: {
    title: "Pricing - Harmony AI",
    description: "Try Harmony free for 14 days. Plans start at $3.33/month for unlimited mission-driven planning and AI guidance.",
    url: "https://www.useharmony.com/pricing",
    type: "website",
    siteName: "Harmony",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Harmony - AI Planner for Work-Life Harmony",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Harmony AI",
    description: "Try Harmony free for 14 days. Plans start at $3.33/month for unlimited mission-driven planning and AI guidance.",
    images: ["/opengraph-image.png"]
  }
}

export default function PricingPage() {
  return <PricingSection />
}
