import Link from 'next/link'
import { getPostById, getBlogPosts } from '@/lib/blog'
import BlogPostClient from './client'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = getPostById(id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const allPosts = getBlogPosts()
  const currentIndex = allPosts.findIndex((p) => p.id === post.id)
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return <BlogPostClient post={post} previousPost={previousPost} nextPost={nextPost} />
}
