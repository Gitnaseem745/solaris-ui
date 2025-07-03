import { FC } from 'react';
import { Variants } from 'framer-motion';

export interface Animation {
  id: string;
  name: string;
  description: string;
  demo: FC;
  preset: Variants | ((...args: number[]) => Variants);
} 
