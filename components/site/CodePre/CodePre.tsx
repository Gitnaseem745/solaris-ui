'use client'

import { useState } from 'react'
import { FiCopy, FiCheck } from 'react-icons/fi'

export default function CodePre({ code, language }: { code: string, language: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <pre className={`language-${language} p-4 rounded-md bg-[#171717] border border-background text-white overflow-x-auto`}>
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-background text-foreground hover:opacity-85"
      >
        {copied ? <FiCheck className="w-4 h-4 text-green-500" /> : <FiCopy className="w-4 h-4" />}
      </button>
    </div>
  )
}
