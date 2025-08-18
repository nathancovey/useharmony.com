import type { Metadata } from "next"
import { HeroSection } from "@/components/HeroSection"
import { VideoSection } from "@/components/VideoSection"
import { HowItWorksSection } from "@/components/UseCaseSection"
import { VoiceActionsSection } from "@/components/VoiceActionsSection"
import { ReviewsSection } from "@/components/ReviewsSection"
import { PricingSection } from "@/components/PricingSection"
import { PrivacySection } from "@/components/PrivacySection"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"

export const metadata: Metadata = {
  title: "Harmony AI - Voice Assistant for Email & Calendar",
  description: "AI executive assistant for Gmail & Google Calendar. Voice control emails, schedule meetings & manage tasks hands-free with our AI voice assistant.",
  keywords: [
    "AI executive assistant", 
    "AI voice assistant", 
    "AI agent",
    "AI email assistant", 
    "AI gmail assistant", 
    "AI calendar assistant",
    "Google Calendar voice control",
    "harmony ai", 
    "harmony assistant",
    "harmony app",
    "voice email assistant",
    "voice calendar assistant",
    "hands-free email",
    "hands-free calendar",
    "gmail voice control",
    "AI email management",
    "AI calendar management",
    "voice controlled gmail",
    "email AI assistant",
    "calendar AI assistant",
    "harmony email app",
    "AI inbox management",
    "voice email commands",
    "voice calendar commands",
    "gmail productivity app",
    "google calendar productivity"
  ],
  alternates: {
    canonical: "https://www.useharmony.com"
  },
  openGraph: {
    title: "Harmony AI - Voice Assistant for Email & Calendar",
    description: "AI executive assistant for Gmail & Google Calendar. Voice control emails, schedule meetings & manage tasks hands-free with our AI voice assistant.",
    url: "https://www.useharmony.com",
    type: "website"
  },
  twitter: {
    title: "Harmony AI - Voice Assistant for Email & Calendar",
    description: "AI executive assistant for Gmail & Google Calendar. Voice control emails, schedule meetings & manage tasks hands-free with our AI voice assistant."
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
        "name": "Harmony AI - Voice Assistant for Email & Calendar",
        "description": "AI executive assistant for Gmail & Google Calendar voice-controlled management",
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
        "name": "Harmony AI Executive Assistant",
        "description": "AI executive assistant and voice agent that manages Gmail emails and Google Calendar hands-free",
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
          "Voice-controlled email reading",
          "Hands-free Gmail management", 
          "Voice-controlled calendar management",
          "Hands-free Google Calendar scheduling",
          "AI-powered email replies",
          "Smart unsubscribe functionality",
          "Voice commands for email actions",
          "Voice commands for calendar events"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Harmony and how does it work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Harmony is an AI-powered voice assistant that integrates with your Gmail to help you manage email hands-free. After connecting your Gmail account, you can simply tap your inbox and start chatting with the assistant using voice commands. You can ask it to read your emails, delete messages, send replies, move emails to folders, and even unsubscribe from lists."
            }
          },
          {
            "@type": "Question",
            "name": "Is my email data safe and private?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We take privacy seriously with multiple safeguards: emails are never sent without confirmation, emails cannot be permanently deleted (mistakes are recoverable), none of your emails are stored or saved by us, all connections are secure and encrypted, and no data is ever sold or used for AI training purposes."
            }
          },
          {
            "@type": "Question",
            "name": "What voice commands can I use with Harmony?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Harmony can handle a wide variety of voice commands including: 'Can you catch me up on my most recent emails?', 'Delete that first email', 'Move all these emails to my receipts folder', 'Write a draft reply', 'Send this email', and 'Unsubscribe me from this list'. You can speak naturally and the AI will understand your intent."
            }
          },
          {
            "@type": "Question",
            "name": "Why combine email management with driving time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to McKinsey, the average knowledge worker spends 2.6 hours a day on email and 1 hour a day in the car - these seem like the perfect two things to combine! Harmony allows you to productively manage your inbox during commutes, walks, or any time when you can't look at your screen, making better use of your time."
            }
          },
          {
            "@type": "Question",
            "name": "Can Harmony permanently delete my emails?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, Harmony cannot permanently delete emails. When you ask it to 'delete' an email, it moves the email to your trash folder, ensuring that any mistakes are recoverable. This is one of our built-in safety measures to protect your important correspondence."
            }
          },
          {
            "@type": "Question",
            "name": "Will Harmony send emails without my permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Never. Harmony always asks for confirmation before sending any email. This ensures you maintain complete control over your email communications and prevents any accidental sends."
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
      <VideoSection />
      <HowItWorksSection />
      <VoiceActionsSection />
      <ReviewsSection />
      <PricingSection />
      <PrivacySection />
      <FAQSection />
      <CTASection />
    </>
  )
}
