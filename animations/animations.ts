import { type Animation } from '@/types/animation';

// Import all animation demos
import FadeInDemo from './demos/fadeIn';
import SlideInDemo from './demos/slideIn';
import BounceDemo from './demos/bounce';
import RippleDemo from './demos/ripple';
import ConfettiDemo from './demos/confetti';
import WaveDemo from './demos/wave';
import TypewriterDemo from './demos/typewriter';
import StaggerDemo from './demos/stagger';
import ParallaxDemo from './demos/parallax';
import MorphDemo from './demos/morph';
import FloatDemo from './demos/float';
import ScaleDemo from './demos/scale';
import FlipDemo from './demos/flip';
import RotateDemo from './demos/rotate';
import SlideInFromBottomDemo from './demos/slideInFromBottom';
import SlideInFromTopDemo from './demos/slideInFromTop';
import FadeInUpDemo from './demos/fadeInUp';
import FadeInDownDemo from './demos/fadeInDown';
import ScaleInDemo from './demos/scaleIn';
import ScaleOutDemo from './demos/scaleOut';
import BounceInUpDemo from './demos/bounceInUp';
import BounceInDownDemo from './demos/bounceInDown';
import BounceInScaleDemo from './demos/bounceInScale';
import BounceInRotateDemo from './demos/bounceInRotate';
import StackNotificationDemo from './demos/stackNotification';
// import ExpandableStackDemo from './demos/expandableStack';

// Import all animation presets
import { fadeInVariants } from './presets/fadeIn';
import { slideInVariants } from './presets/slideIn';
import { bounceVariants } from './presets/bounce';
import { rippleVariants } from './presets/ripple';
import { confettiVariants } from './presets/confetti';
import { waveVariants } from './presets/wave';
import { typewriterVariants } from './presets/typewriter';
import { staggerVariants } from './presets/stagger';
import { parallaxVariants } from './presets/parallax';
import { morphVariants } from './presets/morph';
import { floatVariants } from './presets/float';
import { scaleVariants } from './presets/scale';
import { flipVariants } from './presets/flip';
import { rotateVariants } from './presets/rotate';
import { slideInFromBottomVariants } from './presets/slideInFromBottom';
import { slideInFromTopVariants } from './presets/slideInFromTop';
import { fadeInUpVariants } from './presets/fadeInUp';
import { fadeInDownVariants } from './presets/fadeInDown';
import { scaleInVariants } from './presets/scaleIn';
import { scaleOutVariants } from './presets/scaleOut';
import { bounceInUpVariants } from './presets/bounceInUp';
import { bounceInDownVariants } from './presets/bounceInDown';
import { bounceInScaleVariants } from './presets/bounceInScale';
import { bounceInRotateVariants } from './presets/bounceInRotate';
import { stackNotification } from './presets/stackNotification';
import { expandableStack } from './presets/expandableStack';

export const animations: Animation[] = [
//   {
//     id: 'expandableStack',
//     name: 'Expandable Stack',
//     description: 'A stack of cards that expands smoothly with a staggered animation',
//     demo: ExpandableStackDemo,
//     preset: expandableStack,
//   },
  {
    id: 'fadeIn',
    name: 'Fade In',
    description: 'Simple fade in animation',
    demo: FadeInDemo,
    preset: fadeInVariants,
  },
  {
    id: 'slideIn',
    name: 'Slide In',
    description: 'Slide in from the left',
    demo: SlideInDemo,
    preset: slideInVariants,
  },
  {
    id: 'bounce',
    name: 'Bounce',
    description: 'Bouncy entrance animation',
    demo: BounceDemo,
    preset: bounceVariants,
  },
  {
    id: 'ripple',
    name: 'Ripple',
    description: 'Ripple effect on click',
    demo: RippleDemo,
    preset: rippleVariants,
  },
  {
    id: 'confetti',
    name: 'Confetti',
    description: 'Celebration confetti effect',
    demo: ConfettiDemo,
    preset: confettiVariants,
  },
  {
    id: 'wave',
    name: 'Wave',
    description: 'Wave animation effect',
    demo: WaveDemo,
    preset: waveVariants,
  },
  {
    id: 'stackNotification',
    name: 'Stack Notification',
    description: 'Stacked notification cards with staggered entrance',
    demo: StackNotificationDemo,
    preset: stackNotification,
  },
//   {
//     id: 'typewriter',
//     name: 'Typewriter',
//     description: 'Typewriter text effect',
//     demo: TypewriterDemo,
//     preset: typewriterVariants,
//   },
  {
    id: 'stagger',
    name: 'Stagger',
    description: 'Staggered animation sequence',
    demo: StaggerDemo,
    preset: staggerVariants,
  },
//   {
//     id: 'parallax',
//     name: 'Parallax',
//     description: 'Parallax scrolling effect',
//     demo: ParallaxDemo,
//     preset: parallaxVariants,
//   },
  {
    id: 'morph',
    name: 'Morph',
    description: 'Shape morphing animation',
    demo: MorphDemo,
    preset: morphVariants,
  },
  {
    id: 'float',
    name: 'Float',
    description: 'Floating animation effect',
    demo: FloatDemo,
    preset: floatVariants,
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'Scale animation',
    demo: ScaleDemo,
    preset: scaleVariants,
  },
  {
    id: 'flip',
    name: 'Flip',
    description: 'Flip animation',
    demo: FlipDemo,
    preset: flipVariants,
  },
  {
    id: 'rotate',
    name: 'Rotate',
    description: 'Rotate animation',
    demo: RotateDemo,
    preset: rotateVariants,
  },
  {
    id: 'slideInFromBottom',
    name: 'Slide In From Bottom',
    description: 'Slide in from the bottom with spring effect',
    demo: SlideInFromBottomDemo,
    preset: slideInFromBottomVariants,
  },
  {
    id: 'slideInFromTop',
    name: 'Slide In From Top',
    description: 'Slide in from the top with spring effect',
    demo: SlideInFromTopDemo,
    preset: slideInFromTopVariants,
  },
  {
    id: 'fadeInUp',
    name: 'Fade In Up',
    description: 'Fade in while moving up',
    demo: FadeInUpDemo,
    preset: fadeInUpVariants,
  },
  {
    id: 'fadeInDown',
    name: 'Fade In Down',
    description: 'Fade in while moving down',
    demo: FadeInDownDemo,
    preset: fadeInDownVariants,
  },
  {
    id: 'scaleIn',
    name: 'Scale In',
    description: 'Scale in from center with spring effect',
    demo: ScaleInDemo,
    preset: scaleInVariants,
  },
  {
    id: 'scaleOut',
    name: 'Scale Out',
    description: 'Scale down from larger size with spring effect',
    demo: ScaleOutDemo,
    preset: scaleOutVariants,
  },
  {
    id: 'bounceInUp',
    name: 'Bounce In Up',
    description: 'Bounce in from bottom with high spring effect',
    demo: BounceInUpDemo,
    preset: bounceInUpVariants,
  },
  {
    id: 'bounceInDown',
    name: 'Bounce In Down',
    description: 'Bounce in from top with high spring effect',
    demo: BounceInDownDemo,
    preset: bounceInDownVariants,
  },
  {
    id: 'bounceInScale',
    name: 'Bounce In Scale',
    description: 'Bounce in with scale effect',
    demo: BounceInScaleDemo,
    preset: bounceInScaleVariants,
  },
  {
    id: 'bounceInRotate',
    name: 'Bounce In Rotate',
    description: 'Bounce in with rotation effect',
    demo: BounceInRotateDemo,
    preset: bounceInRotateVariants,
  },
]; 
