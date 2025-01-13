'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FiWifi, FiWifiOff } from 'react-icons/fi';

interface WifiSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const WifiSwitch: React.FC<WifiSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <span className={`w-14 h-8 flex items-center ${checked ? 'bg-blue-500' : 'bg-gray-300'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
        <motion.span
          className="bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center"
          animate={{ x: checked ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          {checked ? <FiWifi className="text-blue-500" size={12} /> : <FiWifiOff className="text-gray-500" size={12} />}
        </motion.span>
      </span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

