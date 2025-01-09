import CodePre from '@/components/site/CodePre/CodePre';
import { usageGuide } from '@/docs/components';

export default async function Page() {
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
                        {usageGuide.sections.map((section, i) => (
                            <section key={i} className="my-12 min-w-full">
                                <h2 className="text-2xl max-sm:text-xl font-semibold mb-4 text-foreground">{section.title}</h2>
                                <CodePre code={section.content} language="tsx" />
                            </section>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
