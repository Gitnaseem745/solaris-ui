import { BiCheck } from "react-icons/bi";

interface SuccessCardProps {
  title: string;
  message: string;
  primaryAction: {
    label: string;
    onClick?: () => void;
  };
  secondaryAction: {
    label: string;
    onClick?: () => void;
  };
}

export default function SuccessCard({
  title,
  message,
  primaryAction,
  secondaryAction,
}: SuccessCardProps) {
  return (
    <div className="bg-foreground text-background rounded-2xl p-6 shadow-lg max-w-sm text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <BiCheck className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{message}</p>
      <div className="flex gap-3">
        <button
          onClick={secondaryAction.onClick}
          className="flex-1 py-2 px-4 border hover:text-foreground border-background rounded-lg hover:bg-background transition-colors"
        >
          {secondaryAction.label}
        </button>
        <button
          onClick={primaryAction.onClick}
          className="flex-1 py-2 px-4 hover:text-white/50 bg-background text-foreground rounded-lg hover:bg-neutral-900 transition-colors"
        >
          {primaryAction.label}
        </button>
      </div>
    </div>
  );
}
