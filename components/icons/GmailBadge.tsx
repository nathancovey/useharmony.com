import { ComponentProps, ReactElement } from 'react'
import { Check } from 'lucide-react'
import GmailIcon from './GmailLogo'

export function GmailBadge(props: ComponentProps<'div'>): ReactElement {
  return (
    <div 
      className="relative inline-block group"
      {...props}
    >
      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:bg-white/20">
        <GmailIcon width={28} height={28} />
      </div>
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500">
        <Check className="w-3 h-3 text-white" />
      </div>
    </div>
  )
}