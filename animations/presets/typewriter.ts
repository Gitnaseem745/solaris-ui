import { Variants } from 'framer-motion';

export const typewriterVariants: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeOut"
    }
  }
};

export const typewriterTextVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      repeat: 20,
      repeatType: "loop"
    }
  }
}; 
