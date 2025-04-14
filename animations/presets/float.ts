import { Variants } from 'framer-motion';

export const floatVariants: Variants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}; 
