'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import * as z from 'zod';
import FadeIn from '@/app/_components/animations/FadeIn';

const formSchema = z.object({
  fullName: z.string().min(3, 'نام باید حداقل ۳ حرف باشد'),
  email: z.string().email('ایمیل نامعتبر است'),
  phone: z.string().regex(/^09\d{9}$/, 'شماره موبایل نامعتبر است'),
  subject: z.string().min(5, 'موضوع باید حداقل ۵ حرف باشد'),
  message: z.string().min(10, 'پیام باید حداقل ۱۰ حرف باشد')
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // TODO: API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form data:', data);
      reset();
      alert('پیام شما با موفقیت ارسال شد');
    } catch (error) {
      alert('خطا در ارسال پیام. لطفا دوباره تلاش کنید');
      console.log(error);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn className="bg-secondary-800/50 p-8 rounded-2xl border border-primary-500/10">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        ارسال پیام مستقیم
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">نام و نام خانوادگی</label>
            <input
              {...register('fullName')}
              className={`w-full px-4 py-3 bg-secondary-900/50 rounded-xl border
                ${errors.fullName ? 'border-red-500' : 'border-primary-500/10'}
                focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
                text-white outline-none transition-all`}
            />
            {errors.fullName && (
              <span className="text-sm text-red-500">{errors.fullName.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">شماره موبایل</label>
            <input
              {...register('phone')}
              className={`w-full px-4 py-3 bg-secondary-900/50 rounded-xl border
                ${errors.phone ? 'border-red-500' : 'border-primary-500/10'}
                focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
                text-white outline-none transition-all`}
            />
            {errors.phone && (
              <span className="text-sm text-red-500">{errors.phone.message}</span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">ایمیل</label>
          <input
            type="email"
            {...register('email')}
            className={`w-full px-4 py-3 bg-secondary-900/50 rounded-xl border
              ${errors.email ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all`}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">موضوع</label>
          <input
            {...register('subject')}
            className={`w-full px-4 py-3 bg-secondary-900/50 rounded-xl border
              ${errors.subject ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all`}
          />
          {errors.subject && (
            <span className="text-sm text-red-500">{errors.subject.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">پیام شما</label>
          <textarea
            {...register('message')}
            rows={6}
            className={`w-full px-4 py-3 bg-secondary-900/50 rounded-xl border
              ${errors.message ? 'border-red-500' : 'border-primary-500/10'}
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all resize-none`}
          />
          {errors.message && (
            <span className="text-sm text-red-500">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl text-white font-medium transition-all
            ${isSubmitting 
              ? 'bg-primary-500/50 cursor-wait' 
              : 'bg-primary-500 hover:bg-primary-600 hover:-translate-y-0.5'}`}
        >
          {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
        </button>
      </form>
    </FadeIn>
  );
}
