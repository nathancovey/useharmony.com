import Image from "next/image"
import { WaitlistForm } from "@/components/WaitlistForm"
import { AuthorSection } from "@/components/AuthorSection"

export function HeroSection() {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative">
      <div className="w-full max-w-[1000px] flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-24 px-4 md:px-6 py-12 lg:py-24">
        {/* Text Content */}
        <div className="w-full max-w-[500px] flex flex-col items-center lg:items-start">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text text-center lg:text-left">
            AI Email Voice Assistant
          </h1>
          <p className="text-muted-foreground md:text-xl mt-6 text-center lg:text-left">
            <strong>Reach Inbox Zero hands-free.</strong> Harmony reads your emails aloud and lets you manage them with simple voice commands while you drive or exercise.
          </p>
          <WaitlistForm />
          <AuthorSection />
        </div>

        {/* Phone Mockup */}
        <div className="w-full max-w-[350px] flex items-center justify-center">
          <div className="relative w-full aspect-[9/16]">
            <Image
              src="/images/phone.gif"
              alt="Harmony AI Email Assistant App - Voice-controlled Gmail management interface"
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