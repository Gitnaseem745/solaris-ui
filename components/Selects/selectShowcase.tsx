'use client'
import React, { useState } from 'react';
import SimpleSelect from './simple-select';
import BorderlessSelect from './borderless-select';
import RoundedSelect from './rounded-select';
import IconSelect from './icon-select';
import MultiSelect from './multi-select';
import SearchableSelect from './searchable-select';
import GroupedSelect from './grouped-select';
import ColorSelect from './color-select';
import GradientSelect from './gradient-select';
import NeumorphicSelect from './neumorphic-select';
import GlassmorphismSelect from './glassmorphism-select';
import MinimalSelect from './minimal-select';
import FloatingLabelSelect from './floating-label-select';
import AnimatedBorderSelect from './animated-border-select';
import FadingSelect from './fading-select';
import ScaleSelect from './scale-select';
import SlideSelect from './slide-select';
import RotateSelect from './rotate-select';
import OutlinedSelect from './outlined-select';
import UnderlinedSelect from './underlined-select';
import PillSelect from './pill-select';
import MaterialSelect from './material-select';
import IconLabelSelect from './icon-label-select';
import TagSelect from './tag-select';
import ChipSelect from './chip-select';
import AccordionSelect from './accordion-select';
import ButtonGroupSelect from './button-group-select';
import SegmentedControlSelect from './segmented-control-select';
import TreeSelect from './tree-select';
import ComboboxSelect from './combobox-select';
import AsyncSelect from './async-select';
import VirtualizedSelect from './virtualized-select';
import CreatableSelect from './creatable-select';
import { FiBell, FiUser } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const iconOptions = [
  { value: 'user', label: 'User', icon: <FiUser className="w-5 h-5" /> },
  { value: 'settings', label: 'Settings', icon: <FaCog className="w-5 h-5" /> },
  { value: 'notifications', label: 'Notifications', icon: <FiBell className="w-5 h-5" /> },
];

const colorOptions = [
  { value: 'red', label: 'Red', color: '#FF0000' },
  { value: 'green', label: 'Green', color: '#00FF00' },
  { value: 'blue', label: 'Blue', color: '#0000FF' },
];

const groupedOptions = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
    ],
  },
];

const treeOptions = [
  {
    value: 'fruits',
    label: 'Fruits',
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  {
    value: 'vegetables',
    label: 'Vegetables',
    children: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
    ],
  },
];

export const SimpleSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Simple Select</h3>
      <SimpleSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const BorderlessSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Borderless Select</h3>
      <BorderlessSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const RoundedSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Rounded Select</h3>
      <RoundedSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const IconSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Icon Select</h3>
      <IconSelect
        options={iconOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const MultiSelectShowcase: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div>
      <h3 className="mb-2 font-bold">Multi Select</h3>
      <MultiSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose options"
      />
    </div>
  );
};

export const SearchableSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Searchable Select</h3>
      <SearchableSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Search options"
      />
    </div>
  );
};

export const GroupedSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Grouped Select</h3>
      <GroupedSelect
        groups={groupedOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const ColorSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Color Select</h3>
      <ColorSelect
        options={colorOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose a color"
      />
    </div>
  );
};

export const GradientSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Gradient Select</h3>
      <GradientSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const NeumorphicSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Neumorphic Select</h3>
      <NeumorphicSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const GlassmorphismSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Glassmorphism Select</h3>
      <GlassmorphismSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const MinimalSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Minimal Select</h3>
      <MinimalSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const FloatingLabelSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Floating Label Select</h3>
      <FloatingLabelSelect
        options={options}
        value={value}
        onChange={setValue}
        label="Select an option"
      />
    </div>
  );
};

export const AnimatedBorderSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Animated Border Select</h3>
      <AnimatedBorderSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const FadingSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Fading Select</h3>
      <FadingSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const ScaleSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Scale Select</h3>
      <ScaleSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const SlideSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Slide Select</h3>
      <SlideSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const RotateSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Rotate Select</h3>
      <RotateSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const OutlinedSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Outlined Select</h3>
      <OutlinedSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const UnderlinedSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Underlined Select</h3>
      <UnderlinedSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const PillSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Pill Select</h3>
      <PillSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const MaterialSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Material Select</h3>
      <MaterialSelect
        options={options}
        value={value}
        onChange={setValue}
        label="Select an option"
      />
    </div>
  );
};

export const IconLabelSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Icon Label Select</h3>
      <IconLabelSelect
        options={iconOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const TagSelectShowcase: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div>
      <h3 className="mb-2 font-bold">Tag Select</h3>
      <TagSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose options"
      />
    </div>
  );
};

export const ChipSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Chip Select</h3>
      <ChipSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const AccordionSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Accordion Select</h3>
      <AccordionSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const ButtonGroupSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Button Group Select</h3>
      <ButtonGroupSelect
        options={options}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const SegmentedControlSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Segmented Control Select</h3>
      <SegmentedControlSelect
        options={options}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const TreeSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Tree Select</h3>
      <TreeSelect
        options={treeOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose an option"
      />
    </div>
  );
};

export const ComboboxSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Combobox Select</h3>
      <ComboboxSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Search or select an option"
      />
    </div>
  );
};

export const AsyncSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Async Select</h3>
      <AsyncSelect
        loadOptions={async () => options}
        value={value}
        onChange={setValue}
        placeholder="Select an option"
      />
    </div>
  );
};

export const VirtualizedSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3 className="mb-2 font-bold">Virtualized Select</h3>
      <VirtualizedSelect
        options={Array.from({ length: 10000 }, (_, i) => ({ value: `option${i}`, label: `Option ${i}` }))}
        value={value}
        onChange={setValue}
        placeholder="Select an option"
      />
    </div>
  );
};

export const CreatableSelectShowcase: React.FC = () => {
  const [value, setValue] = useState('');
  const [creatableOptions, setCreatableOptions] = useState(options);
  return (
    <div>
      <h3 className="mb-2 font-bold">Creatable Select</h3>
      <CreatableSelect
        options={creatableOptions}
        value={value}
        onChange={setValue}
        onCreateOption={(label) => {
          const newOption = { value: label.toLowerCase(), label };
          setCreatableOptions([...creatableOptions, newOption]);
          setValue(newOption.value);
        }}
        placeholder="Select or create an option"
      />
    </div>
  );
};

export const SelectShowcase: React.FC = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <SimpleSelectShowcase />
      <BorderlessSelectShowcase />
      <RoundedSelectShowcase />
      <IconSelectShowcase />
      <MultiSelectShowcase />
      <SearchableSelectShowcase />
      <GroupedSelectShowcase />
      <ColorSelectShowcase />
      <GradientSelectShowcase />
      <NeumorphicSelectShowcase />
      <GlassmorphismSelectShowcase />
      <MinimalSelectShowcase />
      <FloatingLabelSelectShowcase />
      <AnimatedBorderSelectShowcase />
      <FadingSelectShowcase />
      <ScaleSelectShowcase />
      <SlideSelectShowcase />
      <RotateSelectShowcase />
      <OutlinedSelectShowcase />
      <UnderlinedSelectShowcase />
      <PillSelectShowcase />
      <MaterialSelectShowcase />
      <IconLabelSelectShowcase />
      <TagSelectShowcase />
      <ChipSelectShowcase />
      <AccordionSelectShowcase />
      <ButtonGroupSelectShowcase />
      <SegmentedControlSelectShowcase />
      <TreeSelectShowcase />
      <ComboboxSelectShowcase />
      <AsyncSelectShowcase />
      <VirtualizedSelectShowcase />
      <CreatableSelectShowcase />
    </div>
  );
};

export default SelectShowcase;
