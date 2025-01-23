import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Link {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  clicks: number;
}

export interface Profile {
  username: string;
  displayName: string;
  bio?: string;
  avatar?: string;
  theme: {
    backgroundColor: string;
    textColor: string;
    buttonStyle: 'solid' | 'outline' | 'soft';
  };
  links: Link[];
}