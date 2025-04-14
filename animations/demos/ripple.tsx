"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { rippleVariants } from '../presets/ripple';

const RippleDemo: React.FC = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: nextId, x, y };
    setRipples(prev => [...prev, newRipple]);
    setNextId(prev => prev + 1);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1500);
  };

  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-lg p-8">
      <div className="flex items-center justify-center h-full">
        <div
          onClick={handleClick}
          className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg shadow-lg cursor-pointer overflow-hidden"
        >
          {ripples.map(ripple => (
            <motion.div
              key={ripple.id}
              variants={rippleVariants}
              initial="hidden"
              animate="visible"
              className="absolute w-4 h-4 bg-white rounded-full"
              style={{
                left: ripple.x - 8,
                top: ripple.y - 8,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RippleDemo;
