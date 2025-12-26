'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white text-center px-4">
            <p className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              View Project
            </p>
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <Badge variant="secondary">
            {project.category === 'entrepreneurial'
              ? 'Entrepreneurial'
              : project.category === 'fullstack'
                ? 'Full-Stack'
                : 'AI/ML'}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
          <Link href={`/projects/${project.id}`} className="flex-1">
            <Button className="w-full">Details</Button>
          </Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full">
                GitHub
              </Button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
