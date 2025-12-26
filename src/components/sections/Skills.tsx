'use client'

import { motion } from 'framer-motion'
import { skills, getSkillsByCategory, getProficiencyPercentage } from '@/lib/skills'

export default function Skills() {
  const categories = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'product', label: 'Product & Strategy' },
    { id: 'leadership', label: 'Leadership' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category.id)

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  {category.label}
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {categorySkills.map((skill) => {
                    const percentage = getProficiencyPercentage(skill.proficiency)

                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">
                            {skill.proficiency}
                          </span>
                        </div>

                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-blue-600 to-orange-500"
                          ></motion.div>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                          {percentage}% Proficiency
                        </p>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
              {skills.filter((s) => s.proficiency === 'expert').length}
            </div>
            <p className="text-slate-600 dark:text-slate-300">Expert Level Skills</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
              {skills.filter((s) => s.proficiency === 'advanced').length}
            </div>
            <p className="text-slate-600 dark:text-slate-300">Advanced Skills</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
              {skills.length}
            </div>
            <p className="text-slate-600 dark:text-slate-300">Total Skills</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
