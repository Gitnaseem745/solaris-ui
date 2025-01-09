'use client'

import { useState } from 'react';
import { SimpleCheckbox } from './simple-checkbox';
import { ColoredCheckbox } from './colored-checkbox';
import { AnimatedCheckbox } from './animated-checkbox';
import { IconCheckbox } from './icon-checkbox';
import { CardCheckbox } from './card-checkbox';
import { SquareCheckbox } from './square-checkbox';
import { OutlineCheckbox } from './outline-checkbox';
import { ImageCheckbox } from './image-checkbox';
import { ToggleCheckbox } from './toggle-checkbox';
import { StarCheckbox } from './star-checkbox';
import { HeartCheckbox } from './heart-checkbox';
import { ThumbsUpCheckbox } from './thumbs-up-checkbox';
import { EmojiCheckbox } from './emoji-checkbox';
import { ButtonGroupCheckbox } from './button-group-checkbox';
import { SliderCheckbox } from './slider-checkbox';
import { ColorPickerCheckbox } from './color-picker-checkbox';
import { SizePickerCheckbox } from './size-picker-checkbox';
import { GradientCheckbox } from './gradient-checkbox';
import { TexturedCheckbox } from './textured-checkbox';

// Simple Checkbox Showcase
export const SimpleCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SimpleCheckbox
      id="simple-checkbox"
      name="simple-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Simple Checkbox"
    />
  );
};

// Colored Checkbox Showcase
export const ColoredCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ColoredCheckbox
      id="colored-checkbox"
      name="colored-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Colored Checkbox"
    />
  );
};

// Animated Checkbox Showcase
export const AnimatedCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <AnimatedCheckbox
      id="animated-checkbox"
      name="animated-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Animated Checkbox"
    />
  );
};

// Icon Checkbox Showcase
export const IconCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <IconCheckbox
      id="icon-checkbox"
      name="icon-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Icon Checkbox"
    />
  );
};

// Card Checkbox Showcase
export const CardCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CardCheckbox
      id="card-checkbox"
      name="card-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Card Checkbox"
    />
  );
};

// Square Checkbox Showcase
export const SquareCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SquareCheckbox
      id="square-checkbox"
      name="square-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Square Checkbox"
    />
  );
};

// Outline Checkbox Showcase
export const OutlineCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <OutlineCheckbox
      id="outline-checkbox"
      name="outline-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Outline Checkbox"
    />
  );
};

// Image Checkbox Showcase
export const ImageCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ImageCheckbox
      id="image-checkbox"
      name="image-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Image Checkbox"
      imageSrc="/placeholder.svg?height=100&width=100"
    />
  );
};

// Toggle Checkbox Showcase
export const ToggleCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ToggleCheckbox
      id="toggle-checkbox"
      name="toggle-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Toggle Checkbox"
    />
  );
};

// Star Checkbox Showcase
export const StarCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <StarCheckbox
      id="star-checkbox"
      name="star-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Star Checkbox"
    />
  );
};

// Heart Checkbox Showcase
export const HeartCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <HeartCheckbox
      id="heart-checkbox"
      name="heart-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Heart Checkbox"
    />
  );
};

// Thumbs Up Checkbox Showcase
export const ThumbsUpCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ThumbsUpCheckbox
      id="thumbs-up-checkbox"
      name="thumbs-up-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Thumbs Up Checkbox"
    />
  );
};

// Emoji Checkbox Showcase
export const EmojiCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <EmojiCheckbox
      id="emoji-checkbox"
      name="emoji-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Emoji Checkbox"
    />
  );
};

// Button Group Checkbox Showcase
export const ButtonGroupCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ButtonGroupCheckbox
      id="button-group-checkbox"
      name="button-group-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Button Group Checkbox"
    />
  );
};

// Slider Checkbox Showcase
export const SliderCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SliderCheckbox
      id="slider-checkbox"
      name="slider-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Slider Checkbox"
    />
  );
};

// Color Picker Checkbox Showcase
export const ColorPickerCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ColorPickerCheckbox
      id="color-picker-checkbox"
      name="color-picker-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Color Picker Checkbox"
      color="#3B82F6"
    />
  );
};

// Size Picker Checkbox Showcase
export const SizePickerCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SizePickerCheckbox
      id="size-picker-checkbox"
      name="size-picker-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="S"
    />
  );
};

// Gradient Checkbox Showcase
export const GradientCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <GradientCheckbox
      id="gradient-checkbox"
      name="gradient-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Gradient Checkbox"
    />
  );
};

// Textured Checkbox Showcase
export const TexturedCheckboxShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TexturedCheckbox
      id="textured-checkbox"
      name="textured-checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      label="Textured Checkbox"
    />
  );
};

const CheckboxShowcase: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Checkbox Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Simple Checkbox</h2>
          <SimpleCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Colored Checkbox</h2>
          <ColoredCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Animated Checkbox</h2>
          <AnimatedCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Icon Checkbox</h2>
          <IconCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Card Checkbox</h2>
          <CardCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Square Checkbox</h2>
          <SquareCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Outline Checkbox</h2>
          <OutlineCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Image Checkbox</h2>
          <ImageCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Toggle Checkbox</h2>
          <ToggleCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Star Checkbox</h2>
          <StarCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Heart Checkbox</h2>
          <HeartCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Thumbs Up Checkbox</h2>
          <ThumbsUpCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Emoji Checkbox</h2>
          <EmojiCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Button Group Checkbox</h2>
          <ButtonGroupCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Slider Checkbox</h2>
          <SliderCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Color Picker Checkbox</h2>
          <ColorPickerCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Size Picker Checkbox</h2>
          <SizePickerCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Gradient Checkbox</h2>
          <GradientCheckboxShowcase />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Textured Checkbox</h2>
          <TexturedCheckboxShowcase />
        </div>
      </div>
    </div>
  );
};

export default CheckboxShowcase;
