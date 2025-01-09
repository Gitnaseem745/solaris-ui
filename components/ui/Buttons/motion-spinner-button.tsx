'use client'
import { motion } from "framer-motion";

interface MotionSpinnerProps {
  label?: string;
}

const MotionSpinner: React.FC<MotionSpinnerProps> = ({ label = "Loading" }) => {
  return (
    <div
      className="relative flex justify-center items-center flex-row gap-2 bg-neutral-700 text-black w-fit px-4 py-2 rounded-md pointer-events-none"
    >
      <motion.svg
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-black"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-6.22-8.56" />
      </motion.svg>
      <button disabled={true}>{label}</button>
    </div>
  );
};

export default MotionSpinner;
