'use client'
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface OptionGroup {
  label: string;
  options: Option[];
}

interface GroupedSelectProps {
  groups: OptionGroup[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const GroupedSelect: React.FC<GroupedSelectProps> = ({
  groups,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = groups
    .flatMap((group) => group.options)
    .find((option) => option.value === value);

  return (
    <div className="relative w-64 text-foreground">
      <button
        type="button"
        className="w-full px-4 py-2 text-left bg-background border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-background border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {groups.map((group) => (
            <li key={group.label}>
              <div className="px-4 py-2 font-semibold bg-background">{("> ") + group.label}</div>
              <ul>
                {group.options.map((option) => (
                  <li
                    key={option.value}
                    className="px-4 py-2 bg-background hover:bg-foreground hover:text-background cursor-pointer"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupedSelect;
