import type { Metadata } from "next"
import { PricingSection } from "@/components/PricingSection"

export const metadata: Metadata = {
  title: "Pricing - Harmony AI",
  description: "Choose the perfect plan for your needs. Start with Harmony AI's free plan or upgrade to Pro for advanced features.",
}

export default function PricingPage() {
  return <PricingSection />
}
