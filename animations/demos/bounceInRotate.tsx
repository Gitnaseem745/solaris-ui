'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { bounceInRotateVariants } from '../presets/bounceInRotate';

const BounceInRotateDemo: React.FC = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 rounded-lg p-8">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleReplay}
          className="px-4 py-2 text-sm font-medium text-white bg-fuchsia-600 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
        >
          Replay
        </button>
      </div>
      
      <div className="flex items-center justify-center h-full">
        <motion.div
          key={key}
          variants={bounceInRotateVariants}
          initial="hidden"
          animate="visible"
          className="w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default BounceInRotateDemo; 
