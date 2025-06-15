import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./ThemeToggle"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { href: "/components/installation-guide", label: "Guide" },
    { href: "/components/avatar", label: "Components" },
    { href: "/hooks", label: "Hooks" },
    { href: "/themes/create", label: "Themes" },
    { href: "/animations", label: "Animations" }
  ]
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto h-16 flex items-center px-4">
        {/* Logo - Left Column */}
        <div className="flex-none">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image src="/logo.png" width={36} height={36} alt="Solaris Icon" />
            <h1 className="text-lg font-bold ml-2 bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
              {siteConfig.name}
            </h1>
          </Link>
        </div>
        
        {/* Menu Items - Middle Column */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <div className="flex space-x-2">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} mobile={false}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        
        {/* Action Buttons - Right Column */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="hidden md:flex items-center gap-3">
            <Link href={siteConfig.githubUrl} target="_blank">
              <Button variant="outline" size="sm" className="gap-2">
                <FaGithub size={16} />
                <span className="hidden lg:inline">GitHub</span>
              </Button>
            </Link>
            {/* <Button size="sm">Get Started</Button> */}
          </div>
          
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button 
            className="p-2 md:hidden rounded-md text-foreground hover:bg-accent/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container mx-auto py-3 px-4">
            <div className="flex flex-col space-y-1">
                {links.map((link) => (
                    <NavLink key={link.href} href={link.href} mobile={true}>
                    {link.label}
                    </NavLink>
                ))}
              <div className="h-px bg-border my-2"></div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href={siteConfig.githubUrl} target="_blank" className="w-full sm:w-auto">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <FaGithub size={16} />
                    GitHub
                  </Button>
                </Link>
                {/* <Button size="sm" className="w-full sm:w-auto">Get Started</Button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Helper component for navigation links
interface NavLinkProps {
  href: string
  children: React.ReactNode
  mobile?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => {
  return (
    <Link 
      href={href} 
      className={cn(
        "font-medium text-sm transition-colors",
        mobile 
          ? "py-2 px-3 block w-full hover:bg-accent/50 rounded-md"
          : "py-2 px-3 rounded-md hover:bg-accent/50"
      )}
    >
      {children}
    </Link>
  )
}

export default Navbar
