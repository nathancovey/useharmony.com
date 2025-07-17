import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
              Everything you need to know about Harmony, the AI email voice assistant that helps you manage your inbox hands-free.
            </p>
          </div>
          <div className="w-full max-w-[800px]">
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-medium cursor-pointer">
                  What is Harmony and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Harmony is an AI-powered voice assistant that integrates with your Gmail to help you manage email hands-free. After connecting your Gmail account, you can simply tap your inbox and start chatting with the assistant using voice commands. You can ask it to read your emails, delete messages, send replies, move emails to folders, and even unsubscribe from lists.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-medium cursor-pointer">
                  Is my email data safe and private?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We take privacy seriously with multiple safeguards: emails are never sent without confirmation, emails cannot be permanently deleted (mistakes are recoverable), none of your emails are stored or saved by us, all connections are secure and encrypted, and no data is ever sold or used for AI training purposes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-medium cursor-pointer">
                  What voice commands can I use with Harmony?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Harmony can handle a wide variety of voice commands including: "Can you catch me up on my most recent emails?", "Delete that first email", "Move all these emails to my receipts folder", "Write a draft reply", "Send this email", and "Unsubscribe me from this list". You can speak naturally and the AI will understand your intent.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base font-medium cursor-pointer">
                  Why combine email management with driving time?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  According to McKinsey, the average knowdlge worker spends 2.6 hours a day on email and 1 hour a day in the car - these seem like the perfect two things to combine! Harmony allows you to productively manage your inbox during commutes, walks, or any time when you can't look at your screen, making better use of your time.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base font-medium cursor-pointer">
                  What email providers does Harmony support?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Currently, Harmony integrates with Gmail accounts. We're working on expanding support to other email providers in future updates based on user feedback and demand.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-base font-medium cursor-pointer">
                  Can Harmony permanently delete my emails?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, Harmony cannot permanently delete emails. When you ask it to "delete" an email, it moves the email to your trash folder, ensuring that any mistakes are recoverable. This is one of our built-in safety measures to protect your important correspondence.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-base font-medium cursor-pointer">
                  How much does Harmony cost?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Harmony is available via subscription, but you can try it for free with a 14-day free trial. Download it today from the App Store and start managing your email hands-free while driving, walking, or multitasking.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-base font-medium cursor-pointer">
                  Will Harmony send emails without my permission?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Never. Harmony always asks for confirmation before sending any email. This ensures you maintain complete control over your email communications and prevents any accidental sends.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}