import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Components - Solaris UI",
    description: "React and Nextjs Copy Paste UI Components.",
};

export default function ComponentsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
return (
    <>{children}</>
)
};
