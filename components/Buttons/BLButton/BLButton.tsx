// framer-motion and React Icons are needed before using this button

import { useState } from "react"
import { motion } from "framer-motion";

interface BLButtonProps {
    label: string;
    onClick?: () => void;
}

const BLButton: React.FC<BLButtonProps> = ({ label, onClick }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className="max-w-fit">
        <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        className="cursor-pointer flex justify-center items-center bg-black rounded-3xl py-2 px-9 relative overflow-hidden hover:text-black transition-colors duration-500">
            <motion.div
            animate={{
                scale: isHover ? 100 : 1,
                rotate: "45deg",
                backgroundColor: isHover ? "#FFFFFF" : "#000000"
            }}
            transition={{
                ease: "easeInOut",
                duration: 0.4,
            }}
            className="size-[1px] bg-white h-full absolute"></motion.div>
            <div className="text-[16px] tracking-wider font-bold z-10">
                <p>{label}</p>
            </div>
        </div>
    </div>
  )
}

export default BLButton
