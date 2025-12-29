'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { use } from 'react'
import { getPostById, getBlogPosts } from '@/lib/blog'
import PDFViewer from '@/components/PDFViewer'

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary dark:from-primary dark:to-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-container mx-auto text-white">
          <Link href="/blog" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 text-white/90"
          >
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose dark:prose-invert max-w-none"
          >
            {/* PDF Viewer */}
            {post.pdfUrl && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Document Preview
                </h2>
                <PDFViewer pdfUrl={post.pdfUrl} title={post.title} />
              </div>
            )}

            {/* Text Content */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg mb-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </p>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary rounded-lg font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {previousPost ? (
                <Link
                  href={`/blog/${previousPost.id}`}
                  className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">← Previous Post</p>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                    {previousPost.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.id}`}
                  className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow text-right"
                >
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Next Post →</p>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </motion.div>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Back to All Posts
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
