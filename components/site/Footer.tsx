import { siteConfig } from "@/config/site";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background py-6 border-t border-border">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Footer Text */}
                <p className="sm:text-left text-center">

                    <span className='font-sans'>
                        {footerText[0]}
                    </span>
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                        <Link
                            target='_blank'
                            href={siteConfig.socialLinks[2].url}>
                            {footerText[1]}
                        </Link>
                    </span>
                    <span className='font-sans'>
                        {footerText[2]}
                    </span>
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                    {siteConfig.socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition"
                            aria-label={link.name}
                        >
                            {getIcon(link.name.toLowerCase())}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

// Helper function to get the appropriate icon
const getIcon = (name: string) => {
    switch (name) {
        case "github":
            return <GithubIcon className="w-5 h-5" />;
        case "linkedin":
            return <LinkedinIcon className="w-5 h-5" />;
        case "twitter":
            return <TwitterIcon className="w-5 h-5" />;
        default:
            return null;
    }
};
const footerText = ["Brought to life by ", "Naseem Ansari", " – Building Experiences that Inspire"];

export default Footer;
