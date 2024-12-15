'use client';
import { DarkButton, DefaultButton, DisabledButton, GBButton, GlassButton, HBorderButton, HFBButton, HFTButton, HGBGButton, HGlowButton, HGSButton, HShineButton, HUButton, LightButton, NeonButton, FIFButton, RoundedButton, FDButton, FSUButton, FEButton, FUPButton, FDLButton, FHButton, FACButton, FSendButton, FLoaderButton, FCLoadButton, FLSButton, NDelButton, BLButton, FShutButton } from "@/components/Buttons/buttons";
import Copy from "@/components/site/Copy/Copy";
import { useState } from "react";
const Page = () => {
    const [activeComponent, setActiveComponent] = useState<number | null>(null);
    const dir = "Buttons";
  return (
    <div className="w-full min-h-fit py-20">
        <div className="relative w-full min-h-full flex flex-col justify-start items-center flex-wrap">
            <div className="mb-16">
                <h1 className="text-5xl mb-6 max-sm:mb-3 font-bold max-lg:text-5xl max-sm:text-3xl text-center">
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                        Solaris </span>
                        <span className="font-sans">Buttons</span>
                </h1>
                <p className="font-sans text-[18px] text-center max-sm:text-[15px] max-md:px-6 text-neutral-400">A Page Which Showcases {componentShowcase.length} Solaris UI <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                    Copy Paste Button Components</span></p>
            </div>
            <div className="mt-10 max-sm:-mt-10 grid grid-cols-3 w-9/12 justify-items-center items-center  max-[400px]:grid-cols-1 max-md:grid-cols-2 gap-6">
                {componentShowcase.map(({ component: Component, name, props }, i) => (
                    <div
                    onMouseEnter={() => setActiveComponent(i)}
                    onMouseLeave={() => setActiveComponent(null)}
                    key={i}
                    className="size-[180px] bg-white/0 p-4 flex justify-center items-center gap-10 py-5 relative overflow-hidden max-sm:border-b-[0.5px] max-sm:border-neutral-700">
                        <Component {...props} />
                        {activeComponent === i && (
                            <div className="absolute top-2 right-2">
                                <Copy component={name} dir={dir} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
const componentShowcase = [
    { component: DarkButton, name: "DarkButton", props: { label: "Light" } },
    { component: LightButton, name: "LightButton", props: { label: "Dark" } },
    { component: DisabledButton, name: "DisabledButton", props: { label: "Disabled" } },
    { component: DefaultButton, name: "DefaultButton", props: { label: "Default" } },
    { component: HShineButton, name: "HShineButton", props: { label: "Gradient" } },
    { component: HGlowButton, name: "HGlowButton", props: { label: "Lightup" } },
    { component: NeonButton, name: "NeonButton", props: { label: "Glowing" } },
    { component: HFBButton, name: "HFBButton", props: { label: "Bottom" } },
    { component: HFTButton, name: "HFTButton", props: { label: "Top Fill" } },
    { component: HUButton, name: "HUButton", props: { label: "Underline" } },
    { component: RoundedButton, name: "RoundedButton", props: { label: "Rounded" } },
    { component: FIFButton, name: "FIFButton", props: { label: "Motion" } },
    { component: FDButton, name: "FDButton", props: { label: "Delete" } },
    { component: NDelButton, name: "NDelButton", props: { label: "Delete" } },
    { component: FSUButton, name: "FSUButton", props: { label: "Scale " } },
    { component: FACButton, name: "FACButton", props: { label: "Add to cart", secondryLabel: "Added"} },
    { component: FSendButton, name: "FSendButton", props: { label: "Send", secondryLabel: "Sent" } },
    { component: FEButton, name: "FEButton", props: { label: "Email" } },
    { component: FShutButton, name: "FShutButton", props: { label: "SHUTTER" } },
    { component: FUPButton, name: "FUPButton", props: { label: "Upload" } },
    { component: BLButton, name: "BLButton", props: { label: "Blade" } },
    { component: FDLButton, name: "FDLButton", props: { label: "Download" } },
    { component: FLoaderButton, name: "FLoaderButton", props: { label: "Loading" } },
    { component: FCLoadButton, name: "FCLoadButton", props: { label: "Load" } },
    { component: FLSButton, name: "FLSButton", props: { label: "Load" } },
    { component: FHButton, name: "FHButton", props: { label: "Help" } },
    { component: GlassButton, name: "GlassButton", props: { label: "Glass" } },
    { component: HGSButton, name: "HGSButton", props: { label: "Glass Shiny" } },
    { component: HBorderButton, name: "HBorderButton", props: { label: "Border" } },
    { component: GBButton, name: "GBButton", props: { label: "breathing" } },
    { component: HGBGButton, name: "HGBGButton", props: { label: "Gradient Bg" } },
];

export default Page
