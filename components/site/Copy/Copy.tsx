import { useState } from "react";
import { GoCopy } from "react-icons/go";
import { TbCopyCheckFilled, TbCopyXFilled } from "react-icons/tb";

interface CopyProps {
  component: string;
}

const Copy: React.FC<CopyProps> = ({ component }) => {
  const [copyStatus, setCopyStatus] = useState("initial");

  const handleCopy = async () => {
    const apiUrl = `/api/?componentName=${component}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch component: ${component}`);
      }
      const { source } = await response.json();
      await navigator.clipboard.writeText(source || "");
      copiedSuccessfully();
    } catch (error) {
      console.error(`Error copying ${component}:`, error);
      errorCopyStatus();
    }
  };

  const copiedSuccessfully = () => {
    setCopyStatus("success");
    setTimeout(() => {
      setCopyStatus("initial");
    }, 5000);
  };

  const errorCopyStatus = () => {
    setCopyStatus("error");
    setTimeout(() => {
      setCopyStatus("initial");
    }, 5000);
  };

  return (
    <p onClick={handleCopy} className="mt-1 mr-1 cursor-pointer">
      {copyStatus === "initial" ? (
        <GoCopy />
      ) : copyStatus === "success" ? (
        <TbCopyCheckFilled className="text-green-500" />
      ) : (
        <TbCopyXFilled className="text-red-600" />
      )}
    </p>
  );
};

export default Copy;
