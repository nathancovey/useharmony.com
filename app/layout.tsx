import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { MainLayout } from "../components/MainLayout"
import { Toaster } from "@/components/ui/sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.useharmony.com'),
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
  title: "Harmony AI Planner - Plan your weeks effectively",
  description: "AI planner for mission-driven living. Create your Personal Mission Statement, plan weeks around life roles, and achieve work-life harmony with AI guidance.",
  keywords: ["AI planner", "work life harmony", "weekly planning app", "role based planning", "personal mission statement", "life planner", "AI life coach", "goal setting app", "productivity planner", "time blocking"],
  authors: [{ name: "Nathan Covey", url: "https://x.com/nathan_covey" }],
  creator: "Nathan Covey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.useharmony.com",
    title: "Harmony AI Planner - Plan your weeks effectively",
    description: "AI planner for mission-driven living. Create your Personal Mission Statement, plan weeks around life roles, and achieve work-life harmony with AI guidance.",
    siteName: "Harmony",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Harmony - AI Planner for Work-Life Harmony",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony AI Planner - Effective Weekly Planning",
    description: "AI planner for mission-driven living. Create your Personal Mission Statement, plan weeks around life roles, and achieve work-life harmony with AI guidance.",
    creator: "@nathan_covey"
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code-here',
  },
  category: 'technology',
  applicationName: 'Harmony AI Planner',
  appleWebApp: {
    title: 'Harmony AI',
    statusBarStyle: 'default',
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-itunes-app" content="app-id=6746949011, app-argument=https://www.useharmony.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','qawgf');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
        <SpeedInsights />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
