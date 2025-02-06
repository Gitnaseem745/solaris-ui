import type { Metadata } from "next";
import { Philosopher } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/site/Footer/Footer";
import NavbarHandler from "@/components/site/NavHandler";
import { ThemeProvider } from "@/components/site/theme-provide/theme-provider";

const philosopher = Philosopher({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: "normal",
    display: "optional",
})

export const metadata: Metadata = {
  title: "Home - Solaris UI",
  description: "React and Nextjs Copy Paste UI Components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={philosopher.className}
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
      </body>
    </html>
  );
}
