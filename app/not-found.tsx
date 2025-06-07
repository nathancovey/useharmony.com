import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GradientText } from "@/components/ui/gradient-text"
import { MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found - 404 Error",
  description: "The page you're looking for doesn't exist. Return to Harmony AI Email Assistant homepage or contact our support team.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative py-8">
      <div className="w-full max-w-[800px] flex flex-col items-center justify-center gap-8 px-4 md:px-6 py-6">
        
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <GradientText className="text-8xl md:text-9xl font-bold tracking-tighter mb-8">
              404
            </GradientText>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[500px] mx-auto">
              Oops! The page you're looking for seems to have wandered off. Don't worry, even our AI sometimes gets confused about directions.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 w-full max-w-[600px]">
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Go Home</CardTitle>
              <CardDescription>
                Return to the Harmony homepage and discover our AI email assistant
              </CardDescription>
              <Button asChild className="mt-4">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </CardHeader>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Contact Support</CardTitle>
              <CardDescription>
                Need help? Our team is here to assist you with any questions
              </CardDescription>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/contact">
                  <MessageCircle className="h-4 w-4" />
                  Get Support
                </Link>
              </Button>
            </CardHeader>
          </Card>
        </div>
        
      </div>
    </div>
  )
} 