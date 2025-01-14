'use client'
import { useState } from 'react';

interface PasswordResetCardProps {
  onSubmit?: (code: string) => void;
  onResendCode?: () => void;
  onHelp?: () => void;
  onFeedback?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function PasswordResetCard({
  onSubmit,
  onResendCode,
  onHelp,
  onFeedback,
  className = '',
  style = {},
}: PasswordResetCardProps) {
  // State to hold the input code as an array of strings.
  const [code, setCode] = useState<string[]>(Array(6).fill(''));

  // State to manage which input field is currently focused.
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  // State to manage any error messages.
  const [error, setError] = useState<string>('');

  // State to handle the loading state during submission.
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numeric input.

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError('');

    // Move focus to the next input field if a value is entered.
    if (value && index < 5) {
      setFocusedIndex(index + 1);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      setFocusedIndex(index - 1);
    }
  };

    // Handles pasting a full code into the input fields.
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData('Text').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      setCode(pastedData.split(''));
      setFocusedIndex(Math.min(pastedData.length, 5));
      setError('');
    }
  };

// Handles form submission.
  const handleSubmit = async () => {
    setError('');
    const fullCode = code.join('');

    if (fullCode.length < 6) {
      setError('Please enter all 6 digits.');
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit?.(fullCode);
    } catch (error) {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`w-full max-w-sm bg-[#1C1C1E] rounded-xl p-6 shadow-lg ${className}`}
      style={style}
    >
      <div className="space-y-4">
        {/* Header Section */}
        <div className="space-y-2">
          <h2 className="text-white text-xl font-semibold">Reset your password</h2>
          <p className="text-gray-400 text-sm">
            Enter the 6-digit code sent to your email. This code is valid for the next 10 minutes.
          </p>
        </div>

        {/* Input Fields Section */}
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
              onPaste={handlePaste}
              onFocus={() => setFocusedIndex(index)}
              aria-label={`Digit ${index + 1}`}
              aria-required="true"
              className={`w-12 h-12 bg-[#2C2C2E] border-2 rounded-lg text-center text-xl font-medium
                ${index === focusedIndex ? 'border-[#00BFA5]' : 'border-transparent'}
                ${digit ? 'text-white' : 'text-transparent'}
                focus:outline-none focus:border-[#00BFA5] transition-colors`}
              style={{ textSecurity: digit ? 'disc' : 'none', WebkitTextSecurity: digit ? 'disc' : 'none' }}
            />
          ))}
        </div>

        {/* Error Message Section */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full bg-[#00BFA5] text-white py-3 px-4 rounded-lg font-medium
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#00A693] transition-colors'}`}
        >
          {isLoading ? 'Submitting...' : 'Reset password'}
        </button>

        {/* Resend Code Link */}
        <div className="text-center">
          <button
            onClick={onResendCode}
            className="text-sm text-[#00BFA5] hover:underline"
          >
            Didn&apos;t get the code? Resend code
          </button>
        </div>

        {/* Help and Feedback Section */}
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
