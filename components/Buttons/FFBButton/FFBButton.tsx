
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion"
import { useState } from "react";

interface FFBButtonProps {
    label: string;
    onClick?: () => void;
}
const FFBButton: React.FC<FFBButtonProps> = ({ label, onClick }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const animationTransition = {
        ease: "easeInOut",
        duration: 0.3
    }
    return (
    <div className="overflow-hidden">
    <div
     onMouseEnter={() => setIsHover(true)}
     onMouseLeave={() => setIsHover(false)}
     onClick={onClick} className="min-w-fit flex justify-center items-center bg-[#1877f2] text-white hover:bg-[#1877f2]/90 py-3 px-10 rounded-md overflow-hidden relative cursor-pointer">
      <motion.div
      animate={{
        scale: isHover ? 0 : 1,
        opacity: isHover ? 0 : 1,
      }}
      transition={animationTransition}
      className="pointer-events-none mr-2">
        <FaFacebook className="opacity-60"/>
      </motion.div>
      <motion.p
      animate={{
        y: isHover ? 0 : 50,
        opacity: isHover ? 1 : 0,
      }}
      transition={animationTransition}
      className="absolute">
      {label}
      </motion.p>
    </div>
    </div>
  );
}

export default FFBButton;
