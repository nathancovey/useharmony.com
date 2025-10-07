"use client"

import { Check } from "lucide-react"
import { IOS_APP_STORE_URL } from "@/lib/constants"
import { useState } from "react"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly")

  return (
    <section id="pricing" className="w-full py-8 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text pb-2">
            Simple pricing
          </h2>
          <p className="max-w-[450px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            Test out the app with a 14-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center gap-3 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                billingPeriod === "yearly" ? "bg-background shadow-sm" : "text-muted-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-primary">Save 67%</span>
            </button>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                billingPeriod === "monthly" ? "bg-background shadow-sm" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
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
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-2">Harmony Pro</h3>
                {billingPeriod === "monthly" ? (
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold">$9.99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1 mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">$39.99</span>
                      <span className="text-muted-foreground">/year</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm line-through text-muted-foreground">$119.88</span>
                      <span className="text-sm font-semibold text-green-600">Save $79.89</span>
                    </div>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Personal mission statement builder</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Role-based weekly planning</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">AI-powered goal suggestions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Smart time-blocking assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Daily progress tracking & nudges</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Motivating celebrations & reminders</span>
                </li>
              </ul>

              <a
                href={IOS_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Start 14-Day Free Trial
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