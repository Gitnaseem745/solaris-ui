import CodePre from '@/components/site/CodePre'

// override MDX <code> blocks
export const mdxComponents = {
    code: ({ className = '', children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => {
        const language = className.replace('language-', '') || 'tsx'

        const codeString =
            typeof children === 'string'
                ? children.trim()
                : Array.isArray(children)
                    ? children.map(child => (typeof child === 'string' ? child : '')).join('').trim()
                    : ''

        return <CodePre language={language} code={codeString} {...props} />
    },
}
