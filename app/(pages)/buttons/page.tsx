'use client';
import Copy from "@/components/site/Copy/Copy";
import * as Components from "@/components/buttons"
const Page = () => {
  return (
    <div className="w-full min-h-fit py-20">
        <div className="relative min-h-full flex flex-col justify-start items-center flex-wrap">
            <div className="mb-16">
                <h1 className="text-5xl mb-6 font-bold max-lg:text-5xl max-sm:text-3xl text-center">
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                        Solaris </span>
                        <span className="font-sans">Buttons</span>
                </h1>
                <p className="font-sans text-[18px] text-center max-sm:text-sm max-sm:px-2 text-neutral-400">A Page Which Showcases Solaris UI <span className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
                    Copy Paste Button Components</span></p>
            </div>
            <div className="grid grid-cols-4 max-sm:grid-cols-2 max-[400px]:grid-cols-1 max-md:grid-cols-3 items-center gap-6">
                {componentShowcase.map(({ component: Component, props }, i) => (
                    <div key={i} className="w-[180px] h-[120px] bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex justify-center items-center gap-10 py-5 relative overflow-hidden">
                        <Component {...props} />
                        <div className="absolute top-2 right-2">
                            <Copy component={Component.name || 'Unknown Component'} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
const label = "Button";
const componentShowcase = [
    { component: Components.DisabledButton, props: { label: `${label}` } },
    { component: Components.DefaultButton, props: { label: `${label}` } },
    { component: Components.HShineButton, props: { label: `${label}` } },
    { component: Components.HGlowButton, props: { label: `${label}` } },
    { component: Components.NeonButton, props: { label: `${label}` } },
    { component: Components.HFBButton, props: { label: `${label}` } },
    { component: Components.HFTButton, props: { label: `${label}` } },
    { component: Components.HUButton, props: { label: `${label}` } },
    { component: Components.DarkButton, props: { label: `${label}` } },
    { component: Components.LightButton, props: { label: `${label}` } },
    { component: Components.GlassButton, props: { label: `${label}` } },
    { component: Components.HGSButton, props: { label: `${label}` } },
    { component: Components.HGBGButton, props: { label: `${label}` } },
    { component: Components.HBorderButton, props: { label: `${label}` } },
    { component: Components.GBButton, props: { label: `${label}` } },
];

export default Page