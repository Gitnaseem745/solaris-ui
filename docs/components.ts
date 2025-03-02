// Buttons
import { DefaultButton, DeleteButton, FloatingActionButton, MotionBlade, MotionDefault, MotionDelete, MotionDownload, MotionHelp, MotionLoading, MotionLoading2, MotionLogin, MotionMail, MotionScale, MotionSend, MotionShimmer, MotionShutter, MotionSpinner, MotionUpload, SocialButton, MailButton, UnderlineButton, } from '../components/ui/buttons/buttons';


// Cards
import { ShowcaseAddExtension, ShowcaseBentoLogin, ShowcaseCategoryCard2, ShowcaseConnectCard, ShowcaseMinJobCard, ShowcaseMinShareCard, ShowcaseOrderStatusCard, ShowcasePasswordResetCard, ShowcasePremiumCard, ShowcaseProductCard, ShowcaseProfPricing, ShowcaseSuccessCard } from '@/components/ui/cards/cards';

// Alerts
import { BannerAlertShowcase, BouncingAlertShowcase, ColorChangingAlertShowcase, ConfirmationAlertShowcase, CountdownAlertShowcase, ErrorAlertShowcase, ExpandingAlertShowcase, FadingAlertShowcase, FlipAlertShowcase, FloatingAlertShowcase, InfoAlertShowcase, ProgressAlertShowcase, PulsatingAlertShowcase, RotatingAlertShowcase, ShakingAlertShowcase, SlideInAlertShowcase, StickyAlertShowcase, SuccessAlertShowcase, SwipeAlertShowcase, ToastAlertShowcase, TypingAlertShowcase, WarningAlertShowcase } from "../components/ui/alerts/alert-showcases";


// Selects
import { AsyncSelectShowcase, ButtonGroupSelectShowcase, ColorSelectShowcase, ComboboxSelectShowcase, CreatableSelectShowcase, GroupedSelectShowcase, IconSelectShowcase, MaterialSelectShowcase, MinimalSelectShowcase, MultiSelectShowcase, RotateSelectShowcase, RoundedSelectShowcase, SearchableSelectShowcase, SegmentedControlSelectShowcase, SimpleSelectShowcase, SlideSelectShowcase, TagSelectShowcase, TreeSelectShowcase, } from "../components/ui/selects/selectShowcase";


// Switches
import { AnimatedIconSwitchShowcase, AnimatedSwitchShowcase, DayNightSwitchShowcase, GradientSwitchShowcase, IconSwitchShowcase, PulsingSwitchShowcase, RippleSwitchShowcase, SimpleSwitchShowcase, SquareSwitchShowcase, ToggleSwitchShowcase, VolumeSwitchShowcase, WifiSwitchShowcase } from "../components/ui/switches/switches-showcase";


// Checkboxes
import { ColorPickerCheckboxShowcase, IconCheckboxShowcase, OutlineCheckboxShowcase, SizePickerCheckboxShowcase, SquareCheckboxShowcase, ToggleCheckboxShowcase } from "../components/ui/checkboxes/checkbox-showcase";

// Interactive Blocks
import { SocialTagShowcase } from '@/components/ui/interactive-blocks/interactive-blocks-showcase';

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
            id: 'motion-default-button',
            name: 'Motion Default',
            description: 'This is a Motion button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: MotionDefault
        },
        {
            id: 'floating-action-button',
            name: 'Floating Action',
            description: 'A Floating Action Button with smooth animations and dual labels.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: FloatingActionButton
        },
        {
            id: 'motion-delete-button',
            name: 'Motion Delete',
            description: 'A motion-enabled delete button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: MotionDelete
        }
        ,
        {
            id: 'motion-download-button',
            name: 'Motion Download',
            description: 'A motion-enabled download button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: MotionDownload
        },
        {
            id: 'motion-email-button',
            name: 'Motion Mail',
            description: 'A motion-enabled email button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: MotionMail
        },
        {
            id: 'motion-help-button',
            name: 'Motion Help',
            description: 'A motion-enabled help button with hover animations.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: MotionHelp
        },
        {
            id: 'motion-shutter-button',
            name: 'Motion Shutter',
            description: 'A motion-enabled shutter button with dynamic hover effects.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: MotionShutter
        },
        {
            id: 'motion-login-button',
            name: 'Motion Login',
            description: 'A visually appealing login button with hover effects using Framer Motion.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: MotionLogin
        },
        {
            id: 'motion-send-button',
            name: 'Motion Send',
            description: 'An animated send button with hover and click effects.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: MotionSend
        },
        {
            id: 'motion-shimmer-button',
            name: 'Motion Shimmer',
            description: 'A button with a shimmering effect on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: MotionShimmer
        },
        {
            id: 'motion-upload-button',
            name: 'Motion Upload',
            description: 'An animated upload button with hover effects.',
            dependencies: 'framer-motion, react-icons',
            installation: 'npm install framer-motion react-icons',
            Component: MotionUpload
        },
        {
            id: 'motion-scale-button',
            name: 'Motion Scale',
            description: 'A button with a scale animation on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: MotionScale
        },
        {
            id: 'social-button',
            name: 'Social Button',
            description: 'A basic social login button with an icon.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            Component: SocialButton
        },
        {
            id: 'delete-button',
            name: 'Delete Button',
            description: 'A basic delete button with an icon.',
            dependencies: 'react-icons/fa',
            installation: 'npm install react-icons',
            Component: DeleteButton
        },
        {
            id: 'motion-blade-button',
            name: 'Motion Blade',
            description: 'A button with a dynamic blade animation on hover.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: MotionBlade
        },
        {
            id: 'motion-spinner-button',
            name: 'Motion Spinner',
            description: 'A loading button with a circular spinner animation.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: MotionSpinner,
        },
        {
            id: 'motion-loading-button',
            name: 'Motion Loading',
            description: 'A button with a loading animation on click.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: MotionLoading
        },
        {
            id: 'motion-loading-button-2',
            name: 'Motion Loading 2',
            description: 'A button with a loading animation and secondary label on click.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: MotionLoading2
        },
        {
            id: 'mail-button',
            name: 'Mail Button',
            description: 'A button with a mail icon.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            Component: MailButton
        },
        {
            id: 'underline-button',
            name: 'Underline Button',
            description: 'A button with an underline effect on hover.',
            Component: UnderlineButton
        },
    ],

    // cards docs
    cards: [
        {
            id: 'ecom-product-card',
            name: 'Product Card',
            description: 'A card component to showcase product details, including images, title, rating, reviews, and price.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            props: [
                {
                    name: 'images',
                    type: 'string[]',
                    default: '[]',
                    description: 'An array of image URLs for the product.'
                },
                {
                    name: 'title',
                    type: 'string',
                    default: 'undefined',
                    description: 'The title or name of the product.'
                },
                {
                    name: 'rating',
                    type: 'number',
                    default: '0',
                    description: 'The product’s rating on a scale of 0 to 5.'
                },
                {
                    name: 'reviews',
                    type: 'number',
                    default: '0',
                    description: 'The number of reviews the product has received.'
                },
                {
                    name: 'price',
                    type: 'number',
                    default: '0',
                    description: 'The price of the product in USD.'
                }
            ],
            Component: ShowcaseProductCard
        },
        {
            id: 'min-share-card',
            name: 'Min Share Card',
            description: 'A minimal share card component to share links on social media or copy a direct link.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            props: [
                {
                    name: 'onClose',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback function triggered when the close button is clicked.'
                },
                {
                    name: 'onCopy',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback function triggered when the copy link button is clicked.'
                },
                {
                    name: 'title',
                    type: 'string',
                    default: 'Share On Social Media',
                    description: 'Title displayed at the top of the card.'
                },
                {
                    name: 'subtitle',
                    type: 'string',
                    default: 'Share link via',
                    description: 'Subtitle displayed below the title.'
                }
            ],
            Component: ShowcaseMinShareCard
        },
        {
            id: 'professional-pricing-card',
            name: 'Professional Pricing Plan',
            description: 'A pricing plan component that displays the features, pricing, and a call-to-action button for different subscription types, such as basic or popular plans.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            props: [
                {
                    name: 'type',
                    type: '\'basic\' | \'popular\'',
                    default: 'basic',
                    description: 'The type of the pricing plan. "basic" for a standard plan or "popular" for a highlighted plan.'
                },
                {
                    name: 'title',
                    type: 'string',
                    default: 'Basic Plan',
                    description: 'The title of the pricing plan (e.g., "Basic Plan").'
                },
                {
                    name: 'label',
                    type: 'string',
                    default: 'Starter',
                    description: 'The label of the pricing plan, such as "Starter" or "Premium".'
                },
                {
                    name: 'price',
                    type: 'number',
                    default: "19.99",
                    description: 'The price of the plan, displayed as a number with currency formatting.'
                },
                {
                    name: 'features',
                    type: 'ProfPricingFeature[]',
                    description: 'An array of feature objects that describe the plan\'s features, each containing a "text" field.'
                },
                {
                    name: 'onStart',
                    type: '() => void',
                    description: 'A callback function that is triggered when the "Start now" button is clicked.'
                },
                {
                    name: 'className',
                    type: 'string',
                    default: '',
                    description: 'Additional custom CSS classes to apply to the component.'
                }
            ],
            Component: ShowcaseProfPricing
        },
        {
            id: 'reset-pass',
            name: 'Password Reset Card',
            description: 'A form card for entering a 6-digit code to reset a password, with error handling, loading state, and additional actions such as resend code, help, and feedback.',
            props: [
                {
                    name: 'onSubmit',
                    type: '(code: string) => void',
                    description: 'A callback function that handles the form submission when the 6-digit code is entered and submitted.'
                },
                {
                    name: 'onResendCode',
                    type: '() => void',
                    description: 'A callback function that handles resending the code when the user clicks on the "Resend code" link.'
                },
                {
                    name: 'onHelp',
                    type: '() => void',
                    description: 'A callback function that triggers when the user clicks on the "Need help?" button.'
                },
                {
                    name: 'onFeedback',
                    type: '() => void',
                    description: 'A callback function that triggers when the user clicks on the "Send feedback" button.'
                },
                {
                    name: 'className',
                    type: 'string',
                    default: '',
                    description: 'Additional custom CSS classes to apply to the card component.'
                },
                {
                    name: 'style',
                    type: 'React.CSSProperties',
                    default: '{}',
                    description: 'Custom inline styles to apply to the card component.'
                }
            ],
            Component: ShowcasePasswordResetCard
        },
        {
            id: 'ecom-order-status',
            name: 'Order Status Card',
            description: 'A card component displaying order status information, including courier details and package tracking.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            props: [
                {
                    name: 'courierName',
                    type: 'string',
                    default: 'undefined',
                    description: 'The name of the courier service.'
                },
                {
                    name: 'courierImage',
                    type: 'string',
                    default: 'undefined',
                    description: 'URL of the courier’s image or logo.'
                },
                {
                    name: 'packageId',
                    type: 'string',
                    default: 'undefined',
                    description: 'The unique identifier for the package.'
                },
                {
                    name: 'warehouseLocation',
                    type: 'string',
                    default: 'undefined',
                    description: 'The current warehouse location of the package.'
                },
                {
                    name: 'deliveryAddress',
                    type: 'string',
                    default: 'undefined',
                    description: 'The delivery address for the package.'
                },
                {
                    name: 'onMessage',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback triggered when the message button is clicked.'
                }
            ],
            Component: ShowcaseOrderStatusCard
        },
        {
            id: 'ecom-product-category',
            name: 'Category Card',
            description: 'A card component displaying a product category with an image, title, description, and product count.',
            props: [
                {
                    name: 'title',
                    type: 'string',
                    default: 'undefined',
                    description: 'The title of the product category.'
                },
                {
                    name: 'description',
                    type: 'string',
                    default: 'undefined',
                    description: 'A brief description of the product category.'
                },
                {
                    name: 'productCount',
                    type: 'number',
                    default: 'undefined',
                    description: 'The number of products in the category.'
                },
                {
                    name: 'image',
                    type: 'string',
                    default: 'undefined',
                    description: 'URL of the image representing the product category.'
                }
            ],
            Component: ShowcaseCategoryCard2
        },
        {
            id: 'ecom-success-card',
            name: 'Success Card',
            description: 'A card component to display success messages with primary and secondary actions.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            props: [
                {
                    name: 'title',
                    type: 'string',
                    default: 'undefined',
                    description: 'The title of the success card.'
                },
                {
                    name: 'message',
                    type: 'string',
                    default: 'undefined',
                    description: 'The message or description displayed in the card.'
                },
                {
                    name: 'primaryAction',
                    type: '{ label: string; onClick?: () => void; }',
                    default: 'undefined',
                    description: 'Primary action details, including label and optional onClick handler.'
                },
                {
                    name: 'secondaryAction',
                    type: '{ label: string; onClick?: () => void; }',
                    default: 'undefined',
                    description: 'Secondary action details, including label and optional onClick handler.'
                }
            ],
            Component: ShowcaseSuccessCard
        },
        {
            id: 'figma-connect',
            name: 'Connect Card',
            description: 'A card component to facilitate app integrations, with source and target app icons, description, and action buttons.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            props: [
                {
                    name: 'onClose',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback function triggered when the close button is clicked.'
                },
                {
                    name: 'onCancel',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback function triggered when the cancel button is clicked.'
                },
                {
                    name: 'onIntegrate',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback function triggered when the integrate button is clicked.'
                },
                {
                    name: 'title',
                    type: 'string',
                    default: 'undefined',
                    description: 'Title displayed in the card.'
                },
                {
                    name: 'description',
                    type: 'string',
                    default: 'undefined',
                    description: 'Description displayed below the title.'
                },
                {
                    name: 'sourceApp',
                    type: '{ name: string; Icon: ElementType; }',
                    default: 'undefined',
                    description: 'Details of the source app, including name and icon.'
                },
                {
                    name: 'targetApp',
                    type: '{ name: string; Icon: ElementType; }',
                    default: 'undefined',
                    description: 'Details of the target app, including name and icon.'
                }
            ],
            Component: ShowcaseConnectCard
        },
        {
            id: 'minimal-job-card',
            name: 'Min Job Card',
            description: 'A minimal job card component for displaying job details and providing an apply action.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            props: [
                {
                    name: 'company',
                    type: '{ name?: string; logo?: string; }',
                    default: `{ name: 'Meta', logo: '/placeholder.svg?height=32&width=32' }`,
                    description: 'Details about the company, including its name and logo.'
                },
                {
                    name: 'title',
                    type: 'string',
                    default: 'Software Engineer',
                    description: 'Job title displayed on the card.'
                },
                {
                    name: 'description',
                    type: 'string',
                    default: 'Develop innovative software solutions that drive impactful, high-performance experiences. Work with cutting-edge technologies to create seamless user interfaces and robust backend systems.',
                    description: 'A brief description of the job.'
                },
                {
                    name: 'tags',
                    type: 'string[]',
                    default: "['Full-Time', 'Remote', 'Mid-Senior Level']",
                    description: 'Array of tags that categorize the job.'
                },
                {
                    name: 'onApply',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback function triggered when the apply button is clicked.'
                },
                {
                    name: 'className',
                    type: 'string',
                    default: '""',
                    description: 'Additional CSS classes for customizing the card appearance.'
                }
            ],
            Component: ShowcaseMinJobCard
        },
        {
            id: 'premium-card',
            name: 'Premium Card',
            description: 'A premium card component that displays images with hover effects, category information, and a button linking to a specified location.',
            props: [
                {
                    name: 'imgOne',
                    type: 'string',
                    description: 'URL of the first image to display before hover.'
                },
                {
                    name: 'imgTwo',
                    type: 'string',
                    description: 'URL of the second image that appears on hover.'
                },
                {
                    name: 'categoryTitle',
                    type: 'string',
                    description: 'Title of the category that links to the specified category link.'
                },
                {
                    name: 'categoryLink',
                    type: 'string',
                    default: '/',
                    description: 'Link to navigate when the category title is clicked (default is the home page).'
                },
                {
                    name: 'buttonText',
                    type: 'string',
                    description: 'Text displayed on the button.'
                },
                {
                    name: 'buttonLink',
                    type: 'string',
                    description: 'Link to navigate when the button is clicked.'
                }
            ],
            Component: ShowcasePremiumCard
        },
        {
            id: 'add-extension',
            name: 'Add Extension',
            description: 'This component allows users to add an extension with detailed information and an icon.',
            props: [
                { name: 'Icon', type: 'ElementType', default: 'undefined', description: 'The icon to display for the extension.' },
                { name: 'title', type: 'string', default: 'undefined', description: 'The title of the extension.' },
                { name: 'description', type: 'string', default: 'undefined', description: 'A brief description of the extension.' },
                { name: 'viewCount', type: 'number', default: 'undefined', description: 'The number of views for the extension.' },
                {
                    name: 'author',
                    type: '{ name: string; avatar: string; }',
                    default: 'undefined',
                    description: 'An object containing the author\'s name and avatar.'
                },
                { name: 'onAdd', type: '() => void', default: 'undefined', description: 'Callback triggered when the "Add" button is clicked.' },
                { name: 'className', type: 'string', default: '""', description: 'Optional class names for additional styling.' }
            ],
            Component: ShowcaseAddExtension
        },
        {
            id: 'bento-login',
            name: 'Bento Login',
            description: 'A login form component with email, password, Google sign-in, and sign-up options.',
            dependencies: 'react-icons',
            installation: 'npm install react-icons',
            props: [
                {
                    name: 'onSubmit',
                    type: '(email: string, password: string) => void',
                    default: 'undefined',
                    description: 'Callback triggered when the form is submitted with email and password.'
                },
                {
                    name: 'onGoogleSignIn',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback triggered when the "Sign in with Google" button is clicked.'
                },
                {
                    name: 'onSignUp',
                    type: '() => void',
                    default: 'undefined',
                    description: 'Callback triggered when the "Sign up" button is clicked.'
                },
                {
                    name: 'title',
                    type: 'string',
                    default: '"Bento Login"',
                    description: 'The title of the login form displayed at the top.'
                },
                {
                    name: 'className',
                    type: 'string',
                    default: '""',
                    description: 'Optional class names for additional styling.'
                }
            ],
            Component: ShowcaseBentoLogin
        },
    ],

    // interactive blocks
    "interactive-blocks": [
        {
            id: 'social-tag',
            name: 'Social Tag',
            description: 'A interactive block component with an title and id.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            props: [
                {
                    name: 'title',
                    type: 'string',
                    default: '-',
                    description: 'The title to display in the left column.',
                },
                {
                    name: 'id',
                    type: 'string',
                    default: '-',
                    description: 'The id to display in the the right column.',
                },
                {
                    name: 'link',
                    type: 'string',
                    default: '/',
                    description: 'The navigation link.',
                },
            ],
            Component: SocialTagShowcase,
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
            Component: ErrorAlertShowcase,
        },
        {
            id: 'warning-alert',
            name: 'Warning Alert',
            description: 'A warning alert component with an icon and message.',
            dependencies: 'react-icons, framer-motion',
            installation: 'npm install react-icons framer-motion',
            Component: WarningAlertShowcase,
        },
        {
            id: 'info-alert',
            name: 'Info Alert',
            description: 'An informational alert component with an icon and message.',
            dependencies: 'react-icons, framer-motion',
            installation: 'npm install react-icons framer-motion',
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
            Component: BannerAlertShowcase,
        },
        {
            id: 'floating-alert',
            name: 'Floating Alert',
            description: 'A floating alert that appears in the corner of the screen.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: FloatingAlertShowcase,
        },
        {
            id: 'slide-in-alert',
            name: 'Slide-In Alert',
            description: 'An alert that slides in from the side of the screen.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: StickyAlertShowcase,
        },
        {
            id: 'pulsating-alert',
            name: 'Pulsating Alert',
            description: 'An alert with a pulsating animation to grab attention.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: PulsatingAlertShowcase,
        },
        {
            id: 'bouncing-alert',
            name: 'Bouncing Alert',
            description: 'An alert that bounces into view.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: BouncingAlertShowcase,
        },
        {
            id: 'shaking-alert',
            name: 'Shaking Alert',
            description: 'An alert that shakes to indicate urgency.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            Component: RotatingAlertShowcase,
        },
        {
            id: 'flip-alert',
            name: 'Flip Alert',
            description: 'An alert that flips into view.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: FlipAlertShowcase,
        },
        {
            id: 'swipe-alert',
            name: 'Swipe Alert',
            description: 'An alert that can be dismissed by swiping.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
            id: 'rounded-select',
            name: 'Rounded Select',
            description: 'A select component with rounded corners.',
            Component: RoundedSelectShowcase,
        },
        {
            id: 'icon-select',
            name: 'Icon Select',
            description: 'A select component with icons.',
            Component: IconSelectShowcase,
        },
        {
            id: 'multi-select',
            name: 'Multi Select',
            description: 'A select component that allows multiple selections.',
            Component: MultiSelectShowcase,
        },
        {
            id: 'searchable-select',
            name: 'Searchable Select',
            description: 'A select component with search functionality.',
            Component: SearchableSelectShowcase,
        },
        {
            id: 'grouped-select',
            name: 'Grouped Select',
            description: 'A select component with grouped options.',
            Component: GroupedSelectShowcase,
        },
        {
            id: 'color-select',
            name: 'Color Select',
            description: 'A select component for choosing colors.',
            Component: ColorSelectShowcase,
        },
        {
            id: 'minimal-select',
            name: 'Minimal Select',
            description: 'A minimalist select component.',
            Component: MinimalSelectShowcase,
        },
        {
            id: 'slide-select',
            name: 'Slide Select',
            description: 'A select component with a sliding effect.',
            Component: SlideSelectShowcase,
        },
        {
            id: 'rotate-select',
            name: 'Rotate Select',
            description: 'A select component with a rotating effect.',
            Component: RotateSelectShowcase,
        },
        {
            id: 'material-select',
            name: 'Material Select',
            description: 'A select component inspired by Material Design.',
            Component: MaterialSelectShowcase,
        },
        {
            id: 'tag-select',
            name: 'Tag Select',
            description: 'A multi-select component with tags.',
            Component: TagSelectShowcase,
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
            Component: AnimatedSwitchShowcase,
        },
        {
            id: 'icon-switch',
            name: 'Icon Switch',
            description: 'A switch component with icons.',
            Component: IconSwitchShowcase,
        },
        {
            id: 'square-switch',
            name: 'Square Switch',
            description: 'A square-shaped switch component.',
            Component: SquareSwitchShowcase,
        },
        {
            id: 'toggle-switch',
            name: 'Toggle Switch',
            description: 'A simple toggle switch component.',
            Component: ToggleSwitchShowcase,
        },
        {
            id: 'day-night-switch',
            name: 'Day Night Switch',
            description: 'A switch component representing day and night.',
            Component: DayNightSwitchShowcase,
        },
        {
            id: 'volume-switch',
            name: 'Volume Switch',
            description: 'A switch component for controlling volume.',
            Component: VolumeSwitchShowcase,
        },
        {
            id: 'wifi-switch',
            name: 'Wifi Switch',
            description: 'A switch component representing Wifi connection.',
            Component: WifiSwitchShowcase,
        },
        {
            id: 'gradient-switch',
            name: 'Gradient Switch',
            description: 'A switch component with a gradient background.',
            Component: GradientSwitchShowcase,
        },
        {
            id: 'animated-icon-switch',
            name: 'Animated Icon Switch',
            description: 'A switch component with animated icons.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: AnimatedIconSwitchShowcase,
        },
        {
            id: 'pulsing-switch',
            name: 'Pulsing Switch',
            description: 'A switch component with a pulsing animation.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
            Component: PulsingSwitchShowcase,
        },
        {
            id: 'ripple-switch',
            name: 'Ripple Switch',
            description: 'A switch with a ripple effect animation.',
            dependencies: 'framer-motion',
            installation: 'npm install framer-motion',
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
        },
        {
            id: 'toggle-checkbox',
            name: 'Toggle Checkbox',
            description: 'A checkbox styled as a toggle switch.',
            Component: ToggleCheckboxShowcase,
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
            id: 'outline-checkbox',
            name: 'Outline Checkbox',
            description: 'A checkbox with an outline style.',
            Component: OutlineCheckboxShowcase,
        },
        {
            id: 'size-picker-checkbox',
            name: 'Size Picker Checkbox',
            description: 'A checkbox for selecting sizes.',
            Component: SizePickerCheckboxShowcase,
        },
    ],

};
