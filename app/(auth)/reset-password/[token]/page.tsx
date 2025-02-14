import AuthLayout from "@/app/_components/auth/AuthLayout";
import ResetPasswordForm from "@/app/_components/auth/ResetPasswordForm";

export default async function ResetPasswordPage({ params }: { params: { token: string } }) {
  const resolvedParams = await params;
  
  return (
    <AuthLayout
      title="تعیین رمز عبور جدید"
      subtitle="لطفاً رمز عبور جدید خود را وارد کنید"
    >
      <ResetPasswordForm token={resolvedParams.token} />
    </AuthLayout>
  );
}
