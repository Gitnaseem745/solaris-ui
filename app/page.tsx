import PageNavigator from "@/components/site/PageNavigator";
import Beacon from "@/components/ui/beacon";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

// Tech stack icons
const Icons = [FaReact, BiLogoTypescript, RiTailwindCssFill, TbBrandFramerMotion, RiNextjsFill];
export default function Home() {
    return (
        <>
            {/* Main container for the home page */}
            <div className="w-full flex justify-center items-center max-sm:items-start max-sm:justify-start px-8 min-h-[calc(100vh-96px)] py-10 mt-20">
                <div className="flex flex-col gap-10 justify-center items-center w-10/12 max-sm:w-full relative max-sm:items-start max-sm:justify-start">

                    {/* Beacon Section */}
                    <Beacon url="/themes/create" icon={<IoLogoWebComponent />} text="Introducing SolarisUI Themes!" />

                    {/* Hero Section */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-sm:text-4xl max-sm:text-left text-foreground text-center font-sans">
                        Less Time Coding.  <br className="hidden sm:block" />More Time Creating.
                    </h1>
                    <p className="font-sans max-sm:text-left max-sm:w-full text-[18px] text-center w-6/12 max-2xl:w-9/12 max-md:w-10/12 tracking-wide text-foreground">
                        <span className="font-semibold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                            React UI Component Library built with TypeScript and Tailwind CSS —
                        </span>{" "}
                        A fast, flexible UI library for developers. Copy, paste, and build beautiful interfaces in seconds.
                    </p>

                    {/* Navigation Buttons Section */}
                    <div className="w-full content-center">
                        <ul className="flex gap-2 flex-wrap justify-center items-center">
                            <div className="w-[320px] max-sm:w-full">
                                <PageNavigator label="Explore Components" link="/components/advance-toast" active={true} />
                            </div>
                            <div className="w-[320px] max-sm:w-full">
                                <PageNavigator label="Installation Guide" link="/components/installation-guide" />
                            </div>
                        </ul>
                    </div>

                    {/* Tech Stack Section */}
                    <div className="text-foreground flex flex-col justify-center items-center gap-8 w-full">
                        <h1 className="text-4xl max-sm:text-xl font-semibold font-sans text-center max-sm:text-left">
                            Tech Stack Behind Solaris
                        </h1>
                        <div className="flex gap-6 text-4xl max-sm:gap-3">
                            {Icons.map((Icon, i) => (
                                <Icon key={i} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
