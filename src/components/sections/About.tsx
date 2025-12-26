'use client'

import { motion } from 'framer-motion'

export default function About() {
  const timeline = [
    {
      year: '2024 - Present',
      title: 'Project Development Manager & Developer',
      company: 'Adaptify Loop (Co-Founder)',
      description: 'Co-Founder and Lead Developer of a FinTech/SaaS platform. Responsible for product strategy, full-stack development, and technical architecture. Leading engineering teams, designing scalable database systems with AWS, making critical technical decisions, and ensuring production-ready code quality. Building innovative financial solutions with modern technology stack.',
    },
    {
      year: '2023 - Present',
      title: 'Bachelor of Computer Science (Final Year)',
      company: 'University of Applied Sciences Mittelhessen (THM), Gießen',
      description: 'Advanced studies in computer science with specialization in AI/ML and full-stack development. Coursework includes data structures, algorithms, databases, statistics, and software engineering. Practical projects in Deep Learning (CNN, RNN), data analysis, and production-ready system development. Expected graduation: 2025.',
    },
    {
      year: '2021 - 2023',
      title: 'IT-Support & Data Quality Engineer',
      company: 'Aptiv Wuppertal',
      description: 'Performed data quality assurance and error analysis on large-scale datasets. Optimized processes and workflows in agile environment. Managed ticketing systems and collaborated with international teams. Developed strong foundation in data management, problem-solving, and technical communication.',
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a Computer Science student at THM Gießen with a passion for building innovative solutions at the intersection of technology and business. With expertise in full-stack development, AI/ML, and product management, I combine technical excellence with strategic thinking to create impactful products.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey began in IT support at Aptiv, where I developed strong problem-solving skills and learned the importance of data quality. This foundation led me to pursue advanced studies in computer science, specializing in Deep Learning and AI. I've built AI models achieving 93.4% accuracy and developed production-ready systems.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently, I'm co-founding Adaptify Loop, a FinTech/SaaS platform where I lead technical strategy and development. I'm passionate about building scalable systems, leading engineering teams, and creating solutions that solve real-world problems. Fluent in German (C1) and English (C1), with strong communication skills across international teams.
            </p>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-block btn-primary"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
              >
                <div className="absolute left-[-10px] top-0 w-5 h-5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full border-4 border-white dark:border-slate-900 shadow-md"></div>

                <div className="mb-2">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.year}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    {item.company}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
              93.4%
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              CNN Model Accuracy
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Production Projects
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
              2
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Languages (C1)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
