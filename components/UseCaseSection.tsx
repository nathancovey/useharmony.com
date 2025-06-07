import { Mail, Car, Dumbbell, Home, Footprints } from "lucide-react"
import GmailIcon from "@/components/icons/GmailLogo"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function HowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-semibold">Introducing Passive Email</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Email but Hands-Free and Eyes-Free</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            One reason you love podcasts and audiobooks is because you can do it passively, without your eyes or hands. Harmony makes this possible for email.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-6 sm:grid-cols-2">
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-start mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm">
                  <Car className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl text-left">While Driving</CardTitle>
              <CardDescription className="text-left">
                Stuck in traffic for an hour? Might as well use that time to get your email to 0.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-start mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl text-left">During Exercise</CardTitle>
              <CardDescription className="text-left">
                Turn your workout time into productive email time. Listen and respond to emails without breaking your rhythm.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-start mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm">
                  <Home className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl text-left">While Doing Chores</CardTitle>
              <CardDescription className="text-left">
                Make household tasks more productive by catching up on emails while cooking, cleaning, or organizing.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="backdrop-blur-md bg-white/10 dark:bg-white/5 border-white/20 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-start mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm">
                  <Footprints className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl text-left">On a Walk</CardTitle>
              <CardDescription className="text-left">
                Transform your daily walks into productive email sessions while enjoying fresh air and staying active.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        {/* Email Provider Availability */}
        <div className="flex flex-col items-center mt-16 space-y-6">
          <div className="w-full max-w-xs h-px bg-border"></div>
          <h3 className="text-lg font-semibold text-center">Supported Email Providers</h3>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex items-center gap-3">
              <GmailIcon width={24} height={24} />
              <div className="text-center sm:text-left">
                <p className="font-medium">Gmail</p>
                <p className="text-sm text-green-600 dark:text-green-400">Available Now</p>
              </div>
            </div>
            <div className="flex items-center gap-3 opacity-60">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-medium">Outlook & Others</p>
                <p className="text-sm text-muted-foreground">Coming Later</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 