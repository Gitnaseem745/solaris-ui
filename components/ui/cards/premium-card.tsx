'use client';

import Link from "next/link";
import { useState } from "react";

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

    const currentImage = hover ? imgTwo : imgOne;
    const containerClasses = "relative max-w-[300px] max-h-[450px] w-full h-full rounded-3xl overflow-hidden m-4";
    const imageClasses = "w-full h-full absolute object-cover transition-all ease-in-out duration-300";
    const overlayClasses = `w-full h-full flex-col justify-between z-50 p-4 ${hover ? 'flex' : 'hidden'} absolute`;

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={containerClasses}
        >
            <img
                src={currentImage}
                alt={'/'}
                className={`${imageClasses} ${hover ? 'bg-blue-400' : 'bg-red-400'}`}
            />
            <div className={overlayClasses}>
                <h2 className="bg-black rounded-full text-sm max-w-fit h-7 text-white text-center content-center px-3">
                    <Link href={categoryLink}>{categoryTitle}</Link>
                </h2>
                <button className="w-full bg-black rounded-full h-10">
                    <Link href={buttonLink}>{buttonText}</Link>
                </button>
            </div>
        </div>
    );
}
