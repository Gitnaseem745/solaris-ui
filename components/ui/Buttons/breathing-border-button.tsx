interface BreathingBorderProps {
    label?: string;
    onClick?: () => void;
  }

const BreathingBorder: React.FC<BreathingBorderProps> = ({ label = "Breathing", onClick }) => {
    return (
        <button
        onClick={onClick}
        className="relative px-6 py-2 bg-black font-medium text-white border-transparent overflow-hidden backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out transform">
            <span className="absolute inset-0 border animate-border-glow"></span>
            {label}
        </button>
    );
};

export default BreathingBorder;

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
