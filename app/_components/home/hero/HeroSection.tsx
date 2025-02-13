import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaMapMarkerAlt, FaStar, FaClock } from 'react-icons/fa';
import FadeIn from '@/app/_components/animations/FadeIn';

const stats = [
  { icon: FaUsers, value: '+50,000', label: 'کاربر فعال' },
  { icon: FaMapMarkerAlt, value: '850', label: 'پادگان ثبت شده' },
  { icon: FaStar, value: '98%', label: 'رضایت کاربران' },
  { icon: FaClock, value: '24/7', label: 'پشتیبانی آنلاین' }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] bg-secondary-900 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="خدمت سربازی"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 via-secondary-900 to-secondary-900" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Text */}
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-primary-400">هم‌خدمتی</span>
              <br />
              <span className="text-white">همراه شما در خدمت سربازی</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              اولین و بزرگترین جامعه مجازی سربازان ایران
              <br />
              با خدمات هوشمند و پشتیبانی ۲۴ ساعته
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/register"
                className="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold
                  hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary-500/20
                  hover:-translate-y-1"
              >
                شروع رایگان
              </Link>
              <Link
                href="/calculate"
                className="bg-white/10 text-white px-8 py-4 rounded-xl backdrop-blur-sm
                  hover:bg-white/20 transition-all border border-white/20
                  hover:-translate-y-1"
              >
                محاسبه خدمت
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <FadeIn
                  key={index}
                  delay={index * 100}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                    hover:border-primary-500/30 transition-all group"
                >
                  <div className="bg-primary-500/10 w-16 h-16 rounded-xl mx-auto flex items-center justify-center mb-4
                    group-hover:bg-primary-500/20 transition-all">
                    <stat.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
    </section>
  );
}
