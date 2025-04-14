import { useRef, useState } from 'react'

export function useContextMenu() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  const open = (e: React.MouseEvent) => {
    e.preventDefault()
    setPosition({ x: e.pageX, y: e.pageY })
  }

  const close = () => setPosition(null)

  return {
    position,
    open,
    close,
    bind: {
      onContextMenu: open,
    },
    ref,
  }
}
