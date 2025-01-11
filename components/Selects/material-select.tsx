'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface MaterialSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const MaterialSelect: React.FC<MaterialSelectProps> = ({
  options,
  value,
  onChange,
  label = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative w-64">
      <div className="relative">
        <button
          type="button"
          className="w-full px-4 py-2 text-left bg-transparent border-b-2 border-zinc-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {selectedOption ? selectedOption.label : ' '}
        </button>
        <label
          className={`absolute left-4 transition-all duration-200 ${
            isFocused || selectedOption
              ? 'text-xs text-zinc-500 -top-2'
              : 'text-zinc-500 top-2'
          }`}
        >
          {label}
        </label>
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white border border-zinc-300 rounded-md shadow-lg max-h-60 overflow-auto"
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

export default MaterialSelect;
