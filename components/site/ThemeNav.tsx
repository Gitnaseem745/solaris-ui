import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaGithub } from "react-icons/fa";

export default function ThemeNav() {
    return (
        <div className="gap-3 flex fixed top-5 right-4 z-50">
        <Link href={'https://github.com/Gitnaseem745/solaris-ui'} target="_blank" className="font-semibold font-sans">
            <div className="p-2 rounded-md text-foreground hover:bg-white/5 hover:backdrop-blur-sm">
                <FaGithub size={18} />
            </div>
        </Link>
        <ThemeToggle />
    </div>
    )
}
