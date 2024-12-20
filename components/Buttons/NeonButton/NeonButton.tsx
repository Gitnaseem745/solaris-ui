interface NeonButtonProps {
    label: string;
    onClick?: () => void;
  }

  const NeonButton: React.FC<NeonButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
            relative inline-block cursor-pointer text-[#fff] border border-[#fff] rounded px-6 py-2 text-center no-underline shadow-[inset_0_0_8px_#fff,0_0_8px_#fff] transition-colors focus:outline-none
            before:content-[''] before:absolute before:bg-[#fff] before:top-[120%] before:left-0 before:w-full before:h-full before:transform before:perspective-[1em] before:rotate-x-[40deg] before:scale-y-[0.35] before:blur-[1em] before:opacity-70 before:pointer-events-none after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:shadow-[0_0_2em_0.5em_#fff] after:opacity-0 after:bg-[#fff] after:z-[-1] after:transition-opacity hover:text-black/70 hover:before:opacity-100 hover:after:opacity-100
        `}
      >
        {label}
      </button>
    );
  };
  export default NeonButton;
