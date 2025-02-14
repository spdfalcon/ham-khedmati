export interface SelectOption<T = string, P = object> {
  value: T;
  label: string;
  data?: P;
}

export interface EducationOption extends SelectOption<'diploma' | 'associate' | 'bachelor' | 'master' | 'phd'> {
  baseSalary: number;
}

export interface ServiceLocationOption {
  value: string;
  label: string;
  reduction: number;
}

export interface SportMedalOption {
  value: string;
  label: string;
  description: string;
}

export interface MaritalStatusOption {
  value: 'single' | 'married';
  label: string;
  description: string;
  icon: string;
}

export interface SpecialConditionOption {
  name: keyof SpecialConditions;
  label: string;
  description: string;
  reduction: number;
}

export interface SpecialConditions {
  isElite: boolean;
  isSupportingFamily: boolean;
  isVeteranChild: boolean;
  quranCertificate: boolean;
}

export interface SpecialServiceCondition {
  name: 'isElite' | 'isSupportingFamily' | 'isVeteranChild' | 'quranCertificate';
  label: string;
  description: string;
}

export interface AdditionalOption {
  name: 'voluntaryService' | 'isBorderGuard';
  label: string;
  description: string;
  reduction: number;
}

export interface ServiceBenefitOption {
  name: 'isBorderGuard' | 'isOperationalZone';
  label: string;
  bonus: string;
}

export interface ServiceDurationFormData {
  education: string;
  maritalStatus: 'single' | 'married';
  basijDuration: number;
  serviceLocation: string;
  distanceFromHome: number;
  isBorderGuard: boolean;
  hasChild: number;
  isElite: boolean;
  isSupportingFamily: boolean;
  isVeteranChild: boolean;
  sportsMedals: 'none' | 'national' | 'asian' | 'world' | 'olympic';
  quranCertificate: boolean;
  techCertificates: number;
  voluntaryService: boolean;
}

export interface SalaryFormData {
  education: 'diploma' | 'associate' | 'bachelor' | 'master' | 'phd';
  maritalStatus: 'single' | 'married';
  childCount: number;
  serviceLocation: string;
  role: 'normal' | 'combat' | 'special';
  isBorderGuard: boolean;
  isOperationalZone: boolean;
  extraHours: number;
  skillCertificates: number;
}

export interface SalaryBreakdown {
  baseSalary: number;
  educationBonus: number;
  maritalBonus: number;
  childrenBonus: number;
  locationBonus: number;
  roleBonus: number;
  operationalBonus: number;
  extraHoursBonus: number;
  skillsBonus: number;
  totalSalary: number;
}

export interface LocationOption extends SelectOption<'capital' | 'city' | 'deprived' | 'operational'> {
  multiplier: number;
}

export interface RoleOption extends SelectOption<'normal' | 'combat' | 'special'> {
  multiplier: number;
}

export interface DurationEducationOption {
  value: string;
  label: string;
}

export interface DurationLocationOption {
  value: string;
  label: string;
  reduction: number;
}

export interface DurationMedalOption {
  value: 'none' | 'national' | 'asian' | 'world' | 'olympic';
  label: string;
  description: string;
}

export interface DurationMaritalOption {
  value: 'single' | 'married';
  label: string;
  description: string;
  icon: string;
}

export interface AdditionalServiceCondition {
  name: 'voluntaryService' | 'isBorderGuard';
  label: string;
  description: string;
}

export interface DeficitEducationOption extends SelectOption<'diploma' | 'associate' | 'bachelor' | 'master' | 'phd'> {
  deficitMonths: number;
  description: string;
}

export interface DeficitQuranOption extends SelectOption<'none' | 'partial' | 'complete'> {
  deficitMonths: number;
  description: string;
}

export interface DeficitResult {
  totalMonths: number;
  details: {
    [key: string]: {
      label: string;
      months: number;
      description: string;
    }
  };
}

export interface DeficitFormData {
  education: string;
  isMarried: boolean;
  childCount: number;
  basijMembership: number;
  isFrontierGuard: boolean;
  isElite: boolean;
  quranLevel: 'none' | 'partial' | 'complete';
  sportAchievements: 'none' | 'provincial' | 'national' | 'international';
  skillCertificates: number;
  researchProjects: number;
}
