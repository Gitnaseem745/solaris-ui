// framer-motion and React Icons are needed before using this button

import { useState } from "react"
import { motion } from "framer-motion";

interface FSUButtonProps {
    label: string;
    onClick?: () => void;
}

const FSUButton: React.FC<FSUButtonProps> = ({ label, onClick }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className="max-w-fit">
        <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{
            ease: "linear",
            duration: 0.1
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className="cursor-pointer flex justify-center items-center bg-black rounded-3xl py-3 px-9 relative overflow-clip">
            <motion.div
            animate={{
                scale: isHover ? 100 : 1,
                backgroundColor: isHover ? "#FFFFFF" : "#FFFFFF"
            }}
            transition={{
                ease: "linear",
                duration: 0.2,
            }}
            className="size-[6px] rounded-full absolute -bottom-4"></motion.div>
            <motion.div
            animate={{
                y: isHover ? 50 : 0,
                color: isHover ? "#000000" : "#FFFFFF"
            }}
            className="text-[16px] tracking-tighter font-medium z-10">
                    {label}
            </motion.div>
            <motion.div
            animate={{
                y: isHover ? 0 : -50,
                scale: isHover ? 1.2 : 0,
            }}
            className="absolute flex justify-center items-center text-black">
                    {label}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default FSUButton
