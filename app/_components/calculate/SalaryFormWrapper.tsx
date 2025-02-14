'use client';
import dynamic from 'next/dynamic';

const SalaryCalculatorForm = dynamic(
  () => import('./SalaryCalculatorForm'),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-secondary-700/50 rounded-xl"></div>
        <div className="h-24 bg-secondary-700/50 rounded-xl"></div>
        <div className="h-12 bg-secondary-700/50 rounded-xl"></div>
      </div>
    )
  }
);

export default function SalaryFormWrapper() {
  return <SalaryCalculatorForm />;
}
