'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { expandableStack } from '../presets/expandableStack';
import { useState } from 'react';

const cards = [
  { id: 1, title: 'Notification 1' },
  { id: 2, title: 'Notification 2' },
  { id: 3, title: 'Notification 3' },
  { id: 4, title: 'Notification 4' },
];

export default function ExpandableStackDemo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 px-4">
          <h3 className="text-lg font-medium">Notifications</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Collapsed Preview Card */}
          {!isExpanded && (
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-16 mb-1"
              layoutId="preview-card"
              onClick={() => setIsExpanded(true)}
            />
          )}

          {/* Expandable Stack */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div className="space-y-2">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    custom={index}
                    variants={expandableStack()}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-16"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stacked Background Cards (when collapsed) */}
          {!isExpanded && (
            <div className="absolute top-1 left-0 right-0">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-16 transform translate-y-1" />
              <div className="bg-white/30 dark:bg-gray-800/30 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-16 transform translate-y-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
