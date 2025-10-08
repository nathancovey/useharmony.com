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
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-3xl">
        <HarmonyAppPromotion />
      </div>
    </div>
  )
}
