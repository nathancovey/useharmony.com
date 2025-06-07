import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { HowItWorksSection } from "@/components/UseCaseSection"
import { VoiceActionsSection } from "@/components/VoiceActionsSection"
import { PrivacySection } from "@/components/PrivacySection"
import { CTASection } from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Harmony - AI Email Voice Assistant",
  description: "The best AI Gmail assistant for voice-controlled email management. Let Harmony AI read your emails aloud and manage your inbox hands-free while walking or driving. Voice commands for Gmail productivity.",
  keywords: [
    "AI email assistant", 
    "AI gmail assistant", 
    "harmony ai", 
    "harmony app",
    "voice email assistant",
    "hands-free email",
    "gmail voice control",
    "AI email management",
    "voice controlled gmail",
    "email AI assistant",
    "harmony email app",
    "AI inbox management",
    "voice email commands",
    "gmail productivity app"
  ],
  alternates: {
    canonical: "https://harmony.com.ai"
  },
  openGraph: {
    title: "Harmony - AI Email Voice Assistant",
    description: "The best AI Gmail assistant for voice-controlled email management. Manage your inbox hands-free with voice commands.",
    url: "https://harmony.com.ai",
    type: "website"
  },
  twitter: {
    title: "Harmony - AI Email Voice Assistant",
    description: "The best AI Gmail assistant for voice-controlled email management. Manage your inbox hands-free with voice commands."
  }
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://harmony.com.ai/#organization",
        "name": "Harmony Life LLC",
        "url": "https://harmony.com.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://harmony.com.ai/opengraph-image.png"
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
        "@id": "https://harmony.com.ai/#website",
        "url": "https://harmony.com.ai",
        "name": "Harmony - AI Email Voice Assistant",
        "description": "The best AI Gmail assistant for voice-controlled email management",
        "publisher": {
          "@id": "https://harmony.com.ai/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://harmony.com.ai/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://harmony.com.ai/#app",
        "name": "Harmony AI Email Assistant",
        "description": "AI-powered voice assistant that reads and manages your Gmail emails hands-free",
        "url": "https://harmony.com.ai",
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
          "Voice-controlled email reading",
          "Hands-free Gmail management", 
          "AI-powered email replies",
          "Smart unsubscribe functionality",
          "Voice commands for email actions"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Harmony AI email assistant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Harmony is an AI-powered voice assistant that reads your Gmail emails aloud and allows you to manage your inbox hands-free using simple voice commands while walking or driving."
            }
          },
          {
            "@type": "Question", 
            "name": "How does the AI Gmail assistant work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Harmony integrates with your Gmail account and uses AI to read your emails out loud. You can use voice commands to delete emails, mark as read, or perform other actions without touching your device."
            }
          },
          {
            "@type": "Question",
            "name": "Is my email data private with Harmony AI?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Yes, your emails stay completely private on your device. Harmony processes your email data locally and never stores your personal information on external servers."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <HeroSection />
      <HowItWorksSection />
      <VoiceActionsSection />
      <PrivacySection />
      <CTASection />
    </>
  )
}
