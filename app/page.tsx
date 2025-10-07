import type { Metadata } from "next"
import { ScrollStorySectionWrapper } from "@/components/ScrollStorySection"

export const metadata: Metadata = {
  title: "Harmony AI Planner – Effective Weekly Planning",
  description: "Harmony helps you craft a personal mission, plan weeks around your roles, and stay on track daily with AI guidance.",
  keywords: [
    "work life harmony",
    "weekly planning app",
    "role based planning",
    "personal mission statement",
    "life planner",
    "ai life coach",
    "ai planning assistant",
    "time blocking app",
    "goal setting app",
    "productivity coach"
  ],
  alternates: {
    canonical: "https://www.useharmony.com"
  },
  openGraph: {
    title: "Harmony App – Work-Life Harmony Planner",
    description: "Discover work-life harmony with Harmony. Define your mission, plan weeks around roles, and act daily with supportive nudges.",
    url: "https://www.useharmony.com",
    type: "website"
  },
  twitter: {
    title: "Harmony App – Work-Life Harmony Planner",
    description: "Harmony blends mission-driven planning and AI guidance so every role in your life gets the care it deserves."
  }
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.useharmony.com/#organization",
        "name": "Harmony Life LLC",
        "url": "https://www.useharmony.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.useharmony.com/opengraph-image.png"
        },
        "sameAs": [
          "https://x.com/nathan_covey"
        ],
        "foundingDate": "2024",
        "founder": {
          "@type": "Person",
          "name": "Nathan Covey",
          "url": "https://x.com/nathan_covey"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.useharmony.com/#website",
        "url": "https://www.useharmony.com",
        "name": "Harmony – Work-Life Harmony Planner",
        "description": "Harmony is the mission-driven planning app that helps you balance work, family, and personal growth.",
        "publisher": {
          "@id": "https://www.useharmony.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.useharmony.com/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.useharmony.com/#app",
        "name": "Harmony Work-Life Harmony Planner",
        "description": "Harmony guides you to define your mission, plan weekly by roles, and stay aligned every day with AI support.",
        "url": "https://www.useharmony.com",
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "127"
        },
        "featureList": [
          "Personal mission statement builder",
          "Role-based weekly planning",
          "AI nudges and time-block assistance",
          "Progress tracking across life roles",
          "Motivating celebrations for completed goals"
        ]
      },
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ScrollStorySectionWrapper />
    </>
  )
}
