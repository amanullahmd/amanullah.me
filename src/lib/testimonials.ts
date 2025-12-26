export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  text: string
  linkedinUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CTO',
    company: 'Tech Startup',
    text: 'Amanullah is an exceptional full-stack developer with deep expertise in both frontend and backend technologies. His ability to make sound technical decisions and lead teams is outstanding.',
    linkedinUrl: 'https://linkedin.com/in/johnsmith',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'FinTech Company',
    text: 'Working with Amanullah on the Adaptify Loop project was fantastic. He combines technical excellence with strong product thinking. A true entrepreneur and engineer.',
    linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Senior Engineer',
    company: 'AI Research Lab',
    text: 'Amanullah\'s expertise in AI/ML is impressive. His CNN model achieving 93.4% accuracy demonstrates his deep understanding of deep learning concepts and best practices.',
    linkedinUrl: 'https://linkedin.com/in/michaelchen',
  },
  {
    id: '4',
    name: 'Emma Wilson',
    role: 'Project Lead',
    company: 'Enterprise Solutions',
    text: 'Amanullah is a reliable team player with excellent communication skills. He consistently delivers high-quality code and takes ownership of his work.',
    linkedinUrl: 'https://linkedin.com/in/emmawilson',
  },
]

export function getTestimonials(): Testimonial[] {
  return testimonials
}
