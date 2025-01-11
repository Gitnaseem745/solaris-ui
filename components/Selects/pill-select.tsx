'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface PillSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const PillSelect: React.FC<PillSelectProps> = ({
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
        className="w-full px-6 py-3 text-left bg-background rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <FiChevronDown className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-2 bg-white border border-zinc-300 rounded-2xl shadow-lg max-h-60 overflow-auto"
          >
            {options.map((option) => (
              <li
                key={option.value}
                className="px-6 py-3 bg-background hover:bg-foreground hover:text-background text-foreground cursor-pointer"
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

export default PillSelect;
