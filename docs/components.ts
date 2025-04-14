import {
    AdvanceToastDemo,
    AvatarDemo,
    BadgeDemo,
    BannerAlertDemo,
    BeaconDemo,
    ButtonDemo,
    CheckboxDemo,
    DropDownDemo,
    FAQListDemo,
    FeatureCardDemo,
    FloatNavbarDemo,
    FooterDemo,
    GridLayoutDemo,
    ModalDemo,
    NavbarDemo,
    NotificationDemo,
    SidebarDemo,
    SliderDemo,
    SocialTagListDemo,
    SwitchDemo,
    TimelineDemo,
    ToastDemo,
    TopButtonDemo,
    TypographyDemo,
    VideoCardDemo,
    CodePreviewDemo,
} from '@/demos';
import AvatarGroupDemo from '@/demos/avatar-group';
import InputDemo from '@/demos/input';


export const components: ComponentType[] = [
    {
        id: 'button',
        name: 'Button',
        description: 'This is a default button component.',
        props: [
            {
                name: 'Button',
                props: [
                    {
                        name: 'variant',
                        type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
                        required: false,
                        default: '"default"',
                        description: 'The variant of the button, which determines its style.',
                    },
                    {
                        name: 'size',
                        type: '"default" | "sm" | "lg" | "icon"',
                        required: false,
                        default: '"default"',
                        description: 'The size of the button, which determines its dimensions.',
                    },
                    {
                        name: 'children',
                        type: 'React.ReactNode',
                        required: true,
                        default: 'undefined',
                        description: 'The content to be displayed inside the button.',
                    },
                    {
                        name: 'className',
                        type: 'string',
                        required: false,
                        default: '""',
                        description: 'Additional class names for custom styling.',
                    },
                    {
                        name: 'onClick',
                        type: '() => void',
                        required: false,
                        default: 'undefined',
                        description: 'Callback function triggered when the button is clicked.',
                    },
                    {
                        name: 'disabled',
                        type: 'boolean',
                        required: false,
                        default: 'false',
                        description: 'Disables the button, preventing user interaction.',
                    },
                    {
                        name: 'type',
                        type: '"button" | "submit" | "reset"',
                        required: false,
                        default: '"button"',
                        description: 'Specifies the type of the button.',
                    },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge",
        Component: ButtonDemo,
    },
    {
        id: 'banner-alert',
        name: 'Banner Alert',
        description: 'This is a Banner Alert component.',
        props: [
            {
                name: 'BannerAlert',
                props: [
                    { name: 'isOpen', type: 'boolean', required: true, default: 'false', description: 'Controls whether the alert is visible.' },
                    { name: 'onClose', type: '() => void', required: false, default: 'undefined', description: 'Callback triggered when the alert is closed.' },
                    { name: 'title', type: 'string', required: false, default: 'undefined', description: 'Title of the alert.' },
                    { name: 'message', type: 'string', required: false, default: 'undefined', description: 'Message content of the alert.' },
                    { name: 'variant', type: '"success" | "warning" | "error" | "info"', required: false, default: '"info"', description: 'The variant of the alert.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge",
        Component: BannerAlertDemo,
    },
    {
        id: 'faq-list',
        name: 'FAQ List',
        description: 'This is a FAQ List component.',
        props: [
            {
                name: 'FAQList',
                props: [
                    { name: 'children', type: 'React.ReactElement[]', required: true, default: 'undefined', description: 'The FAQItem components to display.' },
                ],
            },
            {
                name: 'FAQItem',
                props: [
                    { name: 'question', type: 'string', required: true, default: 'undefined', description: 'The question to display.' },
                    { name: 'answer', type: 'string', required: true, default: 'undefined', description: 'The answer to display.' },
                    { name: 'index', type: 'number', required: false, default: 'undefined', description: 'The index of the item in the list.' },
                    { name: 'isOpen', type: 'boolean', required: false, default: 'false', description: 'Whether the item is open or closed.' },
                    { name: 'onToggle', type: '() => void', required: false, default: 'undefined', description: 'Function to toggle the item\'s open state.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge framer-motion react-icons",
        Component: FAQListDemo,
    },
    {
        id: 'feature-card',
        name: 'Feature Card',
        description: 'This is a Feature Card component.',
        props: [
            {
                name: 'FeatureCard',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The child elements to be rendered inside the card.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'FeatureCardHeader',
                props: [
                    { name: 'heading', type: 'string', required: true, default: 'undefined', description: 'The title of the feature.' },
                    { name: 'text', type: 'string', required: true, default: 'undefined', description: 'The description of the feature.' },
                    { name: 'hovered', type: 'boolean', required: false, default: 'false', description: 'Indicates if the card is hovered.' },
                ],
            },
            {
                name: 'FeatureCardMedia',
                props: [
                    { name: 'img', type: 'string', required: true, default: 'undefined', description: 'The source of the image.' },
                    { name: 'heading', type: 'string', required: true, default: 'undefined', description: 'The title of the feature.' },
                    { name: 'mockupSize', type: 'string', required: true, default: 'undefined', description: 'The size class for the mockup image.' },
                    { name: 'mockupPosition', type: 'string', required: true, default: 'undefined', description: 'The position class for the mockup image.' },
                    { name: 'hovered', type: 'boolean', required: false, default: 'false', description: 'Indicates if the card is hovered.' },
                ],
            },
            {
                name: 'FeatureCardVideo',
                props: [
                    { name: 'video', type: 'string', required: true, default: 'undefined', description: 'The source of the video.' },
                    { name: 'hovered', type: 'boolean', required: false, default: 'false', description: 'Indicates if the card is hovered.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge framer-motion",
        Component: FeatureCardDemo,
    },
    {
        id: 'beacon',
        name: 'Beacon',
        description: 'This is a Beacon component.',
        props: [
            {
                name: 'Beacon',
                props: [
                    { name: 'url', type: 'string', required: true, default: 'undefined', description: 'The URL to navigate to when the beacon is clicked.' },
                    { name: 'icon', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The icon to display inside the beacon.' },
                    { name: 'text', type: 'string', required: true, default: 'undefined', description: 'The text to display inside the beacon.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Optional additional class names for styling.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge react-icons",
        Component: BeaconDemo,
    },
    {
        id: 'drop-down',
        name: 'Drop Down',
        description: 'This is a Drop Down component.',
        props: [
            {
                name: 'DropdownMenu',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The dropdown menu content.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuTrigger',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The trigger element for the dropdown.' },
                    { name: 'onClick', type: '() => void', required: false, default: 'undefined', description: 'Callback when the trigger is clicked.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuContent',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The dropdown menu items.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                    { name: 'align', type: '"left" | "right" | "center"', required: false, default: '"left"', description: 'Alignment of the dropdown content.' },
                    { name: 'isOpen', type: 'boolean', required: true, default: 'false', description: 'Controls whether the dropdown is open.' },
                    { name: 'onClose', type: '() => void', required: true, default: 'undefined', description: 'Callback to close the dropdown.' },
                ],
            },
            {
                name: 'DropdownMenuItem',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the dropdown item.' },
                    { name: 'onClick', type: '() => void', required: false, default: 'undefined', description: 'Callback when the item is clicked.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuCheckboxItem',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the checkbox item.' },
                    { name: 'onClick', type: '() => void', required: false, default: 'undefined', description: 'Callback when the checkbox is clicked.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuRadioItem',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the radio item.' },
                    { name: 'onClick', type: '() => void', required: false, default: 'undefined', description: 'Callback when the radio item is clicked.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuLabel',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The label content.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuSeparator',
                props: [
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuShortcut',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The shortcut content (e.g., keyboard shortcuts).' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuGroup',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The group content.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuPortal',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The portal content to render outside the DOM hierarchy.' },
                ],
            },
            {
                name: 'DropdownMenuSub',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The submenu content.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuSubContent',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The submenu content items.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                    { name: 'isOpen', type: 'boolean', required: true, default: 'false', description: 'Controls whether the submenu is open.' },
                    { name: 'onClose', type: '() => void', required: true, default: 'undefined', description: 'Callback to close the submenu.' },
                ],
            },
            {
                name: 'DropdownMenuSubTrigger',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The trigger element for the submenu.' },
                    { name: 'onClick', type: '() => void', required: false, default: 'undefined', description: 'Callback when the submenu trigger is clicked.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'DropdownMenuRadioGroup',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The radio group content.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge framer-motion",
        Component: DropDownDemo,
    },
    {
        id: 'grid-layout',
        name: 'Grid Layout',
        description: 'This is a Grid Layout component.',
        props: [
            {
                name: 'Grid',
                props: [
                    { name: 'children', type: 'ReactNode', required: true, default: 'undefined', description: 'The child elements to be rendered inside the grid.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                    { name: 'cols', type: 'string', required: false, default: '1 to 4', description: 'Number of columns in the grid.' },
                    { name: 'gap', type: 'string', required: false, default: '"gap-6"', description: 'Gap between grid items.' },
                ],
            },
            {
                name: 'GridCol',
                props: [
                    { name: 'children', type: 'ReactNode', required: true, default: 'undefined', description: 'The child elements to be rendered inside the grid column.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                    { name: 'colSpan', type: 'string', required: false, default: '"col-span-1"', description: 'Custom col-span if needed.' },
                    { name: 'variant', type: '"card" | "wide" | "full"', required: false, default: '"card"', description: 'Predefined variant options for col-span.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge",
        Component: GridLayoutDemo,
    },
    {
        id: 'social-tag-list',
        name: 'Social Tag List',
        description: 'This is a Social Tag List component.',
        props: [
            {
                name: 'SocialTagList',
                props: [
                    { name: 'children', type: 'React.ReactElement[]', required: true, default: 'undefined', description: 'The SocialTagItem components to display.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'SocialTagItem',
                props: [
                    { name: 'label', type: 'string', required: true, default: 'undefined', description: 'The label of the social tag.' },
                    { name: 'id', type: 'string', required: true, default: 'undefined', description: 'The ID of the social tag.' },
                    { name: 'link', type: 'string', required: true, default: 'undefined', description: 'The link to navigate to when the tag is clicked.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge framer-motion",
        Component: SocialTagListDemo,
    },
    {
        id: 'notification',
        name: 'Notification',
        description: 'This is a Notification component.',
        props: [
            {
                name: 'Notification',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the notification.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'Avatar',
                props: [
                    { name: 'imgUrl', type: 'string', required: true, default: 'undefined', description: 'The URL of the user\'s avatar image.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'Message',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The message content.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'ReplyButton',
                props: [
                    { name: 'onClick', type: '() => void', required: true, default: 'undefined', description: 'The callback to trigger when the reply button is clicked.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge",
        Component: NotificationDemo
    },
    {
        id: 'slider',
        name: 'Slider',
        description: 'This is a Slider component.',
        props: [
            {
                name: 'Slider',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the slider.' },
                    { name: 'width', type: 'string', required: false, default: '"200px"', description: 'The width of the slider.' },
                    { name: 'duration', type: 'number', required: false, default: '4000', description: 'Duration of each slide in milliseconds.' },
                    { name: 'toRight', type: 'boolean', required: false, default: 'false', description: 'Direction of the slide transition.' },
                    { name: 'pauseOnHover', type: 'boolean', required: false, default: 'false', description: 'Pause the slider on hover.' },
                ],
            },
            {
                name: 'Slide',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the slide.' },
                    { name: 'width', type: 'string', required: false, default: '"200px"', description: 'The width of the slide.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
        ],
        dependencies: 'clsx tailwind-merge',
        Component: SliderDemo,
    },
    {
        id: 'timeline',
        name: 'Timeline',
        description: 'This is a Timeline component.',
        props: [
            {
                name: 'Timeline',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the timeline.' },
                    { name: 'align', type: '"left" | "right" | "alternate"', required: false, default: '"left"', description: 'Alignment of the timeline.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'TimelineItem',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the timeline item.' },
                    { name: 'date', type: 'string', required: false, default: 'undefined', description: 'The date of the timeline item.' },
                    { name: 'icon', type: 'React.ReactNode', required: false, default: 'undefined', description: 'The icon to display in the timeline item.' },
                    { name: 'color', type: 'string', required: false, default: 'undefined', description: 'The background color of the timeline item.' },
                    { name: 'align', type: '"left" | "right"', required: false, default: '"left"', description: 'Alignment of the timeline item.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge framer-motion",
        Component: TimelineDemo,
    },
    {
        id: 'float-navbar',
        name: 'Float Navbar',
        description: 'This is a Float Navbar component.',
        props: [
            {
                name: 'FloatNav',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the navbar.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge framer-motion",
        Component: FloatNavbarDemo,
    },
    {
        id: 'toast',
        name: 'Toast',
        description: 'This is a Toast component.',
        props: [
            {
                name: 'Toast',
                props: [
                    { name: 'message', type: 'string', required: true, default: 'undefined', description: 'The message to display in the toast.' },
                    { name: 'isOpen', type: 'boolean', required: true, default: 'undefined', description: 'Whether the toast is open or not.' },
                    { name: 'onClose', type: '() => void', required: true, default: 'undefined', description: 'Function to call when the toast is closed.' },
                    { name: 'duration', type: 'number', required: false, default: '3000', description: 'Duration in milliseconds before the toast closes automatically.' },
                    { name: 'type', type: '"success" | "error" | "info" | "warning" | "default"', required: false, default: '"default"', description: 'Type of the toast (success, error, info, warning, default).' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge framer-motion",
        Component: ToastDemo,
    },
    {
        id: 'advance-toast',
        name: 'Advance Toast',
        description: 'This is an Advance Toast component.',
        props: [
            {
                name: 'Advance Toast',
                props: [
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the toast.' },
                    { name: 'isOpen', type: 'boolean', required: true, default: 'undefined', description: 'Whether the toast is open or not.' },
                    { name: 'onClose', type: '() => void', required: true, default: 'undefined', description: 'Function to call when the toast is closed.' },
                    { name: 'duration', type: 'number', required: false, default: '3000', description: 'Duration in milliseconds before the toast closes automatically.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for styling.' },
                ],
            },
        ],
        dependencies: "clsx tailwind-merge framer-motion",
        Component: AdvanceToastDemo,
    },
    {
        id: 'switch',
        name: 'Switch',
        description: 'This is a Switch component.',
        props: [
            {
                name: 'Switch',
                props: [
                    { name: 'id', type: 'string', required: true, default: 'undefined', description: 'The unique identifier for the switch.' },
                    { name: 'name', type: 'string', required: true, default: 'undefined', description: 'The name of the switch.' },
                    { name: 'checked', type: 'boolean', required: true, default: 'false', description: 'Whether the switch is checked or not.' },
                    { name: 'onChange', type: '(event) => void', required: true, default: 'undefined', description: 'Callback function triggered when the switch state changes.' },
                    { name: 'variant', type: '"circle" | "square"', required: false, default: '"circle"', description: 'The shape of the switch (circle or square).' },
                    { name: 'activeIcon', type: 'React.ReactNode', required: false, default: 'undefined', description: 'Icon to display when the switch is active.' },
                    { name: 'inactiveIcon', type: 'React.ReactNode', required: false, default: 'undefined', description: 'Icon to display when the switch is inactive.' },
                    { name: 'activeColor', type: 'string', required: false, default: '"bg-green-500"', description: 'Background color when the switch is active.' },
                    { name: 'inactiveColor', type: 'string', required: false, default: '"bg-gray-300"', description: 'Background color when the switch is inactive.' },
                    { name: 'className', type: 'string', required: false, default: '""', description: 'Additional class names for custom styling.' },
                ],
            },
        ],
        dependencies:"clsx tailwind-merge",
        Component : SwitchDemo,
    },
    {
        id: 'checkbox',
        name: 'Checkbox',
        description: 'This is a Checkbox component.',
        props: [
            {
                name: 'Checkbox',
                props: [
                    { name: 'id', type: 'string', required: true, default: 'undefined', description: 'The unique identifier for the checkbox.' },
                    { name: 'name', type: 'string', required: true, default: 'undefined', description: 'The name of the checkbox.' },
                    { name: 'checked', type: 'boolean', required: true, default: 'false', description: 'Whether the checkbox is checked or not.' },
                    { name: 'onChange', type: '(event) => void', required: true, default: 'undefined', description: 'Callback function triggered when the checkbox state changes.' },
                    { name: 'variant', type: '"circle" | "square"', required: false, default: '"circle"', description: 'The shape of the checkbox (circle or square).' },
                    { name: 'activeIcon', type: 'React.ReactNode', required: false, default: 'undefined', description: 'Icon to display when the checkbox is active.' },
                    { name: 'inactiveIcon', type: 'React.ReactNode', required: false, default: 'undefined', description: 'Icon to display when the checkbox is inactive.' },
                    { name: 'activeColor', type: 'string', required: false, default: '"bg-green-500"', description: 'Background color when the checkbox is active.' },
                    { name: 'inactiveColor', type: 'string', required: false, default: '"bg-gray-300"', description: 'Background color when the checkbox is inactive.' },
                    { name: 'className', type: 'string', required: false, default: '"bg-gray-300"', description:'Additional class names for custom styling.'},
                ],
            },
        ],
        dependencies: "clsx tailwind-merge react-icons",
        Component: CheckboxDemo,
    },
    {
        id: 'typography',
        name: 'Typography',
        description: 'This is a Typography component.',
        props: [
            {
                name: 'Heading',
                props: [
                    { name: 'level', type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"', required: false, default: '"h1"', description: 'The heading level.' },
                    { name: 'align', type: '"left" | "center" | "right"', required: false, default: '"left"', description: 'Text alignment.' },
                    { name: 'weight', type: '"light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"', required: false, default: '"bold"', description: 'Font weight.' },
                    { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the heading.' },
                    { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling.' },
                ],
            },
            {
                name: 'Text',
                props: [
                    { name: 'size', type: '"xs" | "sm" | "base" | "lg" | "xl"', required: false, default: '"base"', description:'Font size variant.' },
                    { name: 'align', type: '"left" | "center" | "right" | "justify"', required:false, default:'"left"', description:'Text alignment.'},
                    { name:'variant', type:'"default" | "muted" | "accent" | "destructive"', required:false, default:'"default"', description:'Text style variant.'},
                    { name:'weight', type:'"light" | "normal" | "medium" | "semibold" | "bold"', required:false, default:'"normal"', description:'Font weight variant.'},
                    { name:'leading' , type:'"none" | "tight" | "snug" | "normal" | "relaxed" | "loose"', required:false, default:'"normal"', description:'Line height variant.'},
                    { name:'children', type:'React.ReactNode', required:true, default:'undefined', description:'The content of the text.'},
                    { name:'className', type:'string', required:false, default:'undefined', description:'Additional class names for styling.'},
                ],
            },
        ],
        dependencies:"clsx tailwind-merge class-variance-authority",
        Component : TypographyDemo,
    },
    {
        id: 'modal',
        name: 'Modal',
        description: 'A customizable modal component with support for headers, footers, and animations.',
        props: [
          {
            name: 'Modal',
            props: [
              { name: 'isOpen', type: 'boolean', required: true, default: 'false', description: 'Controls the visibility of the modal.' },
              { name: 'onClose', type: '() => void', required: true, default: 'undefined', description: 'Callback function triggered when the modal is closed.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the modal.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the modal container.' },
              { name: 'overlayClassName', type: 'string', required: false, default: 'undefined', description: 'Class names for styling the modal overlay.' },
              { name: 'closeOnOutsideClick', type: 'boolean', required: false, default: 'true', description: 'Determines if the modal should close when clicking outside of it.' },
              { name: 'closeOnEsc', type: 'boolean', required: false, default: 'true', description: 'Determines if the modal should close when the Escape key is pressed.' },
            ],
          },
          {
            name: 'ModalHeader',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed in the modal header.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the modal header.' },
            ],
          },
          {
            name: 'ModalTitle',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The title text to display in the modal header.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the modal title.' },
            ],
          },
          {
            name: 'ModalDescription',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The description text to display in the modal body.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the modal description.' },
            ],
          },
          {
            name: 'ModalBody',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed in the modal body.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the modal body.' },
            ],
          },
          {
            name: 'ModalFooter',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed in the modal footer.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the modal footer.' },
            ],
          },
          {
            name: 'ModalClose',
            props: [
              { name: 'onClick', type: '() => void', required: false, default: 'undefined', description: 'Callback function triggered when the close button is clicked.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the close button.' },
            ],
          },
        ],
        dependencies: 'clsx tailwind-merge',
        Component: ModalDemo,
      },
      {
        id: 'sidebar',
        name: 'Sidebar',
        description: 'A customizable mobile sidebar component with support for headers, content, footers, and triggers.',
        props: [
          {
            name: 'Sidebar',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the sidebar.' },
              { name: 'isOpen', type: 'boolean', required: true, default: 'false', description: 'Controls the visibility of the sidebar.' },
              { name: 'onClose', type: '() => void', required: true, default: 'undefined', description: 'Callback function triggered when the sidebar is closed.' },
              { name: 'position', type: '"left" | "right"', required: false, default: '"left"', description: 'Position of the sidebar (left or right).' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the sidebar container.' },
              { name: 'overlayClassName', type: 'string', required: false, default: 'undefined', description: 'Class names for styling the overlay.' },
              { name: 'width', type: 'string', required: false, default: '"w-64"', description: 'Width of the sidebar.' },
            ],
          },
          {
            name: 'SidebarHeader',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed in the sidebar header.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the header.' },
            ],
          },
          {
            name: 'SidebarContent',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed in the sidebar body.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the content area.' },
            ],
          },
          {
            name: 'SidebarFooter',
            props: [
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed in the sidebar footer.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the footer.' },
            ],
          },
          {
            name: 'SidebarTrigger',
            props: [
              { name: 'onClick', type: '() => void', required: true, default: 'undefined', description: 'Callback function triggered when the trigger is clicked.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the trigger button.' },
              { name: 'aria-label', type: 'string', required: false, default: '"Toggle Menu"', description: 'Accessible label for the trigger button.' },
            ],
          },
          {
            name: 'SidebarClose',
            props: [
              { name: 'onClick', type: '() => void', required: true, default: 'undefined', description: 'Callback function triggered when the close button is clicked.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the close button.' },
              { name: 'aria-label', type: 'string', required: false, default: '"Close Menu"', description: 'Accessible label for the close button.' },
            ],
          },
        ],
        dependencies: 'clsx tailwind-merge',
        Component: SidebarDemo,
      },
      {
        id: 'badge',
        name: 'Badge',
        description: 'A versatile badge component with support for multiple variants, sizes, and custom styling.',
        props: [
          {
            name: 'Badge',
            props: [
              { name: 'variant', type: '"default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info"', required: false, default: '"default"', description: 'The visual style of the badge.' },
              { name: 'size', type: '"default" | "sm" | "lg"', required: false, default: '"default"', description: 'The size of the badge.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for custom styling.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content to display inside the badge.' },
            ],
          },
        ],
        dependencies: 'clsx tailwind-merge class-variance-authority',
        Component: BadgeDemo,
      },
      {
        id: 'footer',
        name: 'Footer',
        description: 'A customizable footer component with support for multiple layouts, sections, navigation, and social links.',
        props: [
          {
            name: 'Footer',
            props: [
              { name: 'variant', type: '"default" | "slim" | "centered"', required: false, default: '"default"', description: 'The layout style of the footer.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the footer.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the footer.' },
            ],
          },
          {
            name: 'FooterContainer',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the footer container.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the footer container.' },
            ],
          },
          {
            name: 'FooterSection',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the footer section.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the footer section.' },
            ],
          },
          {
            name: 'FooterGrid',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the footer grid.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the footer grid.' },
            ],
          },
          {
            name: 'FooterTitle',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the footer title.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The title text to display in the footer.' },
            ],
          },
          {
            name: 'FooterNav',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the footer navigation.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Navigation links to display in the footer.' },
            ],
          },
          {
            name: 'FooterNavItem',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the footer navigation item.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the navigation item.' },
              { name: 'href', type: 'string', required: true, default: 'undefined', description: 'The URL the navigation item links to.' },
            ],
          },
          {
            name: 'FooterSocial',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the social links container.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Social links to display in the footer.' },
            ],
          },
          {
            name: 'FooterSocialItem',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the social link.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'The content of the social link.' },
              { name: 'href', type: 'string', required: true, default: 'undefined', description: 'The URL the social link points to.' },
            ],
          },
          {
            name: 'FooterDivider',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the divider.' },
            ],
          },
          {
            name: 'FooterCopyright',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the copyright text.' },
              { name: 'children', type: 'React.ReactNode', required: false, default: 'undefined', description: 'Custom content for the copyright section.' },
            ],
          },
        ],
        dependencies: 'clsx tailwind-merge',
        Component: FooterDemo,
      },
      {
        id: 'navbar',
        name: 'Navbar',
        description: 'A customizable navigation bar component with support for branding, navigation items, actions, and toggle functionality.',
        props: [
          {
            name: 'Nav',
            props: [
              { name: 'variant', type: '"default" | "bordered" | "floating"', required: false, default: '"default"', description: 'The visual style of the navbar.' },
              { name: 'sticky', type: 'boolean', required: false, default: 'false', description: 'Determines if the navbar should stick to the top of the page when scrolling.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the navbar.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the navbar.' },
            ],
          },
          {
            name: 'NavContainer',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the navbar container.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the navbar container.' },
            ],
          },
          {
            name: 'NavContent',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the navbar content.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the navbar content area.' },
            ],
          },
          {
            name: 'NavBrand',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the navbar brand section.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the navbar brand section.' },
            ],
          },
          {
            name: 'NavItems',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the navbar items container.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Navigation items to be displayed inside the navbar.' },
            ],
          },
          {
            name: 'NavItem',
            props: [
              { name: 'href', type: 'string', required: true, default: 'undefined', description: 'The URL the navigation item links to.' },
              { name: 'active', type: 'boolean', required: false, default: 'false', description: 'Indicates if the navigation item is active.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the navigation item.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Content to be displayed inside the navigation item.' },
            ],
          },
          {
            name: 'NavActions',
            props: [
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the navbar actions container.' },
              { name: 'children', type: 'React.ReactNode', required: true, default: 'undefined', description: 'Action buttons or elements to be displayed inside the navbar.' },
            ],
          },
          {
            name: 'NavToggle',
            props: [
              { name: 'onClick', type: '() => void', required: true, default: 'undefined', description: 'Callback function triggered when the toggle button is clicked.' },
              { name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for styling the toggle button.' },
              { name: 'aria-label', type: 'string', required: false, default: '"Toggle Menu"', description: 'Accessible label for the toggle button.' },
            ],
          },
        ],
        dependencies: 'clsx tailwind-merge',
        Component: NavbarDemo,
      },
      {
        id: 'video-card',
        name: 'Video Card',
        description: 'A customizable video card component with support for hover effects, aspect ratios, and playback controls.',
        props: [
          {
            name: 'VideoCard',
            props: [
                {
                    name: 'src',
                    type: 'string',
                    required: true,
                    default: 'undefined',
                    description: 'The source URL of the video.',
                  },
                  {
                    name: 'poster',
                    type: 'string',
                    required: false,
                    default: 'undefined',
                    description: 'The URL of the poster image to display before the video plays.',
                  },
                  {
                    name: 'aspectRatio',
                    type: '"square" | "video" | "vertical" | "wide"',
                    required: false,
                    default: '"video"',
                    description: 'The aspect ratio of the video card.',
                  },
                  {
                    name: 'autoPlay',
                    type: 'boolean',
                    required: false,
                    default: 'false',
                    description: 'Determines if the video should play automatically when loaded.',
                  },
                  {
                    name: 'muted',
                    type: 'boolean',
                    required: false,
                    default: 'true',
                    description: 'Determines if the video should be muted.',
                  },
                  {
                    name: 'loop',
                    type: 'boolean',
                    required: false,
                    default: 'true',
                    description: 'Determines if the video should loop when it ends.',
                  },
                  {
                    name: 'controls',
                    type: 'boolean',
                    required: false,
                    default: 'false',
                    description: 'Determines if playback controls should be displayed.',
                  },
                  {
                    name: 'playOnHover',
                    type: 'boolean',
                    required: false,
                    default: 'true',
                    description: 'Determines if the video should play when hovered.',
                  },
                  {
                    name: 'scaleOnHover',
                    type: 'boolean',
                    required: false,
                    default: 'true',
                    description: 'Determines if the video card should scale slightly when hovered.',
                  },
                  {
                    name: 'className',
                    type: 'string',
                    required: false,
                    default: 'undefined',
                    description: 'Additional class names for custom styling.',
                  },
            ]
          }
        ],
        dependencies: 'clsx tailwind-merge',
        Component: VideoCardDemo,
      },
    {
        id: 'avatar',
        name: 'Avatar',
        description: 'A customizable avatar component with support for images, initials, and status indicators.',
        props: [
            {
              name: 'Avatar',
              props: [
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  required: true,
                  default: 'undefined',
                  description: 'The child components to render inside the avatar container, such as AvatarImage or AvatarTooltip.',
                },
                {
                  name: 'className',
                  type: 'string',
                  required: false,
                  default: 'undefined',
                  description: 'Additional class names for custom styling of the avatar container.',
                },
              ],
            },
            {
              name: 'AvatarImage',
              props: [
                {
                  name: 'size',
                  type: 'number',
                  required: true,
                  default: 'undefined',
                  description: 'The size of the avatar image in pixels.',
                },
                {
                  name: 'src',
                  type: 'string',
                  required: false,
                  default: 'undefined',
                  description: 'The source URL of the avatar image.',
                },
                {
                  name: 'fallback',
                  type: 'string',
                  required: false,
                  default: 'undefined',
                  description: 'Fallback text or initials to display when the image is not available.',
                },
                {
                  name: 'className',
                  type: 'string',
                  required: false,
                  default: 'undefined',
                  description: 'Additional class names for custom styling of the avatar image.',
                },
              ],
            },
            {
              name: 'AvatarTooltip',
              props: [
                {
                  name: 'text',
                  type: 'string',
                  required: true,
                  default: 'undefined',
                  description: 'The text to display inside the tooltip.',
                },
                {
                  name: 'position',
                  type: '"top" | "bottom" | "left" | "right"',
                  required: false,
                  default: '"bottom"',
                  description: 'The position of the tooltip relative to the avatar.',
                },
                {
                  name: 'className',
                  type: 'string',
                  required: false,
                  default: 'undefined',
                  description: 'Additional class names for custom styling of the tooltip.',
                },
              ],
            },
          ],
        dependencies: 'clsx tailwind-merge',
        Component: AvatarDemo,
    },
    {
        id: 'top-button',
        name: 'Top Button',
        description: 'This is a simple button component that redirects user to top of the window.',
        props: [
            {
                name: 'TopButton',
                props: [
                    {name: 'className', type: 'string', required: false, default: 'undefined', description: 'Additional class names for custom styling of the button.'},    
                ]
            }
        ],
        dependencies: 'clsx tailwind-merge lucide-react',
        Component: TopButtonDemo,
    },
    {
        id: 'code-preview',
        name: 'Code Preview',
        description: 'A component that displays code snippets with syntax highlighting and a copy button.',
        props: [
            {
              name: 'CodePreview',
              props: [
                {
                  name: 'code',
                  type: 'string',
                  required: true,
                  default: 'undefined',
                  description: 'The code snippet to display with syntax highlighting.',
                },
                {
                  name: 'language',
                  type: 'string',
                  required: false,
                  default: '"tsx"',
                  description: 'The programming language of the code snippet for syntax highlighting.',
                },
                {
                  name: 'theme',
                  type: '"dark" | "light"',
                  required: false,
                  default: '"dark"',
                  description: 'The theme for syntax highlighting, either dark or light.',
                },
                {
                  name: 'className',
                  type: 'string',
                  required: false,
                  default: 'undefined',
                  description: 'Additional class names for custom styling of the container.',
                },
                {
                  name: 'showLineNumbers',
                  type: 'boolean',
                  required: false,
                  default: 'true',
                  description: 'Determines whether line numbers should be displayed in the code block.',
                },
                {
                  name: 'children',
                  type: 'React.ReactNode',
                  required: false,
                  default: 'undefined',
                  description: 'Additional elements to render inside the component, such as action buttons.',
                },
              ],
            },
          ],
        dependencies: 'react-syntax-highlighter clsx tailwind-merge',
        Component: CodePreviewDemo,
    },
    {
        id: 'input',
        name: 'Input',
        description: 'This is a simple input component.',
        props: [
            {
                name: 'Input',
            props: [
                {
                    name: 'placeholder',
                    type: 'string',
                    required: false,
                    default: '"Enter text here..."',
                    description: 'Placeholder text for the input field.',
                },
                {
                        name: 'error',
                        type: 'boolean',
                        required: false,
                        default: 'false',
                        description: 'Indicates if the input is in an error state.',
                    },
                    {
                        name: 'variant',
                        type: '"sm" | "md" | "lg"',
                        required: false,
                        default: '"md"',
                        description: 'Variant of the input field.',
                    },
                      {
                        name: 'type',
                        type: '"text" | "password" | "email" | "number"',
                        required: false,
                        default: '"text"',
                        description: 'Type of the input field.',
                      },
                    {
                        name: 'className',
                        type: 'string',
                        required: false,
                        default: 'undefined',
                        description: 'Additional classnames for custom styling of the container.',
                      },
            ]}
        ],
        dependencies: 'clsx tailwind-merge',
        Component: InputDemo,
    },
    {
        id: 'avatar-group',
        name: 'Avatar Group',
        description: 'A component that displays a group of avatars with optional overlapping, tooltips, and ring effects.',
        props: [
            {
                name: 'AvatarGroup',
                props: [
                    { name: 'imgs', type: 'string[]', required: true, default: 'undefined', description: 'Array of image URLs for the avatars.' },
                    { name: 'size', type: 'number', required: false, default: '32', description: 'Size of the avatars in pixels.' },
                    { name: 'spacing', type: 'number', required: false, default: '14', description: 'Spacing between the avatars in pixels.' },
                    { name: 'max', type: 'number', required: false, default: 'undefined', description: 'Maximum number of avatars to display.' },
                    { name: 'ring', type: 'boolean', required: false, default: 'false', description: 'Whether to show a ring around the avatars.' },
                    { name: 'overlap', type: 'boolean', required: false, default: 'false', description: 'Whether to overlap the avatars.' },
                    { name: 'tooltips', type: 'boolean', required: false, default: 'false', description:'Whether to show tooltips on hover.' },
                ],
            },
            
        ],
        dependencies: 'clsx tailwind-merge',
        Component: AvatarGroupDemo,
    }
];
