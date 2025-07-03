import { components } from '@/docs/components'

/**
 * Gets all available components for static generation
 * @returns An array of component metadata with id, name, and href
 */
export const allComponents = components.map((component) => ({
  id: component.id,
  name: component.name,
  href: `/components/${component.id}`
}))

/**
 * Gets metadata for all components
 * @returns An array of component metadata
 */
export const getComponentsMeta = () => {
  return components.map((component) => ({
    id: component.id,
    name: component.name,
    description: component.description,
    dependencies: component.dependencies
  }))
}
