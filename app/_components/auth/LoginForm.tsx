'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FaUser, FaLock, FaGoogle } from 'react-icons/fa';

const loginSchema = z.object({
  username: z.string().min(3, 'نام کاربری باید حداقل ۳ حرف باشد'),
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ حرف باشد'),
  rememberMe: z.boolean().default(false)
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // TODO: اتصال به API
      console.log(data);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">نام کاربری</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <FaUser className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            {...register('username')}
            className={`w-full px-4 pr-12 py-3 bg-secondary-800 rounded-xl border
              ${errors.username ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all`}
          />
        </div>
        {errors.username && (
          <span className="text-sm text-red-500">{errors.username.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-400">رمز عبور</label>
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
          />
        </div>
        {errors.password && (
          <span className="text-sm text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register('rememberMe')}
            className="w-4 h-4 border-primary-500/10 rounded focus:ring-primary-500"
          />
          <span className="text-sm text-gray-400">مرا به خاطر بسپار</span>
        </label>
        <Link
          href="/forgot-password"
          className="text-sm text-primary-400 hover:text-primary-300"
        >
          فراموشی رمز عبور
        </Link>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 rounded-xl text-white font-medium transition-all
          ${isLoading 
            ? 'bg-primary-500/50 cursor-wait' 
            : 'bg-primary-500 hover:bg-primary-600 hover:-translate-y-0.5'}`}
      >
        {isLoading ? 'در حال ورود...' : 'ورود به حساب'}
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-secondary-900 text-gray-400">یا</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full py-3 bg-white text-gray-900 rounded-xl flex items-center 
          justify-center gap-2 hover:bg-gray-100 transition-all"
      >
        <FaGoogle className="w-5 h-5 text-red-500" />
        <span>ورود با گوگل</span>
      </button>

      <p className="text-center text-gray-400 text-sm">
        حساب کاربری ندارید؟{' '}
        <Link
          href="/register"
          className="text-primary-400 hover:text-primary-300"
        >
          ثبت نام کنید
        </Link>
      </p>
    </form>
  );
}
