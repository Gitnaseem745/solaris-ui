'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 overflow-hidden">
      <div className="text-center">
        {/* 404 Text with outline */}
        <div className="relative">
          <h1 className="text-[200px] font-bold leading-none text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px #f97316' }}>
            404
          </h1>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-[200px] font-bold leading-none text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px #f97316' }}>
              404
            </h1>
          </motion.div>
        </div>
        
        {/* Page not found text */}
        <motion.h2 
          className="text-2xl md:text-3xl font-medium mt-4 mb-8 text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Oops! Page not found
        </motion.h2>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/">
            <motion.button 
              className="px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
          </Link>
          <Link href="/animations">
            <motion.button 
              className="px-6 py-3 bg-zinc-800 text-white rounded-md font-medium hover:bg-zinc-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Animations
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 
