import PageNavigator from "@/components/site/PageNavigator/PageNavigator";
import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SlArrowRight } from "react-icons/sl";
import { TbBrandFramerMotion } from "react-icons/tb";
import Head from 'next/head';

export default function Home() {
    return (
        <>
        <Head>
        <meta name="google-site-verification" content="AjNNh2XIyX4CHP2CbV2pz0zjNgzmvvx0wBAMHyfTdKM" />
        </Head>
        <div className="w-full flex justify-center items-center max-sm:items-start max-sm:justify-start px-8 min-h-[calc(100vh-96px)] py-10 mt-20">
            <div className="flex flex-col gap-10 justify-center items-center w-10/12 max-sm:w-full relative max-sm:items-start max-sm:justify-start">

                <Link href={'/components/interactive-blocks/social-tag'} className="font-sans text-sm font-semibold text-foreground rounded-full bg-background border border-foreground border-neutral-700 px-4 py-2 flex justify-center items-center gap-2 hover:bg-white/10">
                    <IoLogoWebComponent />
                    <h2 className="max-sm:text-xs">Introducing Interactive Blocks</h2>
                    <SlArrowRight className="size-[10px]" />
                </Link>

                <h1 className="text-7xl font-bold max-lg:text-5xl max-sm:text-[40px] max-sm:text-left text-foreground text-center">
                    Component
                    Library for <br className="max-sm:hidden" />
                    Design Excellence
                    <span className="font-sans text-neutral-100"></span>
                </h1>
                <p className="font-sans max-sm:text-left max-sm:w-full text-[18px] text-center w-6/12 max-2xl:w-9/12 max-md:w-10/12 tracking-wide text-foreground">
                    <span className="font-semibold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                        An React component library built with TypeScript and Tailwind CSS
                    </span>{" "}
                    designed for developers who value efficiency. Quickly select, copy, and paste components into your project to accelerate development seamlessly :)
                </p>
                <div className="w-full content-center">
                    <ul className="flex gap-2 flex-wrap justify-center items-center">
                        <div className="w-[320px] max-sm:w-full">
                            <PageNavigator label="Explore Components" link="/components" active={true} />
                        </div>
                        <div className="w-[320px] max-sm:w-full">
                            <PageNavigator label="Documentation" link="/components/buttons/installation-guide" />
                        </div>
                    </ul>
                </div>

                <div className="text-foreground flex flex-col justify-center items-center gap-8 w-full">
                    <h1 className="text-4xl max-sm:text-xl font-semibold font-sans text-center max-sm:text-left">Tech Stack Behind Solaris</h1>
                    <div className="flex gap-6 text-4xl max-sm:gap-3">
                        <FaReact />
                        <BiLogoTypescript />
                        <RiTailwindCssFill />
                        <TbBrandFramerMotion />
                        <RiNextjsFill />
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}
