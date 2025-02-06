'use client'
import { motion } from "framer-motion";
import Link from "next/link";

const animationVariant = {
    hidden: { backgroundColor: "#171717", paddingTop: "5px", paddingBottom: "5px", },
    show: { backgroundColor: "var(--foreground)", paddingLeft: "12px", paddingRight: "12px", paddingTop: "5px", paddingBottom: "5px", color: "var(--background)", },
}

interface SocialTagProps {
    title: string;
    id: string;
    link?: string;
}
export default function SocialTag({ title, id, link }: SocialTagProps) {
    return (
        <Link href={link || '/'}>
        <motion.div
        variants={animationVariant}
            initial="hidden"
            whileHover="show"
            whileTap="show"
            whileFocus="show"
            transition={{ duration: 0.28, ease: "linear" }}
            className="flex justify-between items-center border-b border-[#333333] cursor-pointer font-semibold heading max-w-md h-12 w-full">
            <span>{title}</span>
            <span className="text-right">{id}</span>
        </motion.div>
            </Link>
    )
}
