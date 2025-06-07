import { Mail, Mic, Sparkles } from "lucide-react"
import GmailIcon from "@/components/icons/GmailLogo"

export function HowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-semibold">How It Works</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Super Easy to Use</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            Connect your Gmail and just start talking.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Connect Your Email</h3>
              <p className="text-muted-foreground">
                Securely connect your email account with just a few taps. Your login stays private and secure.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Get Your Emails Read to You</h3>
              <p className="text-muted-foreground">
                Harmony AI reads your emails aloud with smart summaries and thread detection for easy listening.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Mic className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. Manage with Your Voice</h3>
              <p className="text-muted-foreground">
                Just tell Harmony what you want it to do. It can send emails, delete them, unsubscribe, label, and more.
              </p>
            </div>
          </div>
        </div>
        
        {/* Email Provider Availability */}
        <div className="flex flex-col items-center mt-16 space-y-6">
          <div className="w-full max-w-xs h-px bg-border"></div>
          <h3 className="text-lg font-semibold text-center">Supported Email Providers</h3>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex items-center gap-3">
              <GmailIcon width={24} height={24} />
              <div className="text-center sm:text-left">
                <p className="font-medium">Gmail</p>
                <p className="text-sm text-green-600 dark:text-green-400">Available Now</p>
              </div>
            </div>
            <div className="flex items-center gap-3 opacity-60">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-medium">Outlook & Others</p>
                <p className="text-sm text-muted-foreground">Coming Later</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 