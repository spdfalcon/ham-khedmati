'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const schema = z.object({
  email: z.string().email('ایمیل نامعتبر است')
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      // TODO: API Call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
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
          <FaEnvelope className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">ایمیل ارسال شد</h3>
        <p className="text-gray-400 mb-6">
          لینک بازیابی رمز عبور به ایمیل شما ارسال شد.
          لطفاً صندوق ورودی خود را بررسی کنید.
        </p>
        <Link
          href="/login"
          className="flex items-center justify-center gap-2 text-primary-400 hover:text-primary-300"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>بازگشت به صفحه ورود</span>
        </Link>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">ایمیل</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <FaEnvelope className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="email"
            {...register('email')}
            className={`w-full px-4 pr-12 py-3 bg-secondary-800 rounded-xl border
              ${errors.email ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all`}
            dir="ltr"
          />
        </div>
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
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
        {isLoading ? 'در حال ارسال...' : 'ارسال لینک بازیابی'}
      </button>

      <div className="text-center">
        <Link
          href="/login"
          className="text-sm text-gray-400 hover:text-primary-400"
        >
          بازگشت به صفحه ورود
        </Link>
      </div>
    </form>
  );
}
