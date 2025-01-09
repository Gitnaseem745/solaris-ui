// import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import ThemeToggle from "../ThemeToggle/ThemeToggle"

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
    <nav className="max-sm:h-12 max-xl:w-8/12 w-6/12 h-16 max-sm:px-1 max-sm:w-11/12 max-sm:rounded-xl px-4 flex justify-between items-center backdrop-blur-sm
    bg-neutral-800/10 border-none shadow-md rounded-3xl fixed top-5 z-[1000]">
    <Link href="/" className="flex items-center cursor-pointer">
        {/* <Image src="/solaris.png" width={60} height={60} alt="Solaris Icon" /> */}
        <h1 className="text-xl max-sm:text-xl ml-2 font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
          Solaris
        </h1>
      </Link>
        <div className="menu flex flow-row gap-3 justify-center items-center mr-1">
            <Link href={'https://github.com/Gitnaseem745/solaris-ui'} target="_blank" className="font-semibold font-sans">
            <div className="p-2 rounded-md text-foreground hover:bg-white/5 hover:backdrop-blur-sm">
            <FaGithub size={18} />
            </div>
            </Link>
            <ThemeToggle />
        </div>
    </nav>
    </div>
  )
}

export default Navbar
