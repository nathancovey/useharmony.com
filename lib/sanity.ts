import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}
if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable')
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  subtitle?: string
  slug: {
    current: string
  }
  publishedAt: string
  featuredImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  body: any[]
  author?: {
    name: string
    image?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
  }
}

export async function getBlogPosts(limit?: number, offset: number = 0): Promise<BlogPost[]> {
  const limitClause = limit ? `[${offset}...${offset + limit}]` : ''
  const query = `
    *[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) ${limitClause} {
      _id,
      _createdAt,
      title,
      subtitle,
      slug,
      publishedAt,
      featuredImage {
        asset,
        alt
      },
      body,
      author-> {
        name,
        image {
          asset
        }
      }
    }
  `

  return client.fetch(query)
}

export async function getBlogPostsCount(): Promise<number> {
  const query = `count(*[_type == "blogPost" && defined(publishedAt)])`
  return client.fetch(query)
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `
    *[_type == "blogPost" && slug.current == $slug && defined(publishedAt)][0] {
      _id,
      _createdAt,
      title,
      subtitle,
      slug,
      publishedAt,
      featuredImage {
        asset,
        alt
      },
      body,
      author-> {
        name,
        image {
          asset
        }
      }
    }
  `
  
  return client.fetch(query, { slug })
}