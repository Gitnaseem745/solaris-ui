# Solaris UI Library

Welcome to Solaris UI, a collection of customizable and beautifully designed UI components for your React projects. I have launched only the Button components, but more will be launched soon. 

## Features
- **Button Components**: A set of stylish and functional button components to enhance your application’s UI.
- **Built with TypeScript & Tailwind CSS**: The library is developed using TypeScript and Tailwind CSS, ensuring easy integration and customization.
- **Customizable**: Fully customizable to match your project’s design requirements.
- **Growing Library**: Expect more components like form elements, modals, cards, etc., in future releases.

## Prerequisites
Before using **Solaris UI**, make sure you have the following installed in your project:
- **TypeScript**: Ensure TypeScript is set up in your project.
- **Tailwind CSS**: Ensure Tailwind CSS is properly configured and installed.

## Usage

### Step 1: Choose and Copy Your Component
Currently, Solaris provide various button components such as:
- `DisabledButton`
- `DefaultButton`
- `HShineButton`
- `HGlowButton`
- `NeonButton`
- `HFBButton`
- `HFTButton`
- `HUButton`
- `DarkButton`
- `LightButton`
- `GlassButton`
- `HGSButton`
- `HGBGButton`
- `HBorderButton`
- `GBButton`

### Step 2: Create a New `.tsx` File
Inside your project, create a new `.tsx` file, e.g., `MyCustomButton.tsx`.

### Step 3: Paste the Copied Component Code
Change the component name according to your preference.

Example:

```tsx
interface DefaultButtonProps {
    label: string;
    onClick?: () => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
                bg-yellow-300 text-black hover:bg-yellow-400 transition-all ease-in w-fit px-6 py-2 rounded-md
            `}
        >
            {label}
        </button>
    );
};

export default DefaultButton;
```

#### Step 4: Import and Use the Component
Import and use the newly created component anywhere in your project:

```tsx
import DefaultButton from './MyCustomButton';

const App = () => {
    return (
        <div>
            <DefaultButton label="Click Me" />
        </div>
    );
};

export default App;
```
