'use client';

import { cn } from '@/lib/utils';

interface SwitchProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'circle' | 'square';
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
}

/**
 * A production-grade Switch component with support for multiple variants, icons, and colors.
 * @param {string} id - Unique identifier for the switch.
 * @param {string} name - Name of the switch (useful in forms).
 * @param {boolean} checked - Whether the switch is active or inactive.
 * @param {function} onChange - Callback triggered when the switch state changes.
 * @param {string} variant - The shape of the switch (circle or square).
 * @param {React.ReactNode} activeIcon - Icon to display when the switch is active.
 * @param {React.ReactNode} inactiveIcon - Icon to display when the switch is inactive.
 * @param {string} activeColor - Background color when the switch is active.
 * @param {string} inactiveColor - Background color when the switch is inactive.
 * @param {string} className - Additional class names for custom styling.
 * @returns {JSX.Element} The Switch component.
 * @example
 * <Switch
 *      id="notifications"
 *      name="notifications"
 *      checked={notificationsEnabled}
 *      onChange={(e) => setNotificationsEnabled(e.target.checked)}
 *      variant="circle"
 *      activeIcon={<FiBell className="text-green-500" />}
 *      inactiveIcon={<FiBellOff className="text-red-500" />}
 *      activeColor="bg-green-500"
 *      inactiveColor="bg-red-500"
 *  />
 */
export const Switch: React.FC<SwitchProps> = ({
  id,
  name,
  checked,
  onChange,
  variant = 'circle',
  activeIcon,
  inactiveIcon,
  activeColor = 'bg-black',
  inactiveColor = 'bg-gray-300',
  className,
}) => {
  return (
    <div className={cn('flex items-center', className)}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <label
        htmlFor={id}
        className="flex items-center cursor-pointer"
      >
        <span
          className={cn(
            'w-12 h-6 flex items-center p-1 transition-colors duration-300 ease-in-out',
            checked ? activeColor : inactiveColor,
            variant === 'circle' ? 'rounded-full' : 'rounded',
          )}
        >
          <span
            className={cn(
              'flex items-center justify-center w-4 h-4 bg-white shadow-md transform transition-transform duration-300 ease-in-out',
              checked ? 'translate-x-6' : '',
              variant === 'circle' ? 'rounded-full' : 'rounded'
            )}
          >
            {checked ? activeIcon : inactiveIcon}
          </span>
        </span>
      </label>
    </div>
  );
};
