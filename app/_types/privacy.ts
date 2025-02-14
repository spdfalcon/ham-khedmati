import { IconType } from 'react-icons';

export interface PrivacySection {
  icon: IconType;
  title: string;
  description: string;
  items: PrivacyItem[];
}

export interface PrivacyItem {
  title: string;
  content: string;
}
