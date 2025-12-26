'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getBlogPosts, getPostsByCategory } from '@/lib/blog'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'technology', label: 'Technology' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'product', label: 'Product' },
    { id: 'entrepreneurship', label: 'Entrepreneurship' },
  ]

  const allPosts = getBlogPosts()
  const filteredPosts =
    selectedCategory === 'all'
      ? allPosts
      : getPostsByCategory(selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300"
          >
            Insights on technology, AI/ML, product development, and entrepreneurship
          </motion.p>
        </div>
      </section>

      {/* Filter & Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary dark:bg-primary text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary text-xs font-semibold rounded-full">
                      {categories.find((c) => c.id === post.category)?.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary dark:text-primary hover:underline font-semibold text-sm"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                No blog posts yet. Check back soon!
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                I'm working on sharing insights about technology, AI/ML, product development, and entrepreneurship.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
