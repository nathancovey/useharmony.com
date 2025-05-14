import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      "bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text",
      className
    )}>
      {children}
    </span>
  )
} 