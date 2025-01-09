'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface TexturedSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const TexturedSwitch: React.FC<TexturedSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <span className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out ${
        checked ? 'bg-stripes bg-stripes-white' : 'bg-gray-300'
      }`} style={{ backgroundImage: checked ? 'repeating-linear-gradient(45deg, #4f46e5, #4f46e5 5px, #6366f1 5px, #6366f1 10px)' : 'none' }}>
        <motion.span
          className="bg-white w-6 h-6 rounded-full shadow-md"
          animate={{ x: checked ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

