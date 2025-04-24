'use client';

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function ThemeNav() {
    const pathname = usePathname();
    return (
        <div className={cn("gap-3 fixed top-5 right-4 z-50", pathname === "/themes/create" ? "hidden" : "flex")}>
        <Link href={'https://github.com/Gitnaseem745/solaris-ui'} target="_blank" className="font-semibold font-sans">
            <div className="p-2 rounded-md text-foreground hover:bg-white/5 hover:backdrop-blur-sm">
                <FaGithub size={18} />
            </div>
        </Link>
        <ThemeToggle />
    </div>
    )
}
