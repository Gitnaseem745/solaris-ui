'use client';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface DisposeTextProps {
    elementsArray: React.ReactNode[];
    animationDelay?: number;
    className?: string;
    height?: string;
}

const textVariants: Variants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
        opacity: 0,
        filter: 'blur(10px)',
        y: -20,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
};

export default function DisposeText({
    elementsArray = ["Dispose", "Text", "Animation"],
    animationDelay = 1500,
    className = "",
    height = "60px" // Default height, adjust as needed
}: DisposeTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
            const innerTimeout = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % elementsArray.length);
                setIsVisible(true);
            }, animationDelay / 2); 

            return () => clearTimeout(innerTimeout);
        }, animationDelay);

        return () => clearTimeout(timeout);
    }, [currentIndex, animationDelay, elementsArray.length]);

    return (
        <div 
            className="flex items-center justify-center w-full relative" 
            style={{ height }}
        >
            <AnimatePresence mode="wait">
                {isVisible && (
                    <motion.div
                        key={`dispose-text-${currentIndex}`}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={cn(
                            "sm:text-3xl text-xl text-center font-bold tracking-tight absolute",
                            className
                        )}
                    >
                        {elementsArray[currentIndex]}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
