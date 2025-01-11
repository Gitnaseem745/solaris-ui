interface Option {
  value: string;
  label: string;
}

interface ButtonGroupSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const ButtonGroupSelect: React.FC<ButtonGroupSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`px-4 py-2 text-sm font-medium ${
            option.value === value
              ? 'bg-zinc-900 text-white'
              : 'bg-white text-zinc-900 hover:bg-zinc-100'
          } border border-zinc-200 ${
            option.value === options[0].value ? 'rounded-l-md' : ''
          } ${
            option.value === options[options.length - 1].value ? 'rounded-r-md' : ''
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroupSelect;
