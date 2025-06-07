import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "../components/MainLayout";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://harmony.com.ai'),
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
  title: {
    default: "Harmony - AI Email Voice Assistant",
    template: "%s | Harmony"
  },
  description: "Let Harmony read your emails and manage them with simple voice commands while you walk or drive. Your emails stay private on your device.",
  keywords: ["email assistant", "voice commands", "email management", "AI assistant", "productivity", "email voice control"],
  authors: [{ name: "Nathan Covey", url: "https://x.com/nathan_covey" }],
  creator: "Nathan Covey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harmony.com.ai",
    title: "Harmony - AI Email Voice Assistant",
    description: "Let Harmony read your emails and manage them with simple voice commands while you walk or drive. Your emails stay private on your device.",
    siteName: "Harmony",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Harmony - AI Email Voice Assistant",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony - AI Email Voice Assistant",
    description: "Let Harmony read your emails and manage them with simple voice commands while you walk or drive. Your emails stay private on your device.",
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
  applicationName: 'Harmony AI Email Assistant',
  appleWebApp: {
    title: 'Harmony AI Email Assistant',
    statusBarStyle: 'default',
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
        <SpeedInsights />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
