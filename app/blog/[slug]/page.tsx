import { getBlogPost, getBlogPosts, urlFor } from '@/lib/sanity'
import { BlogPostContent } from '@/components/BlogPostContent'
import { HarmonyAppPromotion } from '@/components/HarmonyAppPromotion'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const revalidate = 60

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // In Next.js 15 `params` is now asynchronous, so we await it before using.
  const { slug } = await params

  const post = await getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Harmony AI'
    }
  }

  const ogImage = post.featuredImage 
    ? urlFor(post.featuredImage).width(1200).height(630).url()
    : undefined

  const postUrl = `https://www.useharmony.com/blog/${slug}`

  return {
    title: post.title,
    description: post.subtitle || `Read ${post.title} on the Harmony AI blog`,
    alternates: {
      canonical: postUrl
    },
    openGraph: {
      title: post.title,
      description: post.subtitle || `Read ${post.title} on the Harmony AI blog`,
      type: 'article',
      url: postUrl,
      siteName: 'Harmony',
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.featuredImage?.alt || post.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.subtitle || `Read ${post.title} on the Harmony AI blog`,
      images: ogImage ? [ogImage] : undefined,
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params object to safely access `slug`.
  const { slug } = await params

  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <BlogPostContent post={post} />
        
        <div className="mt-16 pt-16 border-t">
          <HarmonyAppPromotion />
        </div>
      </article>
    </div>
  )
}