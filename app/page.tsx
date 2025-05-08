import { Button } from "@/components/ui/button"
import { Mail, Star, Trash2, ArrowRight } from "lucide-react"
import Image from "next/image"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: "Harmony is your AI email voice assistant. Read and manage your emails hands-free while walking or driving. Your emails stay private on your device.",
  openGraph: {
    images: [
      {
        url: "/images/mockup.png",
        width: 675,
        height: 1200,
        alt: "Harmony App Interface"
      }
    ]
  },
  twitter: {
    images: ["/images/mockup.png"]
  }
}

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6 max-w-[1140px] mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px] items-center">
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary to-primary-accent text-transparent bg-clip-text">
                AI Email Voice Assistant
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:mx-0">
                Reach Inbox Zero on the go. Let Harmony read your emails and manage them with simple voice commands while you walk or drive.
              </p>
              <div className="space-x-4 mx-auto lg:mx-0">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="https://x.com/nathan_covey" target="_blank" rel="noopener noreferrer">
                    Follow on X for Updates
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#features">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="mx-auto flex aspect-[9/16] w-full max-w-[250px] items-center justify-center lg:order-last lg:w-full lg:max-w-[250px] xl:max-w-[350px]">
              <Image
                src="/images/mockup.png"
                alt="Harmony App Interface Mockup"
                width={300}
                height={533}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 max-w-[1140px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary-foreground font-semibold">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Effortless Email Management</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Harmony integrates seamlessly with your email, allowing you to stay productive without looking at your screen.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                 <Mail className="h-5 w-5 text-primary" />
                 <h3 className="text-lg font-bold">Read Aloud</h3>
              </div>
              <p className="text-sm text-muted-foreground">Have your latest unread emails read out to you clearly.</p>
            </div>
            <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
               <div className="flex items-center gap-2">
                 <Trash2 className="h-5 w-5 text-destructive" />
                 <h3 className="text-lg font-bold">Delete</h3>
               </div>
              <p className="text-sm text-muted-foreground">Instantly delete unwanted emails with a simple voice command.</p>
            </div>
            <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                 <ArrowRight className="h-5 w-5 text-primary" />
                 <h3 className="text-lg font-bold">Reply (Coming Soon)</h3>
               </div>
              <p className="text-sm text-muted-foreground">Dictate replies quickly and easily (feature under development).</p>
            </div>
             <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
               <div className="flex items-center gap-2">
                 <Star className="h-5 w-5 text-yellow-500" />
                 <h3 className="text-lg font-bold">Star</h3>
               </div>
              <p className="text-sm text-muted-foreground">Mark important emails for follow-up later.</p>
            </div>
             <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
               <div className="flex items-center gap-2">
                 <ArrowRight className="h-5 w-5 text-muted-foreground" />
                 <h3 className="text-lg font-bold">Skip</h3>
               </div>
              <p className="text-sm text-muted-foreground">Move to the next email without taking action.</p>
            </div>
             <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
               <div className="flex items-center gap-2">
                 <Mail className="h-5 w-5 text-secondary" />
                 <h3 className="text-lg font-bold">Voice Control</h3>
               </div>
              <p className="text-sm text-muted-foreground">Control everything hands-free using natural voice commands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="w-full py-12 md:py-24 lg:py-32 border-t bg-gradient-to-tr from-primary/10 via-background to-secondary/10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 max-w-[1140px] mx-auto">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Updated on Our Progress</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow us on X to get the latest updates about Harmony and be the first to know when we launch.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
             <Button type="button" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
               <a href="https://x.com/nathan_covey" target="_blank" rel="noopener noreferrer">
                 Follow @nathan_covey on X
               </a>
             </Button>
          </div>
        </div>
      </section>
    </>
  )
}
