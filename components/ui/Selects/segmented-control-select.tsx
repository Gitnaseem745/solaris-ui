'use client'
import { motion } from 'framer-motion';

interface Option {
  value: string;
  label: string;
}

interface SegmentedControlSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const SegmentedControlSelect: React.FC<SegmentedControlSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const selectedIndex = options.findIndex(option => option.value === value);

  return (
    <div className="relative inline-flex bg-zinc-100 rounded-lg p-1 overflow-hidden">
      {options.map((option) => (
        <button
          key={option.value}
          className={`relative z-10 px-4 py-2 text-sm font-medium ${
            option.value === value ? 'text-zinc-900' : 'text-zinc-500'
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
      <motion.div
        className="absolute top-1 left-1 right-1 bottom-1 bg-white rounded-md shadow-sm"
        initial={false}
        animate={{
          x: selectedIndex * 100 + '%',
          width: 100 / options.length + '%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

export default SegmentedControlSelect;
