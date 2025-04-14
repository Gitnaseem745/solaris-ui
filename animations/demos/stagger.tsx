'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerVariants, staggerItemVariants } from '../presets/stagger';

const StaggerDemo: React.FC = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-lg p-8">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleReplay}
          className="px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Replay
        </button>
      </div>
      
      <div className="flex items-center justify-center h-full">
        <motion.div
          key={key}
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StaggerDemo; 
