'use client'
interface SmoothZoomOutProps {
    label?: string;
    onClick?: () => void;
  }

  const SmoothZoomOut: React.FC<SmoothZoomOutProps> = ({ label = "Hover Me", onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`
                   relative overflow-hidden px-6 py-2 font-medium text-foreground border border-solid border-foreground
                   bg-transparent hover:text-background transition-all duration-[0.5s] hover:border-background
                    before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-0  before:bg-foreground before:transition-all before:duration-[0.5s] hover:before:h-[180%] before:-z-10
                    `}
      >
        {label}
      </button>
    );
  };

  export default SmoothZoomOut;
