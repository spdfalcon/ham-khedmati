'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaUsers,} from 'react-icons/fa';
import StarRating from './StarRating';
import DeploymentCountdown from './DeploymentCountdown';
import PadeganComments from './PadeganComments';
import PadeganMap from './PadeganMap';
import FadeIn from '@/app/_components/animations/FadeIn';
import type { Padegan } from '@/app/_types/padegan';

interface PadeganDetailsProps {
  slug: string;
}

const tabs = [
  { id: 'info', label: 'اطلاعات کلی' },
  { id: 'comments', label: 'نظرات و تجربیات' },
  { id: 'map', label: 'نقشه و مسیریابی' },
  { id: 'news', label: 'اخبار و اطلاعیه‌ها' },
];

export default function PadeganDetails({ }: PadeganDetailsProps) {
  const [activeTab, setActiveTab] = useState('info');
  
  // در اینجا از API داده‌ها را دریافت می‌کنیم
  const padegan: Padegan = {
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
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
        <Image
          src={padegan.image}
          alt={padegan.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">{padegan.name}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>{padegan.city}، {padegan.province}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="w-5 h-5" />
                <span>{padegan.upcomingDeployments} نفر در نوبت اعزام</span>
              </div>
              <div className="flex items-center gap-2">
                <StarRating rating={padegan.rating} />
                <span>({padegan.totalRatings} نظر)</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap
              ${activeTab === tab.id 
                ? 'bg-primary-500 text-white' 
                : 'bg-secondary-800 text-gray-400 hover:bg-primary-500/10'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-secondary-800/50 rounded-2xl p-6 border border-primary-500/10">
        {activeTab === 'info' && (
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {/* اطلاعات کلی */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">درباره پادگان</h2>
                <p className="text-gray-400 leading-relaxed">
                  {padegan.description}
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">امکانات و خدمات</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {padegan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* روزشمار و آمار */}
              <div className="space-y-6">
                <div className="bg-secondary-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">اعزام بعدی</h3>
                  <DeploymentCountdown date={padegan.nextDeploymentDate} />
                </div>

                {/* آمار و ارقام */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary-900/50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-primary-400 mb-2">
                      {padegan.upcomingDeployments}
                    </div>
                    <div className="text-sm text-gray-400">نفر در انتظار اعزام</div>
                  </div>
                  <div className="bg-secondary-900/50 rounded-xl p-6">
                    <div className="text-3xl font-bold text-primary-400 mb-2">
                      {padegan.totalRatings}
                    </div>
                    <div className="text-sm text-gray-400">نظر ثبت شده</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {activeTab === 'comments' && (
          <PadeganComments padeganId={padegan.id} />
        )}

        {activeTab === 'map' && (
          <PadeganMap padegan={padegan} />
        )}
        
        {activeTab === 'news' && (
          <div className="text-center text-gray-400 py-12">
            به زودی...
          </div>
        )}
      </div>
    </div>
  );
}
