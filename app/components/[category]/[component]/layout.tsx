// import DocsAlert from "@/components/site/DocsAlert/docs-alert";
import Sidebar from "@/components/site/Sidebar/Sidebar";
import { components } from "@/docs/components";
import { toCapitalCase } from "@/utils/capital-case";

export async function generateMetadata({ params }: {
    params: Promise<{ component: string }>
}) {
    const { component } = await params
    return {
      title: `${toCapitalCase(component.replaceAll('-', ' '))} - Solaris UI`,
      description: "React UI Component Library",
    }
  }

type ComponentCategories = keyof typeof components;

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: ComponentCategories; component: string }>;
}) {
  const { category, component } = await params;

  return (
    <>
    {/* <DocsAlert /> */}
    <div className="flex flex-col w-full max-w-screen-xl mx-auto lg:flex-row max-lg:mt-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4">
        <Sidebar
          currentCategory={category}
          currentComponent={component}
          />
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4 sm:p-6 mt-6 overflow-auto">
        {children}
      </main>
    </div>
    </>
  );
}
