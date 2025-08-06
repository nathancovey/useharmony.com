import { Check } from "lucide-react"
import { IOS_APP_STORE_URL } from "@/lib/constants"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-8 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text pb-1">
            Simple pricing
          </h2>
          <p className="max-w-[450px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            Start with a free trial, then just $9.99/month for unlimited voice email and calendar management.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
            ⚡ Early Bird Pricing - Price increases soon
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="relative p-8 rounded-lg border-2 border-primary bg-card text-card-foreground shadow-lg">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  14-Day Free Trial
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Harmony Pro</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Unlimited voice time</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">44+ tools and counting</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">One Gmail account connection</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">One Google Calendar connection</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Full Gmail integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Full Google Calendar integration</span>
                </li>
              </ul>

              <a 
                href={IOS_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Start Free Trial
              </a>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}