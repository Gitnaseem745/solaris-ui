import { useEffect, useRef, useState } from 'react'

export function useFloating() {
  const ref = useRef<HTMLElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const updatePosition = () => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    })
  }

  useEffect(() => {
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    return () => window.removeEventListener('scroll', updatePosition, true)
  }, [])

  return { ref, position }
}
