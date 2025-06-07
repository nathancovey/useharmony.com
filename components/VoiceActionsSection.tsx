import { Mail, Send, Edit3, Trash2, Tag, UserX } from "lucide-react"

export function VoiceActionsSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary-foreground font-semibold">Voice Actions</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Just Tell It What to Do</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            Talk to the Harmony AI voice agent as if it were a friend who has your email open with them. It will just do it.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
               <Mail className="h-5 w-5 text-primary" />
               <h3 className="text-lg font-bold">Read</h3>
            </div>
            <p className="text-sm text-muted-foreground">Listen to emails with thread detection and smart summaries for easy understanding.</p>
          </div>
          <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
             <div className="flex items-center gap-2">
               <Send className="h-5 w-5 text-blue-500" />
               <h3 className="text-lg font-bold">Send</h3>
             </div>
            <p className="text-sm text-muted-foreground">Compose and send new emails using natural voice commands and AI assistance.</p>
          </div>
          <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
               <Edit3 className="h-5 w-5 text-green-500" />
               <h3 className="text-lg font-bold">Draft</h3>
             </div>
            <p className="text-sm text-muted-foreground">Create and save email drafts with voice input for later review and sending.</p>
          </div>
          <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
               <Trash2 className="h-5 w-5 text-destructive" />
               <h3 className="text-lg font-bold">Delete</h3>
             </div>
            <p className="text-sm text-muted-foreground">Remove unwanted emails instantly with simple voice commands.</p>
          </div>
          <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
             <div className="flex items-center gap-2">
               <Tag className="h-5 w-5 text-purple-500" />
               <h3 className="text-lg font-bold">Modify Labels</h3>
             </div>
            <p className="text-sm text-muted-foreground">Move emails to folders, mark as unread, add labels, and organize your inbox effortlessly.</p>
          </div>
          <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
               <UserX className="h-5 w-5 text-orange-500" />
               <h3 className="text-lg font-bold">Unsubscribe</h3>
             </div>
            <p className="text-sm text-muted-foreground">Automatically unsubscribe from mailing lists and newsletters with voice commands.</p>
          </div>
        </div>
      </div>
    </section>
  )
} 