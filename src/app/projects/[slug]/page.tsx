'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { getProjectById, projects } from '@/lib/projects'

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectById(params.slug)

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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary dark:from-primary dark:to-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-container mx-auto text-white">
          <Link href="/projects" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Projects
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/90"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Problem</h3>
              <p className="text-slate-600 dark:text-slate-300">{project.problemStatement}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Solution</h3>
              <p className="text-slate-600 dark:text-slate-300">{project.solution}</p>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <span className="text-primary text-2xl mr-4">✓</span>
                  <p className="text-slate-600 dark:text-slate-300">{result}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary rounded-lg font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4 mb-16"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                View on GitHub
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
          <div className="max-w-container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center"
            >
              Related Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}
