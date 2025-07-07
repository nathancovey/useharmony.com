import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy - Harmony AI",
  description: "Privacy Policy for Harmony AI Email Assistant. Learn how we protect your data: emails are not stored and only voice commands are processed securely.",
  keywords: ["privacy policy", "data protection", "email privacy", "Gmail security", "AI assistant privacy", "voice command privacy"],
  alternates: {
    canonical: "https://harmony.com.ai/privacy"
  },
  openGraph: {
    title: "Privacy Policy - Harmony AI Email Assistant",
    description: "Learn how Harmony protects your email data and privacy. Your emails stay secure on your device.",
    url: "https://harmony.com.ai/privacy",
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

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: June 9th, 2025</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Harmony is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application. We adhere to strict data protection standards and comply with the{' '}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Google Account Integration</h2>
          <div className="ml-4">
            <h3 className="text-xl font-medium mb-2">2.1 Authentication and Access</h3>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>We request access to your Gmail data only after receiving your explicit consent</li>
              <li>We use secure OAuth 2.0 authentication provided by Google</li>
              <li>Your Google account credentials are never stored on our servers</li>
              <li>You can revoke access to your Google account at any time through the settings page in the app</li>
              <li>We access only the necessary Gmail API scopes required for email functionality</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">2.2 Data Processing and Storage</h3>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>All email data is processed in accordance with Google API Services User Data Policy</li>
              <li>We only process and display email data in real-time - no copies are stored anywhere</li>
              <li>All data transmission is encrypted using industry-standard protocols</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Access and Usage</h2>
          <div className="ml-4">
              <h3 className="text-xl font-medium mb-2">3.1 Google User Data</h3>
              <p className="mb-4">
                We access the following Google user data:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                <li>Email content and metadata through Gmail API</li>
                <li>Contact information for email functionality</li>
                <li>Email attachments when necessary</li>
              </ul>
              <p className="mb-4">
                This data is used exclusively for providing email functionality within Harmony. No Google user data is used for advertising or marketing purposes.
              </p>
              <p className="mb-4">
                Google Workspace APIs are not used to develop, improve, or train generalized AI and/or ML models.
              </p>

              <h3 className="text-xl font-medium mb-2">3.2 Data Sharing</h3>
            <p className="mb-4">
              Google user data is never shared with or sold to third parties. We never sell your data to anyone - Harmony makes money through its subscription model. When necessary for core service functionality, we only work with service providers who comply with Google API Services User Data Policy and are bound by strict confidentiality agreements.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Voice Command Processing</h2>
          <p className="mb-4">
            Voice commands are processed through OpenAI&apos;s services. These commands are transmitted securely and are not stored permanently. We ensure that no sensitive email data is included in voice command processing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Controls</h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>Right to revoke access to your Google account at any time</li>
            <li>Right to request deletion of any cached data</li>
            <li>Right to lodge complaints about data handling</li>
            <li>Right to request information about how your data is processed</li>
            <li>Right to delete your account and all data associated with it</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Limited Use Disclosure</h2>
          <p className="mb-4">
            Our use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Data Retention and Deletion</h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>Email data is processed in real-time only - no storage occurs anywhere</li>
            <li>No email data is retained after processing</li>
            <li>You can revoke application access at any time through your Google account settings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
          <p className="mb-4">
            Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Privacy Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and, when appropriate, sending you a notification.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
            <a href="mailto:nathan@harmony.com.ai" className="text-blue-600 hover:underline">
              nathan@harmony.com.ai
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