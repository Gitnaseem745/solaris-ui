import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const OutlineCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
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
      className={`inline-block px-4 py-2 border-2 rounded-full cursor-pointer ${
        checked ? 'border-purple-500 text-purple-500' : 'border-gray-300 text-gray-700'
      }`}
    >
      {label}
    </label>
  </div>
);

