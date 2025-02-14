import { Metadata } from 'next';
import SoldierProfileWrapper from '@/app/_components/soldiers/profile/SoldierProfileWrapper';

export const metadata: Metadata = {
  title: 'پروفایل سرباز | هم‌خدمتی',
  description: 'مشاهده اطلاعات و برقراری ارتباط با هم‌خدمتی',
};

export default function SoldierProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800">
      <SoldierProfileWrapper soldierId={params.id} />
    </div>
  );
}
