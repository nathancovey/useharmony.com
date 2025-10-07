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
          
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-tight sm:text-5xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text pb-2">
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
              <h4 className="text-sm font-[family-name:var(--font-playfair)] font-normal mb-2">Finally living with intention</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;I&rsquo;ve tried so many planners and productivity apps, but Harmony is different. Starting with my mission statement helped me get crystal clear on what actually matters. Now my weekly planning sessions feel purposeful instead of just another to-do list. I&rsquo;m finally balancing work, family, and personal growth.&rdquo;
              </p>
              <div className="text-sm font-medium">sbols</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-[family-name:var(--font-playfair)] font-normal mb-2">Weekly planning changed everything</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;Planning at the week level instead of daily has been a game changer. I can see the bigger picture and make sure all my roles - parent, professional, friend - get attention. The AI suggestions help me set goals that actually align with my mission.&rdquo;
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
              <h4 className="text-sm font-[family-name:var(--font-playfair)] font-normal mb-2">Perfect for busy parents</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;As a working mom, I was constantly feeling guilty about neglecting different areas of my life. Harmony helps me plan my weeks around all my roles - mom, professional, wife, friend. The daily reminders keep me on track without feeling overwhelming.&rdquo;
              </p>
              <div className="text-sm font-medium">Lauren Nusbaum</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-[family-name:var(--font-playfair)] font-normal mb-2">More than just another app</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;The confetti when I check off goals makes me smile every time! But seriously, the AI time-blocking suggestions are incredibly helpful. It knows when to schedule things based on my energy and commitments. This isn&rsquo;t just a planner, it&rsquo;s a life coach.&rdquo;
              </p>
              <div className="text-sm font-medium">SamanthaCov</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-[family-name:var(--font-playfair)] font-normal mb-2">My mission keeps me grounded</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;Creating my Personal Mission Statement was eye-opening. It forced me to think about what I really want from life. Now when I&rsquo;m planning my week, I can see how each goal connects to my bigger purpose. It&rsquo;s incredibly motivating.&rdquo;
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
              <h4 className="text-sm font-[family-name:var(--font-playfair)] font-normal mb-2">The accountability I needed</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;The weekly planning countdown creates such a good sense of urgency. I actually look forward to Sunday planning now. And the daily nudges help me stay on track without being annoying. Finally found something that actually helps me follow through on my goals!&rdquo;
              </p>
              <div className="text-sm font-medium">MammaHutch</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-[family-name:var(--font-playfair)] font-normal mb-2">Work-life harmony is real</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;I used to feel like I was always choosing between work and family. The role-based planning helps me give proper attention to everything that matters. I can actually see my progress across all areas of life. This is the quality of life improvement I&rsquo;ve been looking for.&rdquo;
              </p>
              <div className="text-sm font-medium">Austin_Bull</div>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h4 className="text-sm font-[family-name:var(--font-playfair)] font-normal mb-2">Simple but powerful</h4>
              <p className="text-sm text-muted-foreground mb-4">
                &ldquo;The interface is clean and intuitive. I love how it guides me through weekly planning without being complicated. The AI helps me think of goals I wouldn&rsquo;t have considered on my own. Highly recommend to anyone trying to be more intentional with their time!&rdquo;
              </p>
              <div className="text-sm font-medium">asdfNATALIEghjkl</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}