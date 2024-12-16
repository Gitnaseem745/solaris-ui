import { FaXTwitter } from "react-icons/fa6";

interface XButtonProps {
    label: string;
    onClick?: () => void;
}
const XButton: React.FC<XButtonProps> = ({ label, onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div
      onClick={onClick}
      className="min-w-fit flex justify-center items-center bg-[#14171a] text-white hover:bg-[#14171a]/90 py-2 px-6 rounded-md">
      <span className="pointer-events-none mr-2">
        <FaXTwitter className="opacity-60"/>
      </span>
      {label}
    </div>
    </div>
  );
}

export default XButton;
