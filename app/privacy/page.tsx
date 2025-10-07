import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy - Harmony AI",
  description: "Privacy Policy for Harmony AI planner. Learn how we protect your planning data, mission statement, and calendar information with secure encryption.",
  keywords: ["privacy policy", "data protection", "planning app privacy", "calendar privacy", "AI planner", "mission statement privacy", "secure planning app"],
  alternates: {
    canonical: "https://www.useharmony.com/privacy"
  },
  openGraph: {
    title: "Privacy Policy - Harmony AI",
    description: "Learn how Harmony protects your planning data and calendar information. Your data stays secure with encryption and strict privacy policies.",
    url: "https://www.useharmony.com/privacy",
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

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-[family-name:var(--font-playfair)] text-3xl mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: October 6, 2025</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">1. Introduction</h2>
          <p className="mb-4">
            Harmony is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application. We adhere to strict data protection standards and comply with the{' '}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">2. Google Account Integration</h2>
          <div className="ml-4">
            <h3 className="text-xl font-medium mb-2">2.1 Authentication and Access</h3>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>We request access to your Google Calendar data only after receiving your explicit consent</li>
              <li>We use secure OAuth 2.0 authentication provided by Google</li>
              <li>Your Google account credentials are never stored on our servers</li>
              <li>You can revoke access to your Google account at any time through the settings page in the app</li>
              <li>We access only the minimum Calendar API scopes required for Harmony to function</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">2.2 Data Processing and Storage</h3>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>All calendar data is processed in accordance with Google API Services User Data Policy</li>
              <li>We only process and display calendar data in real-time - no copies are stored anywhere</li>
              <li>All data transmission is encrypted using industry-standard protocols</li>
              <li>OAuth access and refresh tokens are stored encrypted on our servers with regular secret rotation and access logging</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">3. Data Access and Usage</h2>
          <div className="ml-4">
              <h3 className="text-xl font-medium mb-2">3.1 Google User Data</h3>
              <p className="mb-4">
                We access the following Google user data:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Calendar events (titles, times, attendees) through Google Calendar API</li>
              </ul>
              <p className="mb-4">
                This data is used exclusively for providing time-blocking and scheduling functionality within Harmony. No Google user data is used for advertising or marketing purposes.
              </p>
              <p className="mb-4">
                Google Workspace APIs are not used to develop, improve, or train generalized AI and/or ML models.
              </p>

              <h3 className="text-xl font-medium mb-2">3.2 Harmony Planning Data</h3>
              <p className="mb-4">
                We store your Personal Mission Statement, life roles, weekly goals, and daily planning data securely and encrypted on our servers. This data is necessary to provide the core Harmony planning experience and is never shared with or sold to third parties.
              </p>

              <h3 className="text-xl font-medium mb-2">3.3 Data Sharing</h3>
            <p className="mb-4">
              Your data is never shared with or sold to third parties. We never sell your data to anyone - Harmony makes money through its subscription model. When necessary for core service functionality (such as AI-powered suggestions), we only work with service providers who are bound by strict confidentiality agreements.
            </p>
            <h3 className="text-xl font-medium mb-2">3.4 Analytics and Crash Reporting</h3>
            <p className="mb-4">
              We collect anonymized usage analytics and crash reports to identify bugs and improve performance. These reports never contain Google user data or personally identifiable information.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">4. AI Processing</h2>
          <p className="mb-4">
            AI-powered features such as goal suggestions and time-blocking recommendations are processed through OpenAI&apos;s services. Relevant planning data (such as your mission statement, roles, and goals) may be included in these requests to provide personalized suggestions. All transmissions are encrypted and OpenAI does not store this data after processing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">5. Your Rights and Controls</h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>Right to revoke access to your Google account at any time</li>
            <li>Right to request deletion of any cached data</li>
            <li>Right to lodge complaints about data handling</li>
            <li>Right to request information about how your data is processed</li>
            <li>Right to delete your account and all data associated with it</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">6. Limited Use Disclosure</h2>
          <p className="mb-4">
            We affirm our use of information received from Google APIs adheres to the <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy#limited-use" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Limited use of user data</a> requirement of the <a href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Workspace API User Data and Developer Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">7. Data Retention and Deletion</h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>Your mission statement, roles, goals, and planning data are stored on our servers while your account is active</li>
            <li>Calendar data is processed in real-time only - no storage occurs anywhere</li>
            <li>OAuth tokens are retained only while your account is active and are deleted immediately when you revoke access or delete your account</li>
            <li>When you delete your account, all your planning data and OAuth tokens are permanently deleted</li>
            <li>You can revoke application access at any time through your Google account settings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">8. Children&apos;s Privacy</h2>
          <p className="mb-4">
            Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">9. Changes to Privacy Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and, when appropriate, sending you a notification.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
            <a href="mailto:legal@useharmony.com" className="text-blue-600 hover:underline">
              legal@useharmony.com
            </a>
          </p>
        </section>
      </div>

      <div className="mt-8">
        <Link href="/terms" className="text-blue-600 hover:underline">
          View Terms of Service
        </Link>
      </div>
    </div>
  )
} 