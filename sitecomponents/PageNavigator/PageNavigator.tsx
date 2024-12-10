import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

interface PageNavigatorProps {
    label: string;
    link: string;
}
const PageNavigator: React.FC<PageNavigatorProps> = ({ label, link }) => {
  return (
        <li>
            <Link
                href={link}
                className="
                inline-flex font-sans w-full items-center justify-between whitespace-nowrap rounded-lg border border-[#23232A] bg-[#070709] px-4 py-2 font-semibold transition-all ease-in hover:bg-gray-700 hover:text-white sm:h-14 hover:bg-opacity-10 hover:backdrop-blur-md
                ">
                <span className="truncate">
                    {label}
                </span>
                <FaArrowRight
                className="-mr-1 ml-2 opacity-60 size-4"
                />
            </Link>
        </li>
  )
}

export default PageNavigator
