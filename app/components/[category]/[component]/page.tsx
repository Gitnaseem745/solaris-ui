import { notFound } from 'next/navigation';
import CodePre from '@/components/site/CodePre/CodePre';
import PropsTable from '@/components/site/PropsTable/PropsTable';
import CodePreview from '@/components/site/CodePreview/CodePreview';
import { components } from '@/docs/components';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ThemeToggle from '@/components/site/ThemeToggle/ThemeToggle';

export default async function Page({
    params
}: {
    params: Promise<{ category: string, component: string }>
}) {
    const { category, component } = await params;

    const categoryComponents: ComponentDataProps[] = components[category as keyof typeof components] || [];
    const componentData = categoryComponents.find((c: ComponentDataProps) => c.id === component);

    if (!componentData) {
        return notFound();
    }

    const sections: Section[] = [
        {
            name: 'Dependencies',
            Component: CodePre,
            props: { code: componentData.dependencies === undefined ? "None" : componentData.dependencies, language: 'bash' },
        },
        {
            name: 'Installation',
            Component: CodePre,
            props: { code: componentData.installation === undefined ? "None" : componentData.installation, language: 'bash' },
        },
        {
            name: 'Props',
            Component: PropsTable,
            props: { props: componentData.props },
        },
    ];

    return (
        <div className="w-full flex justify-center items-center font-sans">
            <div className="text-foreground w-full mx-auto">
                <main className="flex-1 p-6 lg:px-8">
                <div className="gap-3 hidden max-lg:flex absolute top-5 right-4">
                                <Link href={'https://github.com/Gitnaseem745/solaris-ui'} target="_blank" className="font-semibold font-sans">
                                    <div className="p-2 rounded-md text-foreground hover:bg-white/5 hover:backdrop-blur-sm">
                                        <FaGithub size={18} />
                                    </div>
                                </Link>
                                <ThemeToggle />
                            </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold text-foreground max-sm:text-2xl">{componentData.name}</h1>
                            <div className="flex gap-3 max-lg:hidden">
                                <Link href={'https://github.com/Gitnaseem745/solaris-ui'} target="_blank" className="font-semibold font-sans">
                                    <div className="p-2 rounded-md text-foreground hover:bg-white/5 hover:backdrop-blur-sm">
                                        <FaGithub size={18} />
                                    </div>
                                </Link>
                                <ThemeToggle />
                            </div>
                        </div>

                        <p className="text-lg text-foreground mb-8">{componentData.description}</p>

                        <CodePreview
                            directoryName={category}
                            language="tsx"
                            componentName={componentData.id}
                        >
                            <componentData.Component />
                        </CodePreview>

                        {sections?.map((section, i) => (
                            <section key={i} className="my-12 min-w-full">
                                <h2 className="text-2xl max-sm:text-xl font-semibold mb-4 text-foreground">{section.name}</h2>
                                <section.Component {...section?.props} />
                            </section>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
