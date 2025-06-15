import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";

const DocsAlert: React.FC = () => {
  return (
        <div
          className="bg-indigo-600 text-white p-4 z-50"
        >
          <div className="container mx-auto flex justify-start items-center font-sans">
            <Link href={'https://nextlaunch.solarisui.com/'} target="_blank" className="text-sm text-center font-semibold w-full max-sm:text-xs"> ✨ Introducing NextLaunch — Premium templates designed to help you build stunning landing pages in minutes.
            </Link>
          </div>
        </div>
      )
};

export default DocsAlert;
