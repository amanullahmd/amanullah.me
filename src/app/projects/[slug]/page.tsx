import Link from 'next/link'
import { getProjectById, projects } from '@/lib/projects'
import ProjectDetailClient from './client'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectById(slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />
}
