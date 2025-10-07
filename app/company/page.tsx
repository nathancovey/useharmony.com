import type { Metadata } from 'next'
import { Card, CardContent } from '../../components/ui/card'

export const metadata: Metadata = {
  title: "Company - Harmony AI",
  description: "Learn about Harmony's mission to help people focus on what truly matters in life through mission-driven planning and AI guidance.",
  keywords: ["company", "mission", "vision", "AI planner", "work life harmony", "mission driven planning", "careers", "team", "life planning"],
  alternates: {
    canonical: "https://www.useharmony.com/company"
  },
  openGraph: {
    title: "Company - Harmony AI",
    description: "Learn about Harmony's mission to help people focus on what truly matters in life through mission-driven planning and AI guidance.",
    url: "https://www.useharmony.com/company",
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

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-primary/10 text-primary px-2 py-1 rounded-sm">
    {children}
  </span>
)

const missionPoints = [
  <>
    Our mission is to develop technology that helps you focus on what <Highlight>truly matters</Highlight> in life. Family, friends, health, relationships, spirtuality, career growth, etc.
  </>
]

export default function CompanyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardContent className="p-8 md:p-10 text-left">
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl mb-8 text-foreground leading-tight">
                Mission
              </h1>
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

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardContent className="p-8 md:p-10 text-left">
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl mb-8 text-foreground leading-tight">
                Careers
              </h1>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Want to join us on our mission? We’re always looking for passionate individuals who share our vision of building technology for good.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Email us at <a href="mailto:careers@useharmony.com" className="text-primary hover:underline">careers@useharmony.com</a> to learn more about opportunities to be part of our team.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 