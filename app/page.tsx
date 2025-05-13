'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Mail, Star, Trash2, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false)
  const [otpError, setOtpError] = useState<string | null>(null)

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setOtpError(null)
    setOtp("")

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send OTP')
      }

      setIsOtpDialogOpen(true)
      toast.info("Verification code sent to your email.")

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again."
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    setIsVerifying(true)
    setOtpError(null)

    try {
      const response = await fetch('/api/verify-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, otp }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to verify OTP')
      }

      setIsOtpDialogOpen(false)
      toast.success("Thanks for joining the waitlist!")
      setEmail("")
      setOtp("")

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Verification failed. Please try again."
        setOtpError(errorMessage)
    } finally {
        setIsVerifying(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6 max-w-[1140px] mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px] items-center">
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary to-primary-accent text-transparent bg-clip-text">
                AI Email Voice Assistant
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:mx-0">
                Reach Inbox Zero on the go. Let Harmony read your emails and manage them with simple voice commands while you walk or drive.
              </p>
              <div className="mx-auto lg:mx-0 w-full sm:max-w-lg">
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="w-full flex-1 h-16 sm:h-12 text-lg"
                    required
                    disabled={isLoading || isOtpDialogOpen}
                  />
                  <Button type="submit" disabled={isLoading || isOtpDialogOpen} size="lg" className="w-full sm:w-auto h-14 sm:h-12">
                    {isLoading ? "Sending..." : "Join Waitlist"}
                  </Button>
                </form>
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

      <Dialog open={isOtpDialogOpen} onOpenChange={setIsOtpDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Verification Code</DialogTitle>
            <DialogDescription>
              We sent a 6-digit code to {email}. Please enter it below to verify your email address.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            {otpError && (
              <p className="text-center text-sm text-red-500">{otpError}</p>
            )}
          </div>
          <DialogFooter>
            <Button
                onClick={handleVerifyOtp}
                disabled={isVerifying || otp.length !== 6}
                className="w-full cursor-pointer"
            >
              {isVerifying ? "Verifying..." : "Verify Email"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
