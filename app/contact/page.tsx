import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Harmony AI",
  description: "Contact Harmony AI support team. Get help with weekly planning, mission statements, roles, AI features, and achieving work-life harmony.",
  alternates: {
    canonical: "https://www.useharmony.com/contact"
  },
  openGraph: {
    title: "Contact - Harmony AI",
    description: "Need help with Harmony? Contact our support team or join our Slack community.",
    url: "https://www.useharmony.com/contact",
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
    title: "Contact - Harmony AI",
    description: "Need help with Harmony? Contact our support team or join our Slack community.",
    images: ["/opengraph-image.png"]
  }
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Harmony Life LLC",
      "url": "https://www.useharmony.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "hello@useharmony.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      ],
      "sameAs": [
        "https://join.slack.com/t/harmony-pnf8776/shared_invite/zt-370vljb9t-x2Y~~63yQTGfMvoC_8wIrQ"
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            We’d love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Support
              </CardTitle>
              <CardDescription>
                Send us an email and we’ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a href="mailto:hello@useharmony.com" target="_blank" rel="noopener noreferrer">
                  hello@useharmony.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Join Our Community
              </CardTitle>
              <CardDescription>
                Connect with our team and other users on Slack for real-time support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="https://join.slack.com/t/harmony-pnf8776/shared_invite/zt-370vljb9t-x2Y~~63yQTGfMvoC_8wIrQ" target="_blank" rel="noopener noreferrer">
                  Join Slack Community
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Whether you have questions, feedback, or need technical support, we’re here to help.
          </p>
        </div>
      </div>
    </>
  )
} 