import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Harmony - the AI email voice assistant that helps you manage your inbox hands-free. Read our terms and conditions.",
  robots: {
    index: true,
    follow: true
  }
}

export default function TermsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: May 13, 2025</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            Welcome to Harmony Life LLC. By accessing or using our application, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you do not have permission to access or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Age Restriction</h2>
          <p className="mb-4">
            You must be at least 13 years old to use our services. By using our application, you represent and warrant that you are at least 13 years of age.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
          <p className="mb-4">
            Our application provides voice-controlled email management through Gmail integration. The service allows you to interact with your emails using voice commands while keeping your email data secure on your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Google Account Integration</h2>
          <p className="mb-4">
            Our service requires Google authentication to access your Gmail account. We access emails, contacts, and labels to provide our services. All email data remains stored locally on your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Usage and Privacy</h2>
          <p className="mb-4">
            We collect anonymized usage data to improve our services. Voice commands are processed through OpenAI&apos;s services. Email data is stored locally only while emails are unread and is automatically removed once read.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Geographic Restrictions</h2>
          <p className="mb-4">
            Our services are currently available only to users in the United States.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p className="mb-4">
            You can terminate your use of our services at any time by deleting the application. This will remove all locally stored data from your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:nathan@harmony.com.ai" className="text-blue-600 hover:underline">
              nathan@harmony.com.ai
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any material changes to these terms.
          </p>
        </section>
      </div>

      <div className="mt-8">
        <Link href="/privacy" className="text-blue-600 hover:underline">
          View Privacy Policy
        </Link>
      </div>
    </div>
  )
} 