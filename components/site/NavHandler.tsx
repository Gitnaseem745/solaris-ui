'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/site/Navbar";

export default function NavbarHandler() {
    const pathname = usePathname();
    const hideNavbarComponents = /^\/components(\/.*)?$/; // Matches all paths under /components
    const hideNavbarHooks = /^\/hooks\/[^/]+(\/.*)?$/; // Matches all paths under /hooks/{hookName}
    const hideNavbarAnimations = /^\/animations(\/.*)?$/; // Matches all paths under /animations
    const hideNavbarThemes = /^\/themes(\/.*)?$/; // Matches all paths under /themes
    const hideNavbarHome = /^\/newhome(\/.*)?$/; // Matches all paths under /components
    
    // Check if the current pathname matches any of the patterns
    const shouldHideNavbar = hideNavbarComponents.test(pathname) || hideNavbarHooks.test(pathname) || hideNavbarAnimations.test(pathname) || hideNavbarThemes.test(pathname);

    if (shouldHideNavbar) {
        return null;
    }

    if(hideNavbarHome.test(pathname)) {
        return null;
    }

    return <Navbar />;
}
