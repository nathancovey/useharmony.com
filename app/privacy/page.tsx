import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Harmony - Learn how we protect your data. Your emails stay on your device, and we only process voice commands to help manage your inbox.",
  robots: {
    index: true,
    follow: true
  }
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Harmony Life LLC is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <div className="ml-4">
            <h3 className="text-xl font-medium mb-2">2.1 Gmail Data</h3>
            <p className="mb-4">
              We access your emails, contacts, and labels through Gmail integration. This data is stored locally on your device and is never transmitted to our servers. Unread emails are cached locally and automatically removed once read.
            </p>

            <h3 className="text-xl font-medium mb-2">2.2 Voice Commands</h3>
            <p className="mb-4">
              Voice commands are processed through OpenAI&apos;s services. These commands are transmitted securely but are not stored permanently by us.
            </p>

            <h3 className="text-xl font-medium mb-2">2.3 Usage Data</h3>
            <p className="mb-4">
              We collect anonymized usage data to improve our application&apos;s functionality and user experience.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To process your voice commands through OpenAI</li>
            <li>To improve our application through anonymized usage data</li>
            <li>To communicate with you about service-related issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
          <p className="mb-4">
            All Gmail data remains stored locally on your device. Voice commands are transmitted securely using industry-standard encryption. We follow best practices to protect your information but cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p className="mb-4">
            We use Google authentication for Gmail access and OpenAI for voice command processing. These services have their own privacy policies and terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Data Deletion</h2>
          <p className="mb-4">
            You can remove all locally stored data by deleting the application from your device. Email data is automatically removed once emails are marked as read.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
          <p className="mb-4">
            Our service is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at{' '}
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