import { Metadata } from 'next';
import AuthLayout from '@/app/_components/auth/AuthLayout';
import ResetPasswordForm from '@/app/_components/auth/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'تغییر رمز عبور | هم‌خدمتی',
  description: 'تعیین رمز عبور جدید برای حساب کاربری',
};

export default async function ResetPasswordPage({ params }: { params: Promise<{ token: string }> }) {
  const resolvedParams = await params; // حل کردن پرامیس
  return (
    <AuthLayout
      title="تعیین رمز عبور جدید"
      subtitle="لطفاً رمز عبور جدید خود را وارد کنید"
    >
      <ResetPasswordForm token={resolvedParams.token} />
    </AuthLayout>
  );
}
