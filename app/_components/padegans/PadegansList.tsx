'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import FadeIn from '@/app/_components/animations/FadeIn';
import StarRating from './StarRating';
import DeploymentCountdown from './DeploymentCountdown';
import type { Padegan } from '@/app/_types/padegan';

// دیتای موقت برای نمایش
const padegans: Padegan[] = [
  {
    id: '1',
    name: 'پادگان ۰۱ امام علی (ع)',
    slug: 'imam-ali-01',
    city: 'تهران',
    province: 'تهران',
    type: 'آموزشی',
    image: '/images/padegans/01.jpg',
    rating: 4.2,
    totalRatings: 156,
    description: 'مرکز آموزش رزم مقدماتی',
    nextDeploymentDate: '2024-04-01',
    upcomingDeployments: 245,
    features: ['خوابگاه مجهز', 'سالن ورزشی', 'کتابخانه']
  },
  {
    id: '2',
    name: 'مرکز آموزش شهید باهنر',
    slug: 'shahid-bahonar',
    city: 'اصفهان',
    province: 'اصفهان',
    type: 'آموزشی',
    image: '/images/padegans/02.jpg',
    rating: 4.5,
    totalRatings: 203,
    description: 'مرکز تخصصی آموزش مخابرات',
    nextDeploymentDate: '2024-03-15',
    upcomingDeployments: 180,
    features: ['آموزش تخصصی', 'امکانات رفاهی', 'فضای سبز']
  }
];

export default function PadegansList() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      {/* جستجو و فیلتر */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="جستجوی پادگان..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-secondary-800/50 rounded-xl border border-primary-500/10
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-3 bg-secondary-800/50 rounded-xl border border-primary-500/10
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all"
          >
            <option value="all">همه پادگان‌ها</option>
            <option value="training">آموزشی</option>
            <option value="operational">عملیاتی</option>
          </select>
        </div>
      </div>

      {/* لیست پادگان‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {padegans.map((padegan) => (
          <FadeIn key={padegan.id}>
            <Link href={`/padegans/${padegan.slug}`}>
              <div className="bg-secondary-800/50 rounded-2xl overflow-hidden border border-primary-500/10 
                hover:border-primary-500/30 transition-all group">
                {/* تصویر پادگان */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={padegan.image}
                    alt={padegan.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 to-transparent" />
                </div>

                {/* اطلاعات پادگان */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {padegan.name}
                    </h3>
                    <StarRating rating={padegan.rating} size="sm" />
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>{padegan.city}، {padegan.province}</span>
                  </div>

                  {/* روزشمار اعزام */}
                  <DeploymentCountdown date={padegan.nextDeploymentDate} />

                  {/* تعداد افراد در انتظار اعزام */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary-500/10">
                    <div className="flex items-center gap-2 text-primary-400">
                      <FaUsers className="w-5 h-5" />
                      <span>
                        <span className="font-bold">{padegan.upcomingDeployments}</span>
                        <span className="text-sm text-gray-400"> نفر در انتظار اعزام</span>
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {padegan.totalRatings} نظر
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
