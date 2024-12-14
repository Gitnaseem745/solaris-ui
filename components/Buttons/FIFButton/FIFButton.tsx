// framer-motion and React Icons are needed before using this button

import { useState } from "react"
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"

interface FIFButtonProps {
    label: string;
    onClick?: () => void;
}

const FIFButton: React.FC<FIFButtonProps> = ({ label, onClick }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className="max-w-fit">
        <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className="cursor-pointer flex justify-center items-center bg-black rounded-3xl py-3 px-9 relative overflow-clip">
            <motion.div
            animate={{
                scale: isHover ? 100 : 1,
                backgroundColor: isHover ? "#FFBB3B" : "#FFFFFF"
            }}
            transition={{
                ease: "easeIn",
                duration: 0.2,
            }}
            className="size-[6px] bg-white rounded-full absolute left-6"></motion.div>
            <motion.div
            animate={{
                x: isHover ? -8 : 8,
                color: isHover ? "#000000" : "#FFFFFF"
            }}
            className="text-[16px] tracking-tighter font-medium z-10">
                <p>{label}</p>
            </motion.div>
            <motion.div
            animate={{
                x: isHover ? 0 : 24,
            }}
            className="absolute flex justify-center items-center right-6">
                <FaArrowRight className="size-[16px] text-black" />
            </motion.div>
        </div>
    </div>
  )
}

export default FIFButton
