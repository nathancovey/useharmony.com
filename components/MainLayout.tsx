import { HarmonyWordmark } from "@/components/icons/HarmonyWordmark"
import Link from "next/link"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-background shadow-sm border-b">
        <div className="flex items-center justify-between w-full max-w-[1000px] mx-auto">
          <Link className="flex items-center justify-center" href="/">
            <HarmonyWordmark className="h-8 text-primary" />
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#hero">
              Join Waitlist
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-12 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[1000px] mx-auto">
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
      </footer>
    </div>
  )
} 