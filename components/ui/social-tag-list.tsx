"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation Variants
const animationVariant = {
    hidden: {
        backgroundColor: "transparent",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "5px",
        paddingRight: "5px",
    },
    show: {
        backgroundColor: "var(--foreground)",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "5px",
        paddingBottom: "5px",
        color: "var(--background)",
    },
};

interface SocialTagProps {
    label: string;
    id: string;
    link?: string;
    className?: string;
}

/**
 * SocialTag Item (Single Tag)
 * @param {string} label - The label of the tag.
 * @param {string} id - The ID of the tag.
 * @param {string} link - The link to navigate to when the tag is clicked.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} A motion div that acts as a link to the specified URL.
 */
const SocialTagItem = ({ label, id, link, className }: SocialTagProps) => {
    return (
        <Link href={link || "/"}>
            <motion.div
                variants={animationVariant}
                initial="hidden"
                whileHover="show"
                whileTap="show"
                whileFocus="show"
                transition={{ duration: 0.28, ease: "linear" }}
                className={cn("flex justify-between items-center border-b border-border cursor-pointer font-semibold heading max-w-md h-12 w-full", className)}
            >
                <span>{label}</span>
                <span className="text-right">{id}</span>
            </motion.div>
        </Link>
    );
};

interface SocialTagListProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * SocialTagList Component (List of Tags)
 * @param {React.ReactNode} children - The child components to be rendered inside the list.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element} A div that contains the list of social tags.
 * @example
 * <SocialTagList>
 *   <SocialTagItem label="GitHub" id="@github" link="https://github.com" />
 *   <SocialTagItem label="Twitter" id="@twitter" link="https://twitter.com" />
 *   <SocialTagItem label="LinkedIn" id="@linkedin" link="https://linkedin.com" />
 * </SocialTagList>
 */
const SocialTagList = ({ children, className }: SocialTagListProps) => {
    return <div className={cn("max-w-3xl w-full space-y-4", className)}>{children}</div>;
};


export { SocialTagList, SocialTagItem };
