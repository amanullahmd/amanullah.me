export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: 'entrepreneurial' | 'fullstack' | 'ai-ml'
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  results: string[]
  problemStatement: string
  solution: string
  lessonsLearned?: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'adaptify-loop',
    title: 'Adaptify Loop',
    description: 'FinTech/SaaS platform for financial management and automation',
    longDescription:
      'Co-founded and developed a production-ready FinTech/SaaS platform with modern tech stack. Led full-stack development, team coordination, and technical decision-making.',
    category: 'entrepreneurial',
    technologies: ['Next.js', 'React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'AWS', 'Docker'],
    image: '/images/adaptify-loop.png',
    liveUrl: 'https://www.adaptifyloop.com',
    githubUrl: 'https://github.com/amanullah/adaptify-loop',
    results: [
      'Launched MVP in 3 months',
      'Coordinated engineering team',
      'Production-ready system with 99.9% uptime',
      'Scaled to handle 10k+ transactions/day',
    ],
    problemStatement:
      'Need for accessible, automated financial management tools for businesses',
    solution:
      'Built scalable SaaS platform with modern tech stack, real-time processing, and intuitive UI',
    featured: true,
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    description: 'Full-stack application for real-time inventory tracking and management',
    longDescription:
      'Developed a comprehensive inventory management system with real-time tracking, user authentication, and reporting dashboard. Backend built with Spring Boot, frontend with Next.js.',
    category: 'fullstack',
    technologies: ['Next.js', 'React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs'],
    image: '/images/inventory-system.png',
    githubUrl: 'https://github.com/amanullah/inventory-management',
    results: [
      'Real-time inventory tracking',
      'Reduced manual data entry by 80%',
      'Automated reporting and alerts',
      'Multi-user support with role-based access',
    ],
    problemStatement:
      'Manual inventory management is time-consuming and error-prone',
    solution:
      'Built automated system with real-time updates, user authentication, and comprehensive reporting',
    featured: true,
  },
  {
    id: 'cnn-image-classifier',
    title: 'CNN Image Classifier for Household Items',
    description: 'Deep learning model achieving 93.4% accuracy in object classification',
    longDescription:
      'Implemented Convolutional Neural Network with Transfer Learning (ResNet18) for classifying household items. Achieved 93.4% accuracy with comprehensive data augmentation and evaluation.',
    category: 'ai-ml',
    technologies: ['Python', 'PyTorch', 'torchvision', 'scikit-learn', 'OpenCV', 'TensorBoard'],
    image: '/images/cnn-classifier.png',
    liveUrl: 'https://cnn-object-production.up.railway.app/',
    githubUrl: 'https://github.com/amanullahmd/cnn-object',
    results: [
      '93.4% overall accuracy',
      'Kochtöpfe: 98.4% accuracy',
      'Tassen: 96.8% accuracy',
      'Comprehensive confusion matrix analysis',
    ],
    problemStatement:
      'Need for accurate automated classification of household items',
    solution:
      'Implemented CNN with Transfer Learning, data augmentation, and rigorous evaluation',
    featured: true,
  },
  {
    id: 'music-generation-rnn',
    title: 'Music Generation with RNNs',
    description: 'LSTM-based model for generating coherent music sequences',
    longDescription:
      'Developed Recurrent Neural Network (LSTM) for sequence generation trained on IrishMAN dataset. Implemented tokenization, sequence modeling, and TensorBoard visualization.',
    category: 'ai-ml',
    technologies: ['Python', 'PyTorch', 'LSTM', 'Hugging Face', 'TensorBoard'],
    image: '/images/music-generation.png',
    githubUrl: 'https://github.com/amanullah/music-generation-rnn',
    results: [
      'Coherent sequence generation',
      'Top-1 and Top-5 accuracy metrics',
      'TensorBoard visualization',
      'Trained on 10k+ music sequences',
    ],
    problemStatement:
      'Generating realistic music sequences requires understanding long-term dependencies',
    solution:
      'Implemented LSTM architecture with proper tokenization and sequence modeling',
    featured: false,
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboards for data quality metrics and business intelligence',
    longDescription:
      'Developed interactive dashboards using Apache Superset for real-time visualization of data quality metrics, KPIs, and business intelligence insights.',
    category: 'fullstack',
    technologies: ['Apache Superset', 'SQL', 'PostgreSQL', 'Python', 'Data Visualization'],
    image: '/images/data-dashboard.png',
    results: [
      'Real-time metric monitoring',
      'Automated insights generation',
      'Reduced reporting time by 70%',
      'Executive-level dashboards',
    ],
    problemStatement:
      'Manual data analysis and reporting is time-consuming and lacks real-time insights',
    solution:
      'Built automated dashboard system with real-time data processing and visualization',
    featured: false,
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects
  return projects.filter((project) => project.category === category)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
