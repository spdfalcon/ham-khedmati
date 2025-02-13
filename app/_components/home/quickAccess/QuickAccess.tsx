import FadeIn from '@/app/_components/animations/FadeIn';
import Link from 'next/link';
import { FaCalculator, FaCoins, FaUsers, FaHeadset } from 'react-icons/fa';

const quickLinks = [
  {
    icon: FaCalculator,
    title: 'محاسبه مدت خدمت',
    description: 'محاسبه دقیق طول دوره خدمت با احتساب کسری‌ها',
    href: '/calculate/duration',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaCoins,
    title: 'محاسبه حقوق',
    description: 'محاسبه حقوق و مزایای دوران سربازی',
    href: '/calculate/salary',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FaUsers,
    title: 'جستجوی هم‌خدمتی',
    description: 'یافتن دوستان هم‌دوره در یگان‌های مختلف',
    href: '/find-mate',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaHeadset,
    title: 'مشاوره آنلاین',
    description: 'دریافت مشاوره تخصصی از کارشناسان',
    href: '/consult',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function QuickAccess() {
  return (
    <section className="py-20 bg-secondary-800">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            دسترسی سریع به <span className="text-primary-400">خدمات اصلی</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            سریع‌ترین راه برای دسترسی به امکانات پرکاربرد هم‌خدمتی
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <FadeIn
              key={index}
              delay={index * 100}
              className="h-full"
            >
              <Link 
                href={link.href}
                className="block h-full"
              >
                <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${link.color} 
                  hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center 
                    justify-center mb-4 backdrop-blur-sm">
                    <link.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {link.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {link.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
