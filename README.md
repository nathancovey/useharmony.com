# Next.js App Marketing Template

A production-ready Next.js 15 template for building marketing websites for your mobile app. Built with TypeScript, Tailwind CSS, and all the essentials you need to convert visitors into users.

# Note on Harmony AI

This template is what is actively used by [Harmony AI](https://harmonyassistant.com) for our marketing website. We made this open source for fun because why the heck not.

## What's Included

- **Next.js 15** with App Router and React 19
- **Email capture** with OTP verification system
- **Blog** with CMS integration (Sanity)
- **App download** sections for iOS/Android
- **SEO optimization** with structured data
- **Analytics** (Vercel Analytics + Speed Insights)
- **Responsive design** with mobile-first approach
- **Dark mode** support
- **Email templates** for transactional emails

## Key Features

- Hero section with app download CTA
- Feature demonstrations and use cases
- Privacy-focused messaging
- Email waitlist with verification
- Contact forms and newsletter signup
- Company pages (about, privacy, terms)
- Optimized images and performance

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Database**: Vercel KV
- **Email**: Loops for newsletters
- **CMS**: Sanity (optional)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

1. Clone this repo
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and add your keys
4. Run development server: `npm run dev`
5. Customize the content in `lib/constants.ts`

## Environment Variables

```bash
# Email service
LOOPS_API_KEY=your_loops_api_key

# Database (auto-provided on Vercel)
KV_URL=your_kv_url
KV_REST_API_URL=your_kv_rest_api_url
KV_REST_API_TOKEN=your_kv_rest_api_token
KV_REST_API_READ_ONLY_TOKEN=your_kv_rest_api_read_only_token

# CMS (optional)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token
```

## Customization

1. Update app info in `lib/constants.ts`
2. Replace logos and images in `public/images/`
3. Customize components in `components/`
4. Update metadata in `app/layout.tsx`
5. Modify color scheme in `tailwind.config.js`

## Commands

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Run ESLint

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs-app-marketing-template)

## License

MIT License - feel free to use this for your own projects.

## Support

Open an issue if you run into problems or have questions.