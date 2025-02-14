'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const schema = z.object({
  code: z.string().length(6, 'کد تایید باید ۶ رقم باشد')
});

type FormData = z.infer<typeof schema>;

export default function VerifyEmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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

  const resendCode = async () => {
    setTimeLeft(120);
    // TODO: API Call for resending code
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
        <h3 className="text-xl font-bold text-white mb-2">ایمیل تایید شد</h3>
        <p className="text-gray-400 mb-6">
          حساب کاربری شما با موفقیت فعال شد.
          به زودی به پنل کاربری منتقل خواهید شد.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">کد تایید</label>
        <input
          type="text"
          maxLength={6}
          {...register('code')}
          className={`w-full px-4 py-3 bg-secondary-800 rounded-xl border text-center text-2xl tracking
            ${errors.code ? 'border-red-500' : 'border-primary-500/10'}
            focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
            text-white outline-none transition-all`}
          dir="ltr"
        />
        {errors.code && (
          <span className="text-sm text-red-500">{errors.code.message}</span>
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
        {isLoading ? 'در حال بررسی...' : 'تایید ایمیل'}
      </button>

      <div className="text-center space-y-2">
        <p className="text-sm text-gray-400">
          {timeLeft > 0 ? (
            <>زمان باقیمانده: {formatTime(timeLeft)}</>
          ) : (
            <button
              type="button"
              onClick={resendCode}
              className="text-primary-400 hover:text-primary-300"
            >
              ارسال مجدد کد
            </button>
          )}
        </p>
      </div>
    </form>
  );
}
