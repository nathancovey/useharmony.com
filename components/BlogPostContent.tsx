import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { BlogPost, urlFor } from '@/lib/sanity'

interface BlogPostContentProps {
  post: BlogPost
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).height(400).url()}
          alt={value.alt || 'Blog post image'}
          width={800}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto"
        />
        {value.alt && (
          <p className="text-sm text-muted-foreground text-center mt-2 italic">
            {value.alt}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-12 mb-6 text-foreground">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-foreground leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/50 rounded-r-lg">
        <div className="text-foreground italic">{children}</div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <Link
        href={value.href}
        className="text-primary underline underline-offset-2 hover:no-underline transition-all"
        target={value.href.startsWith('http://') || value.href.startsWith('https://') ? '_blank' : undefined}
        rel={value.href.startsWith('http://') || value.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    ),
  },
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground min-w-0">
          <li className="flex-shrink-0">
            <Link 
              href="/" 
              className="hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="flex-shrink-0">
            <svg
              className="w-4 h-4 mx-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="flex-shrink-0">
            <Link 
              href="/blog" 
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </li>
          <li className="flex-shrink-0">
            <svg
              className="w-4 h-4 mx-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="min-w-0 flex-1">
            <span className="text-foreground font-medium truncate block">
              {post.title}
            </span>
          </li>
        </ol>
      </nav>

      <header className="mb-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-left">
            {post.title}
          </h1>
        </div>

        {post.featuredImage && (
          <div className="relative w-full aspect-[1200/630] rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={urlFor(post.featuredImage).width(1200).height(630).url()}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mb-8 pb-6 border-b border-border">
          {post.subtitle && (
            <p className="text-xl text-muted-foreground text-left mb-4">
              {post.subtitle}
            </p>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={post.publishedAt}>{formattedDate}</time>
            {post.author && (
              <>
                <span>•</span>
                <div className="flex items-center gap-2">
                  {post.author.image && (
                    <Image
                      src={urlFor(post.author.image).width(64).height(64).quality(90).url()}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <span>{post.author.name}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>
    </>
  )
}