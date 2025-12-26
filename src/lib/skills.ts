export interface Skill {
  name: string
  category: 'technical' | 'product' | 'leadership'
  proficiency: 'expert' | 'advanced' | 'intermediate'
}

export const skills: Skill[] = [
  // Deep Learning & AI
  { name: 'PyTorch', category: 'technical', proficiency: 'expert' },
  { name: 'TensorFlow', category: 'technical', proficiency: 'advanced' },
  { name: 'CNN (ResNet18)', category: 'technical', proficiency: 'expert' },
  { name: 'RNN/LSTM', category: 'technical', proficiency: 'advanced' },
  { name: 'scikit-learn', category: 'technical', proficiency: 'advanced' },
  { name: 'Hugging Face', category: 'technical', proficiency: 'advanced' },
  { name: 'OpenCV', category: 'technical', proficiency: 'advanced' },

  // Backend Development
  { name: 'Python', category: 'technical', proficiency: 'expert' },
  { name: 'FastAPI', category: 'technical', proficiency: 'advanced' },
  { name: 'Spring Boot', category: 'technical', proficiency: 'advanced' },
  { name: 'Node.js', category: 'technical', proficiency: 'advanced' },
  { name: 'REST APIs', category: 'technical', proficiency: 'expert' },
  { name: 'Microservices', category: 'technical', proficiency: 'advanced' },

  // Frontend Development
  { name: 'React', category: 'technical', proficiency: 'expert' },
  { name: 'Next.js', category: 'technical', proficiency: 'expert' },
  { name: 'TypeScript', category: 'technical', proficiency: 'expert' },
  { name: 'JavaScript', category: 'technical', proficiency: 'expert' },
  { name: 'Tailwind CSS', category: 'technical', proficiency: 'expert' },
  { name: 'HTML/CSS', category: 'technical', proficiency: 'expert' },

  // Data & Databases
  { name: 'SQL', category: 'technical', proficiency: 'expert' },
  { name: 'PostgreSQL', category: 'technical', proficiency: 'advanced' },
  { name: 'MySQL', category: 'technical', proficiency: 'advanced' },
  { name: 'MongoDB', category: 'technical', proficiency: 'intermediate' },
  { name: 'ETL Processes', category: 'technical', proficiency: 'advanced' },
  { name: 'Data Quality', category: 'technical', proficiency: 'expert' },

  // Cloud & DevOps
  { name: 'AWS (EC2, S3, Lambda, RDS)', category: 'technical', proficiency: 'advanced' },
  { name: 'Docker', category: 'technical', proficiency: 'advanced' },
  { name: 'Kubernetes', category: 'technical', proficiency: 'intermediate' },
  { name: 'CI/CD Pipelines', category: 'technical', proficiency: 'advanced' },
  { name: 'Linux/Bash', category: 'technical', proficiency: 'advanced' },

  // Tools & Platforms
  { name: 'Git/GitHub', category: 'technical', proficiency: 'expert' },
  { name: 'Jupyter Notebooks', category: 'technical', proficiency: 'expert' },
  { name: 'TensorBoard', category: 'technical', proficiency: 'advanced' },
  { name: 'Apache Superset', category: 'technical', proficiency: 'advanced' },
  { name: 'Java', category: 'technical', proficiency: 'advanced' },
  { name: 'C', category: 'technical', proficiency: 'intermediate' },

  // Product & Leadership
  { name: 'Product Strategy', category: 'product', proficiency: 'advanced' },
  { name: 'Agile Methodologies', category: 'product', proficiency: 'expert' },
  { name: 'Project Management', category: 'product', proficiency: 'advanced' },
  { name: 'Entrepreneurship', category: 'product', proficiency: 'advanced' },
  { name: 'Technical Decision-Making', category: 'product', proficiency: 'expert' },

  // Leadership & Soft Skills
  { name: 'Team Leadership', category: 'leadership', proficiency: 'advanced' },
  { name: 'Communication', category: 'leadership', proficiency: 'expert' },
  { name: 'Problem Solving', category: 'leadership', proficiency: 'expert' },
  { name: 'Attention to Detail', category: 'leadership', proficiency: 'expert' },
  { name: 'Teamwork', category: 'leadership', proficiency: 'expert' },
]

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category)
}

export function getProficiencyPercentage(proficiency: string): number {
  switch (proficiency) {
    case 'expert':
      return 95
    case 'advanced':
      return 80
    case 'intermediate':
      return 60
    default:
      return 40
  }
}
