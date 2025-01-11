import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const SquareCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <span className={`w-5 h-5 inline-block mr-2 border-2 flex-shrink-0 ${checked ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
        {checked && <FiCheck className="text-white" />}
      </span>
      {label}
    </label>
  </div>
);

