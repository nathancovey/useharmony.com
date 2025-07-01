import Link from 'next/link'
import { AppStoreBadge } from '@/components/icons/AppStoreBadge'
import { Card, CardContent } from '@/components/ui/card'
import { HarmonyAppIcon } from '@/components/icons/HarmonyAppIcon'

export function HarmonyAppPromotion() {
  return (
    <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left side - App info and download */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <HarmonyAppIcon size={64} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Harmony AI Email Assistant
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-500 text-sm">★★★★★</span>
                  <span className="text-sm text-muted-foreground">4.9 rating</span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transform how you manage your inbox with Harmony AI. Listen to your emails, 
              reply with voice commands, and stay productive while on the go.
            </p>

            <div className="flex justify-start">
              <Link
                href="https://apps.apple.com/us/app/harmony-ai-email-assistant/id6746949011"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <AppStoreBadge className="h-14" />
              </Link>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">🎧</div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">Listen to Emails</h4>
                  <p className="text-xs text-muted-foreground">
                    Hear your emails read aloud while walking or driving
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">🗣️</div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">Voice Commands</h4>
                  <p className="text-xs text-muted-foreground">
                    Reply, delete, and manage emails hands-free
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">🔒</div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">Privacy First</h4>
                  <p className="text-xs text-muted-foreground">
                    Your emails stay private on your device
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}