import { FaUserGraduate, FaMapMarkedAlt } from 'react-icons/fa';
import type { Soldier } from '@/app/_types/soldier';

interface AboutTabProps {
  soldier: Soldier;
}

export default function AboutTab({ soldier }: AboutTabProps) {
  return (
    <div className="p-6 space-y-8">
      {/* بیوگرافی */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">بیوگرافی</h3>
        <p className="text-gray-400 leading-relaxed">{soldier.bio}</p>
      </div>

      {/* اطلاعات تحصیلی */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">اطلاعات تحصیلی</h3>
        <div className="flex items-center gap-3 text-gray-400">
          <FaUserGraduate className="w-5 h-5 text-primary-400" />
          <span>{soldier.education}</span>
        </div>
      </div>

      {/* محل خدمت */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">محل خدمت</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-gray-400">
            <FaMapMarkedAlt className="w-5 h-5 text-primary-400" />
            <span>{soldier.padeganName}</span>
          </div>
          <div className="text-sm text-gray-500">
            {soldier.city}، {soldier.province}
          </div>
        </div>
      </div>

      {/* علایق و مهارت‌ها */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">علایق و مهارت‌ها</h3>
        <div className="flex flex-wrap gap-2">
          {soldier.interests.map((interest, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-xl text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
