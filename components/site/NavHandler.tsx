'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/site/Navbar/Navbar";

export default function NavbarHandler() {
    const pathname = usePathname();
    const hideNavbarRegex = /^\/components\/[^/]+\/[^/]+$/;
    const shouldHideNavbar = hideNavbarRegex.test(pathname);

    if (shouldHideNavbar) {
        return <p></p>
    }

    return <Navbar />;
}
