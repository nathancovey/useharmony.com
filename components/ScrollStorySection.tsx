"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IOS_APP_STORE_URL } from "@/lib/constants"
import { AppStoreBadge } from "@/components/icons/AppStoreBadge"

interface Story {
  image: string
  title: string | React.ReactNode
  description: string
  showBadges?: boolean
}

const SCROLL_SEGMENT_MULTIPLIER = 2

const stories: Story[] = [
  {
    image: "/images/mockup.png",
    title: (
      <span className="font-[family-name:var(--font-playfair)] font-normal text-4xl md:text-6xl lg:text-6xl leading-[1.25] lg:leading-none">
        Plan your weeks, <br />plan your life.
      </span>
    ),
    description: "Introducing the Harmony AI planner. Define your mission, plan weeks around your roles, and stay on track every day.",
    showBadges: true
  },
  {
    image: "/images/mission.png",
    title: "Establish your mission",
    description: "First, take a step back. What do you really want in life? Harmony will help you create a Personal Mission Statement, establishing your deeper why. You really can't think about what's next week until you know what's at the end."
  },
  {
    image: "/images/roles.png",
    title: "Plan your weeks based on roles",
    description: "We've found planning at the weekly level, based on roles, to be very effective. Daily planning or to do lists are a good start, but they're too short sighted. The week is a perfect frame of reference. Harmony will guide you every week in thoughtful planning sessions and suggest goals based on your mission."
  },
  {
    image: "/images/sync.png",
    title: "Daily follow through",
    description: "Rather than daily planning, we review our plans daily. Harmony's AI will help you time-block your goals and nudge you to do the right things at the right times, so you can live in accordance with your mission and plans every day."
  },
  {
    image: "/images/ai.png",
    title: "Engaging and AI-infused",
    description: "The app is easy to use and engaging. When you check off a goal, you'll see confetti fly in the air. When it's time for weekly planning, we will make you feel the urgency with reminders and a 24 hour countdown. AI features have been infused in the entire experience to reduce friction and increase likelihood of success."
  }
]

function CallToAction() {
  return (
    <section className="bg-background border-t">
      <div className="max-w-[800px] mx-auto px-4 py-20 flex flex-col items-center gap-6 text-center">
        <h3 className="font-[family-name:var(--font-playfair)] font-normal text-4xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text">
          Step into work-life harmony
        </h3>
        <p className="text-lg text-muted-foreground max-w-[540px]">
          Harmony gives you the nudges, structure, and inspiration to live your mission across work, family, and personal growth.
        </p>
        <Link
          href={IOS_APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).twq) {
              (window as any).twq("event", "tw-qawgf-qawgi", {})
            }
          }}
        >
          <AppStoreBadge className="h-18 md:h-14 shadow-lg" />
        </Link>
      </div>
    </section>
  )
}

export function ScrollStorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const badgeRef = useRef<HTMLDivElement | null>(null)
  const storyIndexRef = useRef(0)
  const [currentStory, setCurrentStory] = useState(0)
  const [isMobileLayout, setIsMobileLayout] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const query = window.matchMedia("(max-width: 1023px)")
    const updateMatch = (event: MediaQueryListEvent) => setIsMobileLayout(event.matches)
    setIsMobileLayout(query.matches)
    query.addEventListener("change", updateMatch)
    return () => query.removeEventListener("change", updateMatch)
  }, [])

  useEffect(() => {
    if (isMobileLayout) return
    if (typeof window === "undefined") return
    const container = containerRef.current
    if (!container) return
    gsap.registerPlugin(ScrollTrigger)
    const textNodes = textRefs.current
      .slice(0, stories.length)
      .filter((element): element is HTMLDivElement => Boolean(element))
    const imageNodes = imageRefs.current
      .slice(0, stories.length)
      .filter((element): element is HTMLDivElement => Boolean(element))
    if (textNodes.length !== stories.length) return
    if (imageNodes.length !== stories.length) return
    storyIndexRef.current = 0
    setCurrentStory(0)
    const segmentScrollHeight = window.innerHeight * SCROLL_SEGMENT_MULTIPLIER
    const ctx = gsap.context(() => {
      const badge = badgeRef.current
      const holdDuration = 1.5
      gsap.set(textNodes, { opacity: 0 })
      gsap.set(imageNodes, { opacity: 0 })
      gsap.set(textNodes[0], { opacity: 1 })
      gsap.set(imageNodes[0], { opacity: 1 })
      if (badge) gsap.set(badge, { opacity: 1 })
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${(stories.length - 1) * segmentScrollHeight}`,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: self => {
            const index = Math.min(
              stories.length - 1,
              Math.floor(self.progress * stories.length)
            )
            if (storyIndexRef.current !== index) {
              storyIndexRef.current = index
              setCurrentStory(index)
            }
          }
        }
      })
      textNodes.forEach((element, index) => {
        if (index >= stories.length - 1) return
        const nextText = textNodes[index + 1]
        const currentImage = imageNodes[index]
        const nextImage = imageNodes[index + 1]
        timeline.to({}, { duration: holdDuration })
        timeline.to(element, { opacity: 0, duration: 1 })
        if (currentImage) timeline.to(currentImage, { opacity: 0, duration: 1 }, "<")
        if (nextText) timeline.to(nextText, { opacity: 1, duration: 1 }, "<")
        if (nextImage) timeline.to(nextImage, { opacity: 1, duration: 1 }, "<")
        if (index === 0 && badge) timeline.to(badge, { opacity: 0, duration: 1 }, "<")
      })
      timeline.to({}, { duration: holdDuration })
    }, container)
    return () => ctx.revert()
  }, [isMobileLayout])

  if (isMobileLayout) {
    return (
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="px-4 pt-24 pb-16 flex flex-col gap-16">
          {stories.map((story, index) => (
            <section key={index} className="flex flex-col items-center gap-6">
              <div className="w-full max-w-[320px]">
                <div className="relative w-full aspect-[9/16]">
                  <Image
                    src={story.image}
                    alt={typeof story.title === "string" ? story.title : "Harmony AI app screenshot"}
                    fill
                    style={{ objectFit: "contain" }}
                    priority={index === 0}
                  />
                </div>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] font-normal text-4xl text-center bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text py-2">
                {story.title}
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-[500px]">
                {story.description}
              </p>
              {story.showBadges && (
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <Link
                    href={IOS_APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).twq) {
                        (window as any).twq("event", "tw-qawgf-qawgi", {})
                      }
                    }}
                  >
                    <AppStoreBadge className="h-18 md:h-14 shadow-lg" />
                  </Link>
                  <a href="https://www.tinystartups.com/launch/harmony-ai" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/tinystartups.png" alt="#1 Product of the Week on Tiny Startups" width={149} height={46} priority />
                  </a>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10"
      style={{ height: `${stories.length * SCROLL_SEGMENT_MULTIPLIER * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 lg:px-6 pt-20">
        <div className="w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start relative h-full lg:h-auto">
            {stories.map((story, index) => (
              <div
                key={index}
                ref={element => {
                  textRefs.current[index] = element
                }}
                style={{ opacity: index === 0 ? 1 : 0 }}
                className="absolute max-w-[700px]"
              >
                <h2 className="font-[family-name:var(--font-playfair)] font-normal text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text pb-2 text-center lg:text-left">
                  {story.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[500px] text-center lg:text-left">
                  {story.description}
                </p>
                {story.showBadges && (
                  <div
                    ref={index === 0 ? badgeRef : undefined}
                    style={{ opacity: 1 }}
                    className="flex flex-col md:flex-row items-center gap-4 mt-8 relative z-10 pointer-events-auto"
                  >
                    <Link
                      href={IOS_APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto"
                      onClick={() => {
                        if (typeof window !== "undefined" && (window as any).twq) {
                          (window as any).twq("event", "tw-qawgf-qawgi", {})
                        }
                      }}
                    >
                      <AppStoreBadge className="h-18 md:h-14 shadow-lg" />
                    </Link>
                    <a href="https://www.tinystartups.com/launch/harmony-ai" target="_blank" rel="noopener noreferrer">
                      <Image src="/images/tinystartups.png" alt="#1 Product of the Week on Tiny Startups" width={149} height={46} priority />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16]">
              {stories.map((story, index) => (
                <div
                  key={index}
                  ref={element => {
                    imageRefs.current[index] = element
                  }}
                  style={{ opacity: index === 0 ? 1 : 0 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={story.image}
                    alt={typeof story.title === "string" ? story.title : "Harmony AI app screenshot"}
                    fill
                    style={{ objectFit: "contain" }}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {stories.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentStory === index ? "bg-primary w-8" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function ScrollStorySectionWrapper() {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <ScrollStorySection />
      <CallToAction />
    </div>
  )
}
