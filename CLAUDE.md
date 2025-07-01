# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website for Harmony AI, an AI-powered email voice assistant app. The site serves as the primary marketing funnel with email capture, app download links, and comprehensive SEO optimization.

## Development Commands

**Core Development:**
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Important:** Always run `npm run lint` after making code changes to ensure code quality.

## Architecture

**App Router Structure:**
- Uses Next.js 15 App Router with TypeScript
- Root layout (`app/layout.tsx`) provides global metadata, fonts, and analytics
- `MainLayout` component wraps all pages with fixed header, dynamic padding, and footer
- All pages are static except API routes

**Component Organization:**
- `components/` - Reusable UI components and page sections
- `components/ui/` - Base UI components using Radix UI + Tailwind
- `components/icons/` - Custom SVG icon components
- `components/emails/` - Email templates for Resend

**Key Sections:**
- `HeroSection` - Landing hero with app download CTA
- `UseCaseSection` - Feature demonstrations
- `VoiceActionsSection` - Voice command examples
- `PrivacySection` - Privacy-focused messaging
- `CTASection` - Final conversion section

**API Routes:**
- `send-otp/` - Generates and emails OTP codes using Resend + Vercel KV
- `verify-otp/` - Validates OTP codes for email verification
- `get-waitlist-count/` - Returns waitlist subscriber count
- `resend-webhook/` - Handles Resend webhook events

**State Management:**
- No global state management - uses React hooks for local state
- Email verification flow uses OTP stored in Vercel KV with rate limiting
- ResizeObserver in MainLayout for dynamic header height calculation

## Key Technical Details

**Email System:**
- Uses Resend for transactional emails with custom React email templates
- OTP system with 5-minute expiry and 1-minute rate limiting
- All email operations stored in Vercel KV for persistence

**SEO & Performance:**
- Comprehensive structured data (JSON-LD) for Organization, WebSite, SoftwareApplication, and FAQPage
- OpenGraph and Twitter card optimization
- Image optimization with WebP/AVIF formats
- Security headers configured in `next.config.ts`

**Styling:**
- Tailwind CSS with custom configuration
- `@` alias points to project root for imports
- Inter font loaded via Google Fonts
- Responsive design with mobile-first approach

**External Integrations:**
- Vercel Analytics and Speed Insights
- Vercel KV for data persistence
- Resend for email delivery
- Apple App Store and social platform links

## Environment Requirements

**Required Environment Variables:**
- `RESEND_API_KEY` - For sending OTP emails
- `KV_*` variables - Vercel KV connection (auto-provided on Vercel)

**Key Dependencies:**
- Next.js 15 with React 19
- Radix UI for accessible components
- Tailwind CSS for styling
- Vercel KV for data storage
- Resend for email delivery