'use client'

import { motion } from 'framer-motion'

export default function ProductLeadership() {
  const productExamples = [
    {
      title: 'Feature Prioritization',
      description:
        'Evaluated market demand, technical feasibility, and user feedback to prioritize features for Adaptify Loop. Balanced quick wins with long-term strategic goals.',
      metric: '15+ features shipped',
    },
    {
      title: 'MVP Design & Launch',
      description:
        'Designed and launched MVP in 3 months with core functionality. Focused on essential features to validate product-market fit before scaling.',
      metric: '3-month timeline',
    },
    {
      title: 'Trade-off Analysis',
      description:
        'Made critical technical decisions balancing performance, scalability, and time-to-market. Chose Spring Boot + PostgreSQL for reliability and scalability.',
      metric: '99.9% uptime',
    },
    {
      title: 'Stakeholder Communication',
      description:
        'Coordinated with team members, investors, and users to align on product vision and roadmap. Translated technical constraints into business language.',
      metric: '5+ team members',
    },
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
    <section
      id="product-leadership"
      className="py-20 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Product & Leadership</h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            I work at the intersection of engineering and product—defining requirements, prioritizing
            features, and ensuring technical decisions align with user and business goals. This rare
            combination of{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              engineering + product + startup experience
            </span>{' '}
            enables me to build products that are both technically sound and market-driven.
          </p>
        </motion.div>

        {/* Product Examples */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {productExamples.map((example, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-orange-500 text-white">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {example.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                    {example.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                    {example.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Adaptify Loop Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Adaptify Loop: Product Leadership in Action
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Co-Founder Role
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Defined product vision and roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Led technical architecture decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Coordinated engineering team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>Managed stakeholder relationships</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Key Metrics & Outcomes
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 dark:text-orange-400 font-bold">•</span>
                  <span>MVP launched in 3 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 dark:text-orange-400 font-bold">•</span>
                  <span>5+ team members coordinated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 dark:text-orange-400 font-bold">•</span>
                  <span>15+ features shipped</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 dark:text-orange-400 font-bold">•</span>
                  <span>99.9% uptime achieved</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Unique Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
              Engineering
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Full-stack development expertise with production-ready systems
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
              Product
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Strategic thinking with user-centric design and market validation
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
              Startup
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Real-world experience building and scaling from zero to production
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
