import { animations } from '@/animations/animations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/site/tabs";
import CodePre from '@/components/site/CodePre';
import TopButton from '@/components/ui/top-button';
import { getSourceCode } from '@/lib/getAnimationCode';

export default async function AnimationPage() {
  // Fetch all source code upfront
  const sourceCodeMap = new Map();
  
  for (const animation of animations) {
    const [demoCode, presetCode] = await Promise.all([
      getSourceCode(animation.id, 'demo'),
      getSourceCode(animation.id, 'preset')
    ]);
    
    sourceCodeMap.set(animation.id, {
      demo: demoCode,
      preset: presetCode
    });
  }

  return (
    <div className="min-h-screen relative bg-background">
      <TopButton />
      

      {/* Main Content Layout */}

        {/* Main Content Area */}
        <div className="flex-1 max-w-5xl w-full mx-auto">
          {/* Header Section */}
          <div className="px-4 py-8 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Framer Motion Animation Presets</h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
              A collection of reusable animation presets for Framer Motion to enhance your React applications.
            </p>
          </div>

          <div className="p-4 md:p-8">
            {/* Getting Started Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
              <p className="mb-4">
                To use these animation presets in your project, import them from the animations file:
              </p>
              <CodePre
                code={`import { fadeIn, slideInLeft } from "@/animations/animations";

// Then use in your components
<motion.div 
  variants={fadeIn}
  initial="hidden"
  animate="visible"
>
  Content goes here
</motion.div>`}
                language="tsx"
              />
            </section>

            {/* Animation Examples */}
            {animations.sort((a,b) => a.name.localeCompare(b.name)).map((animation) => (
              <div
                key={animation.id}
                id={animation.id}
                className="mb-16 scroll-mt-16"
              >
                <h2 className="text-2xl font-bold mb-2">{animation.name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {animation.description}
                </p>

                {/* Animation Preview and Code Tabs */}
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Demo Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="w-full">
                    <animation.demo />
                  </TabsContent>
                  <TabsContent value="code" className="w-full">
                    <div className="max-w-full overflow-x-auto h-[300px] rounded-lg">
                      <CodePre 
                        code={sourceCodeMap.get(animation.id)?.demo || '// No code available'}
                        language="tsx"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Preset Code Section */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Preset Code</h3>
                  <div className="max-w-full overflow-x-auto h-[350px] rounded-lg">
                    <CodePre 
                      code={sourceCodeMap.get(animation.id)?.preset || '// No code available'}
                      language="typescript"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Scroll Animations Section */}
            <section className="py-8 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold mb-4">Scroll Animations</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                You can use these animations with the <code>whileInView</code> prop to trigger animations when elements
                come into view.
              </p>

              <CodePre
                code={`<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <h1>This will animate when scrolled into view</h1>
</motion.div>`}
                language="tsx"
              />

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Viewport Options</h3>
                <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>
                    <code>once: true</code> - Animation triggers only once
                  </li>
                  <li>
                    <code>amount: 0.3</code> - How much of the element needs to be in view (0-1)
                  </li>
                  <li>
                    <code>margin: &quot;100px&quot;</code> - Margin around the element to consider it in view
                  </li>
                </ul>
              </div>
            </section>

            {/* Advanced Usage Section */}
            <section className="py-8">
              <h2 className="text-2xl font-bold mb-4">Advanced Usage</h2>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2">Combining Animations</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">You can combine multiple animations by merging their properties:</p>
                <CodePre
                  code={`import { fadeIn, slideInUp } from "@/animations/animations";

// Combine animations
const combinedAnimation = {
  hidden: { ...fadeIn.hidden, ...slideInUp.hidden },
  visible: {
    ...fadeIn.visible,
    ...slideInUp.visible,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};`}
                  language="tsx"
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Custom Variants</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">You can extend these animations with your own custom variants:</p>
                <CodePre
                  code={`import { fadeIn } from "@/animations/animations";

// Custom variant extending fadeIn
const customFadeIn = {
  ...fadeIn,
  visible: {
    ...fadeIn.visible,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};`}
                  language="tsx"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
  );
} 
