import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface CustomDatePickerProps {
  value?: string;
  onChange: (date: string) => void;
  placeholder?: string;
}

export default function CustomDatePicker({ value, onChange, placeholder }: CustomDatePickerProps) {
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      placeholder={placeholder}
      value={value}
      onChange={(date) => {
        if (date?.isValid) {
          onChange(date.format('YYYY-MM-DD'));
        }
      }}
      inputClass="w-full px-4 py-2 bg-secondary-900/50 rounded-xl border border-primary-500/10
        focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
        text-white outline-none transition-all"
    />
  );
}
