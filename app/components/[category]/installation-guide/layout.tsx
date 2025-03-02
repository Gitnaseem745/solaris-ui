import Sidebar from "@/components/site/Sidebar/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Installation - Solaris UI",
    description: "React and Nextjs Copy Paste UI Components.",
};

export default async function InstallationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string; component: string }>;
}) {
  const { category, component } = await params;

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto lg:flex-row max-lg:mt-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4">
        <Sidebar
          currentCategory={category}
          currentComponent={component}
        />
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4 sm:p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
