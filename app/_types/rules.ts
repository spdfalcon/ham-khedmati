import { IconType } from 'react-icons';

export interface RuleSection {
  icon: IconType;
  title: string;
  description: string;
  rules: Rule[];
}

export interface Rule {
  title: string;
  content: string;
}
