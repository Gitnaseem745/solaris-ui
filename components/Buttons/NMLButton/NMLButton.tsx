import { useState } from "react";
import { MdOutlineMail } from "react-icons/md"
import { PiArrowRightLight } from "react-icons/pi"

interface NMLButtonProps {
    label: string;
    onClick?: () => void;
}

const NMLButton: React.FC<NMLButtonProps> = ({ label, onClick }) => {
    const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
    className="max-w-fit"
    >
        <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="cursor-pointer flex justify-between items-center gap-2 bg-neutral-500 hover:bg-white transition-colors ease-in duration-150 rounded-md py-2 px-4 hover:text-black tracking-wide hover:shadow-sm">
            <MdOutlineMail className="size-5" />
            <p>{label}</p>
            <PiArrowRightLight
            className={`size-5 font-bold`}
            style={{
                marginLeft: hovered ? "-4px" : "-6px"
            }} />
        </div>
    </div>
  )
}

export default NMLButton
