"use client"

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

/**
 * Reusable redirection button component with arrow icon
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} The TopButton component.
 * @example
 * <TopButton className="custom-class" />
 */
export default function TopButton({className}: {className?: string}) {
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={toTop}
            className={cn("fixed right-5 bottom-5 sm:right-10 sm:bottom-10 bg-primary p-4 rounded-full -rotate-90 text-background hover:bg-primary-dark transition-colors ease-linear delay-75 z-50", className)}
        >
            <ArrowRight />
        </button>
    )
}
