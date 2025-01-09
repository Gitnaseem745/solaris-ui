'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface TextEffectProps {
    text: string;
    img: string;
}
const TextEffect: React.FC<TextEffectProps> = ({ text, img }) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const animationSettings = {
        ease: "linear",
        duration: 0.2,
    };

    return (
        <div className="max-w-fit flex justify-center gap-10 items-center relative">
            <motion.div
                animate={{
                    x: isHover ? 20 : -30,
                    opacity: isHover ? 1 : 0,
                    color: isHover ? "#E6CD78" : "#FFFFFF",
                }}
                transition={animationSettings}
                className="flex -mr-4"
            >
                {[...Array(38)].map((_, index) => (
                    <h1 key={index} className="-ml-1">-</h1>
                ))}
            </motion.div>

            <motion.div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                animate={{
                    x: isHover ? 20 : 0,
                    fontStyle: isHover ? "italic" : "normal",
                }}
                transition={animationSettings}
                className="tracking-wider text-6xl bg-gradient-to-r to-neutral-500 from-neutral-800 text-transparent bg-clip-text hover:from-[#C29E44] hover:to-[#E6CD78] cursor-pointer"
            >
                <Link href="/">
                    {text}
                </Link>
            </motion.div>

            <motion.div
                animate={{
                    x: isHover ? 220 : 240,
                    opacity: isHover ? 1 : 0,
                }}
                transition={animationSettings}
                className="absolute right-0"
            >
                <img
                    src={img}
                    alt="Text Effect"
                    className="w-[280px] h-[400px] object-cover rounded-lg"
                />
            </motion.div>
        </div>
    );
};

export default TextEffect;
