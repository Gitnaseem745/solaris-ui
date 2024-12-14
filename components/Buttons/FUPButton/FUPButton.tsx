// framer-motion and React Icons are needed before using this button

import { useState } from "react"
import { motion } from "framer-motion";
import { IoMdCloudUpload  } from "react-icons/io"

interface FUPButtonProps {
    label: string;
    onClick?: () => void;
}

const FUPButton: React.FC<FUPButtonProps> = ({ label, onClick }) => {
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
                backgroundColor: isHover ? "#8E24AA" : "#000000"
            }}
            transition={{
                ease: "easeIn",
                duration: 0.1,
            }}
            className="size-[6px] rounded-full absolute bottom-0"></motion.div>
            <motion.div
            animate={{
                y: isHover ? -80 : 0,
                opacity: isHover ? 0 : 1,
                color: isHover ?  "#FFFFFF" : "#FFFFFF"
            }}
            className="text-[16px] tracking-tighter font-medium z-10">
                <p>{label}</p>
            </motion.div>
            <motion.div
            animate={{
                y: isHover ? 0 : 80,
                color: isHover ? "#FFFFFF" : "#000000"
            }}
            className="absolute flex justify-center items-center">
                <IoMdCloudUpload className="size-6" />
            </motion.div>
        </div>
    </div>
  )
}

export default FUPButton
