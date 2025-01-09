"use client";

import { Check } from "lucide-react";

interface SuccessCardProps {
  title: string;
  message: string;
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  secondaryAction: {
    label: string;
    onClick: () => void;
  };
}

export default function SuccessCard({
  title,
  message,
  primaryAction,
  secondaryAction,
}: SuccessCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{message}</p>
      <div className="flex gap-3">
        <button
          onClick={secondaryAction.onClick}
          className="flex-1 py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {secondaryAction.label}
        </button>
        <button
          onClick={primaryAction.onClick}
          className="flex-1 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          {primaryAction.label}
        </button>
      </div>
    </div>
  );
}
