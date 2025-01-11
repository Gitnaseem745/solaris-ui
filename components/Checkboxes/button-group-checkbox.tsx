import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const ButtonGroupCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
  <div className={`inline-flex ${className}`}>
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
      className={`px-4 py-2 text-sm font-medium ${
        checked
          ? 'bg-blue-500 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      } border border-gray-300 cursor-pointer focus:outline-none`}
    >
      {label}
    </label>
  </div>
);

