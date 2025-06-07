import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join our community.
            </h2>
            <p className="mx-auto max-w-[500px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
              Connect with our team and community for real-time support, updates, and discussions about the future of AI for productivity.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <Button asChild size="lg" className="w-full h-14 flex items-center gap-2">
              <Link href="https://join.slack.com/t/harmony-pnf8776/shared_invite/zt-370vljb9t-x2Y~~63yQTGfMvoC_8wIrQ" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Join Our Slack Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 