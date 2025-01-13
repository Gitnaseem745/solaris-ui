'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiPlus } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface CreatableSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  onCreateOption: (label: string) => void;
  placeholder?: string;
}

const CreatableSelect: React.FC<CreatableSelectProps> = ({
  options,
  value,
  onChange,
  onCreateOption,
  placeholder = 'Select or create an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const selectedOption = options.find(option => option.value === value);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleCreateOption = () => {
    onCreateOption(inputValue);
    setInputValue('');
  };

  return (
    <div className="relative w-64 text-foreground">
      <div
        className="w-full px-4 py-2 text-left bg-background border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 cursor-text"
        onClick={() => setIsOpen(true)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-background border border-zinc-300 rounded-md shadow-lg"
          >
            <div className="p-2">
              <input
                type="text"
                className="w-full px-3 py-2 border border-zinc-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
                placeholder="Type to search or create..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <ul className="max-h-60 overflow-auto">
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="px-4 py-2 bg-background hover:bg-foreground hover:text-background text-foreground cursor-pointer"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setInputValue('');
                  }}
                >
                  {option.label}
                </li>
              ))}
              {inputValue && !filteredOptions.some(option => option.label.toLowerCase() === inputValue.toLowerCase()) && (
                <li
                  className="px-4 py-2 hover:bg-zinc-100 cursor-pointer text-zinc-600"
                  onClick={handleCreateOption}
                >
                  <FiPlus className="inline-block w-4 h-4 mr-2" />
                  Create &quot;{inputValue}&quot;
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreatableSelect;
