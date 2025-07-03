import UniversalSidebar from "@/components/site/UniversalSidebar";
import { siteConfig } from "@/config/site";
import { components } from "@/docs/components";
import { toCapitalCase } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ component: string }> }) {
    const { component } = await params;
    const comp = components.find((c) => c.id === component);

    if (!comp) {
        return {
            title: "Component not found - Solaris UI",
        };
    }

    const title = `${toCapitalCase(component.replaceAll("-", " "))} - Solaris UI`;
    const description = comp.description;

    const keywords = [
        `${toCapitalCase(component.replaceAll("-", " "))}`,
        `${component} component`, 
        `React ${component}`,
        `Tailwind ${component}`,
        `Solaris UI ${component}`,
        `${component} React component`,
        `${component} UI component`,
        `${component} design pattern`,
        'React components',
        'Tailwind CSS components',
        'UI component library',
        'React UI kit',
        'accessible components',
        'responsive UI components',
        'modern React components',
        'TypeScript components',
        'frontend development',
        'web design components'
    ];

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url: `https://solarisui.com/components/${component}`,
            images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [siteConfig.ogImage],
            creator: siteConfig.twitterHandle,
        },
    };
}


export default async function Layout({
    children,
}: {
    children: React.ReactNode;
    params: Promise<{ component: string }>;
}) {
    return (
        <>
            {/* <DocsAlert /> */}
            <div className="flex flex-col w-full max-w-screen-xl mx-auto lg:flex-row">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4">
                    <UniversalSidebar
                        heading="Components"
                        items={components.map((item) => ({
                            name: toCapitalCase(item.id.replaceAll("-", " ")),
                            id: `/components/${item.id}`,
                            href: `/components/${item.id}`,
                        }))}
                    />
                </aside>

                {/* Main Content */}
                <main className="max-w-4xl overflow-auto">
                    {children}
                </main>
            </div>
        </>
    );
}
