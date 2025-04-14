import { animations } from "@/animations/animations"
import ThemeNav from "@/components/site/ThemeNav"
import UniversalSidebar from "@/components/site/UniversalSidebar"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Animations - Solaris UI',
    description: 'Animations page of solaris ui pre made ready to use framer-motion based animations',
    openGraph: {
        title: "Animations - Solaris UI",
        description: "Animations page of solaris ui pre made ready to use framer-motion based animations",
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
        description: "Animations page of solaris ui pre made ready to use framer-motion based animations",
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
