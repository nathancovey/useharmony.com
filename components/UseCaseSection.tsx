import { Mail, Car, Dumbbell, Home, Footprints } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

export function HowItWorksSection() {
  return (
    <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text">Voice is faster. <br /> And convenient-er.</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            Voice lets you manage email and calendar faster than typing, and you can do it anywhere - even when your hands and eyes are busy.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-6 sm:grid-cols-2">
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex-shrink-0">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-xl text-left mb-2">While Driving</CardTitle>
                  <CardDescription className="text-left">
                    Manage emails and calendar hands-free during your commute.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex-shrink-0">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-xl text-left mb-2">During Exercise</CardTitle>
                  <CardDescription className="text-left">
                    Stay on top of work without breaking your workout flow.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex-shrink-0">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-xl text-left mb-2">While Doing Chores</CardTitle>
                  <CardDescription className="text-left">
                    Catch up on emails while cooking or doing household tasks.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex-shrink-0">
                  <Footprints className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-xl text-left mb-2">On a Walk</CardTitle>
                  <CardDescription className="text-left">
                    Clear your inbox while getting fresh air and exercise.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        
        {/* Email Provider Availability */}
        <div className="flex flex-col items-center mt-16 space-y-6">
          <div className="w-full max-w-xs h-px bg-border"></div>
          <h3 className="text-xl font-semibold text-center">Integrations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <Image src="/images/gmailIcon.png" alt="Gmail" width={32} height={32} />
              <span className="text-lg font-medium">Gmail</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/images/googleCalendarIcon.png" alt="Google Calendar" width={32} height={32} />
              <span className="text-lg font-medium">Google Calendar</span>
            </div>
            <div className="flex items-center gap-3 opacity-60">
              <Mail className="h-8 w-8" />
              <span className="text-lg font-medium">Others coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 