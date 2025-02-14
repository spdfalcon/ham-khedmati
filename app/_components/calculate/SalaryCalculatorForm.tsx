'use client';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Select from 'react-select';
import { FaSave } from 'react-icons/fa';
import FadeIn from '../animations/FadeIn';
import type { SalaryFormData, SalaryBreakdown, ServiceBenefitOption, EducationOption, LocationOption, RoleOption } from '@/app/_types/calculate';

const educationOptions: EducationOption[] = [
  { value: 'diploma', label: 'دیپلم', baseSalary: 6_500_000 },
  { value: 'associate', label: 'کاردانی', baseSalary: 7_200_000 },
  { value: 'bachelor', label: 'کارشناسی', baseSalary: 8_000_000 },
  { value: 'master', label: 'کارشناسی ارشد', baseSalary: 8_800_000 },
  { value: 'phd', label: 'دکتری', baseSalary: 9_500_000 }
] as const;

const locationOptions: LocationOption[] = [
  { value: 'capital', label: 'مرکز استان', multiplier: 1 },
  { value: 'city', label: 'شهرستان', multiplier: 1.1 },
  { value: 'deprived', label: 'مناطق محروم', multiplier: 1.2 },
  { value: 'operational', label: 'مناطق عملیاتی', multiplier: 1.3 }
];

const roleOptions: RoleOption[] = [
  { value: 'normal', label: 'سرباز عادی', multiplier: 1 },
  { value: 'combat', label: 'سرباز رزمی', multiplier: 1.2 },
  { value: 'special', label: 'نیروی تخصصی', multiplier: 1.3 }
];

const serviceBenefits: ServiceBenefitOption[] = [
  { name: 'isBorderGuard', label: 'خدمت در مرزبانی', bonus: '۲۵٪ حقوق پایه' },
  { name: 'isOperationalZone', label: 'منطقه عملیاتی', bonus: '۳۵٪ حقوق پایه' }
];

const formSchema = z.object({
  education: z.string().min(1, 'انتخاب سطح تحصیلات الزامی است'),
  maritalStatus: z.enum(['single', 'married']),
  childCount: z.number().min(0).max(3),
  serviceLocation: z.string().min(1, 'انتخاب محل خدمت الزامی است'),
  role: z.enum(['normal', 'combat', 'special']),
  isBorderGuard: z.boolean(),
  isOperationalZone: z.boolean(),
  extraHours: z.number().min(0).max(150),
  skillCertificates: z.number().min(0).max(5)
});

export default function SalaryCalculatorForm() {
  const [calculatedSalary, setCalculatedSalary] = useState<SalaryBreakdown | null>(null);
  
  const { register, control, watch, setValue, formState: {  } } = useForm<SalaryFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childCount: 0,
      extraHours: 0,
      skillCertificates: 0,
      role: 'normal',
      isBorderGuard: false,
      isOperationalZone: false
    }
  });

  // فقط فیلدهای مورد نیاز برای محاسبه رو watch می‌کنیم
  const education = watch('education');
  const maritalStatus = watch('maritalStatus');
  const childCount = watch('childCount');
  const serviceLocation = watch('serviceLocation');
  const role = watch('role');
  const isBorderGuard = watch('isBorderGuard');
  const isOperationalZone = watch('isOperationalZone');
  const extraHours = watch('extraHours');
  const skillCertificates = watch('skillCertificates');

  useEffect(() => {
    // فقط اگر فیلدهای اصلی پر شده باشند محاسبه انجام می‌شود
    if (education && serviceLocation && maritalStatus && role) {
      const salary = calculateSalary({
        education,
        maritalStatus,
        childCount,
        serviceLocation,
        role,
        isBorderGuard,
        isOperationalZone,
        extraHours,
        skillCertificates
      });
      setCalculatedSalary(salary);
    }
  }, [
    education,
    maritalStatus,
    childCount,
    serviceLocation,
    role,
    isBorderGuard,
    isOperationalZone,
    extraHours,
    skillCertificates
  ]);

  const calculateSalary = (data: SalaryFormData): SalaryBreakdown => {
    const baseEducation = educationOptions.find(edu => edu.value === data.education);
    const baseSalary = baseEducation?.baseSalary || 6_500_000;
    
    // محاسبه حقوق پایه و مزایا
    const educationBonus = 0; // حقوق پایه بر اساس تحصیلات محاسبه شده
    const maritalBonus = data.maritalStatus === 'married' ? baseSalary * 0.2 : 0;
    const childrenBonus = data.childCount * (baseSalary * 0.1);
    
    const locationMultiplier = locationOptions.find(loc => loc.value === data.serviceLocation)?.multiplier || 1;
    const locationBonus = baseSalary * (locationMultiplier - 1);
    
    const roleMultiplier = roleOptions.find(r => r.value === data.role)?.multiplier || 1;
    const roleBonus = baseSalary * (roleMultiplier - 1);
    
    const operationalBonus = data.isOperationalZone ? baseSalary * 0.25 : 0;
    const extraHoursBonus = data.extraHours * 100_000; // هر ساعت اضافه‌کاری
    const skillsBonus = data.skillCertificates * 300_000;

    const totalSalary = baseSalary + educationBonus + maritalBonus + childrenBonus + 
                       locationBonus + roleBonus + operationalBonus + extraHoursBonus + 
                       skillsBonus;

    return {
      baseSalary,
      educationBonus,
      maritalBonus,
      childrenBonus,
      locationBonus,
      roleBonus,
      operationalBonus,
      extraHoursBonus,
      skillsBonus,
      totalSalary
    };
  };

  return (
    <form className="space-y-6">
      {/* تحصیلات و حقوق پایه */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm text-gray-400">سطح تحصیلات</label>
          <Controller
            name="education"
            control={control}
            render={({ field }) => (
              <Select<EducationOption>
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
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-gray-400">منطقه خدمتی</label>
          <Controller
            name="serviceLocation"
            control={control}
            render={({ field }) => (
              <Select<LocationOption>
                {...field}
                options={locationOptions}
                placeholder="انتخاب کنید"
                className="service-select"
                classNamePrefix="select"
                onChange={(option) => field.onChange(option?.value)}
                value={locationOptions.find(option => option.value === field.value)}
              />
            )} 
          />
        </div>
      </div>

      {/* وضعیت تاهل */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400 mb-3">وضعیت تأهل</label>
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: 'single', label: 'مجرد', icon: '👤' },
            { value: 'married', label: 'متأهل', icon: '👨‍👩‍👦' }
          ].map((option) => (
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
              <div className="w-full text-center">
                <div className="text-2xl mb-2">{option.icon}</div>
                <div className="text-white">{option.label}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* تعداد فرزند */}
      {watch('maritalStatus') === 'married' && (
        <div className="space-y-2">
          <label className="block text-sm text-gray-400">تعداد فرزندان</label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setValue('childCount', Math.max(0, (watch('childCount') || 0) - 1))}
              className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center"
            >
              -
            </button>
            <input
              type="number"
              readOnly
              value={watch('childCount') || 0}
              className="w-20 text-center bg-secondary-900/50 border-none text-white text-lg"
            />
            <button
              type="button"
              onClick={() => setValue('childCount', Math.min(3, (watch('childCount') || 0) + 1))}
              className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* نوع خدمت */}
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">نوع خدمت</label>
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select<RoleOption>
              {...field}
              options={roleOptions}
              placeholder="انتخاب کنید"
              className="service-select"
              classNamePrefix="select"
              onChange={(option) => field.onChange(option?.value)}
              value={roleOptions.find(option => option.value === field.value)}
            />
          )}
        />
      </div>

      {/* شرایط ویژه */}
      <div className="space-y-4 bg-secondary-900/30 p-4 rounded-xl">
        <h3 className="text-white font-medium mb-4">شرایط ویژه</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {serviceBenefits.map((condition) => (
            <label
              key={condition.name}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all
                ${watch(condition.name) ? 'bg-primary-500/20' : 'bg-secondary-900/50'}
                hover:bg-primary-500/10`}
            >
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center
                ${watch(condition.name) ? 'border-primary-400 bg-primary-400' : 'border-gray-500'}`}
              >
                {watch(condition.name) && <span className="text-white text-sm">✓</span>}
              </div>
              <input
                type="checkbox"
                {...register(condition.name)}
                className="hidden"
              />
              <div>
                <div className="text-white">{condition.label}</div>
                <div className="text-sm text-gray-400">{condition.bonus}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* اضافه کار */}
      <div className="space-y-4 bg-secondary-900/30 p-4 rounded-xl">
        <label className="flex items-center justify-between">
          <span className="text-white">ساعات اضافه کاری در ماه</span>
          <span className="text-sm text-gray-400">(هر ساعت: ۱۰۰,۰۰۰ تومان)</span>
        </label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setValue('extraHours', Math.max(0, (watch('extraHours') || 0) - 5))}
            className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center"
          >
            -
          </button>
          <input
            type="number"
            {...register('extraHours', { valueAsNumber: true })}
            className="w-20 text-center bg-secondary-900/50 border-none text-white text-lg"
          />
          <button
            type="button"
            onClick={() => setValue('extraHours', Math.min(150, (watch('extraHours') || 0) + 5))}
            className="w-10 h-10 rounded-xl bg-secondary-900/50 text-white flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      {/* نمایش حقوق در لحظه */}
      <div className="sticky bottom-4 left-0 right-0 z-50">
        <FadeIn className="bg-secondary-800/95 backdrop-blur-md border border-primary-500/20 p-4 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">حقوق تخمینی:</span>
            <span className="text-2xl font-bold text-primary-400">
              {calculatedSalary 
                ? new Intl.NumberFormat('fa-IR').format(calculatedSalary.totalSalary) + ' تومان'
                : 'در حال محاسبه...'}
            </span>
          </div>
        </FadeIn>
      </div>

      {/* نمایش نتیجه کامل */}
      {calculatedSalary && (
        <FadeIn className="mt-8 p-6 bg-primary-500/10 rounded-xl border border-primary-500/20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">جزئیات حقوق ماهانه</h3>
            <button
              type="button"
              onClick={() => {/* TODO: Save to profile */}}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 rounded-lg text-white hover:bg-primary-600 transition-all"
            >
              <FaSave className="w-4 h-4" />
              <span>ذخیره در پروفایل</span>
            </button>
          </div>

          <div className="space-y-3">
            <SalaryItem label="حقوق پایه" amount={calculatedSalary.baseSalary} />
            <SalaryItem label="حق تأهل" amount={calculatedSalary.maritalBonus} />
            <SalaryItem label="حق اولاد" amount={calculatedSalary.childrenBonus} />
            <SalaryItem label="حق منطقه" amount={calculatedSalary.locationBonus} />
            <SalaryItem label="فوق‌العاده شغل" amount={calculatedSalary.roleBonus} />
            <SalaryItem label="فوق‌العاده عملیاتی" amount={calculatedSalary.operationalBonus} />
            <SalaryItem label="اضافه کار" amount={calculatedSalary.extraHoursBonus} />
            <SalaryDivider />
            <SalaryItem 
              label="جمع کل" 
              amount={calculatedSalary.totalSalary} 
              className="text-lg font-bold text-primary-400"
            />
          </div>
        </FadeIn>
      )}
    </form>
  );
}

interface SalaryItemProps {
  label: string;
  amount: number;
  className?: string;
}

function SalaryItem({ label, amount, className = '' }: SalaryItemProps) {
  return (
    <div className={`flex justify-between py-2 border-b border-primary-500/10 ${className}`}>
      <span className="text-gray-400">{label}:</span>
      <span className="text-white">{new Intl.NumberFormat('fa-IR').format(amount)} تومان</span>
    </div>
  );
}

function SalaryDivider() {
  return <div className="border-b-2 border-primary-500/20 my-4" />;
}
