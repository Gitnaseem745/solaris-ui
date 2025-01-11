import { MdOutgoingMail } from "react-icons/md"

interface MailButtonProps {
    label?: string;
    onClick?: () => void;
}

const MailButton: React.FC<MailButtonProps> = ({ label = "Send Mail", onClick }) => {
  return (
    <div className="max-w-fit">
        <div
        onClick={onClick}
        className="cursor-pointer flex justify-center items-center gap-[6px] bg-[#2196F3] hover:bg-blue-700 transition-colors ease-in duration-300 rounded-md py-2 px-4  tracking-wide">
            <MdOutgoingMail className="size-6" />
            <p>{label}</p>
        </div>
    </div>
  )
}

export default MailButton
