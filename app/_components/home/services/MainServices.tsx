import Link from 'next/link';
import FadeIn from '@/app/_components/animations/FadeIn';
import { 
  FaUserFriends, 
  FaCalculator, 
  FaBook, 
  FaComments,
  FaMapMarkedAlt, 
  FaHeadset 
} from 'react-icons/fa';

const services = [
  {
    icon: FaUserFriends,
    title: 'هم‌خدمتی‌یابی',
    description: 'پیدا کردن دوستان هم‌دوره در یگان‌های مختلف',
    href: '/soldiers/find',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaCalculator,
    title: 'محاسبات خدمت',
    description: 'محاسبه دقیق حقوق، کسری و مدت خدمت',
    href: '/calculate',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: FaBook,
    title: 'راهنمای جامع',
    description: 'همه چیز درباره قوانین و مقررات خدمت',
    href: '/guide',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaComments,
    title: 'انجمن گفتگو',
    description: 'تبادل تجربیات و گفتگو با سایر کاربران',
    href: '/forum',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: FaMapMarkedAlt,
    title: 'اطلاعات پادگان‌ها',
    description: 'نقشه و اطلاعات کامل پادگان‌های کشور',
    href: '/padegans',
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: FaHeadset,
    title: 'مشاوره تخصصی',
    description: 'مشاوره آنلاین با کارشناسان مجرب',
    href: '/consult',
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

export default function MainServices() {
  return (
    <section className="py-20 bg-secondary-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            خدمات <span className="text-primary-400">هم‌خدمتی</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            تمام خدمات مورد نیاز شما در یک پلتفرم جامع و هوشمند
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Link href={service.href}>
                <div className={`group h-full p-8 rounded-2xl bg-gradient-to-br ${service.gradient}
                  hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 text-sm text-white/80 flex items-center gap-2
                    group-hover:translate-x-2 transition-transform">
                    <span>اطلاعات بیشتر</span>
                    <span>←</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}