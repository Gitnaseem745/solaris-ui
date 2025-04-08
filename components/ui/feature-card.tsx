"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, ReactNode, ReactElement, cloneElement } from "react";

// FeatureCard Wrapper Component
interface FeatureCardProps {
    children: ReactNode;
    className?: string;
}

/**
 * FeatureCard component that serves as a wrapper for the feature card elements.
 * @param {ReactNode} children - The child elements to be rendered inside the card.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} - The rendered FeatureCard component.
 * @example
 * <FeatureCard className="custom-class">
 *   <FeatureCardHeader heading="Title" text="Description" />
 *  <FeatureCardMedia img="/path/to/image.png" heading="Image" mockupSize="w-1/2" mockupPosition="top-0 right-0" />
 *  <FeatureCardVideo video="/path/to/video.mp4" />
 * </FeatureCard>
 */
const FeatureCard = ({ children, className }: FeatureCardProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={cn(
                "max-w-sm w-full min-h-[450px] max-sm:min-h-[380px] rounded-xl shadow-lg p-6 md:p-8 flex flex-col bg-card-bg hover:cursor-none backdrop-blur-xl border border-neutral-800/25 gap-6 relative overflow-hidden",
                className
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setHovered(false)}
        >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 absolute top-0 right-0 blur-3xl"></div>
            
            {/* Inject hovered state into all children */}
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? cloneElement(child as ReactElement<any>, { hovered }) : child
            )}
        </div>
    );
};

// FeatureCard.Header (Title & Text)
interface FeatureCardHeaderProps {
    heading: string;
    text: string;
    hovered?: boolean;
}

/**
 * FeatureCardHeader component that displays the heading and text for the feature card.
 * @param {string} heading - The title of the feature.
 * @param {string} text - The description of the feature.
 * @param {boolean} hovered - Indicates if the card is hovered.
 * @returns {JSX.Element} - The rendered FeatureCardHeader component.
 */
const FeatureCardHeader = ({ heading, text, hovered }: FeatureCardHeaderProps) => {
    return (
        <motion.div
            className="space-y-4 z-10 relative pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-2xl font-semibold text-heading-color">{heading}</h1>
            <p className="text-sm md:text-base text-subtext-color leading-relaxed">{text}</p>
        </motion.div>
    );
};

// FeatureCard.Media (Image Mockup)
interface FeatureCardMediaProps {
    img: string;
    heading: string;
    mockupSize: string;
    mockupPosition: string;
    hovered?: boolean;
}

/**
 * FeatureCardMedia component that displays an image mockup for the feature card.
 * @param {string} img - The source of the image.
 * @param {string} heading - The title of the feature.
 * @param {string} mockupSize - The size class for the mockup image.
 * @param {string} mockupPosition - The position class for the mockup image.
 * @param {boolean} hovered - Indicates if the card is hovered.
 * @returns {JSX.Element} - The rendered FeatureCardMedia component.
 */
const FeatureCardMedia = ({ img, heading, mockupSize, mockupPosition, hovered }: FeatureCardMediaProps) => {
    return (
        <motion.div
            className={cn("absolute", mockupSize, mockupPosition)}
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
        >
            <Image src={img} alt={heading} width={400} height={400} className="w-full h-full object-contain" />
        </motion.div>
    );
};

// FeatureCard.Video (Video Element)
interface FeatureCardVideoProps {
    video: string;
    hovered?: boolean;
}

/**
 * FeatureCardVideo component that displays a video for the feature card.
 * @param {string} video - The source of the video.
 * @param {boolean} hovered - Indicates if the card is hovered.
 * @returns {JSX.Element} - The rendered FeatureCardVideo component.
 */
const FeatureCardVideo = ({ video, hovered }: FeatureCardVideoProps) => {
    return (
        <motion.video
            className="absolute w-full h-full object-cover left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            src={video}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        />
    );
};

export { FeatureCard, FeatureCardHeader, FeatureCardMedia, FeatureCardVideo };
