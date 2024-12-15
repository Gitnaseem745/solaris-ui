interface GBButtonProps {
    label: string;
    onClick?: () => void;
  }

const GBButton: React.FC<GBButtonProps> = ({ label, onClick }) => {
    return (
        <button
        onClick={onClick}
        className="relative px-6 py-2 bg-black font-medium text-white border-transparent overflow-hidden backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out transform rounded-md">
            <span className="absolute inset-0 border animate-border-glow rounded-md"></span>
            {label}
        </button>
    );
};

export default GBButton;

// paste below code inside globals.css or index.css

// @keyframes border-glow {
//     0% {
//       border-color: #fff;
//     }
//     50% {
//       border-color: #000;
//     }
//     100% {
//       border-color: #fff;
//     }
// }
// .animate-border-glow {
//     animation: border-glow 1.5s infinite;
// }
