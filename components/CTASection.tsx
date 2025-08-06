import { Button } from "@/components/ui/button"
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
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 127 127" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
                    <path d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0"/>
                    <path d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" fill="#2EB67D"/>
                    <path d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" fill="#ECB22E"/>
                  </svg>
                </div>
                Join Our Slack Community
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 