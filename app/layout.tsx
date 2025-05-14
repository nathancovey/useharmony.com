import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "../components/MainLayout";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://harmony.com.ai'),
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
    siteName: "Harmony"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony - AI Email Voice Assistant",
    description: "Let Harmony read your emails and manage them with simple voice commands while you walk or drive. Your emails stay private on your device.",
    creator: "@nathan_covey"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
