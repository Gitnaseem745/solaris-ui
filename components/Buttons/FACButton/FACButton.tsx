// framer-motion and React Icons are needed before using this button

import { FaPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";

interface FACButtonProps {
    label: string;
    secondryLabel?: string;
    onClick?: () => void;
}

const FACButton: React.FC<FACButtonProps> = ({ label, secondryLabel, onClick }) => {
    const [clicked, setClicked] = useState<boolean>(false);
    return (
        <div
            onClick={onClick}
        >
            <motion.div
                animate={{
                    scale: clicked ? 1 : 1.05,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.2
                }}
                onClick={() => setClicked((prev) => !prev)}
                className="relative overflow-hidden bg-[#2654FF] text-[#FFFFFF] w-fit px-6 py-3 rounded-full cursor-pointer flex justify-center items-center"
            >
                <motion.div
                    animate={{
                        opacity: clicked ? 0 : 1,
                        scale: clicked ? 0 : 1,
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}
                    className="flex justify-center items-center gap-2">
                    <motion.div animate={{
                        rotate: clicked ? 280 : 0,
                    }}>
                        <FaPlus />
                    </motion.div>
                    <p>
                        {label}
                    </p>
                </motion.div>
                <motion.div
                    animate={{
                        scale: clicked ? 100 : 1,
                        backgroundColor: clicked ? "#1E88E5" : "#2654FF"
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1.35,
                    }}
                    className="size-[6px] rounded-full absolute left-0"></motion.div>
                <motion.div
                    initial={{
                        x: -110
                    }}
                    animate={{
                        x: clicked ? 110 : -110,
                        opacity: clicked ? 1 : 0,
                        scale: clicked ? 2 : 2,
                        rotate: clicked ? -30 : 0,
                    }}
                    transition={{
                        ease: "easeIn",
                        duration: 1
                    }}
                    className="absolute"
                >
                    <IoCartOutline />
                </motion.div>
                <motion.p
                    animate={{
                        opacity: clicked ? 1 : 0,
                        scale: clicked ? 1.1 : 1,
                        y: clicked ? 0 : 100,
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1.2,
                    }}
                    className="absolute">
                    {secondryLabel}
                </motion.p>
            </motion.div>
        </div>
    );
};
export default FACButton;
