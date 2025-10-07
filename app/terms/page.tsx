import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms - Harmony AI",
  description: "Terms of Service for Harmony AI planner. Legal terms for using our AI-powered planning app for mission-driven living and work-life harmony.",
  keywords: ["terms of service", "legal terms", "terms and conditions", "AI planner", "planning app legal", "weekly planner terms", "mission statement app legal"],
  alternates: {
    canonical: "https://www.useharmony.com/terms"
  },
  openGraph: {
    title: "Terms of Service - Harmony AI",
    description: "Legal terms and conditions for using Harmony, the AI planner for work-life harmony.",
    url: "https://www.useharmony.com/terms",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Harmony - AI Planner for Work-Life Harmony",
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
      <h1 className="font-[family-name:var(--font-playfair)] text-3xl mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: October 6, 2025</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">0. End-User License</h2>
          <p className="mb-4">
            This application is licensed to you under Apple&apos;s{' '}
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" className="text-blue-600 hover:underline">
              Standard End User License Agreement
            </a>{' '}
            (EULA). By downloading or using the app, you acknowledge that you have read and agree to that EULA in addition to the terms below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            Welcome to Harmony Life LLC (&quot;Harmony,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our application, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these Terms, you do not have permission to access or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">2. Age Restriction</h2>
          <p className="mb-4">
            You must be at least 13 years old to use our services. By using the application, you represent and warrant that you are at least 13 years of age.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">3. Service Description</h2>
          <p className="mb-4">
            Our application is an AI-powered planner that helps you achieve work-life harmony through mission-driven planning. Harmony integrates with Google Calendar to help you create a Personal Mission Statement, plan your weeks around life roles, set meaningful goals, and follow through daily with AI-powered guidance and reminders.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">4. Google Account Integration</h2>
          <p className="mb-4">
            Our service requires Google authentication to access your Google Calendar data. We access calendar events solely to provide time-blocking and scheduling functionality. OAuth tokens are stored encrypted on our servers, and you can revoke access at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">5. Data Usage and Privacy</h2>
          <p className="mb-4">
            We store your mission statement, roles, weekly goals, and planning data securely and encrypted on our servers to provide the core Harmony experience. Calendar data from Google is processed in real time only and not stored. OAuth tokens are encrypted at rest on our servers. We collect anonymized usage analytics and crash reports to improve our services. AI features are powered by OpenAI&apos;s services; relevant planning data may be transmitted for processing but nothing is stored. Please review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> for full details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">6. Geographic Availability</h2>
          <p className="mb-4">
            The application is available in all regions where the Apple App Store operates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">7. Subscription Terms</h2>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li><strong>Free Trial</strong> – New users receive a 14-day free trial.</li>
            <li><strong>Subscription Price</strong> – After the trial, the subscription renews at <strong>USD $9.99 per month</strong>, converted to your local currency by Apple at the prevailing exchange rate.</li>
            <li><strong>Billing & Renewal</strong> – Payment is charged to your Apple ID account at confirmation. Your subscription automatically renews unless auto-renew is turned off in Settings › Apple ID › Subscriptions.</li>
            <li><strong>Managing or Cancelling</strong> – You can manage or cancel your subscription at any time in your device settings. Deleting the app does not cancel the subscription.</li>
            <li><strong>Refunds</strong> – Refund requests are handled by Apple pursuant to App Store policies.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">8. Termination</h2>
          <p className="mb-4">
            You may terminate use of our services at any time by deleting the application. Subscription fees already paid are non-refundable unless required by law or Apple policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">9. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Material changes will be posted on this page and indicated by a new &quot;Last updated&quot; date. Continued use of the application after changes are posted constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">10. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@useharmony.com" className="text-blue-600 hover:underline">
              legal@useharmony.com
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