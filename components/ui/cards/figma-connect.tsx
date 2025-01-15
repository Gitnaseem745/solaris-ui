'use client';
import { ElementType } from 'react';
import { FaX } from 'react-icons/fa6';

interface ConnectCardProps {
  onClose?: () => void;
  onCancel?: () => void;
  onIntegrate?: () => void;
  title: string;
  description: string;
  sourceApp: {
    name: string;
    Icon: ElementType;
  };
  targetApp: {
    name: string;
    Icon: ElementType;
  };
}

export default function ConnectCard({
  onClose,
  onCancel,
  onIntegrate,
  title,
  description,
  sourceApp,
  targetApp
}: ConnectCardProps) {
  return (
    <div className="w-full relative max-w-md bg-white dark:bg-[#1C1C1E] rounded-xl p-6 shadow-lg">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
        >
          <FaX size={12} />
        </button>
      </div>

      <div className="flex flex-col items-center text-center space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative bg-[#2C2C2E] p-4 rounded-full flex justify-center items-center">
            <sourceApp.Icon
              className="size-10"
            />
          </div>

          <div className="w-6 h-6 relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6 text-gray-400"
            >
              <path d="M8 12h8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="w-12 h-12 relative bg-[#2C2C2E] p-4 rounded-full flex justify-center items-center">
          <targetApp.Icon
              className="size-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </p>
        </div>

        <div className="flex gap-3 w-full">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 text-gray-700 dark:text-white bg-gray-100 dark:bg-[#2C2C2E] rounded-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3E] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onIntegrate}
            className="flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Integrate
          </button>
        </div>

        <button className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
          Access and Privacy
        </button>
      </div>
    </div>
  );
}
