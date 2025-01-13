import DarkButton from "../components/ui/buttons/dark-button";
import DefaultButton from "../components/ui/buttons/default-button";
import DeleteButton from "../components/ui/buttons/delete-button";
import FloatingActionButton from "../components/ui/buttons/floating-action-button";
import MotionBlade from "../components/ui/buttons/motion-blade-button";
import MotionDefault from "../components/ui/buttons/motion-default-button";
import MotionDelete from "../components/ui/buttons/motion-delete-button";
import MotionDownload from "../components/ui/buttons/motion-download-button";
import MotionMail from "../components/ui/buttons/motion-email-button";
import MotionHelp from "../components/ui/buttons/motion-help-button";
import MotionSpinner from "../components/ui/buttons/motion-spinner-button";
import MotionLogin from "../components/ui/buttons/motion-login-button";
import MotionScale from "../components/ui/buttons/motion-scale-button";
import MotionSend from "../components/ui/buttons/motion-send-button";
import MotionShimmer from "../components/ui/buttons/motion-shimmer-button";
import MotionShutter from "../components/ui/buttons/motion-shutter-button";
import MotionUpload from "../components/ui/buttons/motion-upload-button";
import SocialButton from "../components/ui/buttons/social-button";
import MotionLoading from "../components/ui/buttons/motion-loading-button";
import MotionLoading2 from "../components/ui/buttons/motion-loading-button-2";
import BreathingBorder from "../components/ui/buttons/breathing-border-button";
import GlassButton from "../components/ui/buttons/glass-button";
import MailButton from "../components/ui/buttons/mail-button";
import MailButton2 from "../components/ui/buttons/mail-button-2";
import RoundedButton from "../components/ui/buttons/rounded-button";
import BorderButton from "../components/ui/buttons/border-button";
import LightEffectButton from "../components/ui/buttons/light-effect-button";
import GlowingButton from "../components/ui/buttons/glowing-button";
import UnderlineButton from "../components/ui/buttons/underline-button";
import ShinyGlass from "../components/ui/buttons/shiny-glass-button";
import RGBBGButton from "../components/ui/buttons/rgb-bg-button";
import SmoothFillButton from "../components/ui/buttons/smooth-hover-fill-button";
import SmoothZoomOut from "../components/ui/buttons/smooth-zoom-out-button";

import BentoLogin from "../components/ui/cards/bento-login";
import MinJobCard from "../components/ui/Cards/minimal-job-card";
import ProfPricing from "../components/ui/Cards/professional-pricing-card";


import { BannerAlertShowcase, BouncingAlertShowcase, ColorChangingAlertShowcase, ConfirmationAlertShowcase, CountdownAlertShowcase, ErrorAlertShowcase, ExpandingAlertShowcase, FadingAlertShowcase, FlipAlertShowcase, FloatingAlertShowcase, InfoAlertShowcase, ProgressAlertShowcase, PulsatingAlertShowcase, RotatingAlertShowcase, ShakingAlertShowcase, SlideInAlertShowcase, StickyAlertShowcase, SuccessAlertShowcase, SwipeAlertShowcase, ToastAlertShowcase, TypingAlertShowcase, WarningAlertShowcase } from "../components/ui/alerts/alert-showcases";


import { AccordionSelectShowcase, AnimatedBorderSelectShowcase, AsyncSelectShowcase, BorderlessSelectShowcase, ButtonGroupSelectShowcase, ChipSelectShowcase, ColorSelectShowcase, ComboboxSelectShowcase, CreatableSelectShowcase, FadingSelectShowcase, FloatingLabelSelectShowcase, GlassmorphismSelectShowcase, GradientSelectShowcase, GroupedSelectShowcase, IconLabelSelectShowcase, IconSelectShowcase, MaterialSelectShowcase, MinimalSelectShowcase, MultiSelectShowcase, NeumorphicSelectShowcase, OutlinedSelectShowcase, PillSelectShowcase, RotateSelectShowcase, RoundedSelectShowcase, ScaleSelectShowcase, SearchableSelectShowcase, SegmentedControlSelectShowcase, SimpleSelectShowcase, SlideSelectShowcase, TagSelectShowcase, TreeSelectShowcase, UnderlinedSelectShowcase, VirtualizedSelectShowcase } from "../components/ui/selects/selectShowcase";

import { AnimatedIconSwitchShowcase, AnimatedSwitchShowcase, CardSwitchShowcase, DayNightSwitchShowcase, GradientSwitchShowcase, IconSwitchShowcase, PulsingSwitchShowcase, RippleSwitchShowcase, SimpleSwitchShowcase, SliderSwitchShowcase, SquareSwitchShowcase, ToggleSwitchShowcase, VolumeSwitchShowcase, WifiSwitchShowcase } from "../components/ui/Switches/switches-showcase";

import { ButtonGroupCheckboxShowcase, ColorPickerCheckboxShowcase, EmojiCheckboxShowcase, GradientCheckboxShowcase, HeartCheckboxShowcase, IconCheckboxShowcase, OutlineCheckboxShowcase, SizePickerCheckboxShowcase, SliderCheckboxShowcase, SquareCheckboxShowcase, StarCheckboxShowcase, TexturedCheckboxShowcase, ThumbsUpCheckboxShowcase, ToggleCheckboxShowcase } from "../components/ui/checkboxes/checkbox-showcase";
import DisabledButton from "../components/ui/buttons/disabled-button";

export const usageGuide = {
    step: "Installation & Usage",
    steps: [
        {
            title: "Step 1: Choose and Copy Your Component",
            content: "Copy the component you want to use from the library."
        },
        {
            title: "Step 2: Create a New .tsx File",
            content: "Inside your project, create a new .tsx file, e.g., MyCustomComponent.tsx."
        },
        {
            title: "Step 3: Paste the Copied Component Code",
            content: "Paste the copied code into the new .tsx file and modify it according to your needs."
        },
    ],
    sections: [
        {
            title: "Example:",
            content: "// MyCustomComponent.tsx\n\ninterface DefaultButtonProps {\n  label: string;\n  onClick?: () => void;\n}\n\nconst DefaultButton: React.FC<DefaultButtonProps> = ({ label, onClick }) => {\n  return (\n    <button\n      onClick={onClick}\n      className={`bg-yellow-300 text-black hover:bg-yellow-400 transition-all ease-in w-fit px-6 py-2 rounded-md`}\n    >\n      {label}\n    </button>\n  );\n};\n\nexport default DefaultButton;"
        },
        {
            title: "Step 4: Import and Use the Component",
            content: "Import and use the newly created component anywhere in your project."
        },
        {
            title: "Example:",
            content: "import DefaultButton from './MyCustomComponent';\n\nconst App = () => {\n  return (\n    <div>\n      <DefaultButton label=\"Click Me\" />\n    </div>\n  );\n};\n\nexport default App;"
        }
    ]
};

export const components: Record<string, ComponentDataProps[]> = {
    buttons: [
        {
            id: 'default-button',
            name: 'Default Button',
            description: 'This is a Default button.',
            dependencies: 'None',
            installation: 'None',
            usage: `import { DefaultButton } from '..components/default-button';

        export default function MyComponent() {
            const handleButtonClick = () => {
                console.log('Default button clicked!');
            };

            return <DefaultButton label="Default" onClick={handleButtonClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Default', description: 'The label of the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<DefaultButton label="Default" />` },
                { name: 'Custom Label', code: `<DefaultButton label="Dark" />` },
                { name: 'With Click Handler', code: `<DefaultButton label="Click Me" onClick={() => alert('Button Clicked!')} />` }
            ],
            Component: DefaultButton
        },
        {
            id: 'dark-button',
            name: 'Dark Button',
            description: 'This is a Dark button.',
            dependencies: 'None',
            installation: 'None',
            usage: `import { DarkButton } from '..components/dark-button';

        export default function MyComponent() {
            const handleDarkButtonClick = () => {
                console.log('Dark button clicked!');
            };

            return <DarkButton label="Dark" onClick={handleDarkButtonClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Dark', description: 'The label of the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<DarkButton label="Dark" />` },
                { name: 'Custom Label', code: `<DarkButton label="Light" />` },
                { name: 'With Click Handler', code: `<DarkButton label="Proceed" onClick={() => alert('Dark Button Clicked!')} />` }
            ],
            Component: DarkButton
        },
        {
            id: 'disabled-button',
            name: 'Disabled Button',
            description: 'This is a Disabled Button.',
            dependencies: 'None',
            installation: 'None',
            usage: `import { DisabledButton } from '..components/disabled-button';

        export default function MyComponent() {
            const handleDisabledButtonClick = () => {
                console.log('Disabled button clicked!');
            };

            return <DisabledButton label="Dark" onClick={handleDisabledButtonClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Disabled', description: 'The label of the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<DisabledButton label="Dark" />` },
                { name: 'Custom Label', code: `<DisabledButton label="Light" />` },
                { name: 'With Click Handler', code: `<DisabledButton label="Proceed" onClick={() => alert('Disabled Button Clicked!')} />` }
            ],
            Component: DisabledButton
        },
        {
            id: 'motion-default-button',
            name: 'Motion Default',
            description: 'This is a Motion button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `import { MotionDefault } from '..components/motion-default';

        export default function MyComponent() {
            const handleMotionClick = () => {
                console.log('Motion button clicked!');
            };

            return <MotionDefault label="Proceed" onClick={handleMotionClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Motion', description: 'The label of the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<MotionDefault label="Motion" />` },
                { name: 'Custom Label', code: `<MotionDefault label="Hover Me" />` },
                { name: 'With Click Handler', code: `<MotionDefault label="Go" onClick={() => alert('Motion Button Clicked!')} />` }
            ],
            Component: MotionDefault
        },
        {
            id: 'floating-action-button',
            name: 'Floating Action',
            description: 'A Floating Action Button with smooth animations and dual labels.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `import { FloatingActionButton } from '..components/floating-action-button';

        export default function MyComponent() {
            const handleFabClick = () => {
                console.log('Floating Action Button clicked!');
            };

            return <FloatingActionButton label="Add to cart" secondryLabel="Added" onClick={handleFabClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Add to cart', description: 'The primary label of the button' },
                { name: 'secondryLabel', type: 'string', default: 'Added', description: 'The label displayed after the button is clicked' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<FloatingActionButton />` },
                { name: 'Custom Labels', code: `<FloatingActionButton label="Buy Now" secondryLabel="Purchased" />` },
                { name: 'With Click Handler', code: `<FloatingActionButton label="Add to Wishlist" secondryLabel="Added" onClick={() => alert('Added to Wishlist!')} />` }
            ],
            Component: FloatingActionButton
        },
        {
            id: 'motion-delete-button',
            name: 'Motion Delete',
            description: 'A motion-enabled delete button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `import { MotionDelete } from '..components/motion-delete';

        export default function MyComponent() {
            const handleDeleteClick = () => {
                console.log('Delete button clicked!');
            };

            return <MotionDelete label="Delete" onClick={handleDeleteClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Delete', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<MotionDelete />` },
                { name: 'Custom Label', code: `<MotionDelete label="Remove" />` },
                { name: 'With Click Handler', code: `<MotionDelete label="Erase" onClick={() => alert('Erase action triggered!')} />` }
            ],
            Component: MotionDelete
        }
        ,
        {
            id: 'motion-download-button',
            name: 'Motion Download',
            description: 'A motion-enabled download button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `import { MotionDownload } from '..components/motion-download';

        export default function MyComponent() {
            const handleDownloadClick = () => {
                console.log('Download button clicked!');
            };

            return <MotionDownload label="Download" onClick={handleDownloadClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Download', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<MotionDownload />` },
                { name: 'Custom Label', code: `<MotionDownload label="Fetch" />` },
                { name: 'With Click Handler', code: `<MotionDownload label="Save" onClick={() => alert('Save action triggered!')} />` }
            ],
            Component: MotionDownload
        },
        {
            id: 'motion-email-button',
            name: 'Motion Mail',
            description: 'A motion-enabled email button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `import { MotionMail } from '..components/motion-mail';

        export default function MyComponent() {
            const handleMailClick = () => {
                console.log('Mail button clicked!');
            };

            return <MotionMail label="Email" onClick={handleMailClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Email', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<MotionMail />` },
                { name: 'Custom Label', code: `<MotionMail label="Contact" />` },
                { name: 'With Click Handler', code: `<MotionMail label="Send Mail" onClick={() => alert('Mail action triggered!')} />` }
            ],
            Component: MotionMail
        },
        {
            id: 'motion-help-button',
            name: 'Motion Help',
            description: 'A motion-enabled help button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `import { MotionHelp } from '..components/motion-help';

        export default function MyComponent() {
            const handleHelpClick = () => {
                console.log('Help button clicked!');
            };

            return <MotionHelp label="Help" onClick={handleHelpClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Help', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<MotionHelp />` },
                { name: 'Custom Label', code: `<MotionHelp label="Assistance" />` },
                { name: 'With Click Handler', code: `<MotionHelp label="Help Center" onClick={() => alert('Help action triggered!')} />` }
            ],
            Component: MotionHelp
        },
        {
            id: 'motion-shutter-button',
            name: 'Motion Shutter',
            description: 'A motion-enabled shutter button with dynamic hover effects.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            usage: `import { MotionShutter } from '..components/motion-shutter';

        export default function MyComponent() {
            const handleShutterClick = () => {
                console.log('Shutter button clicked!');
            };

            return <MotionShutter label="Shutter" onClick={handleShutterClick} />;
        }`,
            props: [
                { name: 'label', type: 'string', default: 'Shutter', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            examples: [
                { name: 'Default', code: `<MotionShutter />` },
                { name: 'Custom Label', code: `<MotionShutter label="Capture" />` },
                { name: 'With Click Handler', code: `<MotionShutter label="Snap" onClick={() => alert('Shutter action triggered!')} />` }
            ],
            Component: MotionShutter
        },
        {
            id: 'motion-login-button',
            name: 'Motion Login',
            description: 'A visually appealing login button with hover effects using Framer Motion.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `
              import MotionLogin from './MotionLogin';

              export default function MyComponent() {
                const handleLoginClick = () => {
                  console.log('Login button clicked!');
                  // Handle login logic here
                };

                return <MotionLogin onClick={handleLoginClick} />;
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Login',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MotionLogin />`
              },
              {
                name: 'Custom Label',
                code: `<MotionLogin label="Sign In" />`
              },
              {
                name: 'With Click Handler',
                code: `<MotionLogin label="Enter" onClick={() => alert('Login initiated!')} />`
              }
            ],
            Component: MotionLogin // Assuming MotionLogin is the actual component
          },
          {
            id: 'motion-send-button',
            name: 'Motion Send',
            description: 'An animated send button with hover and click effects.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `
              import MotionSend from './MotionSend';

              export default function MyComponent() {
                const handleSendClick = () => {
                  console.log('Message sent!');
                  // Handle send logic here
                };

                return (
                  <MotionSend onClick={handleSendClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Send',
                description: 'The primary label displayed on the button.'
              },
              {
                name: 'secondryLabel',
                type: 'string',
                default: 'Sent',
                description: 'The secondary label displayed after the button is clicked.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MotionSend />`
              },
              {
                name: 'Custom Labels',
                code: `<MotionSend label="Submit" secondryLabel="Submitted" />`
              },
              {
                name: 'With Click Handler',
                code: `<MotionSend label="Post" secondryLabel="Posted" onClick={() => alert('Message posted!')} />`
              }
            ],
            Component: MotionSend // Assuming MotionSend is the actual component
          },
          {
            id: 'motion-shimmer-button',
            name: 'Motion Shimmer',
            description: 'A button with a shimmering effect on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            usage: `
              import MotionShimmer from './MotionShimmer';

              export default function MyComponent() {
                const handleShimmerClick = () => {
                  console.log('Shimmer button clicked!');
                  // Handle click logic here
                };

                return (
                  <MotionShimmer onClick={handleShimmerClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'SHIMMER',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MotionShimmer />`
              },
              {
                name: 'Custom Label',
                code: `<MotionShimmer label="Click Me" />`
              },
              {
                name: 'With Click Handler',
                code: `<MotionShimmer label="Action" onClick={() => alert('Shimmer clicked!')} />`
              }
            ],
            Component: MotionShimmer
          },
          {
            id: 'motion-upload-button',
            name: 'Motion Upload',
            description: 'An animated upload button with hover effects.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            usage: `
              import MotionUpload from './MotionUpload';

              export default function MyComponent() {
                const handleUploadClick = () => {
                  console.log('Upload clicked!');
                  // Handle upload logic here
                };

                return (
                  <MotionUpload onClick={handleUploadClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Upload',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MotionUpload />`
              },
              {
                name: 'Custom Label',
                code: `<MotionUpload label="Choose File" />`
              },
              {
                name: 'With Click Handler',
                code: `<MotionUpload label="Select" onClick={() => alert('Upload initiated!')} />`
              }
            ],
            Component: MotionUpload // Assuming MotionUpload is the actual component
          },
          {
            id: 'motion-scale-button',
            name: 'Motion Scale',
            description: 'A button with a scale animation on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            usage: `
              import MotionScale from './MotionScale';

              export default function MyComponent() {
                const handleScaleClick = () => {
                  console.log('Scale button clicked!');
                  // Handle click logic here
                };

                return (
                  <MotionScale onClick={handleScaleClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Scale',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MotionScale />`
              },
              {
                name: 'Custom Label',
                code: `<MotionScale label="Zoom" />`
              },
              {
                name: 'With Click Handler',
                code: `<MotionScale label="Expand" onClick={() => alert('Scale action triggered!')} />`
              }
            ],
            Component: MotionScale
          },
          {
            id: 'social-button',
            name: 'Social Button',
            description: 'A basic social login button with an icon.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            usage: `
              import SocialButton from './SocialButton';

              export default function MyComponent() {
                const handleSocialLogin = () => {
                  console.log('Social login clicked!');
                  // Handle social login logic here
                };

                return (
                  <SocialButton onClick={handleSocialLogin} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Login',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<SocialButton />`
              },
              {
                name: 'Custom Label',
                code: `<SocialButton label="Continue with GitHub" />`
              },
              {
                name: 'With Click Handler',
                code: `<SocialButton label="Login via GitHub" onClick={() => alert('GitHub login initiated!')} />`
              }
            ],
            Component: SocialButton // Assuming SocialButton is the actual component
          },
          {
            id: 'delete-button',
            name: 'Delete Button',
            description: 'A basic delete button with an icon.',
            dependencies: 'react-icons/fa',
            installation: 'npm install react-icons',
            usage: `
              import DeleteButton from './DeleteButton';

              export default function MyComponent() {
                const handleDelete = () => {
                  console.log('Delete clicked!');
                  // Handle delete logic here
                };

                return (
                  <DeleteButton onClick={handleDelete} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Delete',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<DeleteButton />`
              },
              {
                name: 'Custom Label',
                code: `<DeleteButton label="Remove" />`
              },
              {
                name: 'With Click Handler',
                code: `<DeleteButton label="Discard" onClick={() => alert('Item deleted!')} />`
              }
            ],
            Component: DeleteButton // Assuming DeleteButton is the actual component
          },
          {
            id: 'motion-blade-button',
            name: 'Motion Blade',
            description: 'A button with a dynamic blade animation on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            usage: `
              'use client';
              import MotionBlade from './MotionBlade';

              export default function MyComponent() {
                const handleBladeClick = () => {
                  console.log('Blade button clicked!');
                  // Handle click logic here
                };

                return (
                  <MotionBlade onClick={handleBladeClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Blade',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MotionBlade />`
              },
              {
                name: 'Custom Label',
                code: `<MotionBlade label="Activate" />`
              },
              {
                name: 'With Click Handler',
                code: `<MotionBlade label="Engage" onClick={() => alert('Blade activated!')} />`
              }
            ],
            Component: MotionBlade // Assuming MotionBlade is the actual component
          },
          {
            id: 'motion-spinner-button',
            name: 'Motion Spinner',
            description: 'A loading button with a circular spinner animation.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            usage: `
          import { MotionSpinner } from '..components/motion-loading-button-2';

          export default function MyComponent() {
            const handleButtonClick = async () => {
              // Simulate asynchronous operation
              await new Promise((resolve) => setTimeout(resolve, 2000));
              // Button can be re-enabled after the operation is complete
            };

            return (
              <MotionSpinner label="Processing" onClick={handleButtonClick} />
            );
          }`,
            props: [
              {
                name: 'label',
                type: 'string',
                default: '"Loading"',
                description: 'Text displayed on the button.',
              },
            ],
            examples: [
              {
                name: 'Default Loading Button',
                code: '<MotionSpinner />',
              },
              {
                name: 'Custom Label',
                code: '<MotionSpinner label="Generating..." />',
              },
            ],
            Component: MotionSpinner,
          },
          {
            id: 'motion-loading-button',
            name: 'Motion Loading',
            description: 'A button with a loading animation on click.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            usage: `
              'use client';
              import MotionLoading from './MotionLoading';

              export default function MyComponent() {
                const handleLoadClick = () => {
                  console.log('Load button clicked!');
                  // Simulate loading logic here (usually involves an API call)
                };

                return (
                  <MotionLoading onClick={handleLoadClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Load',
                description: 'The text label displayed on the button before loading starts.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MotionLoading />`
              },
              {
                name: 'Custom Label',
                code: `<MotionLoading label="Fetch Data" />`
              },
              {
                name: 'With Click Handler',
                code: `<MotionLoading label="Submit" onClick={() => alert('Loading initiated!')} />`
              }
            ],
            Component: MotionLoading // Assuming MotionLoading is the actual component
          },
          {
            id: 'motion-loading-button-2',
            name: 'Motion Loading 2',
            description: 'A button with a loading animation and secondary label on click.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            usage: `
              'use client';
              import MotionLoading2 from './MotionLoading2';

              export default function MyComponent() {
                const handleLoadClick = () => {
                  console.log('Load button clicked!');
                  // Simulate loading logic here (usually involves an API call)
                };

                return (
                  <MotionLoading2 label="Submit" secondLabel="Loading..." onClick={handleLoadClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Load',
                description: 'The text label displayed on the button before loading starts.'
              },
              {
                name: 'secondLabel',
                type: 'string',
                default: 'Loading',
                description: 'The text label displayed on the button while loading.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MotionLoading2 />`
              },
              {
                name: 'Custom Labels',
                code: `<MotionLoading2 label="Process" secondLabel="Working..." />`
              },
              {
                name: 'With Click Handler',
                code: `<MotionLoading2 label="Fetch Data" secondLabel="Loading..." onClick={() => alert('Data fetching initiated!')} />`
              }
            ],
            Component: MotionLoading2 // Assuming MotionLoading2 is the actual component
          },
          {
            id: 'breathing-border-button',
            name: 'Breathing Border',
            description: 'A button with an animated breathing border effect.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import BreathingBorder from './BreathingBorder';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Breathing button clicked!');
                  // Handle button click logic here
                };

                return (
                  <BreathingBorder onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Breathing',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<BreathingBorder />`
              },
              {
                name: 'Custom Label',
                code: `<BreathingBorder label="Activate" />`
              },
              {
                name: 'With Click Handler',
                code: `<BreathingBorder label="Engage" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: BreathingBorder // Assuming BreathingBorder is the actual component
          },
          {
            id: 'glass-button',
            name: 'Glass Button',
            description: 'A button with a glassmorphism effect.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import GlassButton from './GlassButton';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Glass button clicked!');
                  // Handle button click logic here
                };

                return (
                  <GlassButton onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Glass',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<GlassButton />`
              },
              {
                name: 'Custom Label',
                code: `<GlassButton label="Transparent" />`
              },
              {
                name: 'With Click Handler',
                code: `<GlassButton label="Interact" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: GlassButton // Assuming GlassButton is the actual component
          },
          {
            id: 'mail-button',
            name: 'Mail Button',
            description: 'A button with a mail icon.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            usage: `
              import MailButton from './MailButton';

              export default function MyComponent() {
                const handleMailClick = () => {
                  console.log('Mail button clicked!');
                  // Handle mail sending logic here
                };

                return (
                  <MailButton onClick={handleMailClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Send Mail',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MailButton />`
              },
              {
                name: 'Custom Label',
                code: `<MailButton label="Send Email" />`
              },
              {
                name: 'With Click Handler',
                code: `<MailButton label="Compose" onClick={() => alert('Mail sent!')} />`
              }
            ],
            Component: MailButton // Assuming MailButton is the actual component
          },
          {
            id: 'mail-button-2',
            name: 'Mail Button 2',
            description: 'A button with a mail icon and an animated right arrow.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            usage: `
              import MailButton2 from './MailButton2';

              export default function MyComponent() {
                const handleMailClick = () => {
                  console.log('Mail button clicked!');
                  // Handle mail sending logic here
                };

                return (
                  <MailButton2 onClick={handleMailClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Mail',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<MailButton2 />`
              },
              {
                name: 'Custom Label',
                code: `<MailButton2 label="Send Email" />`
              },
              {
                name: 'With Click Handler',
                code: `<MailButton2 label="Compose" onClick={() => alert('Mail sent!')} />`
              }
            ],
            Component: MailButton2 // Assuming MailButton2 is the actual component
          },
          {
            id: 'rounded-button',
            name: 'Rounded Button',
            description: 'A simple button with rounded corners.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import RoundedButton from './RoundedButton';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Rounded button clicked!');
                  // Handle button click logic here
                };

                return (
                  <RoundedButton onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Rounded',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<RoundedButton />`
              },
              {
                name: 'Custom Label',
                code: `<RoundedButton label="Submit" />`
              },
              {
                name: 'With Click Handler',
                code: `<RoundedButton label="Proceed" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: RoundedButton // Assuming RoundedButton is the actual component
          },
          {
            id: 'border-button',
            name: 'Border Button',
            description: 'A button with a simple border and hover effects.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import BorderButton from './BorderButton';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Border button clicked!');
                  // Handle button click logic here
                };

                return (
                  <BorderButton onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Border',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<BorderButton />`
              },
              {
                name: 'Custom Label',
                code: `<BorderButton label="Submit" />`
              },
              {
                name: 'With Click Handler',
                code: `<BorderButton label="Proceed" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: BorderButton // Assuming BorderButton is the actual component
          },
          {
            id: 'light-effect-button',
            name: 'Light Effect Button',
            description: 'A button with a subtle light effect on hover.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import LightEffectButton from './LightEffectButton';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Light Effect button clicked!');
                  // Handle button click logic here
                };

                return (
                  <LightEffectButton onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Lightup',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<LightEffectButton />`
              },
              {
                name: 'Custom Label',
                code: `<LightEffectButton label="Activate" />`
              },
              {
                name: 'With Click Handler',
                code: `<LightEffectButton label="Engage" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: LightEffectButton // Assuming LightEffectButton is the actual component
          },
          {
            id: 'glowing-button',
            name: 'Glowing Button',
            description: 'A button with a subtle glowing effect on hover.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import GlowingButton from './GlowingButton';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Glowing button clicked!');
                  // Handle button click logic here
                };

                return (
                  <GlowingButton onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Glowing',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<GlowingButton />`
              },
              {
                name: 'Custom Label',
                code: `<GlowingButton label="Activate" />`
              },
              {
                name: 'With Click Handler',
                code: `<GlowingButton label="Engage" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: GlowingButton // Assuming GlowingButton is the actual component
          },
          {
            id: 'underline-button',
            name: 'Underline Button',
            description: 'A button with an underline effect on hover.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import UnderlineButton from './UnderlineButton';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Underline button clicked!');
                  // Handle button click logic here
                };

                return (
                  <UnderlineButton onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Underline',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<UnderlineButton />`
              },
              {
                name: 'Custom Label',
                code: `<UnderlineButton label="Submit" />`
              },
              {
                name: 'With Click Handler',
                code: `<UnderlineButton label="Proceed" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: UnderlineButton // Assuming UnderlineButton is the actual component
          },
          {
            id: 'shiny-glass-button',
            name: 'Shiny Glass',
            description: 'A button with a shiny glass effect on hover.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import ShinyGlass from './ShinyGlass';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Shiny Glass button clicked!');
                  // Handle button click logic here
                };

                return (
                  <ShinyGlass onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Hover Me',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<ShinyGlass />`
              },
              {
                name: 'Custom Label',
                code: `<ShinyGlass label="Explore" />`
              },
              {
                name: 'With Click Handler',
                code: `<ShinyGlass label="Interact" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: ShinyGlass
          },
          {
            id: 'rgb-bg-button',
            name: 'RGB BG Button',
            description: 'A button with an animated RGB background effect on hover.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              'use client';
              import RGBBGButton from './RGBBGButton';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('RGB BG button clicked!');
                  // Handle button click logic here
                };

                return (
                  <RGBBGButton onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Hover Me',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<RGBBGButton />`
              },
              {
                name: 'Custom Label',
                code: `<RGBBGButton label="Explore" />`
              },
              {
                name: 'With Click Handler',
                code: `<RGBBGButton label="Interact" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: RGBBGButton,
          },
          {
            id: 'smooth-hover-fill-button',
            name: 'Smooth Fill Button',
            description: 'A button with a smooth filling animation on hover.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import SmoothFillButton from './SmoothFillButton';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Smooth Fill button clicked!');
                  // Handle button click logic here
                };

                return (
                  <SmoothFillButton onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Hover Me',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<SmoothFillButton />`
              },
              {
                name: 'Custom Label',
                code: `<SmoothFillButton label="Explore" />`
              },
              {
                name: 'With Click Handler',
                code: `<SmoothFillButton label="Interact" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: SmoothFillButton // Assuming SmoothFillButton is the actual component
          },
          {
            id: 'smooth-zoom-out-button',
            name: 'Smooth Zoom Out',
            description: 'A button with a smooth zoom-out effect on hover.',
            dependencies: 'None',
            installation: 'None',
            usage: `
              import SmoothZoomOut from './SmoothZoomOut';

              export default function MyComponent() {
                const handleButtonClick = () => {
                  console.log('Smooth Zoom Out button clicked!');
                  // Handle button click logic here
                };

                return (
                  <SmoothZoomOut onClick={handleButtonClick} />
                );
              }
            `,
            props: [
              {
                name: 'label',
                type: 'string',
                default: 'Hover Me',
                description: 'The text label displayed on the button.'
              },
              {
                name: 'onClick',
                type: '() => void',
                default: 'undefined',
                description: 'The callback to trigger when the button is clicked.'
              }
            ],
            examples: [
              {
                name: 'Default',
                code: `<SmoothZoomOut />`
              },
              {
                name: 'Custom Label',
                code: `<SmoothZoomOut label="Explore" />`
              },
              {
                name: 'With Click Handler',
                code: `<SmoothZoomOut label="Interact" onClick={() => alert('Button clicked!')} />`
              }
            ],
            Component: SmoothZoomOut // Assuming SmoothZoomOut is the actual component
          },
    ],

    cards: [
        {
            id: 'bento-login',
            name: 'Bento Login',
            description: 'A Bento Login Card.',
            dependencies: 'None',
            installation: 'npm install ..yourlib/Bento-Login',
            usage: `
          import { GlassButton } from '..components/Bento-Login';

          export default function MyComponent() {
            const handleClick = () => {
              // Handle button click logic here
            };

            return <GlassButton label="Click Me" onClick={handleClick} />;
          }`,
            props: [
              {
                name: 'label',
                type: 'string',
                default: '"Glass"',
                description: 'Text displayed on the button.',
              },
              {
                name: 'onClick',
                type: 'function',
                default: '-',
                description: 'Click event handler.',
              },
            ],
            examples: [
              {
                name: 'Default Glass Button',
                code: '<BentoLogin label="Glass Button" />',
              },
            ],
            Component: BentoLogin,
          },
        {
            id: 'minimal-job-card',
            name: 'Job Card',
            description: 'A Minimalistic Job Card.',
            dependencies: 'None',
            installation: 'npm install ..yourlib/Bento-Login',
            usage: `
          import { GlassButton } from '..components/Bento-Login';

          export default function MyComponent() {
            const handleClick = () => {
              // Handle button click logic here
            };

            return <GlassButton label="Click Me" onClick={handleClick} />;
          }`,
            props: [
              {
                name: 'label',
                type: 'string',
                default: '"Glass"',
                description: 'Text displayed on the button.',
              },
              {
                name: 'onClick',
                type: 'function',
                default: '-',
                description: 'Click event handler.',
              },
            ],
            examples: [
              {
                name: 'Default Glass Button',
                code: '<BentoLogin label="Glass Button" />',
              },
            ],
            Component: MinJobCard,
          },
        {
            id: 'professional-pricing-card',
            name: 'Pricing Card',
            description: 'A Minimalistic Job Card.',
            dependencies: 'None',
            installation: 'npm install ..yourlib/Bento-Login',
            usage: `
          import { GlassButton } from '..components/Bento-Login';

          export default function MyComponent() {
            const handleClick = () => {
              // Handle button click logic here
            };

            return <GlassButton label="Click Me" onClick={handleClick} />;
          }`,
            props: [
              {
                name: 'label',
                type: 'string',
                default: '"Glass"',
                description: 'Text displayed on the button.',
              },
              {
                name: 'onClick',
                type: 'function',
                default: '-',
                description: 'Click event handler.',
              },
            ],
            examples: [
              {
                name: 'Default Glass Button',
                code: '<BentoLogin label="Glass Button" />',
              },
            ],
            Component: ProfPricing,
          },
    ],

    alerts: [
        {
          id: 'success-alert',
          name: 'Success Alert',
          description: 'A success alert component with an icon and message.',
          dependencies: 'react-icons, framer-motion',
          installation: 'npm install react-icons framer-motion',
          usage: `
      import SuccessAlert from './components/alerts/SuccessAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <SuccessAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="Operation completed successfully!"
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Success Alert',
              code: '<SuccessAlert isOpen={true} onClose={() => {}} message="Operation successful!" />',
            },
          ],
          Component: SuccessAlertShowcase,
        },
        {
          id: 'error-alert',
          name: 'Error Alert',
          description: 'An error alert component with an icon and message.',
          dependencies: 'react-icons, framer-motion',
          installation: 'npm install react-icons framer-motion',
          usage: `
      import ErrorAlert from './components/alerts/ErrorAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <ErrorAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="An error occurred. Please try again."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The error message to display in the alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Error Alert',
              code: '<ErrorAlert isOpen={true} onClose={() => {}} message="An error occurred!" />',
            },
          ],
          Component: ErrorAlertShowcase,
        },
        {
          id: 'warning-alert',
          name: 'Warning Alert',
          description: 'A warning alert component with an icon and message.',
          dependencies: 'react-icons, framer-motion',
          installation: 'npm install react-icons framer-motion',
          usage: `
      import WarningAlert from './components/alerts/WarningAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <WarningAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="Warning: This action cannot be undone."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The warning message to display in the alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Warning Alert',
              code: '<WarningAlert isOpen={true} onClose={() => {}} message="Warning: Proceed with caution!" />',
            },
          ],
          Component: WarningAlertShowcase,
        },
        {
          id: 'info-alert',
          name: 'Info Alert',
          description: 'An informational alert component with an icon and message.',
          dependencies: 'react-icons, framer-motion',
          installation: 'npm install react-icons framer-motion',
          usage: `
      import InfoAlert from './components/alerts/InfoAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <InfoAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="Here's some important information for you."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The informational message to display in the alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Info Alert',
              code: '<InfoAlert isOpen={true} onClose={() => {}} message="Here is some important information." />'
            },
          ],
          Component: InfoAlertShowcase,
        },
        {
          id: 'confirmation-alert',
          name: 'Confirmation Alert',
          description: 'A confirmation alert component with a message and action buttons.',
          dependencies: 'react-icons, framer-motion',
          installation: 'npm install react-icons framer-motion',
          usage: `
      import ConfirmationAlert from './components/alerts/ConfirmationAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        const handleConfirm = () => {
          // Handle confirmation logic
          setIsOpen(false);
        };

        return (
          <ConfirmationAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={handleConfirm}
            message="Are you sure you want to proceed?"
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The confirmation message to display in the alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
            {
              name: 'onConfirm',
              type: 'function',
              default: '-',
              description: 'Function to call when the confirmation is accepted.',
            },
          ],
          examples: [
            {
              name: 'Basic Confirmation Alert',
              code: '<ConfirmationAlert isOpen={true} onClose={() => {}} onConfirm={() => {}} message="Are you sure?" />',
            },
          ],
          Component: ConfirmationAlertShowcase,
        },
        {
          id: 'toast-alert',
          name: 'Toast Alert',
          description: 'A toast notification alert that appears briefly.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import ToastAlert from './components/alerts/ToastAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <ToastAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This is a toast notification."
            duration={3000}
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the toast.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the toast.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the toast is closed.',
            },
            {
              name: 'duration',
              type: 'number',
              default: '3000',
              description: 'Duration in milliseconds for which the toast is visible.',
            },
          ],
          examples: [
            {
              name: 'Basic Toast Alert',
              code: '<ToastAlert isOpen={true} onClose={() => {}} message="This is a toast!" duration={5000} />',
            },
          ],
          Component: ToastAlertShowcase,
        },
        {
          id: 'banner-alert',
          name: 'Banner Alert',
          description: 'A banner alert that spans the width of the screen.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import BannerAlert from './components/alerts/BannerAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <BannerAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="Important announcement: System maintenance scheduled for tonight."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the banner.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the banner.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the banner is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Banner Alert',
              code: '<BannerAlert isOpen={true} onClose={() => {}} message="Important announcement!" />',
            },
          ],
          Component: BannerAlertShowcase,
        },
        {
          id: 'floating-alert',
          name: 'Floating Alert',
          description: 'A floating alert that appears in the corner of the screen.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import FloatingAlert from './components/alerts/FloatingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <FloatingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert floats in the corner of the screen."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the floating alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Floating Alert',
              code: '<FloatingAlert isOpen={true} onClose={() => {}} message="Floating notification!" />',
            },
          ],
          Component: FloatingAlertShowcase,
        },
        {
          id: 'slide-in-alert',
          name: 'Slide-In Alert',
          description: 'An alert that slides in from the side of the screen.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import SlideInAlert from './components/alerts/SlideInAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <SlideInAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert slides in from the side."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the slide-in alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Slide-In Alert',
              code: '<SlideInAlert isOpen={true} onClose={() => {}} message="Sliding in with important info!" />',
            },
          ],
          Component: SlideInAlertShowcase,
        },
        {
          id: 'progress-alert',
          name: 'Progress Alert',
          description: 'An alert with a progress bar that automatically closes.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import ProgressAlert from './components/alerts/ProgressAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <ProgressAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="Uploading file..."
            duration={5000}
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the progress alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
            {
              name: 'duration',
              type: 'number',
              default: '5000',
              description: 'Duration in milliseconds for the progress bar to complete.',
            },
          ],
          examples: [
            {
              name: 'Basic Progress Alert',
              code: '<ProgressAlert isOpen={true} onClose={() => {}} message="Uploading..." duration={3000} />',
            },
          ],
          Component: ProgressAlertShowcase,
        },
        {
          id: 'countdown-alert',
          name: 'Countdown Alert',
          description: 'An alert with a countdown timer that automatically closes.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import CountdownAlert from './components/alerts/CountdownAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <CountdownAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert will close in"
            duration={5}
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the countdown alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
            {
              name: 'duration',
              type: 'number',
              default: '5',
              description: 'Duration in seconds for the countdown.',
            },
          ],
          examples: [
            {
              name: 'Basic Countdown Alert',
              code: '<CountdownAlert isOpen={true} onClose={() => {}} message="Closing in" duration={10} />',
            },
          ],
          Component: CountdownAlertShowcase,
        },
        {
          id: 'expanding-alert',
          name: 'Expanding Alert',
          description: 'An alert that can be expanded to show more details.',
          dependencies: 'framer-motion, react-icons',
          installation: 'npm install framer-motion react-icons',
          usage: `
      import ExpandingAlert from './components/alerts/ExpandingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <ExpandingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Expandable Alert"
            message="Click the arrow to see more details about this alert."
          />
        );
      }`,
          props: [
            {
              name: 'title',
              type: 'string',
              default: '-',
              description: 'The title of the expanding alert.',
            },
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The detailed message to display when expanded.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Expanding Alert',
              code: '<ExpandingAlert isOpen={true} onClose={() => {}} title="Details" message="Click to expand" />',
            },
          ],
          Component: ExpandingAlertShowcase,
        },
        {
          id: 'sticky-alert',
          name: 'Sticky Alert',
          description: 'An alert that sticks to the bottom of the screen.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import StickyAlert from './components/alerts/StickyAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <StickyAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This is a sticky alert that stays at the bottom of the screen."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the sticky alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Sticky Alert',
              code: '<StickyAlert isOpen={true} onClose={() => {}} message="Important sticky message!" />',
            },
          ],
          Component: StickyAlertShowcase,
        },
        {
          id: 'pulsating-alert',
          name: 'Pulsating Alert',
          description: 'An alert with a pulsating animation to grab attention.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import PulsatingAlert from './components/alerts/PulsatingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <PulsatingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert pulses to grab attention."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the pulsating alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Pulsating Alert',
              code: '<PulsatingAlert isOpen={true} onClose={() => {}} message="Attention required!" />',
            },
          ],
          Component: PulsatingAlertShowcase,
        },
        {
          id: 'bouncing-alert',
          name: 'Bouncing Alert',
          description: 'An alert that bounces into view.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import BouncingAlert from './components/alerts/BouncingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <BouncingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert bounces into view."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the bouncing alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Bouncing Alert',
              code: '<BouncingAlert isOpen={true} onClose={() => {}} message="Bouncing notification!" />',
            },
          ],
          Component: BouncingAlertShowcase,
        },
        {
          id: 'shaking-alert',
          name: 'Shaking Alert',
          description: 'An alert that shakes to indicate urgency.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import ShakingAlert from './components/alerts/ShakingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <ShakingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert shakes to indicate urgency."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the shaking alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Shaking Alert',
              code: '<ShakingAlert isOpen={true} onClose={() => {}} message="Urgent notification!" />',
            },
          ],
          Component: ShakingAlertShowcase,
        },
        {
          id: 'fading-alert',
          name: 'Fading Alert',
          description: 'An alert that fades in and out.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import FadingAlert from './components/alerts/FadingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <FadingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert fades away after a few seconds."
            duration={3000}
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the fading alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
            {
              name: 'duration',
              type: 'number',
              default: '3000',
              description: 'Duration in milliseconds before the alert starts fading out.',
            },
          ],
          examples: [
            {
              name: 'Basic Fading Alert',
              code: '<FadingAlert isOpen={true} onClose={() => {}} message="Fading notification" duration={5000} />',
            },
          ],
          Component: FadingAlertShowcase,
        },
        {
          id: 'color-changing-alert',
          name: 'Color Changing Alert',
          description: 'An alert that changes colors to grab attention.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import ColorChangingAlert from './components/alerts/ColorChangingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <ColorChangingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert changes colors."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the color-changing alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Color Changing Alert',
              code: '<ColorChangingAlert isOpen={true} onClose={() => {}} message="Watch the colors change!" />',
            },
          ],
          Component: ColorChangingAlertShowcase,
        },
        {
          id: 'typing-alert',
          name: 'Typing Alert',
          description: 'An alert that types out its message.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import TypingAlert from './components/alerts/TypingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <TypingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert types out its message."
            typingSpeed={50}
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to be typed out in the alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
            {
              name: 'typingSpeed',
              type: 'number',
              default: '50',
              description: 'The speed of typing in milliseconds per character.',
            },
          ],
          examples: [
            {
              name: 'Basic Typing Alert',
              code: '<TypingAlert isOpen={true} onClose={() => {}} message="Watch this message type out." typingSpeed={100} />',
            },
          ],
          Component: TypingAlertShowcase,
        },
        {
          id: 'rotating-alert',
          name: 'Rotating Alert',
          description: 'An alert that rotates into view.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import RotatingAlert from './components/alerts/RotatingAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <RotatingAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert rotates into view."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the rotating alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Rotating Alert',
              code: '<RotatingAlert isOpen={true} onClose={() => {}} message="Rotating into view!" />',
            },
          ],
          Component: RotatingAlertShowcase,
        },
        {
          id: 'flip-alert',
          name: 'Flip Alert',
          description: 'An alert that flips into view.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import FlipAlert from './components/alerts/FlipAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <FlipAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="This alert flips into view."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the flip alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is closed.',
            },
          ],
          examples: [
            {
              name: 'Basic Flip Alert',
              code: '<FlipAlert isOpen={true} onClose={() => {}} message="Flipping into view!" />',
            },
          ],
          Component: FlipAlertShowcase,
        },
        {
          id: 'swipe-alert',
          name: 'Swipe Alert',
          description: 'An alert that can be dismissed by swiping.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import SwipeAlert from './components/alerts/SwipeAlert';

      export default function MyComponent() {
        const [isOpen, setIsOpen] = useState(false);

        return (
          <SwipeAlert
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            message="Swipe this alert to dismiss it."
          />
        );
      }`,
          props: [
            {
              name: 'message',
              type: 'string',
              default: '-',
              description: 'The message to display in the swipe alert.',
            },
            {
              name: 'isOpen',
              type: 'boolean',
              default: 'false',
              description: 'Controls the visibility of the alert.',
            },
            {
              name: 'onClose',
              type: 'function',
              default: '-',
              description: 'Function to call when the alert is swiped away.',
            },
          ],
          examples: [
            {
              name: 'Basic Swipe Alert',
              code: '<SwipeAlert isOpen={true} onClose={() => {}} message="Swipe me away!" />',
            },
          ],
          Component: SwipeAlertShowcase,
        },
      ],

      selects: [
        {
          id: 'simple-select',
          name: 'Simple Select',
          description: 'A basic select component.',
          dependencies: 'None',
          installation: 'None',
          usage: `
      import SimpleSelect from './components/selects/SimpleSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <SimpleSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Simple Select',
              code: '<SimpleSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: SimpleSelectShowcase,
        },
        {
          id: 'borderless-select',
          name: 'Borderless Select',
          description: 'A select component without a border.',
          dependencies: 'None',
          installation: 'None',
          usage: `
      import BorderlessSelect from './components/selects/BorderlessSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <BorderlessSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Borderless Select',
              code: '<BorderlessSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: BorderlessSelectShowcase,
        },
        {
          id: 'rounded-select',
          name: 'Rounded Select',
          description: 'A select component with rounded corners.',
          dependencies: 'None',
          installation: 'None',
          usage: `
      import RoundedSelect from './components/selects/RoundedSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <RoundedSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Rounded Select',
              code: '<RoundedSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: RoundedSelectShowcase,
        },
        {
          id: 'icon-select',
          name: 'Icon Select',
          description: 'A select component with icons.',
          dependencies: 'None',
          installation: 'None',
          usage: `
      import IconSelect from './components/selects/IconSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <IconSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'IconOption[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Icon Select',
              code: '<IconSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: IconSelectShowcase,
        },
        {
          id: 'multi-select',
          name: 'Multi Select',
          description: 'A select component that allows multiple selections.',
          dependencies: 'None',
          installation: 'None',
          usage: `
      import MultiSelect from './components/selects/MultiSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <MultiSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string[]',
              default: '[]',
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string[]) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Multi Select',
              code: '<MultiSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: MultiSelectShowcase,
        },
        {
          id: 'searchable-select',
          name: 'Searchable Select',
          description: 'A select component with search functionality.',
          dependencies: 'None',
          installation: 'None',
          usage: `
      import SearchableSelect from './components/selects/SearchableSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <SearchableSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Searchable Select',
              code: '<SearchableSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: SearchableSelectShowcase,
        },
        {
          id: 'grouped-select',
          name: 'Grouped Select',
          description: 'A select component with grouped options.',
          dependencies: 'None',
          installation: 'None',
          usage: `
      import GroupedSelect from './components/selects/GroupedSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <GroupedSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'GroupedOption[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Grouped Select',
              code: '<GroupedSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: GroupedSelectShowcase,
        },
        {
          id: 'color-select',
          name: 'Color Select',
          description: 'A select component for choosing colors.',
          dependencies: 'None',
          installation: 'None',
          usage: `
      import ColorSelect from './components/selects/ColorSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <ColorSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'ColorOption[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Color Select',
              code: '<ColorSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: ColorSelectShowcase,
        },
        {
          id: 'gradient-select',
          name: 'Gradient Select',
          description: 'A select component for choosing gradients.',
          dependencies: 'Framer Motion',
          installation: 'npm install framer-motion',
          usage: `
      import GradientSelect from './components/selects/GradientSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <GradientSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'GradientOption[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Gradient Select',
              code: '<GradientSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: GradientSelectShowcase,
        },
        {
          id: 'neumorphic-select',
          name: 'Neumorphic Select',
          description: 'A select component with neumorphic design.',
          dependencies: '',
          installation: '',
          usage: `
      import NeumorphicSelect from './components/selects/NeumorphicSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <NeumorphicSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Neumorphic Select',
              code: '<NeumorphicSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: NeumorphicSelectShowcase,
        },
        {
          id: 'glassmorphism-select',
          name: 'Glassmorphism Select',
          description: 'A select component with glassmorphism design.',
          dependencies: '',
          installation: '',
          usage: `
      import GlassmorphismSelect from './components/selects/GlassmorphismSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <GlassmorphismSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Glassmorphism Select',
              code: '<GlassmorphismSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: GlassmorphismSelectShowcase,
        },
        {
          id: 'minimal-select',
          name: 'Minimal Select',
          description: 'A minimalist select component.',
          dependencies: '',
          installation: '',
          usage: `
      import MinimalSelect from './components/selects/MinimalSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <MinimalSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Minimal Select',
              code: '<MinimalSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: MinimalSelectShowcase,
        },
        {
          id: 'floating-label-select',
          name: 'Floating Label Select',
          description: 'A select component with a floating label.',
          dependencies: '',
          installation: '',
          usage: `
      import FloatingLabelSelect from './components/selects/FloatingLabelSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <FloatingLabelSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Floating Label Select',
              code: '<FloatingLabelSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: FloatingLabelSelectShowcase,
        },
        {
          id: 'animated-border-select',
          name: 'Animated Border Select',
          description: 'A select component with an animated border.',
          dependencies: '',
          installation: '',
          usage: `
      import AnimatedBorderSelect from './components/selects/AnimatedBorderSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <AnimatedBorderSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Animated Border Select',
              code: '<AnimatedBorderSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: AnimatedBorderSelectShowcase,
        },
        {
          id: 'fading-select',
          name: 'Fading Select',
          description: 'A select component with a fading effect.',
          dependencies: '',
          installation: '',
          usage: `
      import FadingSelect from './components/selects/FadingSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <FadingSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Fading Select',
              code: '<FadingSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: FadingSelectShowcase,
        },
        {
          id: 'scale-select',
          name: 'Scale Select',
          description: 'A select component with a scaling effect.',
          dependencies: '',
          installation: '',
          usage: `
      import ScaleSelect from './components/selects/ScaleSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <ScaleSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Scale Select',
              code: '<ScaleSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: ScaleSelectShowcase,
        },
        {
          id: 'slide-select',
          name: 'Slide Select',
          description: 'A select component with a sliding effect.',
          dependencies: '',
          installation: '',
          usage: `
      import SlideSelect from './components/selects/SlideSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <SlideSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Slide Select',
              code: '<SlideSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: SlideSelectShowcase,
        },
        {
          id: 'rotate-select',
          name: 'Rotate Select',
          description: 'A select component with a rotating effect.',
          dependencies: '',
          installation: '',
          usage: `
      import RotateSelect from './components/selects/RotateSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <RotateSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Rotate Select',
              code: '<RotateSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: RotateSelectShowcase,
        },
        {
          id: 'outlined-select',
          name: 'Outlined Select',
          description: 'A select component with an outlined style.',
          dependencies: '',
          installation: '',
          usage: `
      import OutlinedSelect from './components/selects/OutlinedSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <OutlinedSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Outlined Select',
              code: '<OutlinedSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: OutlinedSelectShowcase,
        },
        {
          id: 'underlined-select',
          name: 'Underlined Select',
          description: 'A select component with an underlined style.',
          dependencies: '',
          installation: '',
          usage: `
      import UnderlinedSelect from './components/selects/UnderlinedSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <UnderlinedSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Underlined Select',
              code: '<UnderlinedSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: UnderlinedSelectShowcase,
        },
        {
          id: 'pill-select',
          name: 'Pill Select',
          description: 'A select component with a pill-shaped design.',
          dependencies: '',
          installation: '',
          usage: `
      import PillSelect from './components/selects/PillSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <PillSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Pill Select',
              code: '<PillSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: PillSelectShowcase,
        },
        {
          id: 'material-select',
          name: 'Material Select',
          description: 'A select component inspired by Material Design.',
          dependencies: '',
          installation: '',
          usage: `
      import MaterialSelect from './components/selects/MaterialSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <MaterialSelect
            options={options}
            value={value}
            onChange={setValue}
            label="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text to display above the select.',
            },
          ],
          examples: [
            {
              name: 'Basic Material Select',
              code: '<MaterialSelect options={options} value={value} onChange={setValue} label="Select an option" />',
            },
          ],
          Component: MaterialSelectShowcase,
        },
        {
          id: 'icon-label-select',
          name: 'Icon Label Select',
          description: 'A select component with icons and labels.',
          dependencies: '',
          installation: '',
          usage: `
      import IconLabelSelect from './components/selects/IconLabelSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <IconLabelSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'IconOption[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string)=> void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Icon Label Select',
              code: '<IconLabelSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: IconLabelSelectShowcase,
        },
        {
          id: 'tag-select',
          name: 'Tag Select',
          description: 'A multi-select component with tags.',
          dependencies: '',
          installation: '',
          usage: `
      import TagSelect from './components/selects/TagSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <TagSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string[]',
              default: '[]',
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string[]) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Tag Select',
              code: '<TagSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: TagSelectShowcase,
        },
        {
          id: 'chip-select',
          name: 'Chip Select',
          description: 'A select component with chip-style options.',
          dependencies: '',
          installation: '',
          usage: `
      import ChipSelect from './components/selects/ChipSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <ChipSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Chip Select',
              code: '<ChipSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: ChipSelectShowcase,
        },
        {
          id: 'accordion-select',
          name: 'Accordion Select',
          description: 'A select component with an accordion-style dropdown.',
          dependencies: '',
          installation: '',
          usage: `
      import AccordionSelect from './components/selects/AccordionSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <AccordionSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Accordion Select',
              code: '<AccordionSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: AccordionSelectShowcase,
        },
        {
          id: 'button-group-select',
          name: 'Button Group Select',
          description: 'A select component styled as a group of buttons.',
          dependencies: '',
          installation: '',
          usage: `
      import ButtonGroupSelect from './components/selects/ButtonGroupSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <ButtonGroupSelect
            options={options}
            value={value}
            onChange={setValue}
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
          ],
          examples: [
            {
              name: 'Basic Button Group Select',
              code: '<ButtonGroupSelect options={options} value={value} onChange={setValue} />',
            },
          ],
          Component: ButtonGroupSelectShowcase,
        },
        {
          id: 'segmented-control-select',
          name: 'Segmented Control Select',
          description: 'A select component styled as a segmented control.',
          dependencies: '',
          installation: '',
          usage: `
      import SegmentedControlSelect from './components/selects/SegmentedControlSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <SegmentedControlSelect
            options={options}
            value={value}
            onChange={setValue}
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
          ],
          examples: [
            {
              name: 'Basic Segmented Control Select',
              code: '<SegmentedControlSelect options={options} value={value} onChange={setValue} />',
            },
          ],
          Component: SegmentedControlSelectShowcase,
        },
        {
          id: 'tree-select',
          name: 'Tree Select',
          description: 'A select component with a tree-like structure for nested options.',
          dependencies: '',
          installation: '',
          usage: `
      import TreeSelect from './components/selects/TreeSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <TreeSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'TreeOption[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Tree Select',
              code: '<TreeSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: TreeSelectShowcase,
        },
        {
          id: 'combobox-select',
          name: 'Combobox Select',
          description: 'A select component with search functionality and custom option rendering.',
          dependencies: '',
          installation: '',
          usage: `
      import ComboboxSelect from './components/selects/ComboboxSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <ComboboxSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Combobox Select',
              code: '<ComboboxSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: ComboboxSelectShowcase,
        },
        {
          id: 'async-select',
          name: 'Async Select',
          description: 'A select component that loads options asynchronously.',
          dependencies: '',
          installation: '',
          usage: `
      import AsyncSelect from './components/selects/AsyncSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <AsyncSelect
            loadOptions={loadOptions}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'loadOptions',
              type: '() => Promise<Option[]>',
              default: '-',
              description: 'Function to load options asynchronously.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Async Select',
              code: '<AsyncSelect loadOptions={loadOptions} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: AsyncSelectShowcase,
        },
        {
          id: 'virtualized-select',
          name: 'Virtualized Select',
          description: 'A select component with virtualized rendering for large option lists.',
          dependencies: '',
          installation: '',
          usage: `
      import VirtualizedSelect from './components/selects/VirtualizedSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <VirtualizedSelect
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Virtualized Select',
              code: '<VirtualizedSelect options={options} value={value} onChange={setValue} placeholder="Select an option" />',
            },
          ],
          Component: VirtualizedSelectShowcase,
        },
        {
          id: 'creatable-select',
          name: 'Creatable Select',
          description: 'A select component that allows creating new options.',
          dependencies: '',
          installation: '',
          usage: `
      import CreatableSelect from './components/selects/CreatableSelect';

      export default function MyComponent() {
        const [value, setValue] = useState('');

        return (
          <CreatableSelect
            options={options}
            value={value}
            onChange={setValue}
            onCreateOption={handleCreate}
            placeholder="Select an option"
          />
        );
      }`,
          props: [
            {
              name: 'options',
              type: 'Option[]',
              default: '[]',
              description: 'Array of options to display in the select.',
            },
            {
              name: 'value',
              type: 'string',
              default: "''",
              description: 'The currently selected value.',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              default: '-',
              description: 'Function to call when the selected value changes.',
            },
            {
              name: 'onCreateOption',
              type: '(label: string) => void',
              default: '-',
              description: 'Function to call when a new option is created.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "''",
              description: 'Placeholder text to display when no option is selected.',
            },
          ],
          examples: [
            {
              name: 'Basic Creatable Select',
              code: '<CreatableSelect options={options} value={value} onChange={setValue} onCreateOption={handleCreate} placeholder="Select an option" />',
            },
          ],
          Component: CreatableSelectShowcase,
        },
      ],

      switches: [
        {
          id: 'simple-switch',
          name: 'Simple Switch',
          description: 'A basic switch component with smooth transitions.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { SimpleSwitch } from '../components/switches/simple-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <SimpleSwitch
            id="simple-switch"
            name="simple-switch"
            checked={checked}
            onChange={handleChange}
            label="Simple Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Simple Switch',
              code: '<SimpleSwitch id="simple-switch" name="simple-switch" checked={false} onChange={() => {}} label="Simple Switch" />',
            },
          ],
          Component: SimpleSwitchShowcase,
        },
        {
          id: 'animated-switch',
          name: 'Animated Switch',
          description: 'A switch component with smooth animations.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import { AnimatedSwitch } from '../components/switches/animated-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <AnimatedSwitch
            id="animated-switch"
            name="animated-switch"
            checked={checked}
            onChange={handleChange}
            label="Animated Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Animated Switch',
              code: '<AnimatedSwitch id="animated-switch" name="animated-switch" checked={false} onChange={() => {}} label="Animated Switch" />',
            },
          ],
          Component: AnimatedSwitchShowcase,
        },
        {
          id: 'icon-switch',
          name: 'Icon Switch',
          description: 'A switch component with icons.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { IconSwitch } from '../components/switches/icon-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <IconSwitch
            id="icon-switch"
            name="icon-switch"
            checked={checked}
            onChange={handleChange}
            label="Icon Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Icon Switch',
              code: '<IconSwitch id="icon-switch" name="icon-switch" checked={false} onChange={() => {}} label="Icon Switch" />',
            },
          ],
          Component: IconSwitchShowcase,
        },
        {
          id: 'card-switch',
          name: 'Card Switch',
          description: 'A switch component styled as a card.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { CardSwitch } from '../components/switches/card-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <CardSwitch
            id="card-switch"
            name="card-switch"
            checked={checked}
            onChange={handleChange}
            label="Card Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Card Switch',
              code: '<CardSwitch id="card-switch" name="card-switch" checked={false} onChange={() => {}} label="Card Switch" />',
            },
          ],
          Component: CardSwitchShowcase,
        },
        {
          id: 'square-switch',
          name: 'Square Switch',
          description: 'A square-shaped switch component.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { SquareSwitch } from '../components/switches/square-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <SquareSwitch
            id="square-switch"
            name="square-switch"
            checked={checked}
            onChange={handleChange}
            label="Square Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Square Switch',
              code: '<SquareSwitch id="square-switch" name="square-switch" checked={false} onChange={() => {}} label="Square Switch" />',
            },
          ],
          Component: SquareSwitchShowcase,
        },
        {
          id: 'toggle-switch',
          name: 'Toggle Switch',
          description: 'A simple toggle switch component.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { ToggleSwitch } from '../components/switches/toggle-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <ToggleSwitch
            id="toggle-switch"
            name="toggle-switch"
            checked={checked}
            onChange={handleChange}
            label="Toggle Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Toggle Switch',
              code: '<ToggleSwitch id="toggle-switch" name="toggle-switch" checked={false} onChange={() => {}} label="Toggle Switch" />',
            },
          ],
          Component: ToggleSwitchShowcase,
        },
        {
          id: 'day-night-switch',
          name: 'Day Night Switch',
          description: 'A switch component representing day and night.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { DayNightSwitch } from '../components/switches/day-night-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <DayNightSwitch
            id="day-night-switch"
            name="day-night-switch"
            checked={checked}
            onChange={handleChange}
            label="Day Night Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Day Night Switch',
              code: '<DayNightSwitch id="day-night-switch" name="day-night-switch" checked={false} onChange={() => {}} label="Day Night Switch" />',
            },
          ],
          Component: DayNightSwitchShowcase,
        },
        {
          id: 'volume-switch',
          name: 'Volume Switch',
          description: 'A switch component for controlling volume.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { VolumeSwitch } from '../components/switches/volume-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <VolumeSwitch
            id="volume-switch"
            name="volume-switch"
            checked={checked}
            onChange={handleChange}
            label="Volume Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Volume Switch',
              code: '<VolumeSwitch id="volume-switch" name="volume-switch" checked={false} onChange={() => {}} label="Volume Switch" />',
            },
          ],
          Component: VolumeSwitchShowcase,
        },
        {
          id: 'wifi-switch',
          name: 'Wifi Switch',
          description: 'A switch component representing Wifi connection.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { WifiSwitch } from '../components/switches/wifi-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <WifiSwitch
            id="wifi-switch"
            name="wifi-switch"
            checked={checked}
            onChange={handleChange}
            label="Wifi Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Wifi Switch',
              code: '<WifiSwitch id="wifi-switch" name="wifi-switch" checked={false} onChange={() => {}} label="Wifi Switch" />',
            },
          ],
          Component: WifiSwitchShowcase,
        },
        {
          id: 'slider-switch',
          name: 'Slider Switch',
          description: 'A switch component with a slider.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { SliderSwitch } from '../components/switches/slider-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <SliderSwitch
            id="slider-switch"
            name="slider-switch"
            checked={checked}
            onChange={handleChange}
            label="Slider Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Slider Switch',
              code: '<SliderSwitch id="slider-switch" name="slider-switch" checked={false} onChange={() => {}} label="Slider Switch" />',
            },
          ],
          Component: SliderSwitchShowcase,
        },
        {
          id: 'gradient-switch',
          name: 'Gradient Switch',
          description: 'A switch component with a gradient background.',
          dependencies: 'None',
          installation: 'No additional installation required',
          usage: `
      import { GradientSwitch } from '../components/switches/gradient-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <GradientSwitch
            id="gradient-switch"
            name="gradient-switch"
            checked={checked}
            onChange={handleChange}
            label="Gradient Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Gradient Switch',
              code: '<GradientSwitch id="gradient-switch" name="gradient-switch" checked={false} onChange={() => {}} label="Gradient Switch" />',
            },
          ],
          Component: GradientSwitchShowcase,
        },
        {
          id: 'animated-icon-switch',
          name: 'Animated Icon Switch',
          description: 'A switch component with animated icons.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import { AnimatedIconSwitch } from '../components/switches/animated-icon-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <AnimatedIconSwitch
            id="animated-icon-switch"
            name="animated-icon-switch"
            checked={checked}
            onChange={handleChange}
            label="Animated Icon Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Animated Icon Switch',
              code: '<AnimatedIconSwitch id="animated-icon-switch" name="animated-icon-switch" checked={false} onChange={() => {}} label="Animated Icon Switch" />',
            },
          ],
          Component: AnimatedIconSwitchShowcase,
        },
        {
          id: 'pulsing-switch',
          name: 'Pulsing Switch',
          description: 'A switch component with a pulsing animation.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import { PulsingSwitch } from '../components/switches/pulsing-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <PulsingSwitch
            id="pulsing-switch"
            name="pulsing-switch"
            checked={checked}
            onChange={handleChange}
            label="Pulsing Switch"
          />
        );
      }`,
          props: [
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Pulsing Switch',
              code: '<PulsingSwitch id="pulsing-switch" name="pulsing-switch" checked={false} onChange={() => {}} label="Pulsing Switch" />',
            },
          ],
          Component: PulsingSwitchShowcase,
        },
        {
          id: 'ripple-switch',
          name: 'Ripple Switch',
          description: 'A switch with a ripple effect animation.',
          dependencies: 'framer-motion',
          installation: 'npm install framer-motion',
          usage: `
      import { RippleSwitch } from '../components/switches/ripple-switch';

      export default function MyComponent() {
        const [checked, setChecked] = useState(false);
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        };

        return (
          <RippleSwitch
            id="ripple-switch"
            name="ripple-switch"
            checked={checked}
            onChange={handleChange}
            label="Ripple Switch"
          />
        );
      }`,
          props: [
            {
              name: 'checked',
              type: 'boolean',
              default: 'false',
              description: 'Indicates whether the switch is toggled on.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              default: '-',
              description: 'Callback function triggered when the switch state changes.',
            },
            {
              name: 'label',
              type: 'string',
              default: "''",
              description: 'Label text for the switch.',
            },
            {
              name: 'id',
              type: 'string',
              default: '-',
              description: 'Unique identifier for the switch input.',
            },
            {
              name: 'name',
              type: 'string',
              default: '-',
              description: 'Name attribute for the switch input.',
            },
            {
              name: 'className',
              type: 'string',
              default: "''",
              description: 'Additional CSS classes to apply to the switch container.',
            },
          ],
          examples: [
            {
              name: 'Default Ripple Switch',
              code: '<RippleSwitch id="ripple-switch" name="ripple-switch" checked={false} onChange={() => {}} label="Ripple Switch" />',
            },
          ],
          Component: RippleSwitchShowcase,
        },
      ],

      checkboxes: [
        {
          id: 'icon-checkbox',
          name: 'Icon Checkbox',
          description: 'A checkbox with an icon indicator.',
          Component: IconCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<IconCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Icon Checkbox" />',
            },
          ],
        },
        {
          id: 'square-checkbox',
          name: 'Square Checkbox',
          description: 'A checkbox with a square shape.',
          Component: SquareCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<SquareCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Square Checkbox" />',
            },
          ],
        },
        {
          id: 'outline-checkbox',
          name: 'Outline Checkbox',
          description: 'A checkbox with an outline style.',
          Component: OutlineCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<OutlineCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Outline Checkbox" />',
            },
          ],
        },
        {
          id: 'toggle-checkbox',
          name: 'Toggle Checkbox',
          description: 'A checkbox styled as a toggle switch.',
          Component: ToggleCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<ToggleCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Toggle Checkbox" />',
            },
          ],
        },
        {
          id: 'star-checkbox',
          name: 'Star Checkbox',
          description: 'A checkbox with a star icon.',
          Component: StarCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<StarCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Star Checkbox" />',
            },
          ],
        },
        {
          id: 'heart-checkbox',
          name: 'Heart Checkbox',
          description: 'A checkbox with a heart icon.',
          Component: HeartCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<HeartCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Heart Checkbox" />',
            },
          ],
        },
        {
          id: 'thumbs-up-checkbox',
          name: 'Thumbs Up Checkbox',
          description: 'A checkbox with a thumbs up icon.',
          Component: ThumbsUpCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<ThumbsUpCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Thumbs Up Checkbox" />',
            },
          ],
        },
        {
          id: 'emoji-checkbox',
          name: 'Emoji Checkbox',
          description: 'A checkbox with an emoji icon.',
          Component: EmojiCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for thecheckbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<EmojiCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Emoji Checkbox" />',
            },
          ],
        },
        {
          id: 'button-group-checkbox',
          name: 'Button Group Checkbox',
          description: 'A checkbox styled as a button in a group.',
          Component: ButtonGroupCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<ButtonGroupCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Button Group Checkbox" />',
            },
          ],
        },
        {
          id: 'slider-checkbox',
          name: 'Slider Checkbox',
          description: 'A checkbox styled as a slider.',
          Component: SliderCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<SliderCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Slider Checkbox" />',
            },
          ],
        },
        {
          id: 'color-picker-checkbox',
          name: 'Color Picker Checkbox',
          description: 'A checkbox with a color picker.',
          Component: ColorPickerCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
            { name: 'color', type: 'string', description: 'Color value for the checkbox' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<ColorPickerCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Color Picker Checkbox" color="#ff0000" />',
            },
          ],
        },
        {
          id: 'size-picker-checkbox',
          name: 'Size Picker Checkbox',
          description: 'A checkbox for selecting sizes.',
          Component: SizePickerCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<SizePickerCheckbox id="example" name="example" checked={false} onChange={() => {}} label="S" />',
            },
          ],
        },
        {
          id: 'gradient-checkbox',
          name: 'Gradient Checkbox',
          description: 'A checkbox with a gradient background.',
          Component: GradientCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<GradientCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Gradient Checkbox" />',
            },
          ],
        },
        {
          id: 'textured-checkbox',
          name: 'Textured Checkbox',
          description: 'A checkbox with a textured background.',
          Component: TexturedCheckboxShowcase,
          props: [
            { name: 'id', type: 'string', description: 'Unique identifier for the checkbox' },
            { name: 'name', type: 'string', description: 'Name attribute for the checkbox' },
            { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked' },
            { name: 'onChange', type: '(event: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the checkbox state changes' },
            { name: 'label', type: 'string', description: 'Label text for the checkbox' },
            { name: 'className', type: 'string', description: 'Additional CSS classes to apply' },
          ],
          examples: [
            {
              name: 'Basic usage',
              code: '<TexturedCheckbox id="example" name="example" checked={false} onChange={() => {}} label="Textured Checkbox" />',
            },
          ],
        },
      ],

};
