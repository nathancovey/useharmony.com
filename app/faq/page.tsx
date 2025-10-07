import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Harmony AI",
  description: "Answers to common questions about Harmony AI, the planner that helps you achieve work-life harmony through mission-driven weekly planning.",
  keywords: ["harmony faq", "planning app questions", "weekly planner help", "mission statement guide", "role-based planning"],
  alternates: {
    canonical: "https://www.useharmony.com/faq"
  },
  openGraph: {
    title: "FAQ - Harmony AI",
    description: "Get answers about Personal Mission Statements, weekly planning, roles, AI assistance, and achieving work-life harmony.",
    url: "https://www.useharmony.com/faq",
    type: "website"
  }
}

export default function FAQPage() {
  return (
    <section className="w-full pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-24 lg:pb-32">
      <div className="container px-4 md:px-6 max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="font-[family-name:var(--font-playfair)] font-normal text-3xl tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-[#8B97FF] text-transparent bg-clip-text pb-1">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-[500px] text-muted-foreground md:text-xl/snug lg:text-base/snug xl:text-xl/snug">
              Everything you need to know about Harmony, the AI planner that helps you achieve work-life harmony through mission-driven weekly planning.
            </p>
          </div>
          <div className="w-full max-w-[600px]">
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  What is Harmony and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Harmony is an AI-powered planner that helps you achieve work-life harmony. First, you&apos;ll create a Personal Mission Statement to clarify your values and long-term goals. Then, Harmony guides you through weekly planning sessions where you set goals based on your different life roles (parent, professional, friend, etc.). Throughout the week, the app provides daily nudges, time-blocking suggestions, and progress tracking to help you follow through on your plans.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  What is a Personal Mission Statement?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A Personal Mission Statement is a written declaration of your core values and long-term aspirations. It serves as your &quot;North Star&quot; - helping you make decisions and set goals that align with what truly matters to you. Harmony guides you through creating this statement with thoughtful prompts and AI assistance, ensuring your weekly plans and daily actions connect to your bigger purpose.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  Why plan weekly instead of daily?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Weekly planning gives you the perfect balance between vision and execution. Daily planning can be too short-sighted, while monthly or yearly planning feels too distant. A week gives you enough time to make meaningful progress on important goals while staying connected to your immediate priorities. You can see how all your roles fit together and ensure nothing important gets neglected. Harmony&apos;s weekly planning sessions help you thoughtfully allocate time across work, family, health, and personal growth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  What are roles and how do they work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Roles represent the different areas of your life - like Parent, Professional, Spouse, Friend, Personal Health, or Community Member. Planning by roles ensures you&apos;re giving attention to all the important parts of your life, not just work. During weekly planning, Harmony helps you set goals for each role, so you can achieve true work-life harmony instead of letting one area dominate everything else.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  How does the AI help with planning?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Harmony&apos;s AI assists you in several ways: it suggests weekly goals based on your mission statement and roles, helps you with time-blocking by recommending when to schedule tasks based on your energy and existing commitments, provides daily nudges to keep you on track, and offers motivating reminders with a 24-hour countdown before weekly planning. The AI reduces friction and helps you think of goals you might not have considered on your own.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  What happens during daily check-ins?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Rather than planning each day from scratch, Harmony helps you review and execute your weekly plan daily. You&apos;ll see your goals for the day, check off completed items (with satisfying confetti animations!), and get AI-powered nudges about what to focus on. The app helps you time-block your goals and reminds you to do the right things at the right times, keeping you aligned with your mission and weekly plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  How much does Harmony cost?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Harmony offers a 14-day free trial so you can experience the full app before committing. After the trial, it&apos;s $9.99/month or $39.99/year (save 67%). The yearly plan works out to just $3.33/month. All subscriptions are managed through the App Store and can be cancelled anytime. Start your free trial today and begin your journey toward work-life harmony.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  Is my data private and secure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Your personal information, mission statement, and planning data are stored securely and encrypted. We never sell your data to third parties. Your information is only used to provide you with the Harmony app experience and improve the product. You can delete your account and all associated data at any time from within the app settings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  Can I use Harmony for work and personal life?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! That&apos;s exactly what Harmony is designed for. The role-based planning approach ensures you balance professional goals with personal ones. You might have roles like &quot;Software Engineer,&quot; &quot;Parent,&quot; &quot;Spouse,&quot; &quot;Friend,&quot; and &quot;Health &amp; Fitness.&quot; This way, you&apos;re intentionally planning time for career advancement, family activities, relationships, and self-care - achieving true work-life harmony instead of work-life imbalance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  What platforms is Harmony available on?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Harmony is currently available on iOS through the App Store for iPhone and iPad. We&apos;re working on bringing Harmony to Android and web platforms in the future. Download it from the App Store to get started with your 14-day free trial and begin planning your path to work-life harmony today.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  How long does weekly planning take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most users complete their weekly planning session in 15-30 minutes. The AI helps speed things up by suggesting goals based on your mission and previous weeks. The more you use Harmony, the faster and more intuitive the process becomes. Think of it as an investment - spending 30 minutes planning your week can save you hours of wasted time and ensure you&apos;re focusing on what truly matters.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  What if I don&apos;t complete all my weekly goals?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  That&apos;s completely normal! Harmony isn&apos;t about perfection - it&apos;s about intentional living and progress. During your next weekly planning session, you can review what you accomplished, reflect on what got in the way, and adjust accordingly. The app helps you learn from each week and improve over time. The goal is consistent progress toward your mission, not checking off every single box.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-13">
                <AccordionTrigger className="text-base font-[family-name:var(--font-playfair)] font-normal cursor-pointer">
                  Can I customize my roles and goals?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Harmony is completely customizable to your life. You define your own roles based on what matters to you - there are no pre-set categories. You also have full control over your weekly goals. While the AI provides suggestions, you can add, edit, or remove any goals to match your priorities. Harmony adapts to your unique situation, whether you&apos;re a student, entrepreneur, parent, or retiree.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
