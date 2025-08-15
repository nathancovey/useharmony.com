import Image from "next/image"

export function ProductHuntBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://www.producthunt.com/products/harmony-ai-voice-assistant?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-harmony&#0045;ai&#0045;voice&#0045;assistant" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-105"
      >
        <Image 
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1005655&theme=light&t=1755266013317" 
          alt="Harmony AI Voice Assistant - Manage email and calendar with voice | Product Hunt" 
          className="shadow-lg rounded-lg"
          width={250} 
          height={54} 
        />
      </a>
    </div>
  )
}