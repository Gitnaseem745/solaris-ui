'use client'
import React from 'react';

interface SizePickerSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const SizePickerSwitch: React.FC<SizePickerSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
  <div className={`${className}`}>
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <label
      htmlFor={id}
      className={`inline-flex items-center justify-center w-16 h-8 border rounded-full text-sm font-medium transition-colors duration-300 ease-in-out ${
        checked ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      {checked ? 'Large' : 'Small'}
    </label>
  </div>
);

