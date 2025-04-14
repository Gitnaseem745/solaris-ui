import { useEffect, useMemo, useRef, useState } from 'react'

export interface UseVirtualListOptions {
  itemHeight: number
  overscan?: number
}

export function useVirtualList<T>(
  list: T[],
  containerRef: React.RefObject<HTMLElement>,
  { itemHeight, overscan = 5 }: UseVirtualListOptions
) {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop)
    }
  }

  useEffect(() => {
    const ref = containerRef.current
    if (!ref) return

    ref.addEventListener('scroll', onScroll)
    return () => ref.removeEventListener('scroll', onScroll)
  }, [])

  const totalHeight = list.length * itemHeight
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(list.length - 1, Math.ceil((scrollTop + (containerRef.current?.clientHeight || 0)) / itemHeight) + overscan)

  const visibleData = useMemo(() => list.slice(startIndex, endIndex + 1), [startIndex, endIndex, list])

  return {
    list: visibleData,
    totalHeight,
    scrollOffset: startIndex * itemHeight,
  }
}
