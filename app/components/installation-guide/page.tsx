import CodePre from '@/components/site/CodePre';
import { siteConfig } from '@/config/site';

export default async function Page() {
    const { usageGuide } = siteConfig;
    
    return (
        <div className="w-full flex justify-center items-center font-sans mt-4">
            <div className="text-foreground w-full mx-auto">
                <main className="flex-1 p-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold text-foreground max-sm:text-2xl">{usageGuide.step}</h1>
                        </div>
                        {usageGuide.steps.map((step, i) => (
                            <section key={i} className="my-12 min-w-full">
                                <h2 className="text-2xl max-sm:text-xl font-semibold mb-4 text-foreground">{step.title}</h2>
                                <p className='text-neutral-400'>
                                    {step.content}
                                </p>
                            </section>
                        ))}

                        <section className="my-12 min-w-full">
                            <h2 className="text-2xl max-sm:text-xl font-semibold mb-4 text-foreground">{usageGuide.sections[0].title}</h2>
                            <CodePre code={usageGuide.sections[0].content} language="tsx" />
                        </section>

                        <section className="my-12 min-w-full">
                            <h2 className="text-2xl max-sm:text-xl font-semibold mb-4 text-foreground">{usageGuide.sections[1].title}</h2>
                            <p className='text-neutral-400'>
                                {usageGuide.sections[1].content}
                            </p>
                        </section>

                        <section className="my-12 min-w-full">
                            <h2 className="text-2xl max-sm:text-xl font-semibold mb-4 text-foreground">{usageGuide.sections[2].title}</h2>
                            <CodePre code={usageGuide.sections[2].content} language="tsx" />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
