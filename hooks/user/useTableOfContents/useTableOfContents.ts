'use client'

import { useEffect, useState } from 'react'

export interface TOCItem {
  id: string
  title: string
  level: number
}

export function useTableOfContents(containerSelector = '.prose') {
  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const container = document.querySelector(containerSelector)
    if (!container) return

    const headings = Array.from(
      container.querySelectorAll('h2, h3')
    ) as HTMLHeadingElement[]

    const items = headings.map((heading) => ({
      id: heading.id,
      title: heading.textContent || '',
      level: Number(heading.tagName.replace('H', '')),
    }))

    setToc(items)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible?.target) setActiveId((visible.target as HTMLElement).id)
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [containerSelector])

  return { toc, activeId }
}
