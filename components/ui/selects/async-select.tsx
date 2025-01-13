'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface AsyncSelectProps {
  loadOptions: () => Promise<Option[]>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const AsyncSelect: React.FC<AsyncSelectProps> = ({
  loadOptions,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && options.length === 0) {
      setIsLoading(true);
      loadOptions().then((loadedOptions) => {
        setOptions(loadedOptions);
        setIsLoading(false);
      });
    }
  }, [isOpen, options.length, loadOptions]);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative w-64 text-foreground">
      <button
        type="button"
        className="w-full px-4 py-2 text-left bg-background border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white border border-zinc-300 rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {isLoading ? (
              <li className="px-4 py-2 text-zinc-500">Loading...</li>
            ) : (
              options.map((option) => (
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
              ))
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AsyncSelect;
