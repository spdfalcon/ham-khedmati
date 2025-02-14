import { Metadata } from 'next';
import AuthLayout from '@/app/_components/auth/AuthLayout';
import ResetPasswordForm from '@/app/_components/auth/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'تغییر رمز عبور | هم‌خدمتی',
  description: 'تعیین رمز عبور جدید برای حساب کاربری',
};

export default function ResetPasswordPage(props: { params: { token: string } }) {
  const { params } = props;
  
  return (
    <AuthLayout
      title="تعیین رمز عبور جدید"
      subtitle="لطفاً رمز عبور جدید خود را وارد کنید"
    >
      <ResetPasswordForm token={params.token} />
    </AuthLayout>
  );
}
