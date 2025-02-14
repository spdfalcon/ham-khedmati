import { Metadata } from 'next';
import AuthLayout from '@/app/_components/auth/AuthLayout';
import VerifyEmailForm from '@/app/_components/auth/VerifyEmailForm';

export const metadata: Metadata = {
  title: 'تایید ایمیل | هم‌خدمتی',
  description: 'تایید آدرس ایمیل برای فعال‌سازی حساب کاربری',
};

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="تایید ایمیل"
      subtitle="کد ارسال شده به ایمیل خود را وارد کنید"
    >
      <VerifyEmailForm />
    </AuthLayout>
  );
}
