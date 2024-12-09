import Navbar from "@/components/Navbar/Navbar";
export default function Home() {
    return (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-screen relative">
        <Navbar />
        <h1 className="text-7xl font-bold max-lg:text-5xl max-sm:text-3xl text-center bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent ">
        Solaris UI
        </h1>
        <p className="text-xl max-sm:text-sm">Coming soon...</p>
        </div>
  );
}
