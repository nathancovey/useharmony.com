import { Star } from "lucide-react"

export function ReviewsSection() {
  return (
    <section id="reviews" className="w-full py-8 md:py-12 lg:py-16 bg-muted/30">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>4.9/5</span>
          </div>
          
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text pb-1">
            Loved by users worldwide
          </h2>
          <p className="max-w-[450px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            See what our users are saying about their Harmony experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-semibold mb-2">Simply The Best AI Email Assistant!</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;I rarely write reviews, but I felt I had to share my experience with Harmony AI Email Assistant because it&rsquo;s genuinely transformed how I handle my Gmail. I&rsquo;ve tried all kinds of &lsquo;AI productivity tools&rsquo; that promise to help with email, but they usually fall short. Harmony is different, it actually delivers on what it claims, and it&rsquo;s now my go-to assistant for managing Gmail completely with my voice. What makes Harmony so impressive is how natural and easy it feels to use.&rdquo;
              </p>
              <div className="text-sm font-medium">sbols</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-semibold mb-2">The Email App everyone needs</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;Finally going to get caught up on all my emails! This is a tool that anyone who is looking to free up many hours of reading emails, or get organized in less time, or finally send that email you&rsquo;ve been wanting to send! Love it!&rdquo;
              </p>
              <div className="text-sm font-medium">SterlingJones</div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-semibold mb-2">Remote Worker Approved</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;I spend a lot of time driving since I do contract work and I get emails from clients throughout the day. This has made it a million times easier to stay up to date so I never miss an email ever again&rdquo;
              </p>
              <div className="text-sm font-medium">Lauren Nusbaum</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-semibold mb-2">Siri Could Never</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;I love this app because I can get through all my emails quickly and it can even UNSUBSCRIBE FOR ME! I also asked the ai basic questions, bc siri couldn&rsquo;t figure out an answer, and it gave me the info I wanted so 10/10 recommend.&rdquo;
              </p>
              <div className="text-sm font-medium">SamanthaCov</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-semibold mb-2">Useful</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;As a busy mom I get so many emails of random subscriptions that I don&rsquo;t want or need. I used Harmony and it helped me get all my emails organized in practically no time.&rdquo;
              </p>
              <div className="text-sm font-medium">Stallion20</div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-semibold mb-2">Great tool!</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;LOVE this app! I spend so much time in the car I have been way more productive at getting through my emails! It&rsquo;s sorts and reads to you like a real live assistant! I will definitely be keeping and using Harmony AI from now on!&rdquo;
              </p>
              <div className="text-sm font-medium">MammaHutch</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-semibold mb-2">Little Jarvis</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;It&rsquo;s so nice to be able to manage all my emails while on the road, it&rsquo;s a quality of life improvement I&rsquo;ve dreamt of. Fantastic app and I&rsquo;m excited to see further additions.&rdquo;
              </p>
              <div className="text-sm font-medium">Austin_Bull</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-semibold mb-2">Time Saver!</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;This app saves me tons of time by helping me go through all my emails while I run. For sure recommend!&rdquo;
              </p>
              <div className="text-sm font-medium">asdfNATALIEghjkl</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}