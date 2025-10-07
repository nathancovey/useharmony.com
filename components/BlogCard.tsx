import Link from 'next/link'
import Image from 'next/image'
import { BlogPost, urlFor } from '@/lib/sanity'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Link href={`/blog/${post.slug.current}`} className="group">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] pt-0">
        {post.featuredImage && (
          <div className="relative w-full aspect-[1200/630] overflow-hidden rounded-t-lg">
            <Image
              src={urlFor(post.featuredImage).width(1200).height(630).url()}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <time dateTime={post.publishedAt}>{formattedDate}</time>
            {post.author && (
              <>
                <span>•</span>
                <span>{post.author.name}</span>
              </>
            )}
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-xl line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          {post.subtitle && (
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {post.subtitle}
            </p>
          )}
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center text-primary text-sm font-medium group-hover:underline">
            Read more
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}