import { Metadata } from 'next';
import { 
  FaUserShield, 
  FaLock, 
  FaDatabase, 
  FaCookieBite, 
  FaGlobe, 
  FaUserSecret, 
  FaEnvelope
} from 'react-icons/fa';
import FadeIn from '@/app/_components/animations/FadeIn';
import type { PrivacySection } from '@/app/_types/privacy';

export const metadata: Metadata = {
  title: 'حریم خصوصی | هم‌خدمتی',
  description: 'سیاست حفظ حریم خصوصی و نحوه محافظت از اطلاعات کاربران در پلتفرم هم‌خدمتی',
};

const privacySections: PrivacySection[] = [
  {
    icon: FaUserShield,
    title: 'جمع‌آوری اطلاعات',
    description: 'چه اطلاعاتی را جمع‌آوری می‌کنیم',
    items: [
      {
        title: 'اطلاعات شخصی',
        content: 'نام، شماره تماس، ایمیل و سایر اطلاعات ضروری که هنگام ثبت‌نام ارائه می‌دهید.'
      },
      {
        title: 'اطلاعات نظام وظیفه',
        content: 'کد ملی، شماره خدمت و سایر اطلاعات مرتبط با وضعیت خدمت سربازی شما.'
      }
    ]
  },
  {
    icon: FaLock,
    title: 'امنیت اطلاعات',
    description: 'نحوه محافظت از داده‌های شما',
    items: [
      {
        title: 'رمزنگاری',
        content: 'تمامی اطلاعات حساس شما با استانداردهای پیشرفته رمزنگاری محافظت می‌شوند.'
      },
      {
        title: 'دسترسی محدود',
        content: 'فقط کارکنان مجاز با سطح دسترسی مشخص به اطلاعات کاربران دسترسی دارند.'
      }
    ]
  },
  {
    icon: FaDatabase,
    title: 'استفاده از اطلاعات',
    description: 'چگونه از اطلاعات شما استفاده می‌کنیم',
    items: [
      {
        title: 'ارائه خدمات',
        content: 'برای ارائه خدمات بهتر و شخصی‌سازی شده به شما.'
      },
      {
        title: 'ارتباطات',
        content: 'برای اطلاع‌رسانی درباره تغییرات مهم و به‌روزرسانی‌های سیستم.'
      }
    ]
  },
  {
    icon: FaCookieBite,
    title: 'کوکی‌ها',
    description: 'استفاده از کوکی‌ها در سایت',
    items: [
      {
        title: 'کوکی‌های ضروری',
        content: 'برای عملکرد اصلی سایت و حفظ تنظیمات شما استفاده می‌شوند.'
      },
      {
        title: 'کوکی‌های تحلیلی',
        content: 'برای بهبود عملکرد سایت و تجزیه و تحلیل نحوه استفاده کاربران.'
      }
    ]
  },
  {
    icon: FaGlobe,
    title: 'اشتراک‌گذاری اطلاعات',
    description: 'با چه کسانی اطلاعات را به اشتراک می‌گذاریم',
    items: [
      {
        title: 'شرکای معتبر',
        content: 'فقط با شرکای معتبر و تأیید شده که متعهد به حفظ حریم خصوصی هستند.'
      },
      {
        title: 'الزامات قانونی',
        content: 'در صورت درخواست مراجع قانونی ذی‌صلاح، طبق قوانین کشور.'
      }
    ]
  },
  {
    icon: FaUserSecret,
    title: 'حقوق کاربران',
    description: 'حقوق شما در قبال اطلاعات شخصی',
    items: [
      {
        title: 'دسترسی و اصلاح',
        content: 'شما حق دارید به اطلاعات خود دسترسی داشته و آنها را اصلاح کنید.'
      },
      {
        title: 'حذف اطلاعات',
        content: 'می‌توانید درخواست حذف اطلاعات خود را ارائه دهید.'
      }
    ]
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-secondary-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 z-0" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              حریم <span className="text-primary-400">خصوصی</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              ما متعهد به حفظ و حمایت از حریم خصوصی شما هستیم
            </p>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/30 rounded-full filter blur-3xl" />
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {privacySections.map((section, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-secondary-800/50 p-8 rounded-2xl border border-primary-500/10
                  hover:border-primary-500/30 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      <p className="text-gray-400 text-sm">{section.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="border-r-2 border-primary-500/20 pr-4">
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-secondary-800">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white mb-4">
              سوالی دارید؟
            </h2>
            <p className="text-gray-400 mb-6">
              در صورت داشتن هرگونه سوال درباره حریم خصوصی با ما در تماس باشید
            </p>
            <a
              href="mailto:privacy@hamkhedmati.ir"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl
                hover:bg-primary-600 transition-all"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>ارسال ایمیل به بخش حریم خصوصی</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
