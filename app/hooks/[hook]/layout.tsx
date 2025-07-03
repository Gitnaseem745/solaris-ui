import UniversalSidebar from "@/components/site/UniversalSidebar";
import { siteConfig } from "@/config/site";
import { allHooks } from "@/lib/getHooks";

export async function generateMetadata({ params }: { params: Promise<{ hook: string }> }) {
    const { hook } = await params;
    const title = `${hook} - Solaris UI`;
    const description = `Ready to use Production grade ${hook} hook by Solaris UI`;
    
    const keywords = [
        `${hook} hook`, 
        `React ${hook}`, 
        `${hook} React hook`, 
        `Solaris UI ${hook}`, 
        `TypeScript ${hook}`, 
        `React ${hook} implementation`,
        'React hooks', 
        'custom hooks', 
        'production-ready hooks',
        'React state management',
        'UI development hooks',
        'frontend utilities',
        'JavaScript hooks',
        'TypeScript hooks',
        'React development',
        'web development tools'
    ];

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        url: `https://solarisui.com/hooks/${hook}`,
        images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterHandle,
      },
    };
  }

export default function Layout({ children }: { children: string }){
    return (
        <div className="flex flex-col w-full max-w-screen-xl mx-auto lg:flex-row">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <UniversalSidebar
                            heading="Animations"
                            items={allHooks}
                        />
                    </aside>
        
                    {/* Main Content */}
                    <main className="max-w-4xl overflow-auto">
                        {children}
                    </main>
                </div>
    )
}
