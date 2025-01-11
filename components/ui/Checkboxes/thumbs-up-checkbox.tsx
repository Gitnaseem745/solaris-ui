import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const ThumbsUpCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <FiThumbsUp className={`w-6 h-6 ${checked ? 'text-blue-500 fill-current' : 'text-gray-400'}`} />
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

