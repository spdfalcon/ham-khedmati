export interface EducationOption {
  value: string;
  label: string;
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

export interface AdditionalOption {
  name: 'voluntaryService' | 'isBorderGuard';
  label: string;
  description: string;
  reduction: number;
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
