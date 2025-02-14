import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import DatePicker from '@/app/_components/common/DatePicker';
import { SoldierFilter } from '@/app/_types/soldier';

interface SearchFiltersProps {
  activeFilters: SoldierFilter;
  onFilterChange: (filters: SoldierFilter) => void;
}

export default function SearchFilters({ activeFilters }: SearchFiltersProps) {
  const { control } = useForm({
    defaultValues: activeFilters
  });

  return (
    <div className="bg-secondary-800/50 p-6 rounded-2xl border border-primary-500/10">
      <h2 className="text-xl font-bold text-white mb-6">فیلترهای جستجو</h2>
      
      <div className="space-y-6">
        {/* تاریخ اعزام */}
        <div className="space-y-2">
          <label className="block text-sm text-gray-400">تاریخ اعزام</label>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="deploymentDateRange.start"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="از تاریخ"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name="deploymentDateRange.end"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="تا تاریخ"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        {/* استان و شهر */}
        <div className="space-y-2">
          <label className="block text-sm text-gray-400">محل خدمت</label>
          <div className="space-y-4">
            <Controller
              name="province"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="انتخاب استان"
                  options={[]} // از API دریافت شود
                  className="service-select"
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="انتخاب شهر"
                  options={[]} // بر اساس استان انتخابی
                  className="service-select"
                />
              )}
            />
          </div>
        </div>

        {/* سایر فیلترها مثل پادگان، تحصیلات و علایق */}
      </div>
    </div>
  );
}
