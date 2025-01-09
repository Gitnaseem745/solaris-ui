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

export const AnimatedCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <motion.span
        className="w-5 h-5 inline-block mr-2 rounded border border-gray-300 flex-shrink-0"
        animate={checked ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      ></motion.span>
      {label}
    </label>
  </div>
);

