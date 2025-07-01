'use client';

import { HarmonyWordmark } from "@/components/icons/HarmonyWordmark"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { XIcon } from "@/components/icons/XIcon"
import { SlackIcon } from "@/components/icons/SlackIcon"
import Link from "next/link"
import { FooterUpdatesForm } from "@/components/FooterUpdatesForm"
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card"
import AnnouncementBar from "@/components/AnnouncementBar"
import { useEffect, useRef, useState } from "react"

export function MainLayout({ children }: { children: React.ReactNode }) {
  const headerWrapperRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(80) // reasonable default in px

  useEffect(() => {
    if (!headerWrapperRef.current) return

    // Set initial height
    setHeaderHeight(headerWrapperRef.current.offsetHeight)

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeaderHeight(entry.contentRect.height)
      }
    })

    observer.observe(headerWrapperRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div ref={headerWrapperRef} className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar 
          message="Harmony now available on iOS 🎉" 
          href="https://apps.apple.com/us/app/harmony-ai-email-assistant/id6746949011"
        />
        <header className="px-4 lg:px-6 h-16 flex items-center bg-background shadow-sm border-b">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto">
          <Link className="flex items-center justify-center" href="/" aria-label="Harmony Home">
            <span className="sr-only">Harmony Home</span>
            <HarmonyWordmark className="h-8 text-primary" />
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://apps.apple.com/us/app/harmony-ai-email-assistant/id6746949011" target="_blank" rel="noopener noreferrer">
              Download
            </Link>
          </nav>
        </div>
        </header>
      </div>

      <main className="flex-1" style={{ paddingTop: headerHeight }}>
        {children}
      </main>

      <footer className="w-full shrink-0 px-4 md:px-6 border-t bg-background">
        <div className="w-full max-w-[1000px] mx-auto py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
            <div className="flex flex-col space-y-3 items-center lg:items-start">
              <div className="flex justify-center lg:justify-start">
                <HarmonyWordmark className="h-10 text-primary" />
              </div>
              <div className="max-w-sm">
                <p className="text-base text-muted-foreground text-center lg:text-left">
                  <Link href="/company" className="underline underline-offset-4">
                    Our mission
                  </Link> is to help you fulfill your mission.
                </p>
              </div>
              <div className="flex gap-4 mt-4 justify-center lg:justify-start">
                <Link href="https://www.linkedin.com/company/findharmony/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon size={32} className="text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://x.com/harmonyAIapp" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="X (formerly Twitter)">
                  <span className="sr-only">X (formerly Twitter)</span>
                  <XIcon size={32} className="text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="https://harmony-pnf8776.slack.com/join/shared_invite/zt-370vljb9t-x2Y~~63yQTGfMvoC_8wIrQ#/shared-invite/email" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Slack Community">
                  <span className="sr-only">Slack Community</span>
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