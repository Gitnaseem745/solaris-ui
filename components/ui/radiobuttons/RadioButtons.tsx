'use client'
import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiHeart, FiThumbsUp, FiSmile } from 'react-icons/fi';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
}

const BaseRadioButton: React.FC<RadioButtonProps> = ({ id, name, value, checked, onChange, label, className }) => (
  <div className={`flex items-center ${className}`}>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <span className="w-5 h-5 inline-block mr-2 rounded-full border border-gray-300 flex-shrink-0"></span>
      {label}
    </label>
  </div>
);

export const SimpleRadioButton: React.FC<RadioButtonProps> = (props) => (
  <BaseRadioButton {...props} className="text-gray-700" />
);

export const ColoredRadioButton: React.FC<RadioButtonProps> = (props) => (
  <BaseRadioButton
    {...props}
    className="text-blue-600"
  />
);

export const AnimatedRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <motion.span
        className="w-5 h-5 inline-block mr-2 rounded-full border border-gray-300 flex-shrink-0"
        animate={props.checked ? { scale: 1.1 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
      ></motion.span>
      {props.label}
    </label>
  </div>
);

export const IconRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <span className="w-5 h-5 inline-block mr-2 rounded-full border border-gray-300 flex-shrink-0 flex items-center justify-center">
        {props.checked && <FiCheck className="text-green-500" />}
      </span>
      {props.label}
    </label>
  </div>
);

export const CardRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label
      htmlFor={props.id}
      className={`block p-4 border rounded-lg cursor-pointer ${
        props.checked ? 'bg-blue-50 border-blue-500' : 'border-gray-200'
      }`}
    >
      {props.label}
    </label>
  </div>
);

export const CircleRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <span className={`w-6 h-6 inline-block mr-2 rounded-full border-2 flex-shrink-0 ${props.checked ? 'border-blue-500' : 'border-gray-300'}`}>
        <span className={`block w-3 h-3 mt-1 ml-1 rounded-full ${props.checked ? 'bg-blue-500' : 'bg-transparent'}`}></span>
      </span>
      {props.label}
    </label>
  </div>
);

export const SquareRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <span className={`w-5 h-5 inline-block mr-2 border-2 flex-shrink-0 ${props.checked ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
        {props.checked && <FiCheck className="text-white" />}
      </span>
      {props.label}
    </label>
  </div>
);

export const OutlineRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label
      htmlFor={props.id}
      className={`inline-block px-4 py-2 border-2 rounded-full cursor-pointer ${
        props.checked ? 'border-purple-500 text-purple-500' : 'border-gray-300 text-gray-700'
      }`}
    >
      {props.label}
    </label>
  </div>
);

export const ImageRadioButton: React.FC<RadioButtonProps & { imageSrc: string }> = (props) => (
  <div className={`${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label
      htmlFor={props.id}
      className={`block cursor-pointer ${props.checked ? 'ring-2 ring-blue-500' : ''}`}
    >
      <img src={props.imageSrc} alt={props.label} className="w-full h-auto rounded-lg" />
      <span className="block mt-2 text-center">{props.label}</span>
    </label>
  </div>
);

export const ToggleRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <span className={`w-10 h-6 flex items-center ${props.checked ? 'bg-green-500' : 'bg-gray-300'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
        <motion.span
          className="bg-white w-4 h-4 rounded-full shadow-md"
          animate={{ x: props.checked ? 16 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </span>
      <span className="ml-2">{props.label}</span>
    </label>
  </div>
);

export const StarRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <FiStar className={`w-6 h-6 ${props.checked ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
      <span className="ml-2">{props.label}</span>
    </label>
  </div>
);

export const HeartRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <FiHeart className={`w-6 h-6 ${props.checked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
      <span className="ml-2">{props.label}</span>
    </label>
  </div>
);

export const ThumbsUpRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <FiThumbsUp className={`w-6 h-6 ${props.checked ? 'text-blue-500 fill-current' : 'text-gray-400'}`} />
      <span className="ml-2">{props.label}</span>
    </label>
  </div>
);

export const EmojiRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <FiSmile className={`w-6 h-6 ${props.checked ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
      <span className="ml-2">{props.label}</span>
    </label>
  </div>
);

export const ButtonGroupRadio: React.FC<RadioButtonProps> = (props) => (
  <div className={`inline-flex ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label
      htmlFor={props.id}
      className={`px-4 py-2 text-sm font-medium ${
        props.checked
          ? 'bg-blue-500 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      } border border-gray-300 cursor-pointer focus:outline-none`}
    >
      {props.label}
    </label>
  </div>
);

export const SliderRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <span className="relative w-10 h-4 bg-gray-300 rounded-full transition-colors duration-300 ease-in-out">
        <motion.span
          className="absolute left-0 w-6 h-6 bg-white rounded-full shadow transform -translate-y-1"
          animate={{ x: props.checked ? 16 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </span>
      <span className="ml-3">{props.label}</span>
    </label>
  </div>
);

export const ColorPickerRadioButton: React.FC<RadioButtonProps & { color: string }> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <span
        className={`w-6 h-6 rounded-full border-2 ${props.checked ? 'border-gray-900' : 'border-gray-300'}`}
        style={{ backgroundColor: props.color }}
      ></span>
      <span className="ml-2">{props.label}</span>
    </label>
  </div>
);

export const SizePickerRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label
      htmlFor={props.id}
      className={`inline-flex items-center justify-center w-10 h-10 border rounded-md text-sm font-medium ${
        props.checked ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      {props.label}
    </label>
  </div>
);

export const GradientRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <span className={`w-6 h-6 rounded-full ${props.checked ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' : 'bg-gray-300'}`}></span>
      <span className="ml-2">{props.label}</span>
    </label>
  </div>
);

export const TexturedRadioButton: React.FC<RadioButtonProps> = (props) => (
  <div className={`flex items-center ${props.className}`}>
    <input
      type="radio"
      id={props.id}
      name={props.name}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
      className="sr-only"
    />
    <label htmlFor={props.id} className="flex items-center cursor-pointer">
      <span className={`w-6 h-6 rounded-full ${props.checked ? 'bg-stripes bg-stripes-white' : 'bg-gray-300'}`} style={{ backgroundImage: props.checked ? 'repeating-linear-gradient(45deg, #4f46e5, #4f46e5 5px, #6366f1 5px, #6366f1 10px)' : 'none' }}></span>
      <span className="ml-2">{props.label}</span>
    </label>
  </div>
);
