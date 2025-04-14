"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { confettiVariants, confettiItemVariants } from '../presets/confetti';

const ConfettiDemo: React.FC = () => {
  const [key, setKey] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCelebrate = () => {
    setKey(prev => prev + 1);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  // Generate random colors for confetti
  const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', '#B2FFD8', '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'];

  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg p-8 overflow-hidden">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleCelebrate}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Celebrate!
        </button>
      </div>
      
      {/* Confetti container */}
      {showConfetti && (
        <motion.div
          key={key}
          variants={confettiVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={confettiItemVariants}
              className="absolute w-3 h-3"
              style={{
                backgroundColor: colors[i % colors.length],
                left: `${Math.random() * 100}%`,
                top: '50%',
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </motion.div>
      )}
      
      <div className="flex items-center justify-center h-full">
        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-4xl">🎉</span>
        </div>
      </div>
    </div>
  );
};

export default ConfettiDemo;
