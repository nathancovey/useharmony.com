'use client';

import { HarmonyWordmark } from "@/components/icons/HarmonyWordmark"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { XIcon } from "@/components/icons/XIcon"
import { SlackIcon } from "@/components/icons/SlackIcon"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import AnnouncementBar from "@/components/AnnouncementBar"
import { useEffect, useRef, useState } from "react"
import { IOS_APP_STORE_URL } from "@/lib/constants"
import { Menu, X, ChevronDown, Target, Mail, HelpCircle, BookOpen, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const headerWrapperRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(80) // reasonable default in px
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  // Handle hash navigation when page loads or hash changes
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1) // Remove the #
      if (hash && pathname === '/') {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }

    // Handle initial load
    handleHashNavigation()

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation)
    return () => window.removeEventListener('hashchange', handleHashNavigation)
  }, [pathname])


  const scrollToSection = (sectionId: string) => {
    // If we're on the homepage, scroll to the section
    if (pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      router.push(`/#${sectionId}`)
    }
    setIsMobileMenuOpen(false)
    setIsAboutDropdownOpen(false)
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setIsAboutDropdownOpen(true)
  }

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false)
    }, 300) // 300ms delay before closing
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div ref={headerWrapperRef} className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar 
          message="Google Calendar integration is here →"
          href="/blog/harmony-google-calendar-contacts-launch"
        />
        <header className="px-4 lg:px-6 h-16 flex items-center bg-background shadow-sm border-b">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto">
          <Link className="flex items-center justify-center" href="/" aria-label="Harmony Home">
            <span className="sr-only">Harmony Home</span>
            <HarmonyWordmark className="h-8 text-primary" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center">
            <button 
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('use-cases')}
            >
              Use Cases
            </button>
            <button 
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('features')}
            >
              Tools
            </button>
            <button 
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('reviews')}
            >
              Reviews
            </button>
            <button 
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('pricing')}
            >
              Pricing
            </button>
            <button 
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
              onClick={() => scrollToSection('privacy')}
            >
              Privacy
            </button>
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
              >
                About
                <ChevronDown className={`h-3 w-3 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isAboutDropdownOpen && (
                <div className="absolute right-0 mt-1 w-80 bg-background border rounded-lg shadow-lg z-50 p-4 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                  {/* Main Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Link
                      href="/company"
                      className="p-3 rounded-md border hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Mission</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Our vision for the future</p>
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="p-3 rounded-md border hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Contact</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Get in touch with us</p>
                    </Link>
                    
                    <button
                      className="p-3 rounded-md border hover:bg-muted transition-colors group text-left cursor-pointer"
                      onClick={() => {
                        scrollToSection('faq')
                        setIsAboutDropdownOpen(false)
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <HelpCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">FAQ</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Most common questions</p>
                    </button>
                    
                    <Link
                      href="/blog"
                      className="p-3 rounded-md border hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Blog</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Latest updates & news</p>
                    </Link>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t mb-3"></div>
                  
                  {/* Additional Links */}
                  <div className="space-y-1">
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <Link
                        href="/terms"
                        className="px-2 py-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Terms of Service
                      </Link>
                      <Link
                        href="/privacy"
                        className="px-2 py-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        href="https://new.useharmony.com/changelog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        Changelog
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                      <Link
                        href="https://new.useharmony.com/feature-request"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        Feedback
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors" 
              href={IOS_APP_STORE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.nav
                className="flex flex-col p-4 space-y-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
              >
                <button 
                  className="text-left text-base font-medium hover:text-primary transition-colors"
                  onClick={() => scrollToSection('use-cases')}
                >
                  Use Cases
                </button>
                <button 
                  className="text-left text-base font-medium hover:text-primary transition-colors"
                  onClick={() => scrollToSection('features')}
                >
                  Tools
                </button>
                <button 
                  className="text-left text-base font-medium hover:text-primary transition-colors"
                  onClick={() => scrollToSection('reviews')}
                >
                  Reviews
                </button>
                <button 
                  className="text-left text-base font-medium hover:text-primary transition-colors"
                  onClick={() => scrollToSection('pricing')}
                >
                  Pricing
                </button>
                <button 
                  className="text-left text-base font-medium hover:text-primary transition-colors"
                  onClick={() => scrollToSection('privacy')}
                >
                  Privacy
                </button>
                
                {/* Mobile About Section */}
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-3">About</p>
                  <div className="pl-4 space-y-3">
                    <Link
                      href="/company"
                      className="block text-base hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mission
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-base hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <button
                      className="block text-left text-base hover:text-primary transition-colors"
                      onClick={() => scrollToSection('faq')}
                    >
                      FAQ
                    </button>
                    <Link
                      href="/blog"
                      className="block text-base hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </div>
                  
                </div>
                
                <Link 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-md text-base font-medium transition-colors text-center mt-4" 
                  href={IOS_APP_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download
                </Link>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
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
        
        {/* Large Harmony Logo at bottom with fade effect */}
        <div className="w-full max-w-[1000px] mx-auto pb-8">
          <div className="w-full">
            <HarmonyWordmark 
              className="w-full h-auto opacity-40 hover:opacity-60 transition-opacity duration-500" 
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.3) 60%, transparent 100%)'
              }}
            />
          </div>
        </div>
      </footer>
    </div>
  )
} 