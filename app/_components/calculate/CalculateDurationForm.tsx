import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import Select from 'react-select';
import type { 
  DurationEducationOption, 
  DurationLocationOption, 
  DurationMedalOption, 
  DurationMaritalOption,
  SpecialServiceCondition,
  AdditionalServiceCondition
} from '@/app/_types/calculate';

const educationOptions: DurationEducationOption[] = [
  { value: 'diploma', label: 'دیپلم' },
  { value: 'associate', label: 'کاردانی' },
  { value: 'bachelor', label: 'کارشناسی' },
  { value: 'master', label: 'کارشناسی ارشد' },
  { value: 'phd', label: 'دکتری' }
];

const serviceLocationOptions: DurationLocationOption[] = [
  { value: 'capital', label: 'مرکز استان', reduction: 0 },
  { value: 'city', label: 'شهرستان', reduction: 1 },
  { value: 'deprived', label: 'مناطق محروم', reduction: 2 },
  { value: 'operational', label: 'مناطق عملیاتی', reduction: 3 },
  { value: 'border', label: 'مناطق مرزی', reduction: 4 }
];

// اضافه کردن آپشن‌های مدال ورزشی با استایل مناسب
const sportMedalOptions: DurationMedalOption[] = [
  { value: 'none', label: 'بدون مدال', description: 'بدون کسری خدمت' },
  { value: 'national', label: 'مدال کشوری', description: '1 ماه کسری' },
  { value: 'asian', label: 'مدال آسیایی', description: '2 ماه کسری' },
  { value: 'world', label: 'مدال جهانی', description: '3 ماه کسری' },
  { value: 'olympic', label: 'مدال المپیک', description: '4 ماه کسری' }
];

const maritalStatusOptions: DurationMaritalOption[] = [
  { 
    value: 'single', 
    label: 'مجرد', 
    description: 'بدون کسری خدمت',
    icon: '👤'
  },
  { 
    value: 'married', 
    label: 'متأهل', 
    description: '3 ماه کسری خدمت',
    icon: '👨‍👩‍👦'
  }
];

const specialConditions: SpecialServiceCondition[] = [
  { name: 'isElite', label: 'نخبه علمی هستم', description: '4 ماه کسری' },
  { name: 'isSupportingFamily', label: 'سرپرست خانوار هستم', description: '2 ماه کسری' },
  { name: 'isVeteranChild', label: 'فرزند جانباز هستم', description: '3 ماه کسری' },
  { name: 'quranCertificate', label: 'حافظ قرآن هستم', description: '1 ماه کسری' }
];

const additionalConditions: AdditionalServiceCondition[] = [
  { 
    name: 'voluntaryService', 
    label: 'اعزام داوطلبانه', 
    description: '1 ماه کسری خدمت'
  },
  { 
    name: 'isBorderGuard', 
    label: 'خدمت در مرزبانی', 
    description: '2 ماه کسری خدمت'
  }
];

const formSchema = z.object({
  education: z.string().min(1, 'لطفا سطح تحصیلات خود را انتخاب کنید'),
  maritalStatus: z.enum(['single', 'married']),
  basijDuration: z.number().min(0).max(60),
  serviceLocation: z.string().min(1, 'لطفا محل خدمت را انتخاب کنید'),
  distanceFromHome: z.number().min(0),
  isBorderGuard: z.boolean(),
  hasChild: z.number().min(0).max(3),
  isElite: z.boolean(),
  isSupportingFamily: z.boolean(),
  isVeteranChild: z.boolean(),
  sportsMedals: z.enum(['none', 'national', 'asian', 'world', 'olympic']).default('none'),
  quranCertificate: z.boolean(),
  techCertificates: z.number().min(0).max(5),
  voluntaryService: z.boolean()
});

type FormData = z.infer<typeof formSchema>;

export default function CalculateDurationForm() {
  const [calculatedDuration, setCalculatedDuration] = useState<number | null>(null);

  const { register, handleSubmit, control, watch, formState: { errors }, setValue, getValues } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      basijDuration: 0,
      distanceFromHome: 0,
      isBorderGuard: false
    }
  });

  // Watch all form values for real-time calculation
  const formValues = watch();

  const calculateServiceDuration = (data: FormData) => {
    let duration = 21; // مدت پایه خدمت

    // کسری تحصیلات
    switch (data.education) {
      case 'associate': duration -= 1; break;
      case 'bachelor': duration -= 2; break;
      case 'master': duration -= 3; break;
      case 'phd': duration -= 4; break;
    }

    // کسری تأهل و فرزند
    if (data.maritalStatus === 'married') {
      duration -= 3;
      duration -= data.hasChild * 3; // به ازای هر فرزند 3 ماه کسری
    }

    // کسری بسیج
    const basijReduction = Math.min(data.basijDuration / 8, 3);
    duration -= basijReduction;

    // کسری محل خدمت
    const locationOption = serviceLocationOptions.find(opt => opt.value === data.serviceLocation);
    if (locationOption) {
      duration -= locationOption.reduction;
    }

    // کسری‌های ویژه
    if (data.isElite) duration -= 4; // نخبگان
    if (data.isSupportingFamily) duration -= 2; // سرپرست خانوار
    if (data.isVeteranChild) duration -= 3; // فرزند جانباز
    if (data.isBorderGuard) duration -= 2; // مرزبانی

    // کسری مدال‌های ورزشی
    switch (data.sportsMedals) {
      case 'olympic': duration -= 4; break;
      case 'world': duration -= 3; break;
      case 'asian': duration -= 2; break;
      case 'national': duration -= 1; break;
    }

    // سایر کسری‌ها
    if (data.quranCertificate) duration -= 1; // حافظ قرآن
    duration -= data.techCertificates * 0.5; // مدارک فنی و حرفه‌ای
    if (data.voluntaryService) duration -= 1; // اعزام داوطلبانه

    // حداقل مدت خدمت
    return Math.max(12, Math.round(duration));
  };

  const onSubmit = (data: FormData) => {
    const duration = calculateServiceDuration(data);
    setCalculatedDuration(duration);
  };

  // Real-time calculation as user changes values
  useEffect(() => {
    const isFormValid = Object.keys(errors).length === 0;
    if (isFormValid) {
      const duration = calculateServiceDuration(formValues);
      setCalculatedDuration(duration);
    }
  }, [formValues, errors]);

  // تابع تبدیل ماه به سال و ماه
  const formatDuration = (months: number) => {
    if (isNaN(months)) return { years: 0, months: 0 };
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return { years, months: remainingMonths };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* سطح تحصیلات */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">سطح تحصیلات</label>
        <Controller
          name="education"
          control={control}
          render={({ field }) => (
            <Select<DurationEducationOption>
              {...field}
              options={educationOptions}
              placeholder="انتخاب کنید"
              className="service-select"
              classNamePrefix="select"
              onChange={(option) => field.onChange(option?.value)}
              value={educationOptions.find(option => option.value === field.value)}
            />
          )}
        />
        {errors.education && (
          <span className="text-sm text-red-500">{errors.education.message}</span>
        )}
      </div>

      {/* وضعیت تأهل */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400 mb-3">وضعیت تأهل</label>
        <div className="grid grid-cols-2 gap-4">
          {maritalStatusOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 rounded-xl cursor-pointer transition-all
                ${watch('maritalStatus') === option.value 
                  ? 'bg-primary-500/20 border-primary-500'
                  : 'bg-secondary-900/50 border-primary-500/10'} 
                border hover:border-primary-500/30`}
            >
              <input
                type="radio"
                {...register('maritalStatus')}
                value={option.value}
                className="hidden"
              />
              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{option.label}</span>
                  <span className="text-2xl">{option.icon}</span>
                </div>
                <div className="text-sm text-gray-400">{option.description}</div>
              </div>
            </label>
          ))}
        </div>
        {errors.maritalStatus && (
          <span className="text-sm text-red-500">{errors.maritalStatus.message}</span>
        )}
      </div>

      {/* تعداد فرزند - با UI بهبود یافته */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">تعداد فرزند</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setValue('hasChild', Math.max(0, (getValues('hasChild') || 0) - 1))}
            className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center"
          >
            -
          </button>
          <input
            type="number"
            readOnly
            value={watch('hasChild') || 0}
            className="w-20 text-center bg-secondary-900/50 border-none text-white text-lg"
          />
          <button
            type="button"
            onClick={() => setValue('hasChild', Math.min(3, (getValues('hasChild') || 0) + 1))}
            className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      {/* محل خدمت */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">محل خدمت</label>
        <Controller
          name="serviceLocation"
          control={control}
          render={({ field }) => (
            <Select<DurationLocationOption>
              options={serviceLocationOptions}
              {...field}
              placeholder="انتخاب کنید"
              className="service-select"
              classNamePrefix="select"
              onChange={(option) => field.onChange(option?.value)}
              value={serviceLocationOptions.find(option => option.value === field.value)}
            />
          )}
        />
      </div>

      {/* شرایط خاص */}
      <div className="space-y-4 bg-secondary-900/30 p-4 rounded-xl">
        <h3 className="text-white font-medium mb-4">شرایط ویژه</h3>
        
        {specialConditions.map((item) => (
          <label
            key={item.name}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all
              ${watch(item.name) ? 'bg-primary-500/20' : 'bg-secondary-900/50'}
              hover:bg-primary-500/10`}
          >
            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center
              ${watch(item.name) 
                ? 'border-primary-400 bg-primary-400' 
                : 'border-gray-500'}`}
            >
              {watch(item.name) && <span className="text-white text-sm">✓</span>}
            </div>
            <input
              type="checkbox"
              {...register(item.name)}
              className="hidden"
            />
            <div>
              <div className="text-white">{item.label}</div>
              <div className="text-sm text-gray-400">{item.description}</div>
            </div>
          </label>
        ))}
      </div>

      {/* مدال‌های ورزشی - با UI بهبود یافته */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400 mb-3">مدال‌های ورزشی</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sportMedalOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center p-4 rounded-xl cursor-pointer transition-all
                ${watch('sportsMedals') === option.value 
                  ? 'bg-primary-500/20 border-primary-500'
                  : 'bg-secondary-900/50 border-primary-500/10'} 
                border hover:border-primary-500/30`}
            >
              <input
                type="radio"
                {...register('sportsMedals')}
                value={option.value}
                className="hidden"
              />
              <div>
                <div className="text-white font-medium">{option.label}</div>
                <div className="text-sm text-gray-400">{option.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* مدارک فنی و حرفه‌ای - با UI بهبود یافته */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">تعداد مدارک فنی و حرفه‌ای</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setValue('techCertificates', Math.max(0, (getValues('techCertificates') || 0) - 1))}
            className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center
              hover:bg-primary-500/10 transition-all"
          >
            -
          </button>
          <input
            type="number"
            readOnly
            value={watch('techCertificates') || 0}
            className="w-20 text-center bg-secondary-900/50 border-none text-white text-lg"
          />
          <button
            type="button"
            onClick={() => setValue('techCertificates', Math.min(5, (getValues('techCertificates') || 0) + 1))}
            className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center
              hover:bg-primary-500/10 transition-all"
          >
            +
          </button>
          <span className="text-gray-400 text-sm">
            (هر مدرک: ۱۵ روز کسری)
          </span>
        </div>
      </div>

      {/* سایر موارد */}
      <div className="space-y-4 bg-secondary-900/30 p-4 rounded-xl">
        <h3 className="text-white font-medium mb-4">موارد تکمیلی</h3>
        
        {additionalConditions.map((item) => (
          <label
            key={item.name}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all
              ${watch(item.name) ? 'bg-primary-500/20' : 'bg-secondary-900/50'}
              hover:bg-primary-500/10`}
          >
            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center
              ${watch(item.name) 
                ? 'border-primary-400 bg-primary-400' 
                : 'border-gray-500'}`}
            >
              {watch(item.name) && <span className="text-white text-sm">✓</span>}
            </div>
            <input
              type="checkbox"
              {...register(item.name)}
              className="hidden"
            />
            <div>
              <div className="text-white">{item.label}</div>
              <div className="text-sm text-gray-400">{item.description}</div>
            </div>
          </label>
        ))}
      </div>

      {/* نمایش نتیجه بهبود یافته */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 p-6 bg-primary-500/10 rounded-xl border border-primary-500/20"
      >
        <h3 className="text-xl font-bold text-white mb-4">
          مدت خدمت شما:
        </h3>
        {calculatedDuration ? (
          <>
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {formatDuration(calculatedDuration).years > 0 && (
                <span>{formatDuration(calculatedDuration).years} سال و </span>
              )}
              <span>{formatDuration(calculatedDuration).months} ماه</span>
            </div>
            <p className="text-sm text-gray-400">
              معادل {calculatedDuration * 30} روز
            </p>
          </>
        ) : (
          <div className="text-gray-400">
            لطفاً اطلاعات فرم را تکمیل کنید
          </div>
        )}
      </motion.div>
    </form>
  );
}
