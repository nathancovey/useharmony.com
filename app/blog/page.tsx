import { getBlogPosts } from '@/lib/sanity'
import { BlogCard } from '@/components/BlogCard'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog - Harmony AI',
  description: 'Stay updated with the latest insights on AI email management, productivity tips, and Harmony app updates.',
  openGraph: {
    title: 'Blog - Harmony AI',
    description: 'Stay updated with the latest insights on AI email management, productivity tips, and Harmony app updates.',
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Harmony Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights on AI email management, productivity tips, and the future of Harmony.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">No posts yet</h2>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}