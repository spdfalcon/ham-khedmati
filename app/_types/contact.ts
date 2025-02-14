import { IconType } from 'react-icons';

export interface ContactMethod {
  icon: IconType;
  title: string;
  description: string;
  items: ContactItem[];
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface SocialLink {
  icon: IconType;
  label: string;
  href: string;
  color: string;
}
