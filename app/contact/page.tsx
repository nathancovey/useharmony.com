import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get Support & Join Our Community",
  description: "Contact Harmony AI Email Assistant support team via email or join our Slack community for real-time help and discussions.",
  keywords: ["contact", "support", "email assistance", "Harmony AI", "customer service", "slack community"],
  alternates: {
    canonical: "https://harmony.com.ai/contact"
  }
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Harmony Life LLC",
      "url": "https://harmony.com.ai",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "nathan@harmony.com.ai",
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
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Get in touch with our team.
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
                Send us an email and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a href="mailto:nathan@harmony.com.ai">
                  nathan@harmony.com.ai
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
            Whether you have questions, feedback, or need technical support, we're here to help.
          </p>
        </div>
      </div>
    </>
  )
} 