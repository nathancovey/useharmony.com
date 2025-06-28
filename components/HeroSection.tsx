import Image from "next/image"
import Link from "next/link"
import { AppStoreBadge } from "@/components/icons/AppStoreBadge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  return (
    <section id="hero" className="w-full flex justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative pt-4 md:pt-8">
      <div className="w-full max-w-[1000px] flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-24 px-4 md:px-6 py-2 md:py-4 lg:py-6">
        {/* Text Content */}
        <div className="w-full max-w-[500px] flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 px-4 py-1 rounded-2xl border bg-background/70 backdrop-blur">
            <div className="flex -space-x-2">
              <Avatar>
                <AvatarImage src="/images/nathan.jpg" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" />
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/men/75.jpg" />
              </Avatar>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">Loved by my mom with a ⭐ 5.0 rating</span>
          </div>
          <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text text-center lg:text-left mt-6 lg:mt-8">
            AI Email Voice Assistant
          </h1>
          <p className="text-muted-foreground md:text-xl mt-6 text-center lg:text-left">
            <strong>Reach Inbox Zero hands-free.</strong> Harmony reads your emails aloud and lets you manage them with simple voice commands while you drive or exercise.
          </p>
          <Link href="https://apps.apple.com/us/app/harmony-ai-email-assistant/id6746949011" target="_blank" rel="noopener noreferrer" className="mt-8">
            <AppStoreBadge className="h-14" />
          </Link>
        </div>

        {/* Phone Mockup */}
        <div className="w-full max-w-[380px] flex items-center justify-center">
          <div className="relative w-full aspect-[9/16]">
            <Image
              src="/images/mockup.png"
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