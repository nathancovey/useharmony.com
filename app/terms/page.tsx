import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms - Harmony AI",
  description: "Terms of Service for Harmony AI Email Assistant, the voice-controlled Gmail management app. Read terms and conditions for using our AI email assistant.",
  keywords: ["terms of service", "legal terms", "terms and conditions", "AI email assistant terms", "Gmail assistant legal", "voice command terms"],
  alternates: {
    canonical: "https://harmony.com.ai/terms"
  },
  openGraph: {
    title: "Terms of Service - Harmony AI Email Assistant",
    description: "Legal terms and conditions for using Harmony, the AI-powered voice email assistant.",
    url: "https://harmony.com.ai/terms",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Harmony - AI Email Voice Assistant",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function TermsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: July 20, 2025</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">0. End-User License</h2>
          <p className="mb-4">
            This application is licensed to you under Apple&apos;s{' '}
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" className="text-blue-600 hover:underline">
              Standard End User License Agreement
            </a>{' '}
            (EULA). By downloading or using the app, you acknowledge that you have read and agree to that EULA in addition to the terms below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            Welcome to Harmony Life LLC (&quot;Harmony,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our application, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these Terms, you do not have permission to access or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Age Restriction</h2>
          <p className="mb-4">
            You must be at least 13 years old to use our services. By using the application, you represent and warrant that you are at least 13 years of age.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
          <p className="mb-4">
            Our application provides voice-controlled management of your Gmail, Google Calendar, and Contacts. Harmony lets you read, draft, send, and organize emails, create or modify calendar events, and access contact information using natural-language commands while keeping your data secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Google Account Integration</h2>
          <p className="mb-4">
            Our service requires Google authentication to access your Gmail, Google Calendar, and Contacts data. We access emails, calendar events, contacts, and labels solely to provide core functionality. OAuth tokens are stored encrypted on our servers, and you can revoke access at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Usage and Privacy</h2>
          <p className="mb-4">
            We do <strong>not</strong> store any email, calendar, or contacts content, either locally on your device or on our servers. All Google data is processed in real time only. OAuth tokens are encrypted at rest on our servers. We collect anonymized usage analytics and crash reports to improve our services, and voice commands are processed through OpenAI&apos;s services; snippets of relevant text may be transmitted but nothing is stored. Please review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> for full details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Geographic Availability</h2>
          <p className="mb-4">
            The application is available in all regions where the Apple App Store operates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Subscription Terms</h2>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li><strong>Free Trial</strong> – New users receive a 14-day free trial.</li>
            <li><strong>Subscription Price</strong> – After the trial, the subscription renews at <strong>USD $9.99 per month</strong>, converted to your local currency by Apple at the prevailing exchange rate.</li>
            <li><strong>Billing & Renewal</strong> – Payment is charged to your Apple ID account at confirmation. Your subscription automatically renews unless auto-renew is turned off in Settings › Apple ID › Subscriptions.</li>
            <li><strong>Managing or Cancelling</strong> – You can manage or cancel your subscription at any time in your device settings. Deleting the app does not cancel the subscription.</li>
            <li><strong>Refunds</strong> – Refund requests are handled by Apple pursuant to App Store policies.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
          <p className="mb-4">
            You may terminate use of our services at any time by deleting the application. Subscription fees already paid are non-refundable unless required by law or Apple policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Material changes will be posted on this page and indicated by a new &quot;Last updated&quot; date. Continued use of the application after changes are posted constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@harmony.com.ai" className="text-blue-600 hover:underline">
              legal@harmony.com.ai
            </a>
          </p>
        </section>
      </div>

      <div className="mt-8">
        <p className="text-gray-500">© 2025 Harmony Life LLC. All rights reserved.</p>
      </div>

      <div className="mt-4">
        <Link href="/privacy" className="text-blue-600 hover:underline">
          View Privacy Policy
        </Link>
      </div>
    </div>
  )
} 