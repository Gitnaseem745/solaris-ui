import Link from 'next/link'
import { getHooksMeta } from '@/lib/getHooksMeta'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
    title: 'Hooks - Solaris UI',
    description: 'Production Grade Ready to Use Hooks by Solaris UI',
    openGraph: {
        title: "Hooks - Solaris UI",
        description: "Production Grade Ready to Use Hooks by Solaris UI",
        url: "https://solarisui.com/hooks/",
        siteName: siteConfig.title,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.title,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hooks - Solaris UI",
        description: "Production Grade Ready to Use Hooks by Solaris UI",
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
    },
}

export default function HooksPage() {
  const hooks = getHooksMeta()

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-16 px-4">
      <h1 className="sm:text-4xl text-2xl font-bold mb-8">Solaris UI Hooks🔧</h1>
      <p className="mb-6 max-sm:text-sm">Production-ready custom React hooks to speed up your development.</p>

      <ul className="space-y-3">
        {hooks.map((hook, i) => (
          <li key={hook.name}>
            <Link
              href={`/hooks/${hook.name}`}
              className="text-orange-500 hover:underline text-lg font-medium"
            >
              {i+1}. {hook.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
