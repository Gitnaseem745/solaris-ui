'use client'
import React from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

interface IconSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const IconSwitch: React.FC<IconSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <span className={`w-12 h-6 flex items-center ${checked ? 'bg-green-500' : 'bg-red-500'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
        <span className={`w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ease-in-out ${checked ? 'translate-x-6' : ''}`}>
          {checked ? <FiCheck className="text-green-500" size={10} /> : <FiX className="text-red-500" size={10} />}
        </span>
      </span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

