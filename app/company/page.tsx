import type { Metadata } from 'next'
import { Card, CardContent } from '../../components/ui/card'

export const metadata: Metadata = {
  title: "Company - Our Mission & Vision",
  description: "Learn about Harmony's mission to build the greatest AI executive assistant in the world. Join us on our journey to help you fulfill your life's mission.",
  keywords: ["company", "mission", "vision", "AI assistant", "careers", "team"],
  alternates: {
    canonical: "https://harmony.com.ai/company"
  },
  openGraph: {
    title: "Company - Harmony AI Email Assistant",
    description: "Learn about Harmony's mission to build the greatest AI executive assistant in the world.",
    url: "https://harmony.com.ai/company",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
}

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-primary/10 text-primary px-2 py-1 rounded-sm">
    {children}
  </span>
)

const missionPoints = [
  <>
    The vision for Harmony is <Highlight>much bigger</Highlight> than just email.
  </>,
  <>
    We're building the <Highlight>greatest AI executive assistant</Highlight> in the world.
  </>,
  <>
    But it won't just help you organize your email, calendar, tasks. It will help you <Highlight>prioritize and plan</Highlight>.
  </>,
  <>
    It will help you <Highlight>fulfill your life's mission</Highlight>.
  </>,
]

export default function CompanyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardContent className="p-8 md:p-10 text-left">
              <h2 className="text-3xl font-bold mb-8 text-foreground leading-tight">
                Mission
              </h2>
              <div className="space-y-6">
                {missionPoints.map((point, index) => (
                  <p key={index} className="text-muted-foreground text-2xl leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardContent className="p-8 md:p-10 text-left">
              <h2 className="text-3xl font-bold mb-8 text-foreground leading-tight">
                Careers
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Want to join us on our mission? We're always looking for passionate individuals who share our vision of building the world's greatest AI executive assistant.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Email us at <a href="mailto:nathan@harmony.com.ai" className="text-primary hover:underline">nathan@harmony.com.ai</a> to learn more about opportunities to be part of our team.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 