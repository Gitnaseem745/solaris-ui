import Sidebar from "@/components/site/Sidebar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Installation - Solaris UI",
    description: "Installation guide for Solaris UI",
    openGraph: {
        title: "Installation - Solaris UI",
        description: "Installation guide for Solaris UI",
        url: "https://solarisui.com/components/installation-guide",
        siteName: siteConfig.title,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.title,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Installation - Solaris UI",
        description: "Installation guide for Solaris UI",
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
    },
};

export default async function InstallationLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto lg:flex-row max-lg:mt-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4 sm:p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
