'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface ColorOption {
  value: string;
  label: string;
  color: string;
}

interface ColorSelectProps {
  options: ColorOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ColorSelect: React.FC<ColorSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select a color',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="relative w-64 text-foreground">
      <button
        type="button"
        className="w-full px-4 py-2 text-left bg-background border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <>
            <span
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: selectedOption.color }}
            ></span>
            {selectedOption.label}
          </>
        ) : (
          placeholder
        )}
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-background border border-zinc-300 rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2 bg-background hover:bg-foreground hover:text-background cursor-pointer flex items-center"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                <span
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: option.color }}
                ></span>
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorSelect;
