import { Variants } from 'framer-motion';

export const confettiVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const confettiItemVariants: Variants = {
  hidden: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  visible: (i: number) => ({
    y: [0, -100, 200],
    x: [0, (i % 2 === 0 ? 50 : -50) * (i % 3 + 1)],
    rotate: [0, 180, 360],
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      ease: "easeOut",
      delay: i * 0.05
    }
  })
}; 
