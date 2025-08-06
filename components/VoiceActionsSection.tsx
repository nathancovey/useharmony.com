import { Mail, Send, Edit3, Trash2, Tag, UserX, Calendar, Clock, Search, Users, Forward, Reply, Archive, RefreshCw, Plus, Minus, Move, Eye, EyeOff, Star, Filter, Folder, User } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export function VoiceActionsSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text pb-1">44+ tools and counting.</h2>
          <p className="max-w-[450px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
            Talk to Harmony like a personal assistant who knows your email and calendar inside and out.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* Gmail Tools */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Send className="h-4 w-4 text-blue-500" />
                   <h4 className="text-sm font-bold">Send Email</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Compose and send new emails</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Edit3 className="h-4 w-4 text-green-500" />
                   <h4 className="text-sm font-bold">Create Draft</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save email drafts for later</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Mail className="h-4 w-4 text-primary" />
                   <h4 className="text-sm font-bold">Read Email</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Listen to emails with smart summaries</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Search className="h-4 w-4 text-gray-500" />
                   <h4 className="text-sm font-bold">Search Emails</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Find emails by sender, subject, or content</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Edit3 className="h-4 w-4 text-yellow-500" />
                   <h4 className="text-sm font-bold">Modify Email</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Change email labels, read status, and properties</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Trash2 className="h-4 w-4 text-destructive" />
                   <h4 className="text-sm font-bold">Delete Email</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Move emails to trash</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Trash2 className="h-4 w-4 text-red-600" />
                   <h4 className="text-sm font-bold">Batch Modify</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Modify multiple emails at once</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Trash2 className="h-4 w-4 text-red-700" />
                   <h4 className="text-sm font-bold">Batch Delete</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete multiple emails at once</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Tag className="h-4 w-4 text-purple-500" />
                   <h4 className="text-sm font-bold">List Labels</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>View all your email labels and folders</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Plus className="h-4 w-4 text-green-600" />
                   <h4 className="text-sm font-bold">Create Label</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create new email labels for organization</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <UserX className="h-4 w-4 text-orange-500" />
                   <h4 className="text-sm font-bold">Unsubscribe</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Unsubscribe from newsletters and mailing lists</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Filter className="h-4 w-4 text-indigo-500" />
                   <h4 className="text-sm font-bold">Count Emails</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get the number of emails matching criteria</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Eye className="h-4 w-4 text-teal-500" />
                   <h4 className="text-sm font-bold">Inbox Overview</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get a summary of your inbox status</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <RefreshCw className="h-4 w-4 text-blue-600" />
                   <h4 className="text-sm font-bold">Restore Email</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Restore emails from trash</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <UserX className="h-4 w-4 text-orange-600" />
                   <h4 className="text-sm font-bold">Bulk Unsubscribe</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Unsubscribe from multiple lists at once</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <RefreshCw className="h-4 w-4 text-blue-700" />
                   <h4 className="text-sm font-bold">Batch Restore</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Restore multiple emails from trash</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Reply className="h-4 w-4 text-cyan-500" />
                   <h4 className="text-sm font-bold">Reply to Thread</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Reply to email conversations</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Trash2 className="h-4 w-4 text-red-500" />
                   <h4 className="text-sm font-bold">Delete Draft</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete saved email drafts</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Send className="h-4 w-4 text-blue-600" />
                   <h4 className="text-sm font-bold">Send Draft</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Send previously saved drafts</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Folder className="h-4 w-4 text-gray-600" />
                   <h4 className="text-sm font-bold">List Drafts</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>View all your saved email drafts</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Users className="h-4 w-4 text-pink-500" />
                   <h4 className="text-sm font-bold">Get Contacts</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Access your contact list</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Search className="h-4 w-4 text-violet-500" />
                   <h4 className="text-sm font-bold">Search People</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Find people in your network</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Users className="h-4 w-4 text-pink-600" />
                   <h4 className="text-sm font-bold">Get People</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get information about specific people</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <User className="h-4 w-4 text-emerald-500" />
                   <h4 className="text-sm font-bold">Get Profile</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>View your own profile information</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Forward className="h-4 w-4 text-amber-500" />
                   <h4 className="text-sm font-bold">Forward Email</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Forward emails to other recipients</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Archive className="h-4 w-4 text-slate-500" />
                   <h4 className="text-sm font-bold">Archive Email</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Archive emails to clean up your inbox</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Star className="h-4 w-4 text-yellow-500" />
                   <h4 className="text-sm font-bold">Star Email</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Star or unstar important emails</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Eye className="h-4 w-4 text-green-500" />
                   <h4 className="text-sm font-bold">Mark as Read</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mark emails as read or unread</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Reply className="h-4 w-4 text-blue-500" />
                   <h4 className="text-sm font-bold">Reply</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Reply to individual emails</p>
            </TooltipContent>
          </Tooltip>
          
          {/* Google Calendar Tools */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Edit3 className="h-4 w-4 text-blue-500" />
                   <h4 className="text-sm font-bold">Patch Event</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Update specific parts of calendar events</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Calendar className="h-4 w-4 text-purple-500" />
                   <h4 className="text-sm font-bold">Update Calendar</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Modify calendar properties and settings</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Plus className="h-4 w-4 text-green-500" />
                   <h4 className="text-sm font-bold">Create Event</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Schedule new calendar events</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Trash2 className="h-4 w-4 text-red-500" />
                   <h4 className="text-sm font-bold">Delete Event</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Remove events from your calendar</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Calendar className="h-4 w-4 text-indigo-500" />
                   <h4 className="text-sm font-bold">Get Events</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>View recurring event occurrences</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Calendar className="h-4 w-4 text-teal-500" />
                   <h4 className="text-sm font-bold">List Events</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>View all your upcoming events</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Move className="h-4 w-4 text-orange-500" />
                   <h4 className="text-sm font-bold">Move Event</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Move events between calendars</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Search className="h-4 w-4 text-cyan-500" />
                   <h4 className="text-sm font-bold">Find Event</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Search for specific calendar events</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Clock className="h-4 w-4 text-emerald-500" />
                   <h4 className="text-sm font-bold">Find Free Slots</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Find available time slots for meetings</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Calendar className="h-4 w-4 text-violet-500" />
                   <h4 className="text-sm font-bold">Get Calendar</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Access calendar information and details</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Clock className="h-4 w-4 text-gray-500" />
                   <h4 className="text-sm font-bold">Get Date Time</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get current date and time information</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Calendar className="h-4 w-4 text-blue-600" />
                   <h4 className="text-sm font-bold">List Calendars</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>View all your available calendars</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Edit3 className="h-4 w-4 text-purple-600" />
                   <h4 className="text-sm font-bold">Patch Calendar</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Update specific calendar properties</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Plus className="h-4 w-4 text-green-600" />
                   <h4 className="text-sm font-bold">Quick Add Event</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Quickly create events with simple text</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Minus className="h-4 w-4 text-red-600" />
                   <h4 className="text-sm font-bold">Remove Attendee</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Remove people from event invitations</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border bg-card text-card-foreground hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-2">
                   <Edit3 className="h-4 w-4 text-amber-500" />
                   <h4 className="text-sm font-bold">Update Event</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Modify existing calendar events</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="grid gap-1 p-3 rounded-lg border border-dashed bg-card/50 text-card-foreground hover:shadow-md transition-shadow cursor-pointer opacity-75">
                <div className="flex items-center gap-2">
                   <Plus className="h-4 w-4 text-muted-foreground" />
                   <h4 className="text-sm font-bold text-muted-foreground">More soon!</h4>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>New voice commands are being added regularly</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  )
} 