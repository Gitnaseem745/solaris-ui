import { useState } from 'react'

export function useCombobox<T>(items: T[], keyFn: (item: T) => string) {
  const [query, setQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  const filtered = items.filter(item => keyFn(item).toLowerCase().includes(query.toLowerCase()))

  const select = () => filtered[highlightedIndex]

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex(i => (i + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex(i => (i - 1 + filtered.length) % filtered.length)
    }
  }

  return {
    query,
    setQuery,
    highlightedIndex,
    filtered,
    handleKeyDown,
    select,
  }
}
