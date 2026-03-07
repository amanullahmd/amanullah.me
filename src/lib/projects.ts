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
  githubUrls?: { label: string; url: string }[]
  results: string[]
  problemStatement: string
  solution: string
  lessonsLearned?: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'paylio',
    title: 'Paylio - Invoice & Payment Platform for Freelancers',
    description: 'FinTech invoice creation and payment platform designed specifically for freelancers',
    longDescription:
      'Led development of Paylio, a specialized FinTech platform built as part of Adaptify Loop ecosystem. Conducted comprehensive idea validation testing, architected the system design, and designed the database schema. Managed team coordination through Jira ticket creation and assignment, monitored development progress, and collaborated with the team on implementation. Paylio streamlines invoice creation, payment processing, and financial management for freelancers with secure authentication and real-time processing.',
    category: 'entrepreneurial',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Payment APIs'],
    image: '/images/paylio.png',
    liveUrl: 'https://www.paylio.io',
    results: [
      'Conducted idea validation testing and market research',
      'Designed scalable system architecture and database schema',
      'Implemented secure authentication with Supabase',
      'Coordinated team through Jira ticket management and monitoring',
      'Simplified invoice creation for freelancers',
      'Real-time payment tracking and notifications',
      'Multi-currency support for international payments',
      'Automated payment reminders and follow-ups',
      'Comprehensive financial dashboard and reporting',
    ],
    problemStatement:
      'Freelancers struggle with manual invoice creation, payment tracking, and financial management across multiple clients and currencies. Need for secure, scalable platform with proper team coordination and monitoring.',
    solution:
      'Led end-to-end development: validated market opportunity, designed scalable architecture with Supabase authentication, coordinated team through Jira, and built intuitive platform for invoice generation, automated payment processing, and comprehensive financial analytics tailored for freelancer workflows',
    lessonsLearned: [
      'Importance of thorough idea validation before development',
      'Effective team coordination through proper project management tools',
      'Supabase provides excellent authentication and real-time capabilities for FinTech applications',
      'Database design is critical for scalability in payment platforms',
    ],
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
    githubUrls: [
      { label: 'Backend', url: 'https://github.com/amanullahmd/inventory-backend' },
      { label: 'Frontend', url: 'https://github.com/amanullahmd/inventory-frontend' },
    ],
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
    title: 'CNN Image Classifier for Household Objects',
    description: 'Deep learning model achieving 93.4% accuracy in classifying 4 household object types',
    longDescription:
      'Implemented Convolutional Neural Network with Transfer Learning (ResNet18) for classifying four household objects: cooking pots, cups, knives, and pens. Achieved 93.4% overall accuracy with comprehensive data augmentation, rigorous evaluation, and detailed per-class performance analysis. The model demonstrates particularly strong performance on cooking pots (98.4%) and cups (96.8%).',
    category: 'ai-ml',
    technologies: ['Python', 'PyTorch', 'torchvision', 'scikit-learn', 'OpenCV', 'TensorBoard'],
    image: '/images/cnn-classifier.png',
    liveUrl: 'https://cnn-object-production.up.railway.app/',
    githubUrl: 'https://github.com/amanullahmd/cnn-object',
    results: [
      'Overall Test Accuracy: 93.4%',
      'Cooking Pot: 98.4% accuracy',
      'Cup: 96.8% accuracy',
      'Pen: 94.6% accuracy',
      'Knife: 93.1% accuracy',
      'Comprehensive confusion matrix analysis',
      'Robust performance across all object classes',
    ],
    problemStatement:
      'Need for accurate automated classification of household objects for inventory management and object recognition applications',
    solution:
      'Implemented CNN with Transfer Learning (ResNet18), data augmentation, class-specific optimization, and rigorous evaluation metrics',
    lessonsLearned: [
      'Transfer learning significantly improves accuracy on limited datasets',
      'Data augmentation is crucial for robust model generalization',
      'Per-class performance analysis reveals model strengths and weaknesses',
      'ResNet18 provides excellent balance between accuracy and computational efficiency',
    ],
    featured: true,
  },
  {
    id: 'music-rnn',
    title: 'Music Generation with RNNs',
    description: 'Deep learning system generating Irish folk music using 2-Layer LSTM trained on 214K tunes',
    longDescription:
      'Implemented a music generation system using Recurrent Neural Networks (RNNs) trained on the IrishMAN dataset containing 214,122 Irish folk tunes in ABC notation format. The model learns to generate new music by predicting the next character in a sequence, similar to language models but applied to music. Achieved 74.91% top-1 accuracy and 95.40% top-5 accuracy. Built a professional Flask web application with gradient-based UI, real-time generation, ABC notation display, and generation history tracking. The system successfully generates syntactically valid ABC notation tunes that follow musical conventions learned from the training data.',
    category: 'ai-ml',
    technologies: ['Python', 'PyTorch', 'Flask', 'LSTM', 'NumPy', 'JavaScript', 'HTML/CSS'],
    image: '/images/music-rnn.png',
    githubUrl: 'https://github.com/amanullahmd/music-rnn',
    results: [
      'Top-1 Accuracy: 74.91%',
      'Top-5 Accuracy: 95.40%',
      'Model Parameters: 959,715',
      'Training Loss: 0.7918',
      'Validation Loss: 0.7729',
      'Trained on 214,122 Irish folk tunes',
      'Generates syntactically valid ABC notation',
      'Professional web interface with real-time generation',
      'Temperature control for creativity adjustment',
      'Generation history tracking and ABC download',
    ],
    problemStatement:
      'Music generation requires understanding complex sequential patterns and musical conventions. Traditional approaches struggle with variable-length sequences and maintaining musical coherence.',
    solution:
      'Implemented 2-Layer LSTM with 256 hidden units and 128-dimensional embeddings, trained on 214K Irish folk tunes. Applied gradient clipping for stability, dropout for regularization, and learning rate scheduling. Built Flask web application with real-time generation, temperature control, and ABC notation validation.',
    lessonsLearned: [
      'RNNs effectively learn sequential patterns in structured formats like ABC notation',
      'LSTM cells handle long sequences better than vanilla RNNs with proper gradient management',
      'Character-level modeling works well for music generation in structured formats',
      'GPU acceleration is essential for training on large-scale datasets',
      'Proper regularization (dropout, gradient clipping) prevents overfitting while maintaining generalization',
      'Temperature control provides intuitive control over generation creativity vs. determinism',
    ],
    featured: true,
  },
  {
    id: 'event-management',
    title: 'Event Management Platform',
    description: 'Full-stack event management system with Spring Boot backend, Next.js frontend, and PostgreSQL database',
    longDescription:
      'Developed a comprehensive event management platform enabling users to create, manage, and attend events. Built with Spring Boot for robust backend APIs, Next.js for responsive frontend, and PostgreSQL for reliable data persistence. Features include event creation and management, user authentication, event discovery, ticket booking, and real-time notifications. The platform demonstrates full-stack development expertise with proper separation of concerns, RESTful API design, and modern frontend practices.',
    category: 'fullstack',
    technologies: ['Spring Boot', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs', 'JWT Authentication'],
    image: '/images/event-management.png',
    githubUrls: [
      { label: 'Backend', url: 'https://github.com/amanullahmd/backend-event-management' },
      { label: 'Frontend', url: 'https://github.com/amanullahmd/event-management' },
    ],
    results: [
      'Complete event lifecycle management (create, update, delete, publish)',
      'User authentication and authorization with JWT tokens',
      'Event discovery and search functionality',
      'Ticket booking and reservation system',
      'Real-time event notifications',
      'Responsive design for mobile and desktop',
      'RESTful API with comprehensive error handling',
      'Database optimization for scalability',
    ],
    problemStatement:
      'Event organizers need a centralized platform to manage events, handle registrations, and communicate with attendees. Existing solutions are often complex or lack integration between backend and frontend.',
    solution:
      'Built full-stack platform with Spring Boot providing robust backend APIs, Next.js delivering responsive user interface, and PostgreSQL ensuring reliable data management. Implemented JWT authentication, RESTful endpoints, and real-time features for seamless event management.',
    lessonsLearned: [
      'Spring Boot provides excellent framework for building scalable REST APIs',
      'Next.js enables rapid development of responsive, modern web applications',
      'Proper API design and documentation are crucial for frontend-backend integration',
      'Database schema design impacts application performance and scalability',
      'JWT authentication provides secure, stateless authentication mechanism',
    ],
    featured: true,
  },
  {
    id: 'data-visualization',
    title: 'E-Commerce Data Visualization Dashboard',
    description: 'Apache Superset-based analytics platform for Amazon sales data visualization and business intelligence',
    longDescription:
      'Developed comprehensive data visualization dashboards using Apache Superset to analyze e-commerce sales data. Cloned and customized Apache Superset, integrated Amazon sales dataset from Kaggle, and created interactive dashboards for real-time business intelligence. Implemented multiple visualization types including time-series analysis, sales trends, regional performance metrics, and product category insights. Demonstrated expertise in data exploration, dashboard design, and translating raw data into actionable business insights.',
    category: 'fullstack',
    technologies: ['Apache Superset', 'SQL', 'PostgreSQL', 'Python', 'Data Visualization', 'Kaggle Datasets'],
    image: '/images/data-dashboard.png',
    results: [
      'Cloned and customized Apache Superset for e-commerce analytics',
      'Integrated Amazon sales dataset from Kaggle (10k+ records)',
      'Created interactive dashboards with multiple visualization types',
      'Real-time sales trend analysis and forecasting',
      'Regional performance metrics and geographic insights',
      'Product category analysis and revenue breakdown',
      'Reduced reporting time by 70% compared to manual analysis',
      'Executive-level dashboards for stakeholder reporting',
    ],
    problemStatement:
      'E-commerce businesses need real-time insights from sales data to make informed decisions about inventory, pricing, and marketing strategies. Manual data analysis is time-consuming and lacks interactive exploration capabilities.',
    solution:
      'Built automated dashboard system using Apache Superset with Amazon sales data, enabling real-time data processing, interactive visualizations, and drill-down capabilities for comprehensive business intelligence',
    lessonsLearned: [
      'Apache Superset provides powerful visualization and exploration capabilities for business intelligence',
      'Proper data modeling and SQL optimization are critical for dashboard performance',
      'Interactive dashboards enable faster decision-making compared to static reports',
      'Data quality and cleaning are essential for accurate insights',
      'User-friendly dashboard design improves adoption and business value',
    ],
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
