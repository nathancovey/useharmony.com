import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { BlogPost, urlFor } from '@/lib/sanity'

interface BlogPostContentProps {
  post: BlogPost
}

function getSanityImageDimensions(ref?: string) {
  if (!ref) return null
  const match = ref.match(/-(\d+)x(\d+)-/)
  if (!match) return null
  const width = parseInt(match[1], 10)
  const height = parseInt(match[2], 10)
  if (!width || !height) return null
  return { width, height }
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const dims = getSanityImageDimensions(value?.asset?._ref)
      if (!dims) return null
      const alt = value?.caption || value?.alt || 'Blog post image'
      const src = urlFor(value).url()
      return (
        <div className="my-8">
          <Image
            src={src}
            alt={alt}
            width={dims.width}
            height={dims.height}
            sizes="(min-width: 1024px) 800px, 100vw"
            className="rounded-lg shadow-lg w-full h-auto"
          />
          {(value.caption || value.alt) && (
            <p className="text-sm text-muted-foreground text-center mt-2 italic">
              {value.caption || value.alt}
            </p>
          )}
        </div>
      )
    },
    youtubeVideo: ({ value }: any) => {
      const id = value?.id
      if (!id) return null
      return (
        <div className="my-8 aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={value?.title || 'YouTube video'}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0 rounded-lg shadow"
          />
        </div>
      )
    },
    youtubeEmbed: ({ value }: any) => {
      const url = value?.url || ''
      let id = ''
      try {
        const u = new URL(url)
        id = u.searchParams.get('v') || (u.pathname.match(/\/(embed|shorts)\/([^/?#]+)/)?.[2]) || u.pathname.split('/').filter(Boolean).pop() || ''
      } catch {}
      if (!id) return null
      return (
        <div className="my-8 aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0 rounded-lg shadow"
          />
        </div>
      )
    },
    quoteBlock: ({ value }: any) => {
      const content = value?.quote ?? value?.text ?? value?.content ?? ''
      const author = value?.author || value?.source || ''
      if (!content || (Array.isArray(content) && content.length === 0)) return null
      return (
        <figure className="my-8">
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/50 rounded-r-lg">
            <div className="text-foreground italic">
              {Array.isArray(content) ? (
                <PortableText value={content} components={portableTextComponents} />
              ) : (
                content
              )}
            </div>
          </blockquote>
          {author && (
            <figcaption className="text-sm text-muted-foreground text-right">— {author}</figcaption>
          )}
        </figure>
      )
    },
    table: ({ value }: any) => {
      const rows = value?.rows || []
      if (!Array.isArray(rows) || rows.length === 0) return null
      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {rows.map((row: any, rowIndex: number) => {
                const cells = row?.cells || row
                if (!Array.isArray(cells)) return null
                return (
                  <tr key={rowIndex} className="border-b border-border">
                    {cells.map((cell: any, cellIndex: number) => (
                      <td key={cellIndex} className="border border-border p-3 align-top">
                        {Array.isArray(cell) ? (
                          <PortableText value={cell} components={portableTextComponents} />
                        ) : (
                          <span>{String(cell ?? '')}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="font-[family-name:var(--font-playfair)] text-3xl mt-12 mb-6 text-foreground" style={{ fontWeight: 400 }}>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl mt-10 mb-4 text-foreground" style={{ fontWeight: 400 }}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-[family-name:var(--font-playfair)] text-xl mt-8 mb-3 text-foreground" style={{ fontWeight: 400 }}>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="font-[family-name:var(--font-playfair)] text-lg mt-6 mb-2 text-foreground" style={{ fontWeight: 400 }}>{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-foreground leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-muted/50 rounded-r-lg">
        <div className="text-foreground italic">{children}</div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside pl-6 space-y-2 mb-4 text-lg text-foreground">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside pl-6 space-y-2 mb-4 text-lg text-foreground">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed text-lg">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed text-lg">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => {
      const href = value?.href || '#'
      const openInNewTab = !!value?.openInNewTab
      const nofollow = !!value?.nofollow
      const relParts = [] as string[]
      if (openInNewTab) {
        relParts.push('noopener', 'noreferrer')
      }
      if (nofollow) {
        relParts.push('nofollow')
      }
      const rel = relParts.length ? relParts.join(' ') : undefined
      return (
        <Link
          href={href}
          className="text-primary underline underline-offset-2 hover:no-underline transition-all"
          target={openInNewTab ? '_blank' : undefined}
          rel={rel}
        >
          {children}
        </Link>
      )
    },
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
      <nav aria-label="Breadcrumb" className="mb-6">
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
          <h1 className="font-[family-name:var(--font-playfair)] font-normal text-4xl md:text-5xl mb-6 text-foreground text-left">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-xl text-muted-foreground text-left mb-4">
              {post.subtitle}
            </p>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            {post.author && (
              <>
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
                <span>•</span>
              </>
            )}
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
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
      </header>

      <div className="max-w-none">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>
    </>
  )
}