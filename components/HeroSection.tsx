"use client"

import Image from "next/image"
import Link from "next/link"
import { IOS_APP_STORE_URL } from "@/lib/constants"
import { AppStoreBadge } from "@/components/icons/AppStoreBadge"
import { motion } from "motion/react"

export function HeroSection() {
  return (
    <section id="hero" className="w-full flex justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative pt-8 md:pt-16">
      <div className="w-full max-w-[1000px] flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-24 px-4 md:px-6 py-2 md:py-4 lg:py-6 pb-16 md:pb-12 lg:pb-16">
        {/* Text Content */}
        <div className="w-full max-w-[500px] flex flex-col items-center lg:items-start">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-7xl lg:[font-size:5.5rem] bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text text-center lg:text-left mt-6 lg:mt-8">
            <span className="flex items-center justify-center lg:justify-start gap-2 text-4xl sm:text-4xl md:text-4xl lg:text-4xl mb-2">
              <span className="tracking-normal bg-gradient-to-r from-[#8B97FF] to-[#c5ccff] text-transparent bg-clip-text">Talk to</span>
              <motion.div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = (e.clientX - rect.left - rect.width / 2) * 0.06
                  const y = (e.clientY - rect.top - rect.height / 2) * 0.06
                  e.currentTarget.style.transform = `translate(${x}px, ${y}px)`
                  e.currentTarget.style.transition = 'transform 0.1s ease-out'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0px, 0px)'
                  e.currentTarget.style.transition = 'transform 0.2s ease-out'
                }}
              >
                <Image 
                  src="/images/gmailIcon.png" 
                  alt="Gmail" 
                  width={80} 
                  height={80} 
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-12 lg:w-12 drop-shadow-lg cursor-pointer"
                />
              </motion.div>
              <motion.div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = (e.clientX - rect.left - rect.width / 2) * 0.06
                  const y = (e.clientY - rect.top - rect.height / 2) * 0.06
                  e.currentTarget.style.transform = `translate(${x}px, ${y}px)`
                  e.currentTarget.style.transition = 'transform 0.1s ease-out'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0px, 0px)'
                  e.currentTarget.style.transition = 'transform 0.2s ease-out'
                }}
              >
                <Image 
                  src="/images/googleCalendarIcon.png" 
                  alt="Google Calendar" 
                  width={80} 
                  height={80} 
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-12 lg:w-12 drop-shadow-lg cursor-pointer"
                />
              </motion.div>
            </span>
            <span className="block">AI Voice Assistant.</span>
          </h1>
          <p className="text-muted-foreground md:text-xl mt-6 text-center lg:text-left">
            Harmony AI is a smart executive assistant that helps you efficiently manage your email and calendar through voice.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
            <Link 
              href={IOS_APP_STORE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => {
                // Track X (Twitter) conversion event
                if (typeof window !== 'undefined' && (window as any).twq) {
                  (window as any).twq('event', 'tw-qawgf-qawgi', {});
                }
              }}
            >
              <AppStoreBadge className="h-18 md:h-14 shadow-lg" />
            </Link>
            <a href="https://www.tinystartups.com/launch/harmony-ai" target="_blank" rel="noopener noreferrer">
              <Image src="/images/tinystartups.png" alt="#1 Product of the Week on Tiny Startups" width={149} height={46} priority />
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="w-full max-w-[320px] flex items-center justify-center">
          <div className="relative w-full aspect-[9/16]">
            <Image
              src="/images/mockupv2.png"
              alt="Harmony AI Email & Calendar Assistant App - Voice-controlled Gmail and Google Calendar management interface"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 