'use client'
import React, { useState } from 'react';
import SuccessAlert from './success-alert';
import ErrorAlert from './error-alert';
import WarningAlert from './warning-alert';
import InfoAlert from './info-alert';
import ConfirmationAlert from './confirmation-alert';
import BannerAlert from './banner-alert';
import ToastAlert from './toast-alert';
import FloatingAlert from './floating-alert';
import SlideInAlert from './slide-in-alert';
import ProgressAlert from './progress-alert';
import CountdownAlert from './countdown-alert';
import ExpandingAlert from './expanding-alert';
import StickyAlert from './sticky-alert';
import PulsatingAlert from './pulsating-alert';
import BouncingAlert from './bouncing-alert';
import ShakingAlert from './shaking-alert';
import FadingAlert from './fading-alert';
import ColorChangingAlert from './color-changing-alert';
import TypingAlert from './typing-alert';
import RotatingAlert from './rotating-alert';
import FlipAlert from './flip-alert';
import SwipeAlert from './swipe-alert';

// Success Alert Showcase
export const SuccessAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Success Alert
      </button>
      <SuccessAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="Operation completed successfully!"
      />
    </div>
  );
};

// Error Alert Showcase
export const ErrorAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Error Alert
      </button>
      <ErrorAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="An error occurred. Please try again."
      />
    </div>
  );
};

// Warning Alert Showcase
export const WarningAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Warning Alert
      </button>
      <WarningAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="Warning: This action cannot be undone."
      />
    </div>
  );
};

// Info Alert Showcase
export const InfoAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Info Alert
      </button>
      <InfoAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="Here's some important information for you."
      />
    </div>
  );
};

// Confirmation Alert Showcase
export const ConfirmationAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Confirmation Alert
      </button>
      <ConfirmationAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          console.log('Confirmed');
          setIsOpen(false);
        }}
        message="Are you sure you want to proceed?"
      />
    </div>
  );
};

// Toast Alert Showcase
export const ToastAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Toast Alert
      </button>
      <ToastAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This is a toast notification."
      />
    </div>
  );
};

// Banner Alert Showcase
export const BannerAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Banner Alert
      </button>
      <BannerAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="Important announcement: System maintenance scheduled for tonight."
      />
    </div>
  );
};

// Floating Alert Showcase
export const FloatingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Floating Alert
      </button>
      <FloatingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert floats in the corner of the screen."
      />
    </div>
  );
};

// SlideIn Alert Showcase
export const SlideInAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show SlideIn Alert
      </button>
      <SlideInAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert slides in from the side."
      />
    </div>
  );
};

// Progress Alert Showcase
export const ProgressAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Progress Alert
      </button>
      <ProgressAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="Uploading file..."
      />
    </div>
  );
};

// Countdown Alert Showcase
export const CountdownAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Countdown Alert
      </button>
      <CountdownAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert will close in"
      />
    </div>
  );
};

// Expanding Alert Showcase
export const ExpandingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Expanding Alert
      </button>
      <ExpandingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Expandable Alert"
        message="Click the arrow to see more details about this alert."
      />
    </div>
  );
};

// Sticky Alert Showcase
export const StickyAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Sticky Alert
      </button>
      <StickyAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This is a sticky alert that stays at the bottom of the screen."
      />
    </div>
  );
};

// Pulsating Alert Showcase
export const PulsatingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Pulsating Alert
      </button>
      <PulsatingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert pulses to grab attention."
      />
    </div>
  );
};

// Bouncing Alert Showcase
export const BouncingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Bouncing Alert
      </button>
      <BouncingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert bounces into view."
      />
    </div>
  );
};

// Shaking Alert Showcase
export const ShakingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Shaking Alert
      </button>
      <ShakingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert shakes to indicate urgency."
      />
    </div>
  );
};

// Fading Alert Showcase
export const FadingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Fading Alert
      </button>
      <FadingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert fades away after a few seconds."
      />
    </div>
  );
};

// Color Changing Alert Showcase
export const ColorChangingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Color Changing Alert
      </button>
      <ColorChangingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert changes colors."
      />
    </div>
  );
};

// Typing Alert Showcase
export const TypingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Typing Alert
      </button>
      <TypingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert types out its message."
      />
    </div>
  );
};

// Rotating Alert Showcase
export const RotatingAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Rotating Alert
      </button>
      <RotatingAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert rotates into view."
      />
    </div>
  );
};

// Flip Alert Showcase
export const FlipAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Flip Alert
      </button>
      <FlipAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="This alert flips into view."
      />
    </div>
  );
};

// Swipe Alert Showcase
export const SwipeAlertShowcase: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Swipe Alert
      </button>
      <SwipeAlert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="Swipe this alert to dismiss it."
      />
    </div>
  );
};
