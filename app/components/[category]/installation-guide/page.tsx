import CodePre from '@/components/site/CodePre/CodePre';

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
const usageGuide = {
    step: "Installation & Usage",
    steps: [
        {
            title: "Step 1: Choose and Copy Your Component",
            content: "Copy the source code of the component you want to use from the library."
        },
        {
            title: "Step 2: Create a New .tsx File",
            content: "Inside your project, create a new .tsx file, e.g., MyCustomComponent.tsx."
        },
        {
            title: "Step 3: Paste the Copied Component Code",
            content: "Paste the copied code into the new .tsx file and modify it according to your needs."
        },
    ],
    sections: [
        {
            title: "Example:",
            content: "// MyCustomComponent.tsx\n\ninterface DefaultButtonProps {\n  label: string;\n  onClick?: () => void;\n}\n\nconst DefaultButton: React.FC<DefaultButtonProps> = ({ label, onClick }) => {\n  return (\n    <button\n      onClick={onClick}\n      className={`bg-yellow-300 text-black hover:bg-yellow-400 transition-all ease-in w-fit px-6 py-2 rounded-md`}\n    >\n      {label}\n    </button>\n  );\n};\n\nexport default DefaultButton;"
        },
        {
            title: "Step 4: Import and Use the Component",
            content: "Import and use the newly created component anywhere in your project."
        },
        {
            title: "Example Usage:",
            content: "import DefaultButton from './MyCustomComponent';\n\nconst App = () => {\n  return (\n    <div>\n      <DefaultButton label=\"Click Me\" />\n    </div>\n  );\n};\n\nexport default App;"
        }
    ]
};
