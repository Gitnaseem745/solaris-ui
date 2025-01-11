'use client'
import React from 'react';

interface CardSwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const CardSwitch: React.FC<CardSwitchProps> = ({ id, name, checked, onChange, label, className }) => (
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
      className={`block p-4 border rounded-lg cursor-pointer ${
        checked ? 'bg-black border-blue-500' : 'border-gray-200'
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <span className={`w-10 h-6 flex items-center ${checked ? 'bg-blue-500' : 'bg-gray-300'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
          <span className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${checked ? 'translate-x-4' : ''}`}></span>
        </span>
      </div>
    </label>
  </div>
);
