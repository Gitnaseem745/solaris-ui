import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
    <nav className="w-10/12 max-sm:h-20 max-md:w-full max-sm:pt-6 h-24 px-20 py-10 flex justify-between items-center max-sm:pr-6 max-sm:pl-4">
    <Link href="/" className="flex items-center cursor-pointer">
        <Image src="/solaris.png" width={60} height={60} alt="Solaris Icon" />
        <h1 className="text-xl max-sm:text-xl -ml-2 font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
          Solaris
        </h1>
      </Link>
        <div className="menu flex flow-row gap-10 justify-center items-center">
            <Link href={'https://github.com/Gitnaseem745'} target="_blank" className="rounded-md text-[16px] max-sm:text-sm font-semibold max-sm:hidden text-white/50 transition-all ease-in-out hover:text-white">Dev</Link>
            <Link href={'https://github.com/Gitnaseem745/solaris-ui'} target="_blank" className="text-sm font-semibold font-sans">
            <div className="bg-gradient-to-r from-yellow-100 cursor-pointer to-white rounded-full py-1 px-4 max-w-fit text-black/50 hover:text-black transition-all ease-in-out flex justify-center items-center gap-2">
            <FaGithub size={18} />
            <p className="max-sm:hidden">Guide</p>
            </div>
            </Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
