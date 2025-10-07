import type { Metadata } from "next"
import { PricingSection } from "@/components/PricingSection"

export const metadata: Metadata = {
  title: "Pricing - Harmony AI",
  description: "Start your 14-day free trial of Harmony AI. Get mission-driven planning, role-based goals, AI suggestions, and daily progress tracking.",
  keywords: ["harmony pricing", "planning app pricing", "weekly planner cost", "productivity app subscription", "AI planner pricing"],
  alternates: {
    canonical: "https://www.useharmony.com/pricing"
  },
  openGraph: {
    title: "Pricing - Harmony AI",
    description: "Try Harmony free for 14 days. Plans start at $3.33/month for unlimited mission-driven planning and AI guidance.",
    url: "https://www.useharmony.com/pricing",
    type: "website"
  }
}

export default function PricingPage() {
  return <PricingSection />
}
