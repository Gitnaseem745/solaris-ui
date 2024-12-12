import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const Navbar: React.FC = () => {
  return (
    <nav className="w-full max-sm:h-10 max-sm:pt-6 h-24 px-20 py-10 flex justify-between items-center max-sm:px-6">
        <h1 className="text-2xl max-sm:text-xl font-bold text-center bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent cursor-pointer">
        <Link href="/">
            Solaris
        </Link>
        </h1>
        <div className="menu flex flow-row gap-10 justify-center items-center">
            <Link href={'https://github.com/Gitnaseem745'} target="_blank" className="rounded-md text-[16px] max-sm:text-sm font-semibold max-sm:hidden text-white/50 transition-all ease-in-out hover:text-white">Dev</Link>
            <Link href={'https://github.com/Gitnaseem745/solaris-ui'} target="_blank" className="text-sm font-semibold font-sans">
            <div className="bg-gradient-to-r from-yellow-100 cursor-pointer to-white rounded-full py-1 px-4 max-w-fit text-black/50 hover:text-black transition-all ease-in-out flex justify-center items-center gap-2">
            <FaGithub size={18} />
            <p className="max-sm:hidden">Give Star</p>
            </div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
