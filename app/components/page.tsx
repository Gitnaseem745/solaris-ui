import { BentoCard, BentoGrid } from "@/components/site/BentoCard/BentoCard";
import { AiOutlineDingding } from "react-icons/ai";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoIosSwitch } from "react-icons/io";
import { MdOutlineSmartButton } from "react-icons/md";
import { TbCardsFilled, TbCheckbox, TbSelect } from "react-icons/tb";

export default function page() {
    return (
        <div className="px-6 py-10 font-sans min-h-screen text-foreground flex justify-center items-center gap-6 flex-col max-sm:items-start max-sm:pt-0 mt-20">
            <p className="text-orange-500 font-semibold text-center max-sm:text-left mt-10">Components</p>
            <h1 className="text-5xl font-bold text-center max-sm:text-left">Build Fast With Our UI Components</h1>
            <p className="text-center text-[18px] mb-6 text-neutral-400 max-sm:text-left">Accelerate your development with ready-to-use, responsive UI components, <br className="max-sm:hidden" /> designed for speed, efficiency, and seamless integration</p>
            <div className="w-[950px] max-lg:w-11/12 max-sm:w-full">
                <BentoGrid>
                    <BentoCard
                        name="Interactive Blocks"
                        classname="col-span-2 max-md:col-span-4"
                        background={
                            <div className="absolute inset-0 bg-neutral-700/5 data-light:backdrop-blur-sm opacity-20"></div>
                        }
                        Icon={AiOutlineDingding}
                        description="Explore customizable and interactive Blocks for your projects. Tailored for adaptability and style."
                        href="/components/interactive-blocks/social-tag"
                        cta="Explore Interactive Blocks"
                    />
                    <BentoCard
                        name="Card Components"
                        classname="col-span-2 max-md:col-span-4"
                        background={
                            <div className="absolute inset-0 bg-neutral-700/5 data-light:backdrop-blur-sm opacity-20"></div>
                        }
                        Icon={TbCardsFilled}
                        description="Explore dynamic and customizable card designs for your projects. Tailored for adaptability and style."
                        href="/components/cards/ecom-product-card"
                        cta="Explore Cards"
                    />
                    <BentoCard
                        name="Button Components"
                        background={
                            <div className="absolute inset-0 bg-neutral-700/5 data-light:backdrop-blur-sm opacity-20"></div>
                        }
                        Icon={MdOutlineSmartButton}
                        description="Discover versatile button styles to enhance user interaction across your applications."
                        href="/components/buttons/default-button"
                        cta="View Buttons"
                        classname="col-span-2 max-md:col-span-4"
                    />
                    <BentoCard
                        name="Alert Components"
                        classname="col-span-2 max-sm:col-span-4"
                        background={
                            <div className="absolute inset-0 bg-neutral-700/5 data-light:backdrop-blur-sm opacity-20"></div>
                        }
                        Icon={HiOutlineBellAlert}
                        description="Choose from a variety of alert styles to efficiently notify users with important messages."
                        href="/components/alerts/success-alert"
                        cta="Check It Out"
                    />
                    <BentoCard
                        name="Switch Components"
                        classname="col-span-2 max-md:col-span-4"
                        background={
                            <div className="absolute inset-0 bg-neutral-700/5 data-light:backdrop-blur-sm opacity-20"></div>
                        }
                        Icon={IoIosSwitch}
                        description="Discover interactive and stylish switch designs to toggle settings effortlessly."
                        href="/components/switches/simple-switch"
                        cta="Explore Available Switches"
                    />
                    <BentoCard
                        name="Select Components"
                        classname="col-span-2 max-sm:col-span-4"
                        background={
                            <div className="absolute inset-0 bg-neutral-700/5 data-light:backdrop-blur-sm opacity-20"></div>
                        }
                        Icon={TbSelect}
                        description="Explore interactive and customizable select menus to provide seamless selection experiences."
                        href="/components/selects/simple-select"
                        cta="View All Selects"
                    />
                    <BentoCard
                        name="Checkbox Components"
                        classname="col-span-2 max-md:col-span-4"
                        background={
                            <div className="absolute inset-0 bg-neutral-700/5 data-light:backdrop-blur-sm opacity-20"></div>
                        }
                        Icon={TbCheckbox}
                        description="Discover interactive and stylish checkbox designs to check options effortlessly."
                        href="/components/checkboxes/icon-checkbox"
                        cta="Explore Available Checkboxes"
                    />
                </BentoGrid>
            </div>
        </div>
    );
}
