'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface GradientSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const GradientSwitch: React.FC<GradientSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
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
        checked ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' : 'bg-gray-300'
      }`}>
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

