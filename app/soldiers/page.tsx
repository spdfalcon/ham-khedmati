import { Metadata } from 'next';
import FindSoldiersWrapper from '@/app/_components/soldiers/FindSoldiersWrapper';

export const metadata: Metadata = {
  title: 'جستجوی هم‌خدمتی | هم‌خدمتی',
  description: 'جستجو و پیدا کردن دوستان هم‌دوره خود در یگان‌های مختلف',
};

export default function SoldiersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800">
      <FindSoldiersWrapper />
    </div>
  );
}
