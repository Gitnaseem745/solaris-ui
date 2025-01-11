'use client'

import React, { useState } from 'react';
import { SimpleSwitch } from './simple-switch';
import { ColoredSwitch } from './colored-switch';
import { AnimatedSwitch } from './animated-switch';
import { IconSwitch } from './icon-switch';
import { CardSwitch } from './card-switch';
import { SquareSwitch } from './square-switch';
import { ToggleSwitch } from './toggle-switch';
import { DayNightSwitch } from './day-night-switch';
import { VolumeSwitch } from './volume-switch';
import { WifiSwitch } from './wifi-switch';
import { SliderSwitch } from './slider-switch';
import { AnimatedIconSwitch } from './animated-icon-switch';
import { PulsingSwitch } from './pulsing-switch';
import { RippleSwitch } from './ripple-switch';

// Simple Switch Showcase
export const SimpleSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SimpleSwitch
      id="simple-switch"
      name="simple-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Simple Switch"
    />
  );
};

// Colored Switch Showcase
export const ColoredSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ColoredSwitch
      id="colored-switch"
      name="colored-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Colored Switch"
    />
  );
};

// Animated Switch Showcase
export const AnimatedSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <AnimatedSwitch
      id="animated-switch"
      name="animated-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Animated Switch"
    />
  );
};

// Icon Switch Showcase
export const IconSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <IconSwitch
      id="icon-switch"
      name="icon-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Icon Switch"
    />
  );
};

// Card Switch Showcase
export const CardSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CardSwitch
      id="card-switch"
      name="card-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Card Switch"
    />
  );
};

// Square Switch Showcase
export const SquareSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SquareSwitch
      id="square-switch"
      name="square-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Square Switch"
    />
  );
};

// Toggle Switch Showcase
export const ToggleSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ToggleSwitch
      id="toggle-switch"
      name="toggle-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Toggle Switch"
    />
  );
};

// Day/Night Switch Showcase
export const DayNightSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <DayNightSwitch
      id="day-night-switch"
      name="day-night-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Day/Night Switch"
    />
  );
};

// Volume Switch Showcase
export const VolumeSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <VolumeSwitch
      id="volume-switch"
      name="volume-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Volume Switch"
    />
  );
};

// Wifi Switch Showcase
export const WifiSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <WifiSwitch
      id="wifi-switch"
      name="wifi-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Wifi Switch"
    />
  );
};

// Slider Switch Showcase
export const SliderSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SliderSwitch
      id="slider-switch"
      name="slider-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Slider Switch"
    />
  );
};

// Animated Icon Switch Showcase
export const AnimatedIconSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <AnimatedIconSwitch
      id="animated-icon-switch"
      name="animated-icon-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Animated Icon Switch"
    />
  );
};

// Pulsing Switch Showcase
export const PulsingSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <PulsingSwitch
      id="pulsing-switch"
      name="pulsing-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Pulsing Switch"
    />
  );
};

// Ripple Switch Showcase
export const RippleSwitchShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <RippleSwitch
      id="ripple-switch"
      name="ripple-switch"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Ripple Switch"
    />
  );
};

const SwitchShowcase: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Switch Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Simple Switch</h2>
          <SimpleSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Colored Switch</h2>
          <ColoredSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Animated Switch</h2>
          <AnimatedSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Icon Switch</h2>
          <IconSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Card Switch</h2>
          <CardSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Square Switch</h2>
          <SquareSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Toggle Switch</h2>
          <ToggleSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Day/Night Switch</h2>
          <DayNightSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Volume Switch</h2>
          <VolumeSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Wifi Switch</h2>
          <WifiSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Slider Switch</h2>
          <SliderSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Animated Icon Switch</h2>
          <AnimatedIconSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Pulsing Switch</h2>
          <PulsingSwitchShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Ripple Switch</h2>
          <RippleSwitchShowcase />
        </div>
      </div>
    </div>
  );
};

export default SwitchShowcase;
