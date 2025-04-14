import UniversalSidebar from "@/components/site/UniversalSidebar";
import { siteConfig } from "@/config/site";
import { components } from "@/docs/components";
import { toCapitalCase } from "@/lib/utils";

export async function generateMetadata({ params }: { params: { component: string } }) {
    const { component } = await params;
    const comp = components.find((c) => c.id === component);

    if (!comp) {
        return {
            title: "Component not found - Solaris UI",
        };
    }

    const title = `${toCapitalCase(component.replaceAll("-", " "))} - Solaris UI`;
    const description = comp.description;

    return {
        title,
        description,
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
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ component: string }>;
}) {
    const { component } = await params;

    return (
        <>
            {/* <DocsAlert /> */}
            <div className="flex flex-col w-full max-w-screen-xl mx-auto lg:flex-row max-lg:mt-8">
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
                <main className="max-w-4xl max-sm:mt-4 overflow-auto">
                    {children}
                </main>
            </div>
        </>
    );
}
