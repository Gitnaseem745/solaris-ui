import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

interface PageNavigatorProps {
    label: string;
    comingSoon?: boolean;
    active?: boolean;
    link: string;
}
const PageNavigator: React.FC<PageNavigatorProps> = ({ label, link, comingSoon, active }) => {
  return (
        <li>
            <Link
                href={link}
                className={`
                inline-flex font-sans w-full items-center justify-between whitespace-nowrap rounded-lg border border-[#23232A] bg-background px-4 py-2 font-semibold transition-all ease-in hover:bg-foreground hover:text-background sm:h-14 ${comingSoon ? "pointer-events-none" : ''} ${active ? "bg-foreground text-background hover:opacity-85" : ""}
                `}>
                <span className="truncate">
                    {label}
                </span>
                {!comingSoon && <FaArrowRight
                className="-mr-1 ml-2 size-4"
                />}
                {comingSoon && <p className="text-neutral-700 text-sm max-sm:text-xs">AVAILABLE SOON!</p>}
            </Link>
        </li>
  )
}

export default PageNavigator
