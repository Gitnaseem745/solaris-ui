'use client'
import CodePreview from './CodePre'

export default function Examples({ examples }: { examples: Array<{ name: string, code: string }> }) {
  return (
    <div className="space-y-8">
      {examples.map((example) => (
        <div key={example.name}>
          <h3 className="text-xl font-semibold mb-2 text-foreground max-sm:text-[16px]">{example.name}</h3>
          <CodePreview code={example.code} language="tsx" />
        </div>
      ))}
    </div>
  )
}
