"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Timeline Wrapper Component
interface TimelineProps {
  align?: "left" | "right" | "alternate";
  className?: string;
  children: React.ReactNode;
}

/**
 * Timeline component to display a vertical timeline with items.
 * @param {string} align - Alignment of the timeline items (left, right, alternate).
 * @param {string} className - Additional CSS classes for styling.
 * @param {React.ReactNode} children - Timeline items to be displayed.
 * @returns {JSX.Element} Timeline component.
 * @example
 * <Timeline align="left" className="my-timeline">
 *  <Timeline.Item date="2023-01-01" icon={<Icon />} color="bg-blue-500">
 *   Item 1 Content
 *  </Timeline.Item>
 *  <Timeline.Item date="2023-02-01" icon={<Icon />} color="bg-red-500">
 *    Item 2 Content
 *  </Timeline.Item>
 * </Timeline>
 */
const Timeline = ({ align = "left", className = "", children }: TimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const { top, height } = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const maxScroll = height + windowHeight;
      const scrolled = Math.max(0, Math.min(1, (windowHeight - top) / maxScroll));

      setProgress(scrolled * 1.55);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={timelineRef} className={cn(`relative py-10`, className)}>
      {/* Timeline Line */}
      <div
        className={`absolute top-0 bottom-0 w-[4px] bg-gray-700 transition-all overflow-hidden`}
        style={{
          left: align === "right" ? "calc(100% - 4px)" : align === "left" ? "0px" : "50%",
          transform: align === "alternate" ? "translateX(-50%)" : "none",
        }}
      >
        {/* Progress Bar */}
        <div
          className="absolute top-0 left-0 w-full bg-foreground transition-all"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Timeline Items (Children) */}
      {children}
    </div>
  );
};

// Timeline Item Component
interface TimelineItemProps {
  date?: string;
  icon?: React.ReactNode;
  color?: string;
  align?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

/**
 * TimelineItem component to display individual items in the timeline.
 * @param {string} date - Date to be displayed on the timeline item.
 * @param {React.ReactNode} icon - Icon to be displayed on the timeline item.
 * @param {string} color - Background color for the timeline item.
 * @param {string} align - Alignment of the timeline item (left, right).
 * @param {React.ReactNode} children - Content to be displayed inside the timeline item.
 * @param {string} className - Additional CSS classes for styling.
 * @returns {JSX.Element} TimelineItem component.   
 */
const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  icon,
  color,
  align = "left",
  children,
  className = "",
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 30 });
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`relative flex items-center py-6 ${align === "left" ? "pl-10 flex-row-reverse" : "pr-10"}`}
    >
      {/* Icon */}
      {icon && <div className={`absolute ${align === "left" ? "-left-5" : "-right-5"} w-10 h-10 rounded-full flex items-center justify-center ${color} text-foreground`}>
        {icon}
      </div>}

      {/* Content */}
      <div className={cn("bg-background text-foreground shadow-md p-4 rounded-lg w-full max-w-xs border-accent border", className)}>
        {date && <p className="text-sm text-foreground">{date}</p>}
        {children}
      </div>
    </motion.div>
  );
};

Timeline.Item = TimelineItem;

export { Timeline };
