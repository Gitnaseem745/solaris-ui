"use client";

import { useState } from "react";
import CodePreview from "@/components/ui/code-preview";

export default function CodePreviewDemo() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(sampleCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sampleCode = `
"use client";

import React from "react";

export default function Example() {
  return <div>Hello, World!</div>;
}
`;

    return (
            <CodePreview code={sampleCode} language="tsx" theme="light">
                <button
                    onClick={handleCopy}
                    className="bg-gray-800 text-white text-xs px-2 py-1 rounded hover:bg-gray-700"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </CodePreview>
    );
}
