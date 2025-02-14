'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Select from 'react-select';
import { motion } from 'framer-motion'; // اضافه کردن این import
import type { DeficitEducationOption, DeficitQuranOption, DeficitResult } from '@/app/_types/calculate';

const educationOptions: DeficitEducationOption[] = [
  { value: 'diploma', label: 'دیپلم', deficitMonths: 0, description: 'بدون کسری' },
  { value: 'associate', label: 'کاردانی', deficitMonths: 2, description: '2 ماه کسری' },
  { value: 'bachelor', label: 'کارشناسی', deficitMonths: 3, description: '3 ماه کسری' },
  { value: 'master', label: 'کارشناسی ارشد', deficitMonths: 4, description: '4 ماه کسری' },
  { value: 'phd', label: 'دکتری', deficitMonths: 6, description: '6 ماه کسری' }
] as const;

const quranOptions: DeficitQuranOption[] = [
  { value: 'none', label: 'بدون حفظ', deficitMonths: 0, description: 'بدون کسری' },
  { value: 'partial', label: 'حفظ جزء', deficitMonths: 1, description: '1 ماه کسری به ازای هر 5 جزء' },
  { value: 'complete', label: 'حافظ کل', deficitMonths: 6, description: '6 ماه کسری' }
] as const;

const formSchema = z.object({
  education: z.enum(['diploma', 'associate', 'bachelor', 'master', 'phd']),
  isMarried: z.boolean(),
  childCount: z.number().min(0).max(3),
  basijMembership: z.number().min(0).max(60),
  isFrontierGuard: z.boolean(),
  isElite: z.boolean(),
  quranLevel: z.enum(['none', 'partial', 'complete']),
  sportAchievements: z.enum(['none', 'provincial', 'national', 'international']),
  skillCertificates: z.number().min(0).max(5),
  researchProjects: z.number().min(0).max(10)
});

type FormData = z.infer<typeof formSchema>;

export default function DeficitCalculatorForm() {
  const [result, setResult] = useState<DeficitResult | null>(null);
  const { register, control, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quranLevel: 'none',
      sportAchievements: 'none',
      childCount: 0,
      basijMembership: 0,
      skillCertificates: 0,
      researchProjects: 0
    }
  });

  // به جای استفاده مستقیم از watch، از useMemo استفاده می‌کنیم
  const formValues = watch();
  const memoizedFormValues = useMemo(() => formValues, [
    formValues.education,
    formValues.isMarried,
    formValues.childCount,
    formValues.quranLevel,
    formValues.sportAchievements,
    formValues.basijMembership,
    formValues.isFrontierGuard,
    formValues.isElite,
    formValues.skillCertificates,
    formValues.researchProjects
  ]);

  useEffect(() => {
    if (Object.keys(memoizedFormValues).length > 0) {
      calculateDeficit(memoizedFormValues);
    }
  }, [memoizedFormValues]); // فقط وقتی memoizedFormValues تغییر کند اجرا می‌شود

  const calculateDeficit = useCallback((data: FormData) => {
    const details: DeficitResult['details'] = {};
    let totalMonths = 0;

    // محاسبه کسری تحصیلات
    const educationDeficit = educationOptions.find(opt => opt.value === data.education)?.deficitMonths || 0;
    if (educationDeficit > 0) {
      details['education'] = {
        label: 'کسری تحصیلات',
        months: educationDeficit,
        description: `کسری بابت مدرک ${data.education}`
      };
      totalMonths += educationDeficit;
    }

    // کسری تاهل و فرزندان
    if (data.isMarried) {
      const marriageDeficit = 3;
      details['marriage'] = {
        label: 'کسری تأهل',
        months: marriageDeficit,
        description: 'کسری بابت تأهل'
      };
      totalMonths += marriageDeficit;

      if (data.childCount > 0) {
        const childDeficit = data.childCount * 2;
        details['children'] = {
          label: 'کسری فرزندان',
          months: childDeficit,
          description: `کسری بابت ${data.childCount} فرزند`
        };
        totalMonths += childDeficit;
      }
    }

    // کسری قرآن
    if (data.quranLevel !== 'none') {
      const quranDeficit = quranOptions.find(opt => opt.value === data.quranLevel)?.deficitMonths || 0;
      if (quranDeficit > 0) {
        details['quran'] = {
          label: 'کسری حفظ قرآن',
          months: quranDeficit,
          description: `کسری بابت ${data.quranLevel === 'complete' ? 'حفظ کل' : 'حفظ جزء'}`
        };
        totalMonths += quranDeficit;
      }
    }

    setResult({ totalMonths, details });
  }, []); // useCallback برای جلوگیری از ری‌رندر اضافی

  return (
    <form className="space-y-8">
      {/* تحصیلات */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">سطح تحصیلات</label>
        <Controller
          name="education"
          control={control}
          render={({ field }) => (
            <Select<DeficitEducationOption>
              {...field}
              options={educationOptions}
              placeholder="انتخاب کنید"
              className="service-select"
              classNamePrefix="select"
              onChange={(option) => field.onChange(option?.value)}
              value={educationOptions.find(opt => opt.value === field.value)}
            />
          )}
        />
      </div>

      {/* وضعیت تأهل و فرزندان */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm text-gray-400 mb-3">وضعیت تأهل</label>
          <label
            className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all
              ${watch('isMarried') 
                ? 'bg-primary-500/20 border-primary-500' 
                : 'bg-secondary-900/50 border-primary-500/10'} 
              border hover:border-primary-500/30`}
          >
            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center
              ${watch('isMarried') 
                ? 'border-primary-400 bg-primary-400' 
                : 'border-gray-500'}`}
            >
              {watch('isMarried') && <span className="text-white text-sm">✓</span>}
            </div>
            <input
              type="checkbox"
              {...register('isMarried')}
              className="hidden"
            />
            <div>
              <div className="text-white font-medium">متأهل هستم</div>
              <div className="text-sm text-gray-400">3 ماه کسری خدمت</div>
            </div>
          </label>
        </div>

        {watch('isMarried') && (
          <div className="space-y-2">
            <label className="block text-sm text-gray-400">تعداد فرزندان</label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setValue('childCount', Math.max(0, watch('childCount') - 1))}
                className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center"
              >
                -
              </button>
              <span className="w-20 text-center text-white">{watch('childCount')}</span>
              <button
                type="button"
                onClick={() => setValue('childCount', Math.min(3, watch('childCount') + 1))}
                className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      {/* حفظ قرآن */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">وضعیت حفظ قرآن</label>
        <Controller
          name="quranLevel"
          control={control}
          render={({ field }) => (
            <Select<DeficitQuranOption>
              {...field}
              options={quranOptions}
              placeholder="انتخاب کنید"
              className="service-select"
              classNamePrefix="select"
              onChange={(option) => field.onChange(option?.value)}
              value={quranOptions.find(opt => opt.value === field.value)}
            />
          )}
        />
      </div>

      {/* نمایش نتیجه */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary-500/10 p-6 rounded-xl border border-primary-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            میزان کسری خدمت شما:
          </h3>
          <div className="text-3xl font-bold text-primary-400 mb-6">
            {result.totalMonths} ماه
          </div>
          
          <div className="space-y-4">
            {Object.entries(result.details).map(([key, detail]) => (
              <div key={key} className="flex justify-between items-center text-sm">
                <span className="text-gray-400">{detail.label}:</span>
                <span className="text-white">{detail.months} ماه</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </form>
  );
}
