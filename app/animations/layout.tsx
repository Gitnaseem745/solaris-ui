import { animations } from "@/animations/animations"
import UniversalSidebar from "@/components/site/UniversalSidebar"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Animations - Solaris UI',
    description: 'Ready-to-use Framer Motion animations for React applications. Add smooth, interactive animations to your UI components with minimal effort.',
    keywords: [
        'React animations', 
        'Framer Motion', 
        'UI animations', 
        'JavaScript animations', 
        'React transitions', 
        'motion effects', 
        'animation library', 
        'Solaris UI animations', 
        'interactive animations', 
        'web animations', 
        'CSS animations', 
        'animation components', 
        'transition effects', 
        'UI motion', 
        'React motion library',
        'smooth animations',
        'animation presets',
        'front-end animations',
        'component animations',
        'animation hooks'
    ],
    openGraph: {
        title: "Animations - Solaris UI",
        description: "Ready-to-use Framer Motion animations for React applications. Add smooth, interactive animations to your UI components with minimal effort.",
        url: "https://solarisui.com/animations/",
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
        title: "Animations - Solaris UI",
        description: "Ready-to-use Framer Motion animations for React applications. Add smooth, interactive animations to your UI components with minimal effort.",
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
    },
}

export default function AnimationsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col w-full max-w-screen-xl mx-auto lg:flex-row max-lg:mt-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4">
                <UniversalSidebar
                    heading="Animations"
                    items={animations.map((animation) => ({
                        id: animation.id,
                        name: animation.name,
                    }))}
                    scrollSpy
                />
            </aside>

            {/* Main Content */}
            <main className="max-w-4xl max-sm:mt-4 overflow-auto relative">
                {children}
            </main>
        </div>
    )
} 
