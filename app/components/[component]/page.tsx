import { notFound } from 'next/navigation';
import CodePre from '@/components/site/CodePre';
import PropsTable from '@/components/site/PropsTable';
import CodePreview from '@/components/site/CodePreview';
import { components } from '@/docs/components';
import { allComponents } from '@/lib/getComponents';
import { getAllSourceCode } from '@/lib/getSourceCode';

// Generate static paths for all components
export async function generateStaticParams() {
    return allComponents.map((component) => ({
        component: component.id,
    }))
}

// Generate metadata for each component page
export async function generateMetadata({ params }: {
    params: Promise<{ component: string }>
}) {
    const { component } = await params;
    const componentData = components.find((c: ComponentType) => c.id === component);
    
    if (!componentData) {
        return {
            title: 'Component Not Found',
            description: 'The requested component could not be found.'
        };
    }

    return {
        title: `${componentData.name} - Solaris UI Component`,
        description: componentData.description,
        keywords: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Component',
            componentData.name,
            'UI Library',
            'Solaris UI'
        ],
        openGraph: {
            title: `${componentData.name} - Solaris UI`,
            description: componentData.description,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${componentData.name} - Solaris UI`,
            description: componentData.description,
        }
    };
}

export default async function Page({ params }: {
    params: Promise<{ component: string }>
}) {
    const { component } = await params;
    const componentData = components.find((c: ComponentType) => c.id === component);
    if (!componentData) {
        return notFound();
    }

    // Get source code at build time instead of runtime API calls
    const { componentSource, demoSource } = await getAllSourceCode(component);

    const utils = `import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}
`

    const sections: Section[] = [
        {
            name: 'Dependencies',
            Component: CodePre,
            props: { code: componentData.dependencies === undefined ? "None" : "npm install " + componentData.dependencies, language: 'bash', lineNumbers: false },
        },
        {
            name: 'Paste inside @/lib/utils.ts',
            Component: CodePre,
            props: { code: utils, language: 'tsx', lineNumbers: false },
        },
        {
            name: `Copy ${componentData.name} Code`,
            Component: CodePre,
            props: { code: componentSource || 'Component source not found', language: 'tsx', lineNumbers: false },
        },
        {
            name: 'Props',
            Component: PropsTable,
            props: { components: componentData?.props || [] },
        },
    ];

    return (
        <div className="w-full flex justify-center items-center font-sans">
            <div className="text-foreground w-full mx-auto">
                <main className="flex-1 p-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold text-foreground max-sm:text-2xl">{componentData.name}</h1>
                        </div>

                        <p className="text-lg text-foreground mb-8">{componentData.description}</p>

                        <CodePreview
                            language="tsx"
                            demoSource={demoSource}
                        >
                            <componentData.Component />
                        </CodePreview>

                        <section className='my-12 min-w-full'>
                            <h2 className="text-2xl max-sm:text-xl font-semibold mb-8 text-foreground">Installation</h2>
                            {sections.slice(0, 3)?.map((section, i) => (
                                <section key={i} className="mb-8 min-w-full">
                                    <h2 className="text-lg max-sm:text-base font-semibold mb-4 px-2 text-foreground">
                                        {i + 1}. {section.name}
                                    </h2>
                                    <section.Component {...section?.props} />
                                </section>
                            ))}
                        </section>

                        <section className="my-12 min-w-full">
                            <h2 className="text-2xl max-sm:text-xl font-semibold mb-4 text-foreground">
                                {sections[2]?.name}
                            </h2>
                            <PropsTable components={componentData.props || []} />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
