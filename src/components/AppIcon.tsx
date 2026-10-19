import React from 'react';
import { 
  Radio, 
  CloudSun, 
  Gamepad2, 
  Mic, 
  Truck, 
  Cpu, 
  Server, 
  Layers
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { AppItem } from '../data/apps';

interface AppIconProps extends LucideProps {
  name: AppItem['icon'] | string;
}

export const AppIcon: React.FC<AppIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Radio':
      return <Radio {...props} />;
    case 'CloudSun':
      return <CloudSun {...props} />;
    case 'Gamepad2':
      return <Gamepad2 {...props} />;
    case 'Mic':
      return <Mic {...props} />;
    case 'Truck':
      return <Truck {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'Server':
      return <Server {...props} />;
    default:
      return <Layers {...props} />;
  }
};
