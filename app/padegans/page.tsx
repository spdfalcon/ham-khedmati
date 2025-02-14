import { Metadata } from 'next';
import PadegansList from '@/app/_components/padegans/PadegansList';

export const metadata: Metadata = {
  title: 'لیست پادگان‌های آموزشی | هم‌خدمتی',
  description: 'مشاهده لیست کامل پادگان‌های آموزشی به همراه اطلاعات اعزام و نظرات',
};

export default function PadegansListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          پادگان‌های <span className="text-primary-400">آموزشی</span>
        </h1>
        <PadegansList />
      </div>
    </div>
  );
}
