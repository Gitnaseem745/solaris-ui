import React from 'react';
import { motion } from 'framer-motion';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const ToggleCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
  <div className={`flex items-center ${className}`}>
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <span className={`w-10 h-6 flex items-center ${checked ? 'bg-green-500' : 'bg-gray-300'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
        <motion.span
          className="bg-white w-4 h-4 rounded-full shadow-md"
          animate={{ x: checked ? 16 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

