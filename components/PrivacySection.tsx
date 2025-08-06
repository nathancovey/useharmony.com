"use client"

import { Shield, Lock, UserX, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

export function PrivacySection() {
  return (
    <section id="privacy" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text pb-1">Private and Secure</h2>
          <p className="max-w-[450px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            We built Harmony with <Link href="/privacy" className="underline hover:text-primary">privacy</Link> at its core. Your email data is yours alone, and we take every measure to keep it that way.
          </p>
        </div>
        {/* Mobile Layout - Full width cards */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex flex-col items-center text-center space-y-3 p-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
              <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold">No Data Storage</h3>
              <p className="text-xs text-muted-foreground">
                Your emails, events, and contacts are never stored or downloaded by us.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 p-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
              <Lock className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold">Encrypted Network</h3>
              <p className="text-xs text-muted-foreground">
                All communications use TLS encryption to protect your data.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 p-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
              <UserX className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold">No Data Sales</h3>
              <p className="text-xs text-muted-foreground">
                We never sell or monetize your data. Revenue comes from subscriptions.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 p-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold">3rd-Party Audited</h3>
              <p className="text-xs text-muted-foreground">
                Security practices independently verified by CASA audits.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Circular arrangement */}
        <div className="relative w-full max-w-3xl mx-auto h-[700px] hidden md:block">
          {/* Background connecting circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] border-2 border-dashed border-muted-foreground/20 rounded-full"></div>
          </div>
          
          {/* Privacy Cards positioned in circle - further apart */}
          {/* Top - No Data Storage */}
          <motion.div 
            className="absolute top-0 left-1/2"
            style={{ transform: 'translate(-50%, 0)' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - rect.left - rect.width / 2) * 0.03
              const y = (e.clientY - rect.top - rect.height / 2) * 0.03
              e.currentTarget.style.transform = `translate(calc(-50% + ${x}px), calc(0px + ${y}px))`
              e.currentTarget.style.transition = 'transform 0.1s ease-out'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, 0px)'
              e.currentTarget.style.transition = 'transform 0.2s ease-out'
            }}
          >
            <div className="flex flex-col items-center text-center space-y-3 p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border max-w-[220px]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold">No Data Storage</h3>
                <p className="text-xs text-muted-foreground">
                  Your emails, events, and contacts are never stored or downloaded by us.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Encrypted Network */}
          <motion.div 
            className="absolute top-1/2 right-0"
            style={{ transform: 'translate(0, -50%)' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - rect.left - rect.width / 2) * 0.03
              const y = (e.clientY - rect.top - rect.height / 2) * 0.03
              e.currentTarget.style.transform = `translate(calc(0px + ${x}px), calc(-50% + ${y}px))`
              e.currentTarget.style.transition = 'transform 0.1s ease-out'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0px, -50%)'
              e.currentTarget.style.transition = 'transform 0.2s ease-out'
            }}
          >
            <div className="flex flex-col items-center text-center space-y-3 p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border max-w-[220px]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
                <Lock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold">Encrypted Network</h3>
                <p className="text-xs text-muted-foreground">
                  All communications use TLS encryption to protect your data.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom - No Data Sales */}
          <motion.div 
            className="absolute bottom-0 left-1/2"
            style={{ transform: 'translate(-50%, 0)' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - rect.left - rect.width / 2) * 0.03
              const y = (e.clientY - rect.top - rect.height / 2) * 0.03
              e.currentTarget.style.transform = `translate(calc(-50% + ${x}px), calc(0px + ${y}px))`
              e.currentTarget.style.transition = 'transform 0.1s ease-out'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, 0px)'
              e.currentTarget.style.transition = 'transform 0.2s ease-out'
            }}
          >
            <div className="flex flex-col items-center text-center space-y-3 p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border max-w-[220px]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
                <UserX className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold">No Data Sales</h3>
                <p className="text-xs text-muted-foreground">
                  We never sell or monetize your data. Revenue comes from subscriptions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Left - 3rd-Party Audited */}
          <motion.div 
            className="absolute top-1/2 left-0"
            style={{ transform: 'translate(0, -50%)' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - rect.left - rect.width / 2) * 0.03
              const y = (e.clientY - rect.top - rect.height / 2) * 0.03
              e.currentTarget.style.transform = `translate(calc(0px + ${x}px), calc(-50% + ${y}px))`
              e.currentTarget.style.transition = 'transform 0.1s ease-out'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0px, -50%)'
              e.currentTarget.style.transition = 'transform 0.2s ease-out'
            }}
          >
            <div className="flex flex-col items-center text-center space-y-3 p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border max-w-[220px]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold">3rd-Party Audited</h3>
                <p className="text-xs text-muted-foreground">
                  Security practices independently verified by CASA audits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 