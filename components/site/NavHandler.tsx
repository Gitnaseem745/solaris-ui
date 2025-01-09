'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/site/Navbar/Navbar";

export default function NavbarHandler() {
    const pathname = usePathname();
    const hideNavbarRegex = /^\/components\/[^/]+\/[^/]+$/;
    const shouldHideNavbar = hideNavbarRegex.test(pathname);

    if (shouldHideNavbar) {
        return <p></p>
        // return <div className="w-full flex justify-center my-4">
        //     <h1 className="text-xl max-sm:text-xl -ml-2 font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
        //         Solaris UI
        //     </h1>
        // </div>;
    }

    return <Navbar />;
}
