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

export const SliderCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <span className="relative w-10 h-4 bg-gray-300 rounded-full transition-colors duration-300 ease-in-out">
        <motion.span
          className="absolute left-0 w-6 h-6 bg-white rounded-full shadow transform -translate-y-1"
          animate={{ x: checked ? 16 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </span>
      <span className="ml-3">{label}</span>
    </label>
  </div>
);

