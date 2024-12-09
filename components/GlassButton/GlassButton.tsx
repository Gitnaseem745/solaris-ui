interface GlassButtonProps {
    label: string;
    onClick?: () => void;
  }

const GlassButton: React.FC<GlassButtonProps> = ({ label, onClick }) => {
    return (
        <button
        onClick={onClick}
        className="relative px-6 py-2  font-medium text-white bg-opacity-10 border border-transparent rounded-full overflow-hidden backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out transform">
            <span className="absolute inset-0 border border-neutral-200 rounded-full animate-shine"></span>
            {label}
        </button>
    );
};

export default GlassButton;

// paste below code inside globals.css or index.css

// @keyframes shine {
//     0% {
//         opacity: 1;
//         box-shadow: 0 0 10px 3px #00bfff;
//     }
//     50% {
//         opacity: 0.5;
//         box-shadow: 0 0 20px 5px #00bfff;
//     }
//     100% {
//         opacity: 1;
//         box-shadow: 0 0 10px 3px #00bfff;
//     }
// }

// .animate-shine {
//     animation: shine 1.5s infinite;
// }
