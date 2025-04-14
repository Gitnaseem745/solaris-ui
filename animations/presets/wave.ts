import { Variants } from 'framer-motion';

export const waveVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const waveItemVariants: Variants = {
  hidden: {
    y: 0,
  },
  visible: (i: number) => ({
    y: [0, -15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.1,
      ease: "easeInOut"
    }
  })
}; 
