import { useEffect, useState } from "react";
import { GoCopy } from "react-icons/go";
import { TbCopyCheckFilled, TbCopyXFilled } from "react-icons/tb";

interface CopyProps {
  component: string;
}

const Copy: React.FC<CopyProps> = ({ component }) => {
  const [copyStatus, setCopyStatus] = useState("initial");
  const handleCopy = async () => {
      const fileUrl = `https://raw.githubusercontent.com/gitnaseem745/solaris-ui/main/components/${component}/${component}.tsx`;

      try {
          const response = await fetch(fileUrl);
          if (!response.ok) {
              throw new Error(`Failed to copy ${component}`);
            }
            const text = await response.text();
      await navigator.clipboard.writeText(text);
      copiedSuccessfully();
    } catch (error) {
        console.error(`Error copying ${component}:`, error);
        errorcopyStatus();
    }
};

const copiedSuccessfully = () => {
    setCopyStatus("success");
    setTimeout(() => {
        setCopyStatus("initial");
    }, 5000);
}
const errorcopyStatus = () => {
    setCopyStatus("error");
    setTimeout(() => {
        setCopyStatus("initial");
    }, 5000);
}
  return (
    <p onClick={handleCopy} className={`mt-1 mr-1 cursor-pointer`}
        >
          { copyStatus === "initial" ? <GoCopy /> :
            copyStatus === "success" ? <TbCopyCheckFilled className="text-green-500" /> :
            <TbCopyXFilled className="text-red-600" />
          }
        </p>
  );
};

export default Copy;
