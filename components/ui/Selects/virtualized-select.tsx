'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface VirtualizedSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const VirtualizedSelect: React.FC<VirtualizedSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollTop);
  };

  const visibleOptions = options.slice(
    Math.floor(scrollPosition / 35),
    Math.ceil((scrollPosition + 200) / 35)
  );

  return (
    <div className="relative w-64 text-foreground" ref={listRef}>
      <button
        type="button"
        className="w-full px-4 py-2 text-left bg-background border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white border border-zinc-300 rounded-md shadow-lg overflow-auto"
            style={{ maxHeight: '200px' }}
            onScroll={handleScroll}
            role="listbox"
          >
            <div style={{ height: `${options.length * 35}px`, position: 'relative' }}>
              {visibleOptions.map((option, index) => (
                <div
                  key={option.value}
                  className="px-4 py-2 bg-background hover:bg-foreground hover:text-background text-foreground cursor-pointer"
                  style={{
                    position: 'absolute',
                    top: `${(Math.floor(scrollPosition / 35) + index) * 35}px`,
                    width: '100%',
                  }}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VirtualizedSelect;

