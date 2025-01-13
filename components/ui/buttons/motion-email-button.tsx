'use client'
import { useState } from "react"
import { motion } from "framer-motion";
import { MdOutgoingMail } from "react-icons/md"

interface MotionMailProps {
    label?: string;
    onClick?: () => void;
}

const MotionMail: React.FC<MotionMailProps> = ({ label = "Email", onClick }) => {
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
                backgroundColor: isHover ? "#2196F3" : "#000000"
            }}
            transition={{
                ease: "easeIn",
                duration: 0.1,
            }}
            className="size-[6px] rounded-full absolute left-0"></motion.div>
            <motion.div
            animate={{
                x: isHover ? 80 : 0,
                opacity: isHover ? 0 : 1,
                color: isHover ?  "#FFFFFF" : "#FFFFFF"
            }}
            className="text-[16px] tracking-tighter font-medium z-10">
                <p>{label}</p>
            </motion.div>
            <motion.div
            animate={{
                x: isHover ? 0 : -80,
                color: isHover ? "#FFFFFF" : "#000000"
            }}
            className="absolute flex justify-center items-center">
                <MdOutgoingMail className="size-6" />
            </motion.div>
        </div>
    </div>
  )
}

export default MotionMail
