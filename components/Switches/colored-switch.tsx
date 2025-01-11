'use client'
import React from 'react';

interface ColoredSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const ColoredSwitch: React.FC<ColoredSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <span className={`w-10 h-6 flex items-center ${checked ? 'bg-blue-500' : 'bg-gray-300'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
        <span className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${checked ? 'translate-x-4' : ''}`}></span>
      </span>
      <span className="ml-2 text-blue-600">{label}</span>
    </label>
  </div>
);

