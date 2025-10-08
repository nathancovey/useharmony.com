import type { Metadata } from "next"
import { HarmonyAppPromotion } from "@/components/HarmonyAppPromotion"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function AppPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <HarmonyAppPromotion />
      </div>
    </div>
  )
}
