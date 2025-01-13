'use client'
import { useState } from "react"
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa"

interface MotionHelpProps {
    label?: string;
    onClick?: () => void;
}

const MotionHelp: React.FC<MotionHelpProps> = ({ label = "Help", onClick }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className="max-w-fit">
        <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className="cursor-pointer flex justify-center items-center bg-black rounded-3xl py-2 px-9 relative overflow-clip">
            <motion.div
            animate={{
                scale: isHover ? 100 : 1,
                backgroundColor: isHover ? "#673AB7" : "#000000"
            }}
            transition={{
                ease: "easeIn",
                duration: 0.1,
            }}
            className="size-[6px] rounded-full absolute"></motion.div>
            <motion.div
            animate={{
                scale: isHover ? 0 : 1,
                opacity: isHover ? 0 : 1,
                color: isHover ?  "#FFFFFF" : "#FFFFFF"
            }}
            className="text-[16px] tracking-tighter font-medium z-10">
                <p>{label}</p>
            </motion.div>
            <motion.div
            animate={{
                scale: isHover ? 1.2 : 0,
                color: isHover ? "#FFFFFF" : "#000000"
            }}
            className="absolute flex justify-center items-center">
                <FaHandsHelping className="size-6" />
            </motion.div>
        </div>
    </div>
  )
}

export default MotionHelp
