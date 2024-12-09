import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-24 absolute top-0 px-20 py-10 flex justify-between items-center max-sm:px-6">
        <h1 className="text-2xl max-sm:text-xl font-bold text-center bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">Solaris</h1>
        <div className="menu">
            <Link href={'https://github.com/Gitnaseem745'} target="_blank" className="rounded-md text-[16px] max-sm:text-sm font-semibold">Naseem Ansari</Link>
        </div>
    </nav>
  )
}

export default Navbar
