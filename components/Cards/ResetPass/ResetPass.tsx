import { useState } from 'react';

interface PasswordResetCardProps {
  onSubmit?: (code: string) => void;
  onResendCode?: () => void;
  onHelp?: () => void;
  onFeedback?: () => void;
}

export default function PasswordResetCard({
  onSubmit,
  onResendCode,
  onHelp,
  onFeedback,
}: PasswordResetCardProps) {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 5) {
      setFocusedIndex(index + 1);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      setFocusedIndex(index - 1);
    }
  };

  const handleSubmit = () => {
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      onSubmit?.(fullCode);
    }
  };

  return (
    <div className="w-full max-w-sm bg-[#1C1C1E] rounded-xl p-6 shadow-lg">
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-white text-xl font-semibold">
            Reset your password
          </h2>
          <p className="text-gray-400 text-sm">
            Enter the 6-digit code sent to your email. This code is valid for the next 10 minutes.
          </p>
        </div>

        <div className="flex gap-2 justify-between my-6">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              autoFocus={index === focusedIndex}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={() => setFocusedIndex(index)}
              className={`w-12 h-12 bg-[#2C2C2E] border-2 rounded-lg text-center text-xl font-medium
                ${index === focusedIndex ? 'border-[#00BFA5]' : 'border-transparent'}
                ${digit ? 'text-white' : 'text-transparent'}
                focus:outline-none focus:border-[#00BFA5] transition-colors`}
              style={{ textSecurity: digit ? 'disc' : 'none', WebkitTextSecurity: digit ? 'disc' : 'none' }}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#00BFA5] text-white py-3 px-4 rounded-lg font-medium
            hover:bg-[#00A693] transition-colors flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
          </svg>
          Reset password
        </button>

        <div className="text-center">
          <button
            onClick={onResendCode}
            className="text-sm text-[#00BFA5] hover:underline"
          >
            Didn&apos;t get the code? Resend code
          </button>
        </div>

        <div className="flex justify-center gap-6 pt-4 mt-6 border-t border-[#2C2C2E]">
          <button
            onClick={onHelp}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            Need help?
          </button>
          <button
            onClick={onFeedback}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            Send feedback
          </button>
        </div>
      </div>
    </div>
  );
}
