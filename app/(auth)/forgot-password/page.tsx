import { Metadata } from 'next';
import AuthLayout from '@/app/_components/auth/AuthLayout';
import ForgotPasswordForm from '@/app/_components/auth/ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'فراموشی رمز عبور | هم‌خدمتی',
  description: 'بازیابی رمز عبور حساب کاربری در هم‌خدمتی',
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="فراموشی رمز عبور"
      subtitle="ایمیل خود را وارد کنید تا لینک بازیابی را دریافت نمایید"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
