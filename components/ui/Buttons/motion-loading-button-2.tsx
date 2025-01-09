'use client'
import { motion } from "framer-motion";
import { useState } from "react";

interface MotionLoading2Props {
    label?: string;
    secondLabel?: string;
    onClick?: () => void;
}

const MotionLoading2: React.FC<MotionLoading2Props> = ({ label = "Load", secondLabel = "Loading", onClick }) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const handleLoad = () => {
        setClicked(true);
        onClick?.();
        setTimeout(() => {
            setClicked(false);
        }, 2000);
    }
    return (
        <div className="max-w-fit" onClick={handleLoad} >
            <motion.div
                animate={{
                    backgroundColor: clicked ? "#d4d4d4" : "#ffffff",
                }}
                transition={{
                    ease: "easeInOut",
                }}
                className="relative flex justify-center items-center flex-row gap-2 bg-white text-black w-[130px] px-6 py-2 rounded-md cursor-pointer"
            >
                {clicked && <motion.svg
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12a9 9 0 1 1-6.22-8.56" />
                </motion.svg>}
                <button>{clicked ? secondLabel : label}</button>
            </motion.div>
        </div>
    );
};

export default MotionLoading2;
