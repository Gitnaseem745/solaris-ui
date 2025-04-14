'use client';

import { motion } from 'framer-motion';
import { floatVariants } from '../presets/float';

const FloatDemo: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-lg p-8">
      <div className="flex items-center justify-center h-full">
        <motion.div
          variants={floatVariants}
          initial="hidden"
          animate="visible"
          className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FloatDemo; 
