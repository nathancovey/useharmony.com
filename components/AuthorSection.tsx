'use client'

import { useState } from "react"
import { motion } from "motion/react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function AuthorSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center gap-2 justify-center lg:justify-start mt-6">
      <motion.a
        href="https://x.com/nathan_covey"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Avatar className="size-8">
          {isHovered ? (
            <div className="flex items-center justify-center size-full text-xl bg-primary/10">
              👋
            </div>
          ) : (
            <AvatarImage src="/images/nathan.jpg" alt="Nathan Covey" />
          )}
        </Avatar>
        <span className="text-muted-foreground text-sm group-hover:underline">Created by Nathan Covey</span>
      </motion.a>
    </div>
  )
} 