import { getBlogPosts } from '@/lib/sanity'
import { BlogList } from '@/components/BlogList'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog - Harmony AI',
  description: 'Latest insights on mission-driven planning, work-life harmony, weekly goal setting, AI productivity tools, and life balance from the Harmony team.',
  alternates: {
    canonical: 'https://www.useharmony.com/blog'
  },
  openGraph: {
    title: 'Blog - Harmony AI',
    description: 'Latest insights on mission-driven planning, work-life harmony, weekly goal setting, and achieving life balance from the Harmony team.',
    url: 'https://www.useharmony.com/blog',
    type: 'website',
    siteName: 'Harmony',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Harmony - AI Planner for Work-Life Harmony',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Harmony AI',
    description: 'Latest insights on mission-driven planning, work-life harmony, weekly goal setting, and achieving life balance from the Harmony team.',
    images: ['/opengraph-image.png']
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts(12, 0)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-4">
            Harmony AI Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights on planning, mission statements, work-life harmony, and more.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl mb-4">No posts yet</h2>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </div>
        ) : (
          <BlogList initialPosts={posts} />
        )}
      </div>
    </div>
  )
}