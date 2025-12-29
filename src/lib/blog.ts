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
  pdfUrl?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'apache-superset-thesis',
    title: 'Apache Superset: Data Visualization & Business Intelligence',
    excerpt: 'A comprehensive thesis on Apache Superset, exploring its architecture, capabilities, and practical applications for real-time data visualization and business intelligence dashboards.',
    content: `Apache Superset: Data Visualization & Business Intelligence

This thesis explores Apache Superset, a modern open-source data visualization and business intelligence platform. The work demonstrates practical expertise in building interactive dashboards, data exploration, and creating actionable insights from complex datasets.

Key Topics Covered:
• Apache Superset architecture and components
• Data source integration and management
• Dashboard design and visualization techniques
• Real-time analytics and performance optimization
• Security and access control mechanisms
• Practical implementation strategies

Technical Contributions:
• Analysis of Superset's capabilities for enterprise BI
• Best practices for dashboard design
• Performance optimization techniques
• Integration with various data sources
• Advanced visualization techniques

Practical Applications:
This thesis demonstrates how Apache Superset can be leveraged for:
- Real-time business metrics monitoring
- Executive-level dashboards
- Data exploration and discovery
- Automated reporting and insights
- Multi-user collaboration on analytics

The work showcases my ability to work with modern data visualization tools and create meaningful insights from complex data sources. This experience directly contributed to the Data Visualization Dashboard project in my portfolio.`,
    category: 'technology',
    date: '2024-12-20',
    readTime: 10,
    featured: true,
    tags: ['Data Visualization', 'Business Intelligence', 'Apache Superset', 'Analytics'],
    pdfUrl: '/pdfs/Apache_Superset_Amanullah.pdf',
  },
]

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
