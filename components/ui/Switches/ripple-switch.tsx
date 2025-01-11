'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RippleSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const RippleSwitch: React.FC<RippleSwitchProps> = ({ id, name, checked, onChange, label, className }) => {
  const [ripple, setRipple] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRipple(true);
    onChange(event);
    setTimeout(() => setRipple(false), 600);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <span className={`relative w-14 h-8 flex items-center ${checked ? 'bg-blue-500' : 'bg-gray-300'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
          <motion.span
            className="bg-white w-6 h-6 rounded-full shadow-md"
            animate={{ x: checked ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
          />
          {ripple && (
            <motion.span
              className="absolute inset-0 bg-blue-200 rounded-full"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </span>
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
};

