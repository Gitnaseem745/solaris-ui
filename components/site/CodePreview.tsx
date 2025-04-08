'use client';

import { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { GoCopy } from 'react-icons/go';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface PreviewProps {
  componentName: string;
  language?: string;
  theme?: 'dark' | 'light';
  children?: React.ReactNode;
}

export default function CodePreview({
  componentName,
  language = 'tsx',
  theme = 'dark',
  children,
}: PreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSourceCode = async () => {
      const apiUrl = `/api/fetch-demo?componentName=${componentName}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch source code for ${componentName} due to wrong response from API.`
          );
        }
        const { source } = await response.json();
        setCode(source || '');
      } catch (err) {
        console.error(err);
        setError(`Failed to load ${componentName} source code.`);
      }
    };

    fetchSourceCode();
  }, [componentName]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="rounded-lg text-white">
      {/* Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <div className="py-4">
        {activeTab === 'preview' ? (
          <PreviewSection
            componentName={componentName}
            onCopy={copyToClipboard}
            copied={copied}
            theme={theme}
          >
            {children || <div>Loading preview...</div>}
          </PreviewSection>
        ) : (
          <CodeSection
            code={error ? error : code || 'Loading...'}
            language={language}
            theme={theme}
            onCopy={copyToClipboard}
            copied={copied}
          />
        )}
      </div>
    </div>
  );
}

// Header Component
interface HeaderProps {
  activeTab: 'preview' | 'code';
  setActiveTab: (tab: 'preview' | 'code') => void;
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
            ${activeTab === tab ? 'border-b-2 border-foreground' : 'text-gray-400'}
          `}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}

// Preview Section
interface PreviewSectionProps {
  onCopy: () => void;
  copied: boolean;
    theme?: 'dark' | 'light';
  children?: React.ReactNode;
  componentName: string;
}

function PreviewSection({ onCopy, copied, children, theme }: PreviewSectionProps) {
  return (
    <div className={`relative rounded-lg ${theme === 'dark' ? 'bg-[#282C34]' : 'bg-[#f5f5f5]'} p-4 flex flex-col justify-center min-h-[300px]`}>
      {/* Copy Button */}
      <div className="self-end">
        <CopyButton onCopy={onCopy} copied={copied} className="absolute top-2 right-2" />
      </div>
      {/* Preview Content */}
      <div className="my-8 max-sm:my-4 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

// Code Section
interface CodeSectionProps {
  code: string;
  language: string;
  theme: 'dark' | 'light';
  onCopy: () => void;
  copied: boolean;
}

export function CodeSection({ code, language, theme, onCopy, copied }: CodeSectionProps) {
  const selectedTheme = theme === 'dark' ? oneDark : oneLight;

  return (
    <div className="relative rounded-lg max-h-[300px] overflow-y-auto text-wrap">
      <SyntaxHighlighter
        language={language}
        style={selectedTheme}
        showLineNumbers={true}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: theme === 'dark' ? '#282c34' : '#f5f5f5',
          scrollbarWidth: 'none',
        }}
      >
        {code}
      </SyntaxHighlighter>
      <CopyButton onCopy={onCopy} copied={copied} className="absolute top-2 right-2" />
    </div>
  );
}

// Copy Button Component
interface CopyButtonProps {
  onCopy: () => void;
  copied: boolean;
  className?: string;
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
  );
}
