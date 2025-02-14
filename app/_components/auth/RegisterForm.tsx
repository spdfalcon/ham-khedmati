'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';

const registerSchema = z.object({
  fullName: z.string().min(3, 'نام و نام خانوادگی باید حداقل ۳ حرف باشد'),
  username: z.string().min(3, 'نام کاربری باید حداقل ۳ حرف باشد')
    .regex(/^[a-zA-Z0-9_]+$/, 'فقط حروف انگلیسی، اعداد و _ مجاز است'),
  email: z.string().email('ایمیل نامعتبر است'),
  phone: z.string().regex(/^09\d{9}$/, 'شماره موبایل نامعتبر است'),
  password: z.string().min(8, 'رمز عبور باید حداقل ۸ حرف باشد'),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'پذیرش قوانین الزامی است'
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "رمز عبور و تکرار آن یکسان نیست",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // TODO: API call
      console.log(data);
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* نام و نام خانوادگی */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">نام و نام خانوادگی</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <FaUser className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            {...register('fullName')}
            className={`w-full px-4 pr-12 py-3 bg-secondary-800 rounded-xl border
              ${errors.fullName ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all`}
          />
        </div>
        {errors.fullName && (
          <span className="text-sm text-red-500">{errors.fullName.message}</span>
        )}
      </div>

      {/* نام کاربری */}
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
            dir="ltr"
          />
        </div>
        {errors.username && (
          <span className="text-sm text-red-500">{errors.username.message}</span>
        )}
      </div>

      {/* ایمیل */}
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

      {/* شماره موبایل */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">شماره موبایل</label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <FaPhoneAlt className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="tel"
            {...register('phone')}
            className={`w-full px-4 pr-12 py-3 bg-secondary-800 rounded-xl border
              ${errors.phone ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all`}
            dir="ltr"
          />
        </div>
        {errors.phone && (
          <span className="text-sm text-red-500">{errors.phone.message}</span>
        )}
      </div>

      {/* رمز عبور */}
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
            dir="ltr"
          />
        </div>
        {errors.password && (
          <span className="text-sm text-red-500">{errors.password.message}</span>
        )}
      </div>

      {/* تکرار رمز عبور */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">تکرار رمز عبور</label>
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

      {/* پذیرش قوانین */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register('acceptTerms')}
            className="w-4 h-4 border-primary-500/10 rounded focus:ring-primary-500"
          />
          <span className="text-sm text-gray-400">
            <Link href="/terms" className="text-primary-400 hover:text-primary-300">
              قوانین و مقررات
            </Link>
            {' '}را مطالعه کرده و می‌پذیرم
          </span>
        </label>
        {errors.acceptTerms && (
          <span className="text-sm text-red-500">{errors.acceptTerms.message}</span>
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
        {isLoading ? 'در حال ثبت نام...' : 'ثبت نام'}
      </button>

      <p className="text-center text-gray-400 text-sm">
        قبلاً ثبت نام کرده‌اید؟{' '}
        <Link
          href="/login"
          className="text-primary-400 hover:text-primary-300"
        >
          وارد شوید
        </Link>
      </p>
    </form>
  );
}
