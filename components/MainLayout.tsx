import { HarmonyWordmark } from "@/components/icons/HarmonyWordmark"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { XIcon } from "@/components/icons/XIcon"
import { SlackIcon } from "@/components/icons/SlackIcon"
import Link from "next/link"
import { FooterUpdatesForm } from "@/components/FooterUpdatesForm"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-background shadow-sm border-b">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto">
          <Link className="flex items-center justify-center" href="/">
            <HarmonyWordmark className="h-8 text-primary" />
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://testflight.apple.com/join/euq7AhMy" target="_blank" rel="noopener noreferrer">
              Download
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="w-full shrink-0 px-4 md:px-6 border-t bg-background">
        <div className="w-full max-w-[1000px] mx-auto py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
            <div className="flex flex-col space-y-3">
              <div className="flex justify-start">
                <HarmonyWordmark className="h-10 text-primary" />
              </div>
              <div className="max-w-sm">
                <p className="text-base text-muted-foreground">
                  <Link href="/company" className="text-primary hover:underline underline-offset-4">
                    Our mission
                  </Link> is to help you fulfill your mission.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <LinkedInIcon size={32} className="text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <XIcon size={32} className="text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://slack.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <SlackIcon size={32} className="text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
            <Card className="lg:flex-1 lg:max-w-md">
              <CardHeader>
                <CardDescription className="text-base text-muted-foreground">
                  Get email updates for major Harmony announcements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FooterUpdatesForm />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[1000px] mx-auto py-6">
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Harmony Life LLC. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6 mt-2 sm:mt-0">
              <Link className="text-xs hover:underline underline-offset-4" href="/company">
                Company
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/contact">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
} 