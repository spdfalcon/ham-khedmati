import { Metadata } from 'next';
import AuthLayout from '@/app/_components/auth/AuthLayout';
import RegisterForm from '@/app/_components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'ثبت نام در هم‌خدمتی | جامعه مجازی سربازان',
  description: 'عضویت در بزرگترین جامعه مجازی سربازان ایران',
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="ثبت نام در هم‌خدمتی"
      subtitle="به جامعه بزرگ سربازان ایران خوش آمدید"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
