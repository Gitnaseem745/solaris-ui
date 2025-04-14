'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/site/Navbar";
import ThemeNav from "./ThemeNav";

export default function NavbarHandler() {
    const pathname = usePathname();
    const hideNavbarComponents = /^\/components(\/.*)?$/; // Matches all paths under /components
    const hideNavbarHooks = /^\/hooks\/[^/]+(\/.*)?$/; // Matches all paths under /hooks/{hookName}
    const hideNavbarAnimations = /^\/animations(\/.*)?$/; // Matches all paths under /animations
    const shouldHideNavbar = hideNavbarComponents.test(pathname) || hideNavbarHooks.test(pathname) || hideNavbarAnimations.test(pathname);

    if (shouldHideNavbar) {
        return <ThemeNav />;
    }

    return <Navbar />;
}
