'use client'
import { useState } from "react"
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6"

interface MotionLoginProps {
    label?: string;
    onClick?: () => void;
}

const MotionLogin: React.FC<MotionLoginProps> = ({ label = "Login", onClick }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className="max-w-fit">
        <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className="cursor-pointer flex justify-center items-center bg-black border-2 border-white rounded-md py-2 px-9 relative overflow-clip">
            <motion.div
            animate={{
                scale: isHover ? 100 : 1,
                backgroundColor: isHover ? "#FFFFFF" : "#FFFFFF"
            }}
            transition={{
                ease: "easeInOut",
                duration: 0.3,
            }}
            className="size-[6px] absolute -left-3"></motion.div>
            <motion.div
            animate={{
                x: isHover ? 40 : 0,
                opacity: isHover ? 0 : 1,
            }}
            transition={{
                duration: 0.4
            }}
            className="text-[16px] tracking-wide font-semibold z-10">
                <p>{label}</p>
            </motion.div>
            <motion.div
            animate={{
                x: isHover ? 0 : -80,
            }}
            transition={{
                delay: 0.1
            }}
            className="absolute flex justify-center items-center">
                <FaArrowRightLong className="size-6 text-black" />
            </motion.div>
        </div>
    </div>
  )
}

export default MotionLogin
