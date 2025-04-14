import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import 'highlight.js/styles/github.css'
import CodePre from '@/components/site/CodePre'
import TopButton from '@/components/ui/top-button'

const hooksDir = path.join(process.cwd(), 'hooks', 'user')
const hookDirs = fs.readdirSync(hooksDir).filter((file) =>
    fs.lstatSync(path.join(hooksDir, file)).isDirectory()
)
export const allHooks = hookDirs.map((dir) => ({ id: dir, name: dir, href: `/hooks/${dir}` }))

export default async function HookDocPage({ params }: { params: { hook: string } }) {
    const { hook } = await params
    const docPath = path.join(process.cwd(), 'hooks', 'user', hook, 'README.md')
    const codePath = path.join(process.cwd(), 'hooks', 'user', hook, `${hook}.ts`)

    if (!fs.existsSync(docPath)) notFound()

    const docContent = fs.readFileSync(docPath, 'utf8')
    const hookSource = fs.existsSync(codePath)
        ? fs.readFileSync(codePath, 'utf8')
        : '// Source file not found.'

    return (
        <div className="min-h-screen relative bg-background">
            <TopButton />

                {/* Main Content Area */}
                <div className="flex-1 max-w-4xl mx-auto">
                    <div className="p-4 md:p-8">
                        {/* Documentation Section */}
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <MDXRemote
                                source={docContent}
                                options={{
                                    mdxOptions: {
                                        remarkPlugins: [remarkGfm],
                                        rehypePlugins: [rehypeHighlight, rehypeSlug],
                                    },
                                }}
                                components={mdxComponents}
                            />
                        </div>

                        {/* Source Code Section */}
                        <div className="mt-12 pt-8 border-t border-border space-y-8">
                            <h2 id='source-code' className="text-2xl font-bold">📋 Source Code</h2>
                            <p>
                                This is the full implementation of <code className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">{hook}</code>
                            </p>
                            <CodePre language="ts" code={hookSource} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

// override MDX <code> blocks
export const mdxComponents = {
    code: ({ className = '', children, ...props }: any) => {
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
