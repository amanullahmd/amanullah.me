export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'technology' | 'product' | 'entrepreneurship' | 'ai-ml'
  date: string
  readTime: number
  featured: boolean
  tags: string[]
}

export const blogPosts: BlogPost[] = []

export function getBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPosts() {
  return getBlogPosts().filter((post) => post.featured).slice(0, 3)
}

export function getPostsByCategory(category: string) {
  return getBlogPosts().filter((post) => post.category === category)
}

export function getPostById(id: string) {
  return blogPosts.find((post) => post.id === id)
}
