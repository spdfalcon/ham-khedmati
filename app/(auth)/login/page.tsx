import { Metadata } from 'next';
import AuthLayout from '@/app/_components/auth/AuthLayout';
import LoginForm from '@/app/_components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'ورود به حساب کاربری | هم‌خدمتی',
  description: 'ورود به پنل کاربری هم‌خدمتی - جامعه مجازی سربازان',
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="خوش آمدید"
      subtitle="برای دسترسی به امکانات ویژه وارد شوید"
    >
      <LoginForm />
    </AuthLayout>
  );
}
