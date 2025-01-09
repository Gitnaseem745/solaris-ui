'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface ColorPickerSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  onColor: string;
  offColor: string;
}

export const ColorPickerSwitch: React.FC<ColorPickerSwitchProps> = ({ id, name, checked, onChange, label, className, onColor, offColor }) => (
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
      <span
        className={`w-12 h-6 rounded-full transition-colors duration-300 ease-in-out`}
        style={{ backgroundColor: checked ? onColor : offColor }}
      >
        <motion.span
          className="block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow"
          animate={{ x: checked ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

