'use client';

import { HarmonyWordmark } from "@/components/icons/HarmonyWordmark"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { XIcon } from "@/components/icons/XIcon"
import { SlackIcon } from "@/components/icons/SlackIcon"
import Link from "next/link"
import AnnouncementBar from "@/components/AnnouncementBar"
import { useEffect, useRef, useState } from "react"
import { IOS_APP_STORE_URL } from "@/lib/constants"

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
          message="Tiny Startups Product of the Week 🎉"
          href="/blog/tiny-startups"
        />
        <header className="px-4 lg:px-6 h-16 flex items-center bg-background shadow-sm border-b">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto">
          <Link className="flex items-center justify-center" href="/" aria-label="Harmony Home">
            <span className="sr-only">Harmony Home</span>
            <HarmonyWordmark className="h-8 text-primary" />
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
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
        <div className="w-full max-w-[1000px] mx-auto py-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="max-w-sm pb-4">
                <p className="text-lg text-muted-foreground">
                  <Link href="/company" className="hover:underline hover:underline-offset-4 hover:decoration-primary">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-sm">
                      Our mission
                    </span>
                  </Link> is to build an AI executive assistant that brings harmony to your life.
                </p>
              </div>
              <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Harmony Life LLC. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-medium text-foreground mb-1">Company</h4>
                <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="/company">
                  About
                </Link>
                <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="/blog">
                  Blog
                </Link>
                <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="https://new.useharmony.com/changelog" target="_blank" rel="noopener noreferrer">
                  Changelog
                </Link>
                <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="https://new.useharmony.com/feature-request" target="_blank" rel="noopener noreferrer">
                  Give Feedback
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-medium text-foreground mb-1">Legal</h4>
                <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="/terms">
                  Terms of Service
                </Link>
                <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="/privacy">
                  Privacy Policy
                </Link>
                <Link className="text-sm hover:underline underline-offset-4 text-muted-foreground" href="/contact">
                  Contact Us
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-medium text-foreground mb-1">Connect</h4>
                <div className="flex gap-4">
                  <Link href="https://www.linkedin.com/company/useharmony/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInIcon size={24} className="text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link href="https://x.com/useharmony" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="X (formerly Twitter)">
                    <span className="sr-only">X (formerly Twitter)</span>
                    <XIcon size={24} className="text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link href="https://harmony-pnf8776.slack.com/join/shared_invite/zt-370vljb9t-x2Y~~63yQTGfMvoC_8wIrQ#/shared-invite/email" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Slack Community">
                    <span className="sr-only">Slack Community</span>
                    <SlackIcon size={24} className="text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 