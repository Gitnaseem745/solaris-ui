'use client'
import { CiPaperplane  } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";

interface MotionSendProps {
    label?: string;
    secondryLabel?: string;
    onClick?: () => void;
}

const MotionSend: React.FC<MotionSendProps> = ({ label = "Send", secondryLabel = "Sent", onClick }) => {
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
                onClick={() => setClicked(true)}
                className="relative overflow-hidden bg-teal-500 text-[#FFFFFF] w-fit px-10 py-2 rounded-full cursor-pointer flex justify-center items-center gap-1"
            >
                    <motion.div
                    animate={{
                        rotate: clicked ? 0 : -50,
                        scale: clicked ? 1.2 : 1.2,
                        x: clicked ? 100 : 0,
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1.5
                    }}
                    >
                        <CiPaperplane />
                    </motion.div>
                    <motion.p
                    animate={{
                        opacity: clicked ? 0 : 1,
                        scale: clicked ? 0 : 1,
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.8,
                    }}
                    className="mt-1"
                    >
                        {label}
                    </motion.p>
                <motion.div
                    animate={{
                        scale: clicked ? 100 : 1,
                        backgroundColor: clicked ? "#4CAF50" : "#14b8a6"
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 2.15,
                    }}
                    className="size-[6px] rounded-full absolute left-0"></motion.div>
                 <motion.p
                    animate={{
                        opacity: clicked ? 1 : 0,
                        scale: clicked ? 1.1 : 1,
                        y: clicked ? 0 : 30,
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
export default MotionSend;
