'use client';
import { DarkButton, DefaultButton, DisabledButton, GBButton, GlassButton, HBorderButton, HFBButton, HFTButton, HGBGButton, HGlowButton, HGSButton, HShineButton, HUButton, LightButton, NeonButton } from "@/components/buttons";
import RoundedButton from "@/components/RoundedButton/RoundedButton";
import Copy from "@/components/site/Copy/Copy";
import { useState } from "react";
const Page = () => {
    const [activeComponent, setActiveComponent] = useState<number | null>(null);
  return (
    <div className="w-full min-h-fit py-20">
        <div className="relative w-full min-h-full flex flex-col justify-start items-center flex-wrap">
            <div className="mb-16">
                <h1 className="text-5xl mb-6 max-sm:mb-3 font-bold max-lg:text-5xl max-sm:text-3xl text-center">
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                        Solaris </span>
                        <span className="font-sans">Buttons</span>
                </h1>
                <p className="font-sans text-[18px] text-center max-sm:text-[15px] max-sm:px-4 text-neutral-400">A Page Which Showcases Solaris UI <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                    Copy Paste Button Components</span></p>
            </div>
            <div className="mt-10 max-sm:-mt-10 grid grid-cols-3 w-9/12 justify-items-center items-center  max-[400px]:grid-cols-1 max-md:grid-cols-2 gap-6">
                {componentShowcase.map(({ component: Component, name, props }, i) => (
                    <div
                    onMouseEnter={() => setActiveComponent(i)}
                    onMouseLeave={() => setActiveComponent(null)}
                    key={i}
                    className="size-[180px] bg-white/0 backdrop-blur-sm p-4 flex justify-center items-center gap-10 py-5 relative overflow-hidden max-sm:border-b-[0.5px] max-sm:border-neutral-700">
                        <Component {...props} />
                        {activeComponent === i && (
                            <div className="absolute top-2 right-2">
                                <Copy component={name} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
const label = "Button";
const componentShowcase = [
    { component: DisabledButton, name: "DisabledButton", props: { label: label } },
    { component: DefaultButton, name: "DefaultButton", props: { label: label } },
    { component: HShineButton, name: "HShineButton", props: { label: label } },
    { component: RoundedButton, name: "RoundedButton", props: { label: label } },
    { component: HGlowButton, name: "HGlowButton", props: { label: label } },
    { component: NeonButton, name: "NeonButton", props: { label: label } },
    { component: HFBButton, name: "HFBButton", props: { label: label } },
    { component: HFTButton, name: "HFTButton", props: { label: label } },
    { component: HUButton, name: "HUButton", props: { label: label } },
    { component: DarkButton, name: "DarkButton", props: { label: label } },
    { component: LightButton, name: "LightButton", props: { label: label } },
    { component: GlassButton, name: "GlassButton", props: { label: label } },
    { component: HGSButton, name: "HGSButton", props: { label: label } },
    { component: HGBGButton, name: "HGBGButton", props: { label: label } },
    { component: HBorderButton, name: "HBorderButton", props: { label: label } },
    { component: GBButton, name: "GBButton", props: { label: label } },
];

export default Page
