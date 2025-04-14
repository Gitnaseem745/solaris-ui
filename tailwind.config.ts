import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./demos/**/*.{js,ts,jsx,tsx,mdx}",
    "./animations/**/*.{js,ts,jsx,tsx,mdx}",
    "./docs/**/*.{js,ts,jsx,tsx,mdx}",
    "./guide/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      opacity: {
        "85": "var(--opacity)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            a: { color: theme('colors.primary.DEFAULT'), textDecoration: 'underline' },
            strong: { color: theme('colors.foreground') },
            h1: { color: theme('colors.foreground') },
            h2: { color: theme('colors.foreground') },
            h3: { color: theme('colors.foreground') },
            h4: { color: theme('colors.foreground') },
            code: {
              color: theme('colors.pink.600'),
              backgroundColor: theme('colors.muted.DEFAULT'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            pre: {
              color: theme('colors.foreground'),
              backgroundColor: theme('colors.background'),
              padding: '1rem',
              borderRadius: '0.5rem',
            },
            blockquote: {
              borderLeftColor: theme('colors.muted.foreground'),
              color: theme('colors.muted.foreground'),
              fontStyle: 'italic',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.foreground'),
            a: { color: theme('colors.primary.DEFAULT'), textDecoration: 'underline' },
            strong: { color: theme('colors.foreground') },
            h1: { color: theme('colors.foreground') },
            h2: { color: theme('colors.foreground') },
            h3: { color: theme('colors.foreground') },
            h4: { color: theme('colors.foreground') },
            code: {
              color: theme('colors.pink.400'),
              backgroundColor: theme('colors.muted.DEFAULT'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            pre: {
              color: theme('colors.zinc.200'),
              backgroundColor: theme('colors.zinc.800'),
              padding: '1rem',
              borderRadius: '0.5rem',
            },
            blockquote: {
              borderLeftColor: theme('colors.zinc.600'),
              color: theme('colors.zinc.300'),
              fontStyle: 'italic',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
