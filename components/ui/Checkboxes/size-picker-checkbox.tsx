import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

export const SizePickerCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className }) => (
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
      className={`inline-flex items-center justify-center w-10 h-10 border rounded-md text-sm font-medium ${
        checked ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      {label}
    </label>
  </div>
);

