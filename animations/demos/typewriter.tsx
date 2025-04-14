'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { typewriterVariants, typewriterTextVariants } from '../presets/typewriter';

const TypewriterDemo: React.FC = () => {
  const [key, setKey] = useState(0);
  const [text, setText] = useState("Hello, World!");
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleReplay = () => {
    setKey(prev => prev + 1);
    setCurrentText("");
    setIsTyping(true);
  };

  useEffect(() => {
    if (isTyping) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setCurrentText(prev => prev + text[i]);
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isTyping, text]);

  useEffect(() => {
    handleReplay();
  }, []);

  return (
    <div className="relative w-full h-[300px] bg-gradient-to-br from-lime-500/10 to-green-500/10 rounded-lg p-8">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleReplay}
          className="px-4 py-2 text-sm font-medium text-white bg-lime-600 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        >
          Replay
        </button>
      </div>
      
      <div className="flex items-center justify-center h-full">
        <div className="relative w-full max-w-md">
          <motion.div
            key={key}
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
            className="h-1 bg-lime-500 absolute bottom-0 left-0"
          />
          <motion.div
            key={`text-${key}`}
            variants={typewriterTextVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl font-mono text-lime-700 p-6 "
          >
            {currentText}
            <span className="inline-block w-1 h-6 bg-lime-500 ml-1 animate-pulse"></span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TypewriterDemo; 
