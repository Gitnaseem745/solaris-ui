'use client';

import { motion } from 'framer-motion';
import { parallaxVariants, parallaxItemVariants } from '../presets/parallax';

const ParallaxDemo: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-lg p-8 overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <motion.div
          variants={parallaxVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl"
        >
          <motion.div
            custom={0}
            variants={parallaxItemVariants}
            className="w-full h-32 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg shadow-lg mb-4"
          />
          
          <motion.div
            custom={1}
            variants={parallaxItemVariants}
            className="w-full h-32 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg shadow-lg mb-4"
          />
          
          <motion.div
            custom={2}
            variants={parallaxItemVariants}
            className="w-full h-32 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxDemo; 
