import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function AppPage() {
  return (
    <div className="flex h-[50vh] items-center justify-center bg-background">
      <p className="text-foreground">Opening Harmony...</p>
    </div>
  )
}
