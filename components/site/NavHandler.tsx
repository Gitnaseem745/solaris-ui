'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/site/Navbar";

export default function NavbarHandler() {
    const pathname = usePathname();
    const hideNavbarRegex = /^\/components(\/.*)?$/; // Matches all paths under /components
    const shouldHideNavbar = hideNavbarRegex.test(pathname);

    if (shouldHideNavbar) {
        return null; // Return null to hide the navbar
    }

    return <Navbar />;
}
