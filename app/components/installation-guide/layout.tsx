import UniversalSidebar from "@/components/site/UniversalSidebar";
import { siteConfig } from "@/config/site";
import { components } from "@/docs/components";
import { toCapitalCase } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Installation - Solaris UI",
    description: "Installation guide for Solaris UI",
    openGraph: {
        title: "Installation - Solaris UI",
        description: "Installation guide for Solaris UI",
        url: "https://solarisui.com/components/installation-guide",
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
        title: "Installation - Solaris UI",
        description: "Installation guide for Solaris UI",
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
    },
};

export default async function InstallationLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex flex-col w-full max-w-screen-xl mx-auto lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4">
                <UniversalSidebar
                    items={components.map((item) => ({
                        name: toCapitalCase(item.id.replaceAll("-", " ")),
                        id: `/components/${item.id}`,
                        href: `/components/${item.id}`,
                    }))}
                    heading="Components"
                />
            </aside>

            {/* Main Content */}
            <main className="max-w-4xl overflow-auto">
                {children}
            </main>
        </div>
    );
}
