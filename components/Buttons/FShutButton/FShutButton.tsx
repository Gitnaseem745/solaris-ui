// framer-motion and React Icons are needed before using this button

import { useState } from "react"
import { motion } from "framer-motion";

interface FShutButtonProps {
    label: string;
    onClick?: () => void;
}

const FShutButton: React.FC<FShutButtonProps> = ({ label, onClick }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <div className="max-w-fit">
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={onClick}
                className="cursor-pointer flex justify-center items-center bg-black rounded-3xl font-semibold relative overflow-hidden">
                <motion.div
                    animate={{
                        y: isHover ? 50 : 0,
                    }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.3,
                    }}
                    className="w-full bg-white py-2 px-7 text-black z-10">
                    <p>{label}</p>
                </motion.div>
                <div className="absolute flex justify-center items-center overflow-hidden h-9/12">
                    {label.split("").map((char, i) => (
                        <motion.p
                            key={i}
                            animate={{
                                y: isHover ? 0 : i % 2 === 0 ? -100 : 100,
                            }}
                            transition={{
                                ease: "easeIn",
                                duration: 0.2 + i * 0.1,
                            }}
                        >
                            {char}
                        </motion.p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FShutButton
