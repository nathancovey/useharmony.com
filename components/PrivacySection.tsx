import { Shield, Lock, UserX } from "lucide-react"
import Link from "next/link"

export function PrivacySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/20 px-3 py-1 text-sm text-green-700 dark:text-green-400 font-semibold">Privacy First</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Data Stays Safe & Private</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            We built Harmony with <Link href="/privacy" className="underline hover:text-primary">privacy</Link> at its core. Your email data is yours alone, and we take every measure to keep it that way.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20">
              <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">No Email Storage</h3>
              <p className="text-muted-foreground">
                None of your emails are stored by us. AI will read or process only what it needs in real time.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20">
              <Lock className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Encrypted Network</h3>
              <p className="text-muted-foreground">
                All network communications are encrypted using industry-standard protocols.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20">
              <UserX className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">No Data Sales</h3>
              <p className="text-muted-foreground">
                We never sell your data to third parties. Harmony makes money through its subscription model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 