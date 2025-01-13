// Buttons
import { DarkButton, DefaultButton, DeleteButton, FloatingActionButton, MotionBlade, MotionDefault, MotionDelete, MotionDownload, MotionHelp, MotionLoading, MotionLoading2, MotionLogin, MotionMail, MotionScale, MotionSend, MotionShimmer, MotionShutter, MotionSpinner, MotionUpload, SocialButton, BreathingBorder, GlassButton, MailButton, MailButton2, RoundedButton, BorderButton, LightEffectButton, UnderlineButton, ShinyGlass,} from '../components/ui/buttons/buttons';


// Cards
import { BentoLogin, MinJobCard, ProfPricing } from '../components/ui/cards/cards';


// Alerts
import { BannerAlertShowcase, BouncingAlertShowcase, ColorChangingAlertShowcase, ConfirmationAlertShowcase, CountdownAlertShowcase, ErrorAlertShowcase, ExpandingAlertShowcase, FadingAlertShowcase, FlipAlertShowcase, FloatingAlertShowcase, InfoAlertShowcase, ProgressAlertShowcase, PulsatingAlertShowcase, RotatingAlertShowcase, ShakingAlertShowcase, SlideInAlertShowcase, StickyAlertShowcase, SuccessAlertShowcase, SwipeAlertShowcase, ToastAlertShowcase, TypingAlertShowcase, WarningAlertShowcase } from "../components/ui/alerts/alert-showcases";


// Selects
import { AccordionSelectShowcase, AnimatedBorderSelectShowcase, AsyncSelectShowcase, BorderlessSelectShowcase, ButtonGroupSelectShowcase, ChipSelectShowcase, ColorSelectShowcase, ComboboxSelectShowcase, CreatableSelectShowcase, FadingSelectShowcase, FloatingLabelSelectShowcase, GlassmorphismSelectShowcase, GradientSelectShowcase, GroupedSelectShowcase, IconLabelSelectShowcase, IconSelectShowcase, MaterialSelectShowcase, MinimalSelectShowcase, MultiSelectShowcase, NeumorphicSelectShowcase, OutlinedSelectShowcase, PillSelectShowcase, RotateSelectShowcase, RoundedSelectShowcase, ScaleSelectShowcase, SearchableSelectShowcase, SegmentedControlSelectShowcase, SimpleSelectShowcase, SlideSelectShowcase, TagSelectShowcase, TreeSelectShowcase, UnderlinedSelectShowcase, VirtualizedSelectShowcase } from "../components/ui/selects/selectShowcase";


// Switches
import { AnimatedIconSwitchShowcase, AnimatedSwitchShowcase, CardSwitchShowcase, DayNightSwitchShowcase, GradientSwitchShowcase, IconSwitchShowcase, PulsingSwitchShowcase, RippleSwitchShowcase, SimpleSwitchShowcase, SliderSwitchShowcase, SquareSwitchShowcase, ToggleSwitchShowcase, VolumeSwitchShowcase, WifiSwitchShowcase } from "../components/ui/switches/switches-showcase";


// Checkboxes
import { ButtonGroupCheckboxShowcase, ColorPickerCheckboxShowcase, EmojiCheckboxShowcase, GradientCheckboxShowcase, HeartCheckboxShowcase, IconCheckboxShowcase, OutlineCheckboxShowcase, SizePickerCheckboxShowcase, SliderCheckboxShowcase, SquareCheckboxShowcase, StarCheckboxShowcase, TexturedCheckboxShowcase, ThumbsUpCheckboxShowcase, ToggleCheckboxShowcase } from "../components/ui/checkboxes/checkbox-showcase";
import DisabledButton from "../components/ui/buttons/disabled-button";

export const components: Record<string, ComponentDataProps[]> = {

    // buttons docs
    buttons: [
        {
            id: 'default-button',
            name: 'Default Button',
            description: 'This is a Default button.',
            props: [
                { name: 'label', type: 'string', default: 'Default', description: 'The label of the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: DefaultButton
        },
        {
            id: 'dark-button',
            name: 'Dark Button',
            description: 'This is a Dark button.',
            props: [
                { name: 'label', type: 'string', default: 'Dark', description: 'The label of the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: DarkButton
        },
        {
            id: 'disabled-button',
            name: 'Disabled Button',
            description: 'This is a Disabled Button.',
            props: [
                { name: 'label', type: 'string', default: 'Disabled', description: 'The label of the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: DisabledButton
        },
        {
            id: 'motion-default-button',
            name: 'Motion Default',
            description: 'This is a Motion button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            props: [
                { name: 'label', type: 'string', default: 'Motion', description: 'The label of the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: MotionDefault
        },
        {
            id: 'floating-action-button',
            name: 'Floating Action',
            description: 'A Floating Action Button with smooth animations and dual labels.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            props: [
                { name: 'label', type: 'string', default: 'Add to cart', description: 'The primary label of the button' },
                { name: 'secondryLabel', type: 'string', default: 'Added', description: 'The label displayed after the button is clicked' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: FloatingActionButton
        },
        {
            id: 'motion-delete-button',
            name: 'Motion Delete',
            description: 'A motion-enabled delete button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            props: [
                { name: 'label', type: 'string', default: 'Delete', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
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
            props: [
                { name: 'label', type: 'string', default: 'Download', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: MotionDownload
        },
        {
            id: 'motion-email-button',
            name: 'Motion Mail',
            description: 'A motion-enabled email button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            props: [
                { name: 'label', type: 'string', default: 'Email', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: MotionMail
        },
        {
            id: 'motion-help-button',
            name: 'Motion Help',
            description: 'A motion-enabled help button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            props: [
                { name: 'label', type: 'string', default: 'Help', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: MotionHelp
        },
        {
            id: 'motion-shutter-button',
            name: 'Motion Shutter',
            description: 'A motion-enabled shutter button with dynamic hover effects.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            props: [
                { name: 'label', type: 'string', default: 'Shutter', description: 'The text label displayed on the button' },
                { name: 'onClick', type: '() => void', default: 'undefined', description: 'The callback to trigger when the button is clicked' }
            ],
            Component: MotionShutter
        },
        {
            id: 'motion-login-button',
            name: 'Motion Login',
            description: 'A visually appealing login button with hover effects using Framer Motion.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
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
            Component: MotionLogin
        },
        {
            id: 'motion-send-button',
            name: 'Motion Send',
            description: 'An animated send button with hover and click effects.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
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
            Component: MotionSend
        },
        {
            id: 'motion-shimmer-button',
            name: 'Motion Shimmer',
            description: 'A button with a shimmering effect on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: MotionShimmer
        },
        {
            id: 'motion-upload-button',
            name: 'Motion Upload',
            description: 'An animated upload button with hover effects.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
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
            Component: MotionUpload
        },
        {
            id: 'motion-scale-button',
            name: 'Motion Scale',
            description: 'A button with a scale animation on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: MotionScale
        },
        {
            id: 'social-button',
            name: 'Social Button',
            description: 'A basic social login button with an icon.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
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
            Component: SocialButton
        },
        {
            id: 'delete-button',
            name: 'Delete Button',
            description: 'A basic delete button with an icon.',
            dependencies: 'react-icons/fa',
            installation: 'npm install react-icons',
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
            Component: DeleteButton
        },
        {
            id: 'motion-blade-button',
            name: 'Motion Blade',
            description: 'A button with a dynamic blade animation on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: MotionBlade
        },
        {
            id: 'motion-spinner-button',
            name: 'Motion Spinner',
            description: 'A loading button with a circular spinner animation.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            props: [
                {
                    name: 'label',
                    type: 'string',
                    default: '"Loading"',
                    description: 'Text displayed on the button.',
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
            Component: MotionLoading
        },
        {
            id: 'motion-loading-button-2',
            name: 'Motion Loading 2',
            description: 'A button with a loading animation and secondary label on click.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: MotionLoading2
        },
        {
            id: 'breathing-border-button',
            name: 'Breathing Border',
            description: 'A button with an animated breathing border effect.',
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
            Component: BreathingBorder
        },
        {
            id: 'glass-button',
            name: 'Glass Button',
            description: 'A button with a glassmorphism effect.',
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
            Component: GlassButton
        },
        {
            id: 'mail-button',
            name: 'Mail Button',
            description: 'A button with a mail icon.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
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
            Component: MailButton
        },
        {
            id: 'mail-button-2',
            name: 'Mail Button 2',
            description: 'A button with a mail icon and an animated right arrow.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
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
            Component: MailButton2
        },
        {
            id: 'rounded-button',
            name: 'Rounded Button',
            description: 'A simple button with rounded corners.',
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
            Component: RoundedButton
        },
        {
            id: 'border-button',
            name: 'Border Button',
            description: 'A button with a simple border and hover effects.',
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
            Component: BorderButton
        },
        {
            id: 'light-effect-button',
            name: 'Light Effect Button',
            description: 'A button with a subtle light effect on hover.',
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
            Component: LightEffectButton
        },
        {
            id: 'underline-button',
            name: 'Underline Button',
            description: 'A button with an underline effect on hover.',
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
            Component: UnderlineButton
        },
        {
            id: 'shiny-glass-button',
            name: 'Shiny Glass',
            description: 'A button with a shiny glass effect on hover.',
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
            Component: ShinyGlass
        },
    ],

    // cards docs
    cards: [
        {
            id: 'bento-login',
            name: 'Bento Login',
            description: 'A Bento Login Card.',
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
            Component: BentoLogin,
        },
        {
            id: 'minimal-job-card',
            name: 'Job Card',
            description: 'A Minimalistic Job Card.',
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
            Component: MinJobCard,
        },
        {
            id: 'professional-pricing-card',
            name: 'Pricing Card',
            description: 'A Minimalistic Job Card.',
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
            Component: ProfPricing,
        },
    ],

    // alerts docs
    alerts: [
        {
            id: 'success-alert',
            name: 'Success Alert',
            description: 'A success alert component with an icon and message.',
            dependencies: 'react-icons, framer-motion',
            installation: 'npm install react-icons framer-motion',
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
            Component: SuccessAlertShowcase,
        },
        {
            id: 'error-alert',
            name: 'Error Alert',
            description: 'An error alert component with an icon and message.',
            dependencies: 'react-icons, framer-motion',
            installation: 'npm install react-icons framer-motion',
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
            Component: ErrorAlertShowcase,
        },
        {
            id: 'warning-alert',
            name: 'Warning Alert',
            description: 'A warning alert component with an icon and message.',
            dependencies: 'react-icons, framer-motion',
            installation: 'npm install react-icons framer-motion',
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
            Component: WarningAlertShowcase,
        },
        {
            id: 'info-alert',
            name: 'Info Alert',
            description: 'An informational alert component with an icon and message.',
            dependencies: 'react-icons, framer-motion',
            installation: 'npm install react-icons framer-motion',
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
            Component: InfoAlertShowcase,
        },
        {
            id: 'confirmation-alert',
            name: 'Confirmation Alert',
            description: 'A confirmation alert component with a message and action buttons.',
            dependencies: 'react-icons, framer-motion',
            installation: 'npm install react-icons framer-motion',
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
            Component: ConfirmationAlertShowcase,
        },
        {
            id: 'toast-alert',
            name: 'Toast Alert',
            description: 'A toast notification alert that appears briefly.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: ToastAlertShowcase,
        },
        {
            id: 'banner-alert',
            name: 'Banner Alert',
            description: 'A banner alert that spans the width of the screen.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: BannerAlertShowcase,
        },
        {
            id: 'floating-alert',
            name: 'Floating Alert',
            description: 'A floating alert that appears in the corner of the screen.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: FloatingAlertShowcase,
        },
        {
            id: 'slide-in-alert',
            name: 'Slide-In Alert',
            description: 'An alert that slides in from the side of the screen.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: SlideInAlertShowcase,
        },
        {
            id: 'progress-alert',
            name: 'Progress Alert',
            description: 'An alert with a progress bar that automatically closes.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: ProgressAlertShowcase,
        },
        {
            id: 'countdown-alert',
            name: 'Countdown Alert',
            description: 'An alert with a countdown timer that automatically closes.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: CountdownAlertShowcase,
        },
        {
            id: 'expanding-alert',
            name: 'Expanding Alert',
            description: 'An alert that can be expanded to show more details.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
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
            Component: ExpandingAlertShowcase,
        },
        {
            id: 'sticky-alert',
            name: 'Sticky Alert',
            description: 'An alert that sticks to the bottom of the screen.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: StickyAlertShowcase,
        },
        {
            id: 'pulsating-alert',
            name: 'Pulsating Alert',
            description: 'An alert with a pulsating animation to grab attention.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: PulsatingAlertShowcase,
        },
        {
            id: 'bouncing-alert',
            name: 'Bouncing Alert',
            description: 'An alert that bounces into view.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: BouncingAlertShowcase,
        },
        {
            id: 'shaking-alert',
            name: 'Shaking Alert',
            description: 'An alert that shakes to indicate urgency.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: ShakingAlertShowcase,
        },
        {
            id: 'fading-alert',
            name: 'Fading Alert',
            description: 'An alert that fades in and out.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: FadingAlertShowcase,
        },
        {
            id: 'color-changing-alert',
            name: 'Color Changing Alert',
            description: 'An alert that changes colors to grab attention.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: ColorChangingAlertShowcase,
        },
        {
            id: 'typing-alert',
            name: 'Typing Alert',
            description: 'An alert that types out its message.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: TypingAlertShowcase,
        },
        {
            id: 'rotating-alert',
            name: 'Rotating Alert',
            description: 'An alert that rotates into view.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: RotatingAlertShowcase,
        },
        {
            id: 'flip-alert',
            name: 'Flip Alert',
            description: 'An alert that flips into view.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: FlipAlertShowcase,
        },
        {
            id: 'swipe-alert',
            name: 'Swipe Alert',
            description: 'An alert that can be dismissed by swiping.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: SwipeAlertShowcase,
        },
    ],

    // selects docs
    selects: [
        {
            id: 'simple-select',
            name: 'Simple Select',
            description: 'A basic select component.',
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
            Component: SimpleSelectShowcase,
        },
        {
            id: 'borderless-select',
            name: 'Borderless Select',
            description: 'A select component without a border.',
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
            Component: BorderlessSelectShowcase,
        },
        {
            id: 'rounded-select',
            name: 'Rounded Select',
            description: 'A select component with rounded corners.',
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
            Component: RoundedSelectShowcase,
        },
        {
            id: 'icon-select',
            name: 'Icon Select',
            description: 'A select component with icons.',
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
            Component: IconSelectShowcase,
        },
        {
            id: 'multi-select',
            name: 'Multi Select',
            description: 'A select component that allows multiple selections.',
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
            Component: MultiSelectShowcase,
        },
        {
            id: 'searchable-select',
            name: 'Searchable Select',
            description: 'A select component with search functionality.',
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
            Component: SearchableSelectShowcase,
        },
        {
            id: 'grouped-select',
            name: 'Grouped Select',
            description: 'A select component with grouped options.',
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
            Component: GroupedSelectShowcase,
        },
        {
            id: 'color-select',
            name: 'Color Select',
            description: 'A select component for choosing colors.',
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
            Component: ColorSelectShowcase,
        },
        {
            id: 'gradient-select',
            name: 'Gradient Select',
            description: 'A select component for choosing gradients.',
            dependencies: 'Framer Motion',
            installation: 'npm install framer-motion',
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
            Component: GradientSelectShowcase,
        },
        {
            id: 'neumorphic-select',
            name: 'Neumorphic Select',
            description: 'A select component with neumorphic design.',
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
            Component: NeumorphicSelectShowcase,
        },
        {
            id: 'glassmorphism-select',
            name: 'Glassmorphism Select',
            description: 'A select component with glassmorphism design.',
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
            Component: GlassmorphismSelectShowcase,
        },
        {
            id: 'minimal-select',
            name: 'Minimal Select',
            description: 'A minimalist select component.',
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
            Component: MinimalSelectShowcase,
        },
        {
            id: 'floating-label-select',
            name: 'Floating Label Select',
            description: 'A select component with a floating label.',
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
            Component: FloatingLabelSelectShowcase,
        },
        {
            id: 'animated-border-select',
            name: 'Animated Border Select',
            description: 'A select component with an animated border.',
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
            Component: AnimatedBorderSelectShowcase,
        },
        {
            id: 'fading-select',
            name: 'Fading Select',
            description: 'A select component with a fading effect.',
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
            Component: FadingSelectShowcase,
        },
        {
            id: 'scale-select',
            name: 'Scale Select',
            description: 'A select component with a scaling effect.',
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
            Component: ScaleSelectShowcase,
        },
        {
            id: 'slide-select',
            name: 'Slide Select',
            description: 'A select component with a sliding effect.',
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
            Component: SlideSelectShowcase,
        },
        {
            id: 'rotate-select',
            name: 'Rotate Select',
            description: 'A select component with a rotating effect.',
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
            Component: RotateSelectShowcase,
        },
        {
            id: 'outlined-select',
            name: 'Outlined Select',
            description: 'A select component with an outlined style.',
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
            Component: OutlinedSelectShowcase,
        },
        {
            id: 'underlined-select',
            name: 'Underlined Select',
            description: 'A select component with an underlined style.',
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
            Component: UnderlinedSelectShowcase,
        },
        {
            id: 'pill-select',
            name: 'Pill Select',
            description: 'A select component with a pill-shaped design.',
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
            Component: PillSelectShowcase,
        },
        {
            id: 'material-select',
            name: 'Material Select',
            description: 'A select component inspired by Material Design.',
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
            Component: MaterialSelectShowcase,
        },
        {
            id: 'icon-label-select',
            name: 'Icon Label Select',
            description: 'A select component with icons and labels.',
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
            Component: IconLabelSelectShowcase,
        },
        {
            id: 'tag-select',
            name: 'Tag Select',
            description: 'A multi-select component with tags.',
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
            Component: TagSelectShowcase,
        },
        {
            id: 'chip-select',
            name: 'Chip Select',
            description: 'A select component with chip-style options.',
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
            Component: ChipSelectShowcase,
        },
        {
            id: 'accordion-select',
            name: 'Accordion Select',
            description: 'A select component with an accordion-style dropdown.',
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
            Component: AccordionSelectShowcase,
        },
        {
            id: 'button-group-select',
            name: 'Button Group Select',
            description: 'A select component styled as a group of buttons.',
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
            Component: ButtonGroupSelectShowcase,
        },
        {
            id: 'segmented-control-select',
            name: 'Segmented Control Select',
            description: 'A select component styled as a segmented control.',
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
            Component: SegmentedControlSelectShowcase,
        },
        {
            id: 'tree-select',
            name: 'Tree Select',
            description: 'A select component with a tree-like structure for nested options.',
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
            Component: TreeSelectShowcase,
        },
        {
            id: 'combobox-select',
            name: 'Combobox Select',
            description: 'A select component with search functionality and custom option rendering.',
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
            Component: ComboboxSelectShowcase,
        },
        {
            id: 'async-select',
            name: 'Async Select',
            description: 'A select component that loads options asynchronously.',
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
            Component: AsyncSelectShowcase,
        },
        {
            id: 'virtualized-select',
            name: 'Virtualized Select',
            description: 'A select component with virtualized rendering for large option lists.',
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
            Component: VirtualizedSelectShowcase,
        },
        {
            id: 'creatable-select',
            name: 'Creatable Select',
            description: 'A select component that allows creating new options.',
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
            Component: CreatableSelectShowcase,
        },
    ],

    // switches docs
    switches: [
        {
            id: 'simple-switch',
            name: 'Simple Switch',
            description: 'A basic switch component with smooth transitions.',
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
            Component: SimpleSwitchShowcase,
        },
        {
            id: 'animated-switch',
            name: 'Animated Switch',
            description: 'A switch component with smooth animations.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: AnimatedSwitchShowcase,
        },
        {
            id: 'icon-switch',
            name: 'Icon Switch',
            description: 'A switch component with icons.',
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
            Component: IconSwitchShowcase,
        },
        {
            id: 'card-switch',
            name: 'Card Switch',
            description: 'A switch component styled as a card.',
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
            Component: CardSwitchShowcase,
        },
        {
            id: 'square-switch',
            name: 'Square Switch',
            description: 'A square-shaped switch component.',
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
            Component: SquareSwitchShowcase,
        },
        {
            id: 'toggle-switch',
            name: 'Toggle Switch',
            description: 'A simple toggle switch component.',
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
            Component: ToggleSwitchShowcase,
        },
        {
            id: 'day-night-switch',
            name: 'Day Night Switch',
            description: 'A switch component representing day and night.',
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
            Component: DayNightSwitchShowcase,
        },
        {
            id: 'volume-switch',
            name: 'Volume Switch',
            description: 'A switch component for controlling volume.',
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
            Component: VolumeSwitchShowcase,
        },
        {
            id: 'wifi-switch',
            name: 'Wifi Switch',
            description: 'A switch component representing Wifi connection.',
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
            Component: WifiSwitchShowcase,
        },
        {
            id: 'slider-switch',
            name: 'Slider Switch',
            description: 'A switch component with a slider.',
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
            Component: SliderSwitchShowcase,
        },
        {
            id: 'gradient-switch',
            name: 'Gradient Switch',
            description: 'A switch component with a gradient background.',
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
            Component: GradientSwitchShowcase,
        },
        {
            id: 'animated-icon-switch',
            name: 'Animated Icon Switch',
            description: 'A switch component with animated icons.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: AnimatedIconSwitchShowcase,
        },
        {
            id: 'pulsing-switch',
            name: 'Pulsing Switch',
            description: 'A switch component with a pulsing animation.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: PulsingSwitchShowcase,
        },
        {
            id: 'ripple-switch',
            name: 'Ripple Switch',
            description: 'A switch with a ripple effect animation.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: RippleSwitchShowcase,
        },
    ],

    // checkboxes docs
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
        },
    ],

};
