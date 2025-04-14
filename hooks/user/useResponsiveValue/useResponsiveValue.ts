import { useEffect, useState } from 'react'

const breakpoints: Record<string, string> = {
  sm: '(max-width: 640px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 1024px)',
  xl: '(max-width: 1280px)',
}

export function useResponsiveValue<T>(map: Partial<Record<keyof typeof breakpoints, T>>, defaultValue: T): T {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const queries = Object.entries(breakpoints).map(([key, query]) => ({
      key,
      mql: window.matchMedia(query),
    }))

    const update = () => {
      for (const { key, mql } of queries) {
        if (mql.matches && map[key as keyof typeof breakpoints] !== undefined) {
          setValue(map[key as keyof typeof breakpoints]!)
          return
        }
      }
      setValue(defaultValue)
    }

    update()
    queries.forEach(({ mql }) => mql.addEventListener('change', update))
    return () => queries.forEach(({ mql }) => mql.removeEventListener('change', update))
  }, [])

  return value
}
