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

export function FooterUpdatesForm() {
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
      const response = await fetch('/api/subscribe', {
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
      const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, otp }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to verify OTP')
      }

      setIsOtpDialogOpen(false)
      toast.success("Thanks for signing up for updates!")
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
      <div className="w-full max-w-sm">
        <form onSubmit={handleEmailSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="flex-1"
            required
            disabled={isLoading || isOtpDialogOpen}
          />
          <Button type="submit" disabled={isLoading || isOtpDialogOpen}>
            {isLoading ? "..." : "Sign Up"}
          </Button>
        </form>
      </div>

      <Dialog open={isOtpDialogOpen} onOpenChange={setIsOtpDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Verify Your Email</DialogTitle>
            <DialogDescription>
              We sent a verification code to {email}. Enter it below to get updates.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              disabled={isVerifying}
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
            {otpError && (
              <p className="text-sm text-red-600 text-center">{otpError}</p>
            )}
          </div>
          <DialogFooter className="sm:justify-center">
            <Button 
              onClick={handleVerifyOtp} 
              disabled={isVerifying || otp.length !== 6}
              className="w-full sm:w-auto"
            >
              {isVerifying ? "Verifying..." : "Verify & Subscribe"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
} 