'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiX } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface TagSelectProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

const TagSelect: React.FC<TagSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select options',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOption = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  return (
    <div className="relative w-64 text-foreground">
      <div
        className="min-h-[38px] px-2 py-1 bg-background border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {value.map((v) => (
              <span
                key={v}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800"
              >
                {options.find((o) => o.value === v)?.label}
                <button
                  type="button"
                  className="ml-1 inline-flex items-center justify-center w-4 h-4 text-zinc-400 hover:text-zinc-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleOption(v);
                  }}
                >
                  <FiX className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        ) : (
          <span className="text-zinc-500">{placeholder}</span>
        )}
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
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
                onClick={() => handleToggleOption(option.value)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={value.includes(option.value)}
                    onChange={() => {}}
                    className="mr-2"
                  />
                  {option.label}
                </div>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TagSelect;
