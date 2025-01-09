import React from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  imageSrc: string;
}

export const ImageCheckbox: React.FC<CheckboxProps> = ({ id, name, checked, onChange, label, className, imageSrc }) => (
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
      className={`block cursor-pointer ${checked ? 'ring-2 ring-blue-500' : ''}`}
    >
      <img src={imageSrc} alt={label} className="w-full h-auto rounded-lg" />
      <span className="block mt-2 text-center">{label}</span>
    </label>
  </div>
);

