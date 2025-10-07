import { NextRequest, NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/sanity'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const offset = parseInt(searchParams.get('offset') || '0')
    const limit = parseInt(searchParams.get('limit') || '12')

    const posts = await getBlogPosts(limit, offset)

    return NextResponse.json({
      posts,
      hasMore: posts.length === limit
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}
