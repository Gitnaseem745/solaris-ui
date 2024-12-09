import type { Metadata } from "next";
import { Philosopher } from 'next/font/google'
import "./globals.css";

export const philosopher = Philosopher({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: "normal",
    display: "optional",
})

export const metadata: Metadata = {
  title: "Solaris UI",
  description: "React Copy Paste UI Components.",
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
      >
        {children}
      </body>
    </html>
  );
}
