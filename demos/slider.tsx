"use client";

import { Slider } from "@/components/ui/slider";

export default function SliderDemo() {
    const slides = ["Loremipsum", "Brandlogo", "Logoipsum"];

    return (
        <div className="flex justify-center items-center overflow-hidden">
            <Slider width="300px" duration={60} toRight={false} pauseOnHover={true}>
                {slides.map((slide, i) => (
                    <h2 key={i} className="sm:text-xl text-lg font-semibold text-foreground w-32">{slide}</h2>
                ))}
            </Slider>
        </div>
    );
}
