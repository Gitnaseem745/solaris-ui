'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { bounceInDownVariants } from '../presets/bounceInDown';

const BounceInDownDemo: React.FC = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-blue-500/10 to-sky-500/10 rounded-lg p-8">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleReplay}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Replay
        </button>
      </div>
      
      <div className="flex items-center justify-center h-full">
        <motion.div
          key={key}
          variants={bounceInDownVariants}
          initial="hidden"
          animate="visible"
          className="w-24 h-24 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default BounceInDownDemo; 
