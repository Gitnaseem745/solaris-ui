'use client';

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PremiumCardProps {
    imgOne: string;
    imgTwo: string;
    categoryTitle: string;
    categoryLink?: string;
    buttonText: string;
    buttonLink: string;
}

export default function PremiumCard({
    imgOne,
    imgTwo,
    categoryTitle,
    categoryLink = "/",
    buttonText,
    buttonLink,
}: PremiumCardProps) {
    const [hover, setHover] = useState(false);
    const containerClasses = "relative w-full min-w-[250px] sm:min-w-[300px] h-[450px] rounded-3xl overflow-hidden sm:m-4";
    const imageClasses = "w-full h-full absolute object-contain";
    const overlayClasses = "w-full h-full flex flex-col justify-between z-10 p-4 absolute";

    if (!imgOne || !imgTwo) {
        return <div className={containerClasses + " bg-gray-200 flex items-center justify-center"}>Images not provided</div>;
    }

    return (
        <motion.div
            className={containerClasses}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
        >
            {/* Image animation */}
            <Image
                src={hover ? imgTwo : imgOne}
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className={imageClasses}
            />

            {/* Overlay with animated category and button */}
            <motion.div
                className={overlayClasses}
                initial={{ opacity: 0 }}
                animate={{ opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <h2
                    className="bg-black hover:bg-neutral-700 hover:text-white/50 rounded-full text-sm max-w-fit h-7 text-white text-center px-3 py-1"
                >
                    <Link href={categoryLink}>{categoryTitle}</Link>
                </h2>
                <button
                    className="w-full bg-black hover:bg-neutral-700 hover:text-white/50 text-white rounded-full h-10"
                >
                    <Link href={buttonLink} className="w-full h-full flex items-center justify-center">
                        {buttonText}
                    </Link>
                </button>
            </motion.div>
        </motion.div>
    );
}
