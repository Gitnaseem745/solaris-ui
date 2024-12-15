// framer-motion and React Icons are needed before using this button

import { useState } from "react"
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa"

interface FDButtonProps {
    label: string;
    onClick?: () => void;
}

const FDButton: React.FC<FDButtonProps> = ({ label, onClick }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className="max-w-fit">
        <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className="cursor-pointer flex justify-between items-center bg-black rounded-3xl py-2 px-9 relative overflow-clip">
            <motion.div
            animate={{
                scale: isHover ? 100 : 1,
                backgroundColor: isHover ? "#E53935" : "#FFFFFF"
            }}
            transition={{
                ease: "easeIn",
                duration: 0.2,
            }}
            className="size-[6px] rounded-full absolute left-6"></motion.div>
            <motion.div
            animate={{
                x: isHover ? 12 : 8,
                color: isHover ?  "#FFFFFF" : "#FFFFFF"
            }}
            className="text-[16px] tracking-tighter font-medium z-10">
                <p>{label}</p>
            </motion.div>
            <motion.div
            animate={{
                y: isHover ? 0 : 30,
                color: isHover ? "#FFFFFF" : "#000000"
            }}
            className="absolute flex justify-center items-center left-6">
                <FaTrash className="size-[16px]" />
            </motion.div>
        </div>
    </div>
  )
}

export default FDButton
