'use client'

import { Button } from "@/components/ui/button";
import FloatNav from "@/components/ui/float-navbar";

export default function NavbarDemo() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ];

  const cta = { text: "Get Started", href: "#" };

  return (
    <FloatNav>
      <div className="w-full flex justify-between items-center px-4 py-2">
        {/* Logo Section */}
        <div className="sm:text-2xl text-xl font-bold text-primary">
          <a href="/">BrandLogo</a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden space-x-6 sm:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Call-to-Action Button */}
        <div className="hidden sm:block">
          <Button variant="default">{cta.text}</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <Button variant="ghost" size="icon">
            ☰
          </Button>
        </div>
      </div>
    </FloatNav>
  );
}
