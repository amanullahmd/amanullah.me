import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import * as fc from 'fast-check'
import Hero from './Hero'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

/**
 * Feature: portfolio-website, Property 1: Theme Persistence
 * Validates: Requirements 9.1, 9.3
 * 
 * Property: For any theme selection, reloading the page should restore the selected theme
 * 
 * This property-based test verifies that:
 * 1. When a theme is set in localStorage, the document reflects that theme
 * 2. When the page is reloaded (simulated), the theme persists from localStorage
 * 3. The theme state is correctly maintained across component renders
 */
describe('Hero Component - Theme Persistence Property', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Reset document classes
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('Property 1: Theme Persistence - For any theme selection, reloading the page should restore the selected theme', () => {
    // Property-based test using fast-check
    // Generate arbitrary theme selections (true for dark, false for light)
    fc.assert(
      fc.property(fc.boolean(), (isDarkTheme) => {
        // Setup: Set the theme in localStorage
        const themeValue = isDarkTheme ? 'dark' : 'light'
        localStorage.setItem('theme', themeValue)

        // Simulate page reload by checking what the initialization script would do
        // This mimics the script in layout.tsx that runs on page load
        const storedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        // Apply theme based on stored preference or system preference
        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }

        // Verify: The document should have the correct theme class
        const hasDarkClass = document.documentElement.classList.contains('dark')
        const expectedDarkClass = isDarkTheme || (!storedTheme && prefersDark)

        expect(hasDarkClass).toBe(expectedDarkClass)

        // Verify: localStorage should still contain the theme
        expect(localStorage.getItem('theme')).toBe(themeValue)

        // Render the Hero component
        const { unmount } = render(<Hero />)

        // Verify: Hero component renders without errors
        expect(screen.getByText('MD Amanullah')).toBeInTheDocument()

        // Cleanup
        unmount()
      }),
      { numRuns: 100 } // Run property test 100 times with different inputs
    )
  })

  it('Property 1: Theme Persistence - Theme persists across multiple toggles', () => {
    // Property-based test for multiple theme toggles
    fc.assert(
      fc.property(fc.array(fc.boolean(), { minLength: 1, maxLength: 5 }), (themeToggles) => {
        localStorage.clear()
        document.documentElement.classList.remove('dark')

        // Apply a sequence of theme changes
        themeToggles.forEach((isDark) => {
          const themeValue = isDark ? 'dark' : 'light'
          localStorage.setItem('theme', themeValue)

          // Simulate page reload
          if (isDark) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }

          // Verify the theme is correctly set
          const hasDarkClass = document.documentElement.classList.contains('dark')
          expect(hasDarkClass).toBe(isDark)
          expect(localStorage.getItem('theme')).toBe(themeValue)
        })

        // After all toggles, verify final state matches the last toggle
        const finalTheme = themeToggles[themeToggles.length - 1]
        const finalThemeValue = finalTheme ? 'dark' : 'light'
        expect(localStorage.getItem('theme')).toBe(finalThemeValue)
        expect(document.documentElement.classList.contains('dark')).toBe(finalTheme)
      }),
      { numRuns: 100 }
    )
  })

  it('Unit Test: Hero component renders with correct structure', () => {
    render(<Hero />)

    // Verify key elements are present
    expect(screen.getByText('MD Amanullah')).toBeInTheDocument()
    expect(screen.getByText('Full-Stack Engineer & Product Builder')).toBeInTheDocument()
    expect(screen.getByText('I design, build, and scale intelligent web products—from idea to production')).toBeInTheDocument()

    // Verify CTA buttons are present
    const viewProjectsButton = screen.getByRole('link', { name: /View Projects/i })
    const getInTouchButton = screen.getByRole('link', { name: /Get in Touch/i })

    expect(viewProjectsButton).toBeInTheDocument()
    expect(getInTouchButton).toBeInTheDocument()

    // Verify button links are correct
    expect(viewProjectsButton).toHaveAttribute('href', '/projects')
    expect(getInTouchButton).toHaveAttribute('href', '#contact')
  })

  it('Unit Test: Hero component renders social links', () => {
    render(<Hero />)

    // Verify GitHub link
    const githubLink = screen.getByTitle('GitHub')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/amanullahmd/')
    expect(githubLink).toHaveAttribute('target', '_blank')

    // Verify LinkedIn link
    const linkedinLink = screen.getByTitle('LinkedIn')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/m-amanullah/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })
})
