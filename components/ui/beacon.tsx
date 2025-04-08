'use client';

import { cn } from "@/lib/utils";
import { SlArrowRight } from "react-icons/sl";

interface BeaconProps {
  url: string;
  icon: React.ReactNode;
  text: string;
  className?: string;
}

/**
 * Beacon component that serves as a clickable button with an icon and text.
 * @param {string} url - The URL to navigate to when the beacon is clicked.
 * @param {React.ReactNode} icon - The icon to display inside the beacon.
 * @param {string} text - The text to display inside the beacon.
 * @param {string} [className] - Optional additional class names for styling.
 * @returns {JSX.Element} The rendered Beacon component.
 * @example
 * <Beacon url="https://example.com" icon={<MyIcon />} text="Click Me" className="my-custom-class" />
 */
export default function Beacon({ url, icon, text, className }: BeaconProps) {
  return (
    <div
      onClick={() => window.open(url, "_self")}
      className={cn(
        "font-sans text-sm font-semibold text-foreground rounded-full bg-background border border-foreground border-neutral-700 px-4 py-2 flex justify-center items-center gap-2 hover:bg-white/10 transition-all duration-200 cursor-pointer",
        className
      )}
    >
      {icon}
      <h2 className="max-sm:text-xs line-clamp-1">{text}</h2>
      <SlArrowRight className="size-[10px]" />
    </div>
  );
}
