'use client';

import { motion } from 'framer-motion';
import { waveVariants, waveItemVariants } from '../presets/wave';

const WaveDemo: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-lg p-8">
      <div className="flex items-center justify-center h-full">
        <motion.div
          variants={waveVariants}
          initial="hidden"
          animate="visible"
          className="flex items-end justify-center h-32 gap-2"
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={waveItemVariants}
              className="w-4 bg-gradient-to-b from-rose-500 to-pink-500 rounded-t-md"
              style={{ height: `${20 + (i % 3) * 10}px` }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WaveDemo; 
