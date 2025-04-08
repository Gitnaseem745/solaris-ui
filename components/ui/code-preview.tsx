"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

interface CodePreviewProps {
  code: string;
  language?: string;
  theme?: "dark" | "light";
  className?: string;
  showLineNumbers?: boolean;
  children?: React.ReactNode;
}

/**
 * CodePreview component for displaying code snippets with syntax highlighting.
 * @param {string} code - The code snippet to display.
 * @param {string} language - The programming language of the code (default: "tsx").
 * @param {"dark" | "light"} theme - The theme for syntax highlighting (default: "dark").
 * @param {string} className - Additional class names for styling.
 * @param {boolean} showLineNumbers - Whether to show line numbers (default: true).
 * @param {React.ReactNode} children - Additional content to render inside the preview.
 * @returns {JSX.Element} The rendered CodePreview component.
 * @example
 * <CodePreview code={`const x = 10;`} language="javascript" theme="light" showLineNumbers={false} className="custom-class">
 *  <button>Copy</button>
 * </CodePreview>
 */
const CodePreview = ({
  code,
  language = "tsx",
  theme = "dark",
  className,
  showLineNumbers = true,
  children,
}: CodePreviewProps) => {
  const selectedTheme = theme === "dark" ? oneDark : oneLight;

  return (
    <div className={cn("relative rounded-lg overflow-hidden", className)}>
      <SyntaxHighlighter
        language={language}
        style={selectedTheme}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: theme === "dark" ? "#282c34" : "#f5f5f5",
        }}
      >
        {code}
      </SyntaxHighlighter>
      {children && <div className="absolute top-0 right-0 p-2">{children}</div>}
    </div>
  );
};

export default CodePreview;
