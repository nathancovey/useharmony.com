import type { Metadata } from "next"
import { ReviewsSection } from "@/components/ReviewsSection"

export const metadata: Metadata = {
  title: "Reviews - Harmony AI",
  description: "See what our users are saying about Harmony AI, the voice assistant for email and calendar management.",
}

export default function ReviewsPage() {
  return <ReviewsSection />
}
