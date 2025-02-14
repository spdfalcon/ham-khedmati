import { IconType } from 'react-icons';

export interface FaqCategory {
  icon: IconType;
  title: string;
  description: string;
  faqs: Faq[];
}

export interface Faq {
  question: string;
  answer: string;
}
