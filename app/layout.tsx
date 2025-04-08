import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/site/Footer";
import NavbarHandler from "@/components/site/NavHandler";
import { ThemeProvider } from "@/components/site/theme-provider";
import { siteMetadata, structuredData } from "@/config/site";
import Script from "next/script";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // you can customize as needed
    display: 'swap',
    variable: '--font-poppins', // optional for using with Tailwind
})

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={poppins.variable}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavbarHandler />
                    <div>
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>


                {/* Inject JSON-LD Structured Data for SEO */}
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />

            </body>
        </html>
    );
}
