'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const AnimatedSwitch: React.FC<AnimatedSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
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
        className={`w-10 h-6 flex items-center ${checked ? 'bg-green-500' : 'bg-gray-300'} rounded-full p-1`}
        animate={{ backgroundColor: checked ? '#10B981' : '#D1D5DB' }}
      >
        <motion.span
          className="w-4 h-4 bg-white rounded-full shadow-md"
          animate={{ x: checked ? 16 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </motion.span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

