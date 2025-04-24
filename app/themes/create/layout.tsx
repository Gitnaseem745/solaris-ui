import { siteConfig } from "@/config/site"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Tailwind CSS Theme Generator | Solaris UI',
    description: 'Create custom Tailwind CSS themes instantly with our interactive theme generator. Preview changes in real-time and export ready-to-use config files.',
    keywords: ['tailwind themes', 'theme generator', 'css themes', 'color palette', 'tailwind css', 'design system', 'ui components'],
    openGraph: {
        title: "Tailwind CSS Theme Generator | Solaris UI",
        description: "Create beautiful, accessible Tailwind CSS themes with our interactive generator. Preview in real-time and export production-ready code.",
        url: "https://solarisui.com/themes/create/",
        siteName: siteConfig.title,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Solaris UI Tailwind CSS Theme Generator",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tailwind CSS Theme Generator | Solaris UI",
        description: "Design custom Tailwind themes with our interactive generator. Real-time preview and export options available.",
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
    },
    alternates: {
        canonical: "https://solarisui.com/themes/create",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function ThemeLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}
