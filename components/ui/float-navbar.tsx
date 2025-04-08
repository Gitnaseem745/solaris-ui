"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";
import { useTablet } from "@/hooks/use-tablet";
import { cn } from "@/lib/utils";

{/* Hooks */}

// "use client"

// import { useState, useEffect } from "react"

// export function useTablet() {
//   const [isTablet, setIsTablet] = useState(false)
    
//   useEffect(() => {
//     const checkIfTablet = () => {
//         setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024); // Tablet: 769px - 1024px
//     }

//     // Initial check
//     checkIfTablet()

//     // Add event listener
//     window.addEventListener("resize", checkIfTablet)

//     // Clean up
//     return () => window.removeEventListener("resize", checkIfTablet)
//   }, [])

//   return isTablet
// }


// "use client"

// import { useState, useEffect } from "react"

// export function useMobile() {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     // Initial check
//     checkIfMobile()

//     // Add event listener
//     window.addEventListener("resize", checkIfMobile)

//     // Clean up
//     return () => window.removeEventListener("resize", checkIfMobile)
//   }, [])

//   return isMobile
// }


/**
 * FloatNav Component
 * @param {React.ReactNode} children - The content to be displayed inside the FloatNav.
 * @returns {JSX.Element} The FloatNav component.
 * @description A floating navigation bar that changes its style based on scroll position and screen size.
 */
export default function FloatNav({ children }: { children: React.ReactNode }) {
    const isMobile = useMobile();
    const isTablet = useTablet();
    const { scrollY } = useScroll();

    // Framer Motion Animations
    const height = useTransform(scrollY, [0, 100], ["80px", "60px"]);
    const baseMaxWidth = isTablet ? "750px" : isMobile ? "350px" : "896px";
    const maxWidth = useTransform(scrollY, [0, 100], ["1280px", baseMaxWidth]);
    const padding = useTransform(scrollY, [0, 100], ["1.75rem", "1.5rem"]);
    const top = useTransform(scrollY, [0, 100], ["0px", `${isMobile ? "20px" : "40px"}`]);
    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"]);
    const background = useTransform(scrollY, [0, 100], ["rgba(10, 10, 20, 0)", "rgba(10, 10, 20, 0.1)"]);

    return (
        <motion.header
            style={{ height, background, backdropFilter: backdropBlur, padding, maxWidth, top }}
            className={cn(
                "fixed top-5 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 flex items-center mx-auto rounded-lg max-w-7xl"
            )}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="w-full flex items-center justify-between mx-auto">
                {children}
            </nav>
        </motion.header>
    );
}
