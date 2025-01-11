'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface PulsingSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const PulsingSwitch: React.FC<PulsingSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
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
        className={`w-14 h-8 flex items-center ${checked ? 'bg-blue-500' : 'bg-gray-300'} rounded-full p-1 transition-colors duration-300 ease-in-out`}
        animate={checked ? { scale: [1, 1.05, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <motion.span
          className="bg-white w-6 h-6 rounded-full shadow-md"
          animate={{ x: checked ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </motion.span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

