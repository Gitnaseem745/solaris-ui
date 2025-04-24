import { Component, Palette } from "lucide-react";
import { FaInstalod } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdAnimation } from "react-icons/md";
import { TbFishHook } from "react-icons/tb";

export const siteConfig = {
    name: "SolarisUI",  // Site Name
    title: "SolarisUI - Modern UI Components Library",  // Site Name with Tagline
    description: "SolarisUI is a modern, customizable, and production-ready UI components library built for React and Tailwind CSS.",  // Short Description
    url: "https://solarisui.com",  // Live Site URL (for SEO)
    logo: "/logo.png",  // Site Logo
    ogImage: "https://solarisui.com/og-image.png",  // Open Graph Image (SEO & SERP)
    author: "Naseem Ansari",  // Developer/Creator Name
    twitterHandle: "@solaris_ui",  // Twitter Username
    keywords: ["UI components", "React", "Tailwind CSS", "SolarisUI", "Design System", "Modern UI Components", "UI components library"],  // SEO Keywords
    favicons: {
        icon: "/favicons/favicon.ico",
        shortcut: "/favicons/favicon-16x16.png",
        apple: "/favicons/apple-touch-icon.png",
        manifest: "/favicons/site.webmanifest",
    },  // Favicon Paths
    githubUrl: "https://github.com/gitNaseem745/solaris-ui",  // GitHub Repository URL
    documentationUrl: "https://solarisui.com/components/installation-guide",  // Documentation URL
    contactEmail: "mrnaseem745@gmail.com",  // Developer Email
    version: "3.0.0",  // Current Version of the Library
    license: "MIT",  // License Type
    features: [
        "Production-ready React components",
        "Built with Tailwind CSS for easy customization",
        "Dark and light theme support",
        "Accessible and responsive design",
        "Comprehensive documentation and examples",
    ],  // Key Features of the Project
    socialLinks: [
        {
            name: "Twitter",
            url: "https://twitter.com/solaris_ui",
        },
        {
            name: "GitHub",
            url: "https://github.com/gitNaseem745",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/naseem-ansari-25474b269/",
        },
    ],  // Social Media Links
    contributors: [
        {
            name: "Naseem Ansari",
            role: "Lead Developer",
            github: "https://github.com/gitNaseem745",
        },
    ],  // List of Contributors

    // Sidebar Navigation
    sidebarNav: [
        {
            name: 'Home',
            href: '/',
            icon: FiHome,
        },
        {
            name: 'Themes',
            href: `/themes/create`,
            icon: Palette,
        },
        {
            name: 'Hooks',
            href: `/hooks/`,
            icon: TbFishHook,
        },
        {
            name: 'Animations',
            href: `/animations`,
            icon: MdAnimation,
        },
        {
            name: 'Components',
            href: `/components/advance-toast`,
            icon: Component,
        },
        {
            name: 'Installation',
            href: `/components/installation-guide`,
            icon: FaInstalod,
        },
    ],

    // Documentation Sections
    usageGuide: {
        step: "Installation & Usage",
        steps: [
            {
                title: "Step 1: Choose and Copy Your Component",
                content: "Follow the Installation instructions and Copy the source code of the component you want to use from the library."
            },
            {
                title: "Step 2: Create a New .tsx File",
                content: "Inside your project, create a new .tsx file, e.g., Button.tsx."
            },
            {
                title: "Step 3: Paste the Copied Component Code",
                content: "Paste the copied code into the new .tsx file and modify it according to your needs."
            },
        ],
        sections: [
            {
                title: "Example:",
                content: "// Button.tsx\n\ninterface ButtonProps {\n  label: string;\n  onClick?: () => void;\n}\n\nconst Button: React.FC<ButtonProps> = ({ label, onClick }) => {\n  return (\n    <button\n      onClick={onClick}\n      className={`bg-yellow-300 text-black hover:bg-yellow-400 transition-all ease-in w-fit px-6 py-2 rounded-md`}\n    >\n      {label}\n    </button>\n  );\n};\n\nexport default Button;"
            },
            {
                title: "Step 4: Import and Use the Component",
                content: "Import and use the newly created component anywhere in your project."
            },
            {
                title: "Example Usage:",
                content: "import Button from './Button';\n\nconst App = () => {\n  return (\n    <div>\n      <Button label=\"Click Me\" />\n    </div>\n  );\n};\n\nexport default App;"
            }
        ]
    },
};

/**
 * 📈 SEO Metadata Generator - Use in Layout.tsx
 */
export const siteMetadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
    },
    icons: {
        icon: siteConfig.favicons.icon,
        shortcut: siteConfig.favicons.shortcut,
        apple: siteConfig.favicons.apple,
    },
    alternates: {
        canonical: siteConfig.url,
    },
    verification: {
        google: "AjNNh2XIyX4CHP2CbV2pz0zjNgzmvvx0wBAMHyfTdKM",
    },
    manifest: siteConfig.favicons.manifest,
};

/**
 * 🛠 JSON-LD Structured Data (Improves Page Speed & SEO)
 */
export const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": siteConfig.title,
    "operatingSystem": "Web",
    "applicationCategory": "Technology",
    "description": siteConfig.description,
    "author": {
        "@type": "Person",
        "name": siteConfig.author,
    },
    "image": siteConfig.ogImage,
    "url": siteConfig.url,
};
