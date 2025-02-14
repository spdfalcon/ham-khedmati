'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaGraduationCap, FaComments, FaShareAlt, FaFlag } from 'react-icons/fa';
import ProfileTabs from './ProfileTabs';
import type { Soldier } from '@/app/_types/soldier';

// بعداً از API دریافت می‌شود
const dummySoldier: Soldier = {
  id: '1',
  name: 'علی محمدی',
  avatar: '/images/avatars/1.jpg',
  deploymentDate: '2024-06-01',
  province: 'تهران',
  city: 'تهران',
  padeganId: '01',
  padeganName: 'مرکز آموزش 01 امام علی (ع)',
  education: 'کارشناسی کامپیوتر',
  interests: ['برنامه‌نویسی', 'موسیقی', 'ورزش'],
  bio: 'دانشجوی رشته کامپیوتر و علاقه‌مند به تکنولوژی. در حال گذراندن دوره آموزشی در یگان امام علی (ع).',
  isOnline: true,
  lastSeen: new Date().toISOString()
};

interface SoldierProfileWrapperProps {
  soldierId: string;
}

export default function SoldierProfileWrapper({ soldierId }: SoldierProfileWrapperProps) {
  const [soldier, setSoldier] = useState<Soldier | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی دریافت اطلاعات از API
    setTimeout(() => {
      setSoldier(dummySoldier);
      setIsLoading(false);
    }, 1000);
  }, [soldierId]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-64 bg-secondary-800/50 rounded-2xl"></div>
          <div className="h-32 bg-secondary-800/50 rounded-xl"></div>
          <div className="h-96 bg-secondary-800/50 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (!soldier) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-gray-400">
        کاربر مورد نظر یافت نشد
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="relative h-[300px] rounded-3xl overflow-hidden mb-8">
        {/* Cover Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20">
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>

        {/* Profile Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-end gap-6">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={'/'}
                  alt={soldier.name}
                  fill
                  className="object-cover"
                />
              </div>
              {soldier.isOnline && (
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full 
                  ring-4 ring-white"></div>
              )}
            </motion.div>

            {/* Info */}
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-white mb-2"
              >
                {soldier.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap gap-4 text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4 text-primary-400" />
                  <span>تاریخ اعزام: {new Date(soldier.deploymentDate).toLocaleDateString('fa-IR')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary-400" />
                  <span>{soldier.padeganName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="w-4 h-4 text-primary-400" />
                  <span>{soldier.education}</span>
                </div>
              </motion.div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 
                  transition-colors flex items-center gap-2"
              >
                <FaComments className="w-5 h-5" />
                <span>ارسال پیام</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-secondary-800/50 text-white rounded-xl
                  hover:bg-secondary-700/50 transition-colors"
              >
                <FaShareAlt className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-secondary-800/50 text-white rounded-xl
                  hover:bg-secondary-700/50 transition-colors"
              >
                <FaFlag className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Content */}
      <ProfileTabs soldier={soldier} />
    </div>
  );
}
