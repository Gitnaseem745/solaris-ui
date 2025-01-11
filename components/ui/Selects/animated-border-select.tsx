'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface AnimatedBorderSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const AnimatedBorderSelect: React.FC<AnimatedBorderSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative w-64 text-foreground">
      <button
        type="button"
        className="w-full px-4 py-2 text-left bg-background rounded-md shadow-sm focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </button>
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        className="absolute inset-0 rounded-md pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <svg className="w-full h-full">
          <motion.rect
            width="100%"
            height="100%"
            rx="6"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeDasharray="8,8"
            initial={{ pathLength: 0 }}
            animate={isOpen ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.5 }}
          />
        </svg>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-background border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2 bg-background hover:bg-foreground hover:text-background text-foreground cursor-pointer"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBorderSelect;
