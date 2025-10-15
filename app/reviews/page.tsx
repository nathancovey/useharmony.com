import type { Metadata } from "next"
import { ReviewsSection } from "@/components/ReviewsSection"

export const metadata: Metadata = {
  title: "Reviews - Harmony AI",
  description: "See what our users are saying about Harmony AI, the planner that helps you achieve work-life harmony through mission-driven weekly planning.",
  alternates: {
    canonical: "https://www.useharmony.com/reviews"
  },
  openGraph: {
    title: "Reviews - Harmony AI",
    description: "Real users share how Harmony helped them achieve work-life harmony through role-based planning and AI guidance.",
    url: "https://www.useharmony.com/reviews",
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
    title: "Reviews - Harmony AI",
    description: "Real users share how Harmony helped them achieve work-life harmony through role-based planning and AI guidance.",
    images: ["/opengraph-image.png"]
  }
}

export default function ReviewsPage() {
  return <ReviewsSection />
}
