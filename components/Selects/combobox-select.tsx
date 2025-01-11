'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface Option {
  value: string;
  label: string;
}

interface ComboboxSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ComboboxSelect: React.FC<ComboboxSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedOption = options.find(option => option.value === value);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-zinc-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 pl-10"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              </div>
            </div>
            <ul className="max-h-60 overflow-auto">
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="px-4 py-2 bg-background hover:bg-foreground hover:text-background text-foreground cursor-pointer"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComboboxSelect;
