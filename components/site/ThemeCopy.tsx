// Not in use
// This component is not in use. It was created to copy the theme colors to the clipboard as CSS variables.

'use client';

import { themeColors } from "@/types/themes"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

export const CopyButton = ({ themeColors }: { themeColors: themeColors }) => {
    // Function to generate CSS variables from the theme themeColors
    const generateCSSVariables = () => {
      const cssVariables = Object.entries(themeColors)
        .map(([key, value]) => `  --${key}: ${value};`)
        .join("\n")
      return `:root {\n${cssVariables}\n}`
    }
  
    // State to manage the copied state
    const [copied, setCopied] = useState(false)
  
    // Function to copy CSS variables to clipboard
    const copyToClipboard = () => {
      const cssVariables = generateCSSVariables()
      navigator.clipboard.writeText(cssVariables)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000) // Reset copied state after 2 seconds
    }
  
    return (
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors"
        style={{
          backgroundColor: copied ? `${themeColors.accent}20` : `${themeColors.primary}20`,
          color: copied ? themeColors.accent : themeColors.primary,
        }}
      >
        {copied ? (
          <>
            <Check size={16} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy size={16} />
            <span className="max-md:hidden">Copy</span>
          </>
        )}
      </button>
    )
  }
