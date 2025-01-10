'use client'
import { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi';
import { GoCopy } from "react-icons/go";


export interface PreviewProps {
  directoryName: string
  componentName: string
  language?: string
  children?: React.ReactNode
}

export default function CodePreview({
  directoryName,
  componentName,
  language = 'tsx',
  children,
}: PreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [copied, setCopied] = useState(false)
  const [code, setCode] = useState<string>('') // Holds the source code
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSourceCode = async () => {
      const apiUrl = `/api?directoryName=${directoryName}&componentName=${componentName}`
      try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
          throw new Error(`Failed to fetch source code for ${componentName}`)
        }
        const { source } = await response.json()
        setCode(source || '')
      } catch (err) {
        console.error(err)
        setError('Failed to load component source.')
      }
    }

    fetchSourceCode()
  }, [directoryName, componentName])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="rounded-lg text-white">
      {/* Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <div className="py-4">
        {activeTab === 'preview' ? (
          <PreviewSection componentName={componentName} onCopy={copyToClipboard} copied={copied}>
            {children}
          </PreviewSection>
        ) : (
          <CodeSection
            code={error ? error : code || 'Loading...'}
            language={language}
            onCopy={copyToClipboard}
            copied={copied}
          />
        )}
      </div>
    </div>
  )
}

// Header Component
interface HeaderProps {
  activeTab: 'preview' | 'code'
  setActiveTab: (tab: 'preview' | 'code') => void
}

function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <div className="flex items-center">
      {['preview', 'code'].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as 'preview' | 'code')}
          className={`
            px-4 py-2 text-sm font-medium text-center text-foreground
            ${activeTab === tab ? 'border-b-2  border-foreground' : 'text-gray-400'}
          `}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  )
}

// Preview Section
interface PreviewSectionProps {
  onCopy: () => void
  copied: boolean
  children?: React.ReactNode
  componentName: string
}

function PreviewSection({ onCopy, copied, children}: PreviewSectionProps) {
  return (
    <div className="relative rounded-lg border border-neutral-800 bg-neutral-900 p-4 flex flex-col justify-center min-h-[300px]">
      {/* Copy Button */}
      <div className="self-end">
        <CopyButton onCopy={onCopy} copied={copied} className='absolute top-2 right-2' />
      </div>
      {/* Preview Content */}
      <div className="mt-4 self-center">{children}</div>
    </div>
  )
}

// Code Section
interface CodeSectionProps {
  code: string
  language: string
  onCopy: () => void
  copied: boolean
}

export function CodeSection({ code, language, onCopy, copied }: CodeSectionProps) {
  return (
    <div className="relative rounded-lg border border-neutral-800 bg-neutral-900 p-4 max-h-[300px] overflow-y-auto text-wrap">
      <pre className="overflow-x-auto text-sm text-wrap">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <CopyButton onCopy={onCopy} copied={copied} className="absolute top-2 right-2" />
    </div>
  )
}

// Copy Button Component
interface CopyButtonProps {
  onCopy: () => void
  copied: boolean
  className?: string
}

function CopyButton({ onCopy, copied, className }: CopyButtonProps) {
  return (
    <button
      className={`
        bg-transparent border-gray-800 hover:bg-neutral-700 text-white transition p-2 rounded-md
        ${className}
      `}
      onClick={onCopy}
    >
      {copied ? <FiCheck className="w-4 h-4 text-green-500" /> : <GoCopy className="h-4 w-4" />}
    </button>
  )
}
