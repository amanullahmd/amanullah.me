import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { projects, getProjectsByCategory, Project } from './projects'

/**
 * Feature: portfolio-website, Property 3: Project Filtering Consistency
 * Validates: Requirements 4.1, 4.5
 *
 * Property: For any category filter, only projects in that category should be displayed
 *
 * This property-based test verifies that:
 * 1. When filtering by a specific category, all returned projects belong to that category
 * 2. When filtering by 'all', all projects are returned
 * 3. The filtering function is consistent across multiple runs with the same input
 * 4. No projects are lost or duplicated during filtering
 */
describe('Project Filtering - Property-Based Tests', () => {
  // Define valid categories
  const validCategories = ['all', 'entrepreneurial', 'fullstack', 'ai-ml']

  it('Property 3: Project Filtering Consistency - For any category filter, only projects in that category should be displayed', () => {
    // Property-based test using fast-check
    // Generate arbitrary category selections from valid categories
    fc.assert(
      fc.property(fc.constantFrom(...validCategories), (category) => {
        // Execute: Filter projects by category
        const filteredProjects = getProjectsByCategory(category)

        // Verify: All returned projects should be valid Project objects
        expect(Array.isArray(filteredProjects)).toBe(true)
        filteredProjects.forEach((project) => {
          expect(project).toHaveProperty('id')
          expect(project).toHaveProperty('title')
          expect(project).toHaveProperty('category')
        })

        // Verify: If category is 'all', all projects should be returned
        if (category === 'all') {
          expect(filteredProjects.length).toBe(projects.length)
          // Check that all original projects are included
          projects.forEach((originalProject) => {
            expect(filteredProjects).toContainEqual(originalProject)
          })
        } else {
          // Verify: All filtered projects should belong to the specified category
          filteredProjects.forEach((project) => {
            expect(project.category).toBe(category)
          })

          // Verify: No projects from other categories should be included
          const otherCategoryProjects = projects.filter((p) => p.category !== category)
          otherCategoryProjects.forEach((otherProject) => {
            expect(filteredProjects).not.toContainEqual(otherProject)
          })
        }
      }),
      { numRuns: 20 } // Run property test 20 times with different inputs
    )
  })

  it('Property 3: Project Filtering Consistency - Filtering is idempotent', () => {
    // Property-based test: filtering twice should produce the same result as filtering once
    fc.assert(
      fc.property(fc.constantFrom(...validCategories), (category) => {
        // Execute: Filter projects once
        const filteredOnce = getProjectsByCategory(category)

        // Execute: Filter the already-filtered results again
        const filteredTwice = getProjectsByCategory(category)

        // Verify: Both results should be identical
        expect(filteredOnce.length).toBe(filteredTwice.length)
        expect(filteredOnce).toEqual(filteredTwice)

        // Verify: The order should be consistent
        filteredOnce.forEach((project, index) => {
          expect(project.id).toBe(filteredTwice[index].id)
        })
      }),
      { numRuns: 20 }
    )
  })

  it('Property 3: Project Filtering Consistency - No projects are lost or duplicated', () => {
    // Property-based test: verify that filtering doesn't lose or duplicate projects
    fc.assert(
      fc.property(fc.constantFrom(...validCategories), (category) => {
        // Execute: Filter projects by category
        const filteredProjects = getProjectsByCategory(category)

        // Verify: No duplicate projects in results
        const projectIds = filteredProjects.map((p) => p.id)
        const uniqueIds = new Set(projectIds)
        expect(projectIds.length).toBe(uniqueIds.size)

        // Verify: All filtered projects exist in the original projects array
        filteredProjects.forEach((filteredProject) => {
          const originalProject = projects.find((p) => p.id === filteredProject.id)
          expect(originalProject).toBeDefined()
          expect(originalProject).toEqual(filteredProject)
        })

        // Verify: If category is not 'all', the count should match the expected category count
        if (category !== 'all') {
          const expectedCount = projects.filter((p) => p.category === category).length
          expect(filteredProjects.length).toBe(expectedCount)
        }
      }),
      { numRuns: 20 }
    )
  })

  // Unit tests for specific examples
  describe('Unit Tests - Project Filtering Examples', () => {
    it('Unit Test: Filtering by "all" returns all projects', () => {
      const filtered = getProjectsByCategory('all')
      expect(filtered.length).toBe(projects.length)
      expect(filtered).toEqual(projects)
    })

    it('Unit Test: Filtering by "entrepreneurial" returns only entrepreneurial projects', () => {
      const filtered = getProjectsByCategory('entrepreneurial')
      expect(filtered.length).toBeGreaterThan(0)
      filtered.forEach((project) => {
        expect(project.category).toBe('entrepreneurial')
      })
    })

    it('Unit Test: Filtering by "fullstack" returns only fullstack projects', () => {
      const filtered = getProjectsByCategory('fullstack')
      expect(filtered.length).toBeGreaterThan(0)
      filtered.forEach((project) => {
        expect(project.category).toBe('fullstack')
      })
    })

    it('Unit Test: Filtering by "ai-ml" returns only ai-ml projects', () => {
      const filtered = getProjectsByCategory('ai-ml')
      expect(filtered.length).toBeGreaterThan(0)
      filtered.forEach((project) => {
        expect(project.category).toBe('ai-ml')
      })
    })

    it('Unit Test: Filtering returns projects with all required fields', () => {
      const filtered = getProjectsByCategory('all')
      filtered.forEach((project) => {
        expect(project.id).toBeDefined()
        expect(project.title).toBeDefined()
        expect(project.description).toBeDefined()
        expect(project.category).toBeDefined()
        expect(project.technologies).toBeDefined()
        expect(Array.isArray(project.technologies)).toBe(true)
      })
    })
  })
})
