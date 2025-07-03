'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { GoCopy } from 'react-icons/go';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodePreProps {
  code?: string;
  language?: string;
  lineNumbers?: boolean;
  componentName?: string;
  expandable?: boolean;
  theme?: 'dark' | 'light';
}

export default function CodePre({
  code: initialCode,
  language = 'tsx',
  componentName,
  lineNumbers = true,
  expandable=false,
  theme = 'dark',
}: CodePreProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [code, setCode] = useState<string>(initialCode || '');
  const [error, setError] = useState<string | null>(null);
  const [expand, setExpand] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(!initialCode && !!componentName);

  const selectedTheme = theme === 'dark' ? oneDark : oneLight;

  // Fetch source code if `componentName` is provided and no initial code
  useEffect(() => {
    if (!componentName || initialCode) {
      setLoading(false);
      return;
    }

    const fetchSourceCode = async () => {
      const apiUrl = `/api/fetch-source?componentName=${componentName}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch source code for ${componentName}`);
        }
        const { source } = await response.json();
        setCode(source || '');
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(`Failed to load source code for ${componentName}.`);
        setLoading(false);
      }
    };

    fetchSourceCode();
  }, [componentName, initialCode]);

  // Copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Display error if fetching fails */}
      {error ? (
        <div className="p-4 rounded-md bg-red-500 text-white">
          <p>{error}</p>
        </div>
      ) : loading && (componentName || expandable) ? (
        <div className="p-4 rounded-md bg-[#282c34] text-white">Loading...</div>
      ) : (
        <div
          className={cn(
            'relative w-full rounded-lg overflow-hidden',
            expand ? 'line-clamp-none overflow-x-auto' : `${componentName && "h-60"} overflow-hidden`,
          )}
        >
          <SyntaxHighlighter
            language={language}
            style={selectedTheme}
            showLineNumbers={lineNumbers}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: theme === 'dark' ? '#282c34' : '#f5f5f5',
              scrollbarWidth: 'none'
            }}
          >
            {code}
          </SyntaxHighlighter>

          {/* Expand/Collapse Button */}
          {componentName && (
            <Button
              onClick={handleExpand}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              variant="secondary"
              size="default"
            >
              {expand ? 'Collapse' : 'Expand'}
            </Button>
          )}

          {/* Overlay for collapsed state */}
          {componentName && !expand && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent pointer-events-none" />
          )}
        </div>
      )}

      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className="absolute top-4 right-4 p-2 rounded-md bg-background text-foreground hover:bg-neutral-700 hover:text-white"
      >
        {copied ? <FiCheck className="w-4 h-4 text-green-500" /> : <GoCopy className="w-4 h-4" />}
      </button>
    </div>
  );
}
