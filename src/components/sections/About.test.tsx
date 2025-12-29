import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})) as any

describe('About Component', () => {
  beforeEach(() => {
    // Clear any previous renders
  })

  describe('Unit Tests: Content Rendering', () => {
    it('should render the About section with correct heading', () => {
      render(<About />)
      
      const heading = screen.getByText('About Me')
      expect(heading).toBeInTheDocument()
      expect(heading.tagName).toBe('H2')
    })

    it('should render all professional narrative paragraphs', () => {
      render(<About />)
      
      // Check for key narrative content
      expect(screen.getByText(/Computer Science student at THM Gießen/i)).toBeInTheDocument()
      expect(screen.getByText(/full-stack development, AI\/ML, and product management/i)).toBeInTheDocument()
      expect(screen.getByText(/journey began in IT support at Aptiv/i)).toBeInTheDocument()
      expect(screen.getByText(/co-founding Adaptify Loop/i)).toBeInTheDocument()
    })

    it('should render all timeline entries with correct information', () => {
      render(<About />)
      
      // Check for Adaptify Loop entry
      expect(screen.getByText('2024 - Present')).toBeInTheDocument()
      expect(screen.getByText('Project Development Manager & Developer')).toBeInTheDocument()
      expect(screen.getByText('Adaptify Loop (Co-Founder)')).toBeInTheDocument()
      expect(screen.getByText(/Co-Founder and Lead Developer of a FinTech\/SaaS platform/i)).toBeInTheDocument()
      
      // Check for Education entry
      expect(screen.getByText('2023 - Present')).toBeInTheDocument()
      expect(screen.getByText('Bachelor of Computer Science (Final Year)')).toBeInTheDocument()
      expect(screen.getByText(/University of Applied Sciences Mittelhessen \(THM\), Gießen/i)).toBeInTheDocument()
      
      // Check for Aptiv entry
      expect(screen.getByText('2021 - 2023')).toBeInTheDocument()
      expect(screen.getByText('IT-Support & Data Quality Engineer')).toBeInTheDocument()
      expect(screen.getByText('Aptiv Wuppertal')).toBeInTheDocument()
    })

    it('should render achievement metrics section', () => {
      render(<About />)
      
      // Check for key metrics
      expect(screen.getByText('93.4%')).toBeInTheDocument()
      expect(screen.getByText('CNN Model Accuracy')).toBeInTheDocument()
      
      expect(screen.getByText('5+')).toBeInTheDocument()
      expect(screen.getByText('Production Projects')).toBeInTheDocument()
      
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('Languages (C1)')).toBeInTheDocument()
    })

    it('should render timeline with correct structure and styling', () => {
      render(<About />)
      
      // Verify timeline items are rendered
      const timelineItems = screen.getAllByText(/2024 - Present|2023 - Present|2021 - 2023/)
      expect(timelineItems.length).toBeGreaterThan(0)
      
      // Verify timeline has visual elements (border-left styling)
      const section = screen.getByText('About Me').closest('section')
      expect(section).toBeInTheDocument()
    })
  })

  describe('Unit Tests: CV Download Link Functionality', () => {
    it('should render CV download link', () => {
      render(<About />)
      
      const downloadLink = screen.getByRole('link', { name: /Download CV/i })
      expect(downloadLink).toBeInTheDocument()
    })

    it('should have correct href attribute for CV download', () => {
      render(<About />)
      
      const downloadLink = screen.getByRole('link', { name: /Download CV/i })
      expect(downloadLink).toHaveAttribute('href', '/resume.pdf')
    })

    it('should have download attribute on CV link', () => {
      render(<About />)
      
      const downloadLink = screen.getByRole('link', { name: /Download CV/i })
      expect(downloadLink).toHaveAttribute('download')
    })

    it('should have correct styling classes on CV download button', () => {
      render(<About />)
      
      const downloadLink = screen.getByRole('link', { name: /Download CV/i })
      expect(downloadLink).toHaveClass('btn-primary')
    })

    it('should render CV link in the correct section (left column)', () => {
      render(<About />)
      
      const downloadLink = screen.getByRole('link', { name: /Download CV/i })
      
      // Verify the link is in the document
      expect(downloadLink).toBeInTheDocument()
      
      // Verify it's positioned after the narrative content
      const narrativeText = screen.getByText(/Computer Science student at THM Gießen/i)
      expect(narrativeText).toBeInTheDocument()
    })
  })

  describe('Unit Tests: Accessibility', () => {
    it('should have proper semantic structure with section element', () => {
      render(<About />)
      
      const section = screen.getByText('About Me').closest('section')
      expect(section).toHaveAttribute('id', 'about')
    })

    it('should have proper heading hierarchy', () => {
      render(<About />)
      
      const heading = screen.getByText('About Me')
      expect(heading.tagName).toBe('H2')
      
      const subheadings = screen.getAllByText(/Project Development Manager & Developer|Bachelor of Computer Science|IT-Support & Data Quality Engineer/)
      subheadings.forEach(heading => {
        expect(heading.tagName).toBe('H3')
      })
    })

    it('should have descriptive text for all timeline entries', () => {
      render(<About />)
      
      // Verify descriptions are present for each timeline item
      expect(screen.getByText(/Co-Founder and Lead Developer of a FinTech\/SaaS platform/i)).toBeInTheDocument()
      expect(screen.getByText(/Advanced studies in computer science with specialization in AI\/ML/i)).toBeInTheDocument()
      expect(screen.getByText(/Performed data quality assurance and error analysis/i)).toBeInTheDocument()
    })
  })

  describe('Unit Tests: Dark Mode Support', () => {
    it('should have dark mode classes applied to section', () => {
      render(<About />)
      
      const section = screen.getByText('About Me').closest('section')
      expect(section).toHaveClass('dark:bg-slate-900')
    })

    it('should have dark mode classes on text elements', () => {
      render(<About />)
      
      const paragraphs = screen.getAllByText(/Computer Science student at THM Gießen|journey began in IT support|co-founding Adaptify Loop/)
      paragraphs.forEach(paragraph => {
        expect(paragraph).toHaveClass('dark:text-slate-300')
      })
    })
  })
})
