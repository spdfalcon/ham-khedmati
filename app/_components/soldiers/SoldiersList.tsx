'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import type { Soldier, SoldierFilter } from '@/app/_types/soldier';
import FadeIn from '@/app/_components/animations/FadeIn';

interface SoldiersListProps {
  filters: SoldierFilter;
}

// داده‌های نمونه - بعداً از API دریافت می‌شود
const dummySoldiers: Soldier[] = [
  {
    id: '1',
    name: 'علی محمدی',
    avatar: '/images/avatars/1.jpg',
    deploymentDate: '2024-06-01',
    province: 'تهران',
    city: 'تهران',
    padeganId: '01',
    padeganName: 'پادگان 01',
    education: 'کارشناسی',
    interests: ['ورزش', 'مطالعه'],
    isOnline: true,
    lastSeen: new Date().toISOString()
  },
  // ... سایر داده‌های نمونه
];

export default function SoldiersList({ filters }: SoldiersListProps) {
  const [soldiers, setSoldiers] = useState<Soldier[]>(dummySoldiers);
  const [isLoading, setIsLoading] = useState(false);

  // در اینجا می‌توانید از API برای دریافت لیست سربازان استفاده کنید
  useEffect(() => {
    setIsLoading(true);
    // شبیه‌سازی درخواست API
    setTimeout(() => {
      setSoldiers(dummySoldiers);
      setIsLoading(false);
    }, 1000);
  }, [filters]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((n) => (
          <div key={n} className="animate-pulse">
            <div className="h-40 bg-secondary-800/50 rounded-2xl"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {soldiers.map((soldier) => (
        <FadeIn key={soldier.id}>
          <Link href={`/soldiers/${soldier.id}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-secondary-800/50 p-4 rounded-2xl border border-primary-500/10
                hover:border-primary-500/30 transition-all"
            >
              <div className="flex gap-4">
                {/* آواتار */}
                <div className="relative w-24 h-24">
                  <Image
                    src={soldier.avatar || '/images/default-avatar.png'}
                    alt={soldier.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                  {soldier.isOnline && (
                    <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full
                      ring-2 ring-secondary-800"></div>
                  )}
                </div>

                {/* اطلاعات */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{soldier.name}</h3>
                    <span className="text-sm text-gray-400">
                      {new Date(soldier.deploymentDate).toLocaleDateString('fa-IR')}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="w-4 h-4 text-primary-400" />
                      <span>{soldier.padeganName}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaGraduationCap className="w-4 h-4 text-primary-400" />
                      <span>{soldier.education}</span>
                    </div>
                  </div>

                  {/* علایق */}
                  <div className="flex gap-2 mt-3">
                    {soldier.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-primary-500/10 text-primary-400 rounded-lg"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
