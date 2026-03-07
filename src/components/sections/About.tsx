'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'

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
      title: 'Bachelor of Computer Science',
      company: 'University of Applied Sciences Mittelhessen (THM), Gießen',
      description: 'Advanced studies in computer science with specialization in AI/ML and full-stack development. Coursework includes data structures, algorithms, databases, statistics, and software engineering. Practical projects in Deep Learning (CNN, RNN), data analysis, and production-ready system development. Expected graduation: Winter Semester 2027.',
    },
    {
      year: '2021 - 2023',
      title: 'IT Support & Networking Engineer (Part-Time)',
      company: 'Aptiv Wuppertal',
      description: 'Provided comprehensive IT support and network infrastructure management for automotive engineering teams. Managed ticketing systems and resolved technical issues with 95%+ first-contact resolution rate. Configured and maintained network systems, performed system administration tasks, and supported 50+ workstations. Collaborated with international teams across multiple time zones. Developed expertise in troubleshooting, network diagnostics, and IT infrastructure while balancing studies. Gained practical experience in IT operations, user support, and technical documentation.',
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
              I'm a Computer Science student at THM Gießen passionate about building robust, scalable systems. My core stack is Java/Spring Boot on the backend and React/Next.js on the frontend, complemented by deep expertise in AI/ML with PyTorch and TensorFlow. I thrive at the intersection of engineering, data science, and product thinking.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey started in IT support at Aptiv, where I built strong problem-solving and infrastructure skills. This foundation drove me into full-stack development and Deep Learning — building CNN models achieving 93.4% accuracy, music generation systems with LSTMs, and production-grade Spring Boot microservices with PostgreSQL.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              As Co-Founder of Adaptify Loop, I lead product strategy and technical architecture for a FinTech/SaaS platform. I've shipped 15+ features, coordinated engineering teams, and launched an MVP in 3 months. I bring an entrepreneurial mindset to every project — always thinking about scalability, user impact, and business value. Fluent in German (C1) and English (C1).
            </p>

            <div className="pt-4">
              <a
                href="/CV_Amanullah.pdf"
                download="CV_Amanullah.pdf"
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
              {projects.length}+
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Production Projects
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">Languages</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Bangla</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Native</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">German</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">C1</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">English</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">C1</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Hindi</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Proficient</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
