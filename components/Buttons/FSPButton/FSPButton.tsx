// framer-motion are needed before using this button

import { motion } from "framer-motion";
import { useState } from "react";

interface FSPButtonProps {
    label: string;
    onClick?: () => void;
}

const FSPButton: React.FC<FSPButtonProps> = ({ label, onClick }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="max-w-fit relative cursor-pointer">
            <motion.div
                animate={{
                    backgroundColor: isHover ? "#FFFFFF" : "#000000",
                    color: isHover ? "#000000" : "#FFFFFF",
                    y: isHover ? 5 : 0,
                    x: isHover ? -5 : 0,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.4
                }}
                onClick={onClick}
                className="z-10 flex justify-center items-center bg-black border border-white rounded-md py-2 px-6">
                <div
                    className="text-[14px] tracking-wide font-semibold z-10">
                    <p>{label}</p>
                </div>
            </motion.div>
            <motion.div
                animate={{
                    top: isHover ? 5 : 8,
                    left: isHover ? -5 : -8,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.4
                }}
                className="w-full h-full border border-white bg-black rounded-md py-2 px-6 absolute -z-20">
            </motion.div>
            <motion.div
                animate={{
                    top: isHover ? 5 : 16,
                    left: isHover ? -5 : -16,
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.4
                }}
                className="w-full h-full border border-white bg-black rounded-md py-2 px-6 absolute -z-30">
            </motion.div>
        </div>
    );
};
export default FSPButton;
