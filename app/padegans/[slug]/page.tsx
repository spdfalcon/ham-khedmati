import { Metadata } from 'next';
import PadeganDetails from '@/app/_components/padegans/PadeganDetails';

export const metadata: Metadata = {
  title: 'جزئیات پادگان | هم‌خدمتی',
  description: 'مشاهده جزئیات کامل پادگان، امکانات، نظرات و روزشمار اعزام',
};

interface PageProps {
  params: {
    slug: string;
  }
}

export default function PadeganPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800">
      <PadeganDetails slug={params.slug} />
    </div>
  );
}
