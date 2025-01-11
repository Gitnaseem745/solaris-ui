import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const TexturedCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
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
      <span className={`w-6 h-6 rounded-full ${checked ? 'bg-stripes bg-stripes-white' : 'bg-gray-300'}`} style={{ backgroundImage: checked ? 'repeating-linear-gradient(45deg, #4f46e5, #4f46e5 5px, #6366f1 5px, #6366f1 10px)' : 'none' }}></span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

