import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  color: string;
}

export const ColorPickerCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className, color }) => (
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
      <span
        className={`w-6 h-6 rounded-full border-2 ${checked ? 'border-gray-900' : 'border-gray-300'}`}
        style={{ backgroundColor: color }}
      ></span>
      <span className="ml-2">{label}</span>
    </label>
  </div>
);

