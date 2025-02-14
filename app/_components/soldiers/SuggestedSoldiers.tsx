import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import type { Soldier } from '@/app/_types/soldier';
import FadeIn from '@/app/_components/animations/FadeIn';

// داده‌های نمونه - بعداً از API دریافت می‌شود
const suggestedSoldiers: Soldier[] = [
  {
    id: '2',
    name: 'محمد حسینی',
    avatar: '/images/avatars/2.jpg',
    deploymentDate: '2024-06-01',
    province: 'تهران',
    city: 'تهران',
    padeganId: '02',
    padeganName: 'پادگان 02',
    education: 'کارشناسی ارشد',
    interests: ['موسیقی', 'برنامه‌نویسی'],
    isOnline: false,
    lastSeen: new Date().toISOString()
  },
  // ... سایر پیشنهادات
];

export default function SuggestedSoldiers() {
  return (
    <div className="bg-secondary-800/50 p-6 rounded-2xl border border-primary-500/10">
      <h2 className="text-xl font-bold text-white mb-6">پیشنهاد برای شما</h2>
      
      <div className="space-y-4">
        {suggestedSoldiers.map((soldier) => (
          <FadeIn key={soldier.id}>
            <Link href={`/soldiers/${soldier.id}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-secondary-900/50 p-4 rounded-xl border border-primary-500/10
                  hover:border-primary-500/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  {/* آواتار */}
                  <div className="relative w-12 h-12">
                    <Image
                      src={soldier.avatar || '/images/default-avatar.png'}
                      alt={soldier.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                    {soldier.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full
                        ring-2 ring-secondary-800"></div>
                    )}
                  </div>

                  {/* اطلاعات */}
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{soldier.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      <span>{soldier.padeganName}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
