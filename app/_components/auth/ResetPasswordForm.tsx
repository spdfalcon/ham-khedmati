'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { FaLock, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const schema = z.object({
  password: z.string()
    .min(8, 'رمز عبور باید حداقل ۸ حرف باشد')
    .regex(/[a-z]/, 'رمز عبور باید شامل حروف کوچک باشد')
    .regex(/[A-Z]/, 'رمز عبور باید شامل حروف بزرگ باشد')
    .regex(/[0-9]/, 'رمز عبور باید شامل اعداد باشد'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'رمز عبور و تکرار آن یکسان نیست',
  path: ['confirmPassword']
});

type FormData = z.infer<typeof schema>;

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({  }: ResetPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      // TODO: API Call با ارسال توکن و رمز عبور جدید
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          رمز عبور با موفقیت تغییر کرد
        </h3>
        <p className="text-gray-400 mb-6">
          تا چند لحظه دیگر به صفحه ورود منتقل خواهید شد
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* رمز عبور جدید */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">رمز عبور جدید</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <FaLock className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="password"
            {...register('password')}
            className={`w-full px-4 pr-12 py-3 bg-secondary-800 rounded-xl border
              ${errors.password ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all`}
            dir="ltr"
          />
        </div>
        {errors.password && (
          <span className="text-sm text-red-500">{errors.password.message}</span>
        )}
      </div>

      {/* تکرار رمز عبور */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">تکرار رمز عبور جدید</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <FaLock className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="password"
            {...register('confirmPassword')}
            className={`w-full px-4 pr-12 py-3 bg-secondary-800 rounded-xl border
              ${errors.confirmPassword ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all`}
            dir="ltr"
          />
        </div>
        {errors.confirmPassword && (
          <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 rounded-xl text-white font-medium transition-all
          ${isLoading 
            ? 'bg-primary-500/50 cursor-wait' 
            : 'bg-primary-500 hover:bg-primary-600 hover:-translate-y-0.5'}`}
      >
        {isLoading ? 'در حال تغییر رمز...' : 'تغییر رمز عبور'}
      </button>
    </form>
  );
}
