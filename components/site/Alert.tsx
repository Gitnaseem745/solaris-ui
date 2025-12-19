import Link from "next/link";

const DocsAlert: React.FC = () => {
  return (
        <div
          className="bg-indigo-600 text-white p-4 z-50"
        >
          <div className="container mx-auto flex justify-start items-center font-sans">
            <Link href={'https://nextlaunch.calsinas.app/'} target="_blank" className="text-sm text-center font-semibold w-full max-sm:text-xs"> ✨ Introducing NextLaunch — Premium templates designed to help you build stunning landing pages in minutes.
            </Link>
          </div>
        </div>
      )
};

export default DocsAlert;
