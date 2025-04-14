'use client'

import { useTableOfContents } from '@/hooks/user/useTableOfContents/useTableOfContents'
import Link from 'next/link'

export default function HookTOC() {
    const { toc, activeId } = useTableOfContents();

    return (
        <aside className="hidden xl:block fixed top-14 right-10 w-64 text-sm p-4 bg-transparent rounded-md border border-border backdrop-blur-lg">
            <h2 className="text-base font-semibold mb-4">On this page</h2>
            <ul className="space-y-2">
                {toc.map((h) => (
                    <li key={h.id}>
                        <Link
                            href={`#${h.id}`}
                            className={`block transition-colors hover:text-primary ${activeId === h.id ? 'text-primary font-semibold' : 'text-muted-foreground'
                                } ml-${h.level === 3 ? '4' : '0'}`}
                        >
                            {h.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
