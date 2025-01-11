'use client'
import { useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
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
        className="w-full min-h-[38px] px-4 py-2 text-left bg-background border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {value.map((v) => (
              <span
                key={v}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                {options.find((o) => o.value === v)?.label}
                <button
                  type="button"
                  className="ml-1 inline-flex items-center justify-center w-4 h-4 text-blue-400 hover:text-blue-500"
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
          <span className="text-gray-400">{placeholder}</span>
        )}
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 bg-background hover:bg-foreground hover:text-background cursor-pointer"
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
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
