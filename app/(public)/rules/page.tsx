import { Metadata } from 'next';
import FadeIn from '@/app/_components/animations/FadeIn';
import { FaUserShield, FaLock, FaHandshake, FaExclamationTriangle } from 'react-icons/fa';
import type { RuleSection } from '@/app/_types/rules';

export const metadata: Metadata = {
  title: 'قوانین و مقررات | هم‌خدمتی',
  description: 'قوانین و مقررات استفاده از پلتفرم هم‌خدمتی - جامعه مجازی سربازان ایران',
};

const ruleSections: RuleSection[] = [
  {
    icon: FaUserShield,
    title: 'قوانین عضویت',
    description: 'شرایط و ضوابط عضویت در پلتفرم هم‌خدمتی',
    rules: [
      {
        title: 'احراز هویت',
        content: 'کاربران باید اطلاعات صحیح و واقعی خود را در هنگام ثبت‌نام ارائه دهند.'
      },
      {
        title: 'محدودیت سنی',
        content: 'حداقل سن برای عضویت در سایت ۱۸ سال تمام است.'
      },
      {
        title: 'مسئولیت حساب کاربری',
        content: 'هر کاربر مسئول حفظ امنیت و محرمانگی اطلاعات حساب خود است.'
      }
    ]
  },
  {
    icon: FaLock,
    title: 'حریم خصوصی',
    description: 'نحوه حفاظت از اطلاعات شخصی کاربران',
    rules: [
      {
        title: 'محرمانگی اطلاعات',
        content: 'تمامی اطلاعات شخصی کاربران محرمانه تلقی شده و با بالاترین استانداردهای امنیتی محافظت می‌شوند.'
      },
      {
        title: 'اشتراک‌گذاری اطلاعات',
        content: 'اطلاعات کاربران بدون رضایت آنها با هیچ شخص یا سازمان ثالثی به اشتراک گذاشته نمی‌شود.'
      }
    ]
  },
  {
    icon: FaHandshake,
    title: 'تعهدات کاربران',
    description: 'مسئولیت‌های کاربران در قبال استفاده از پلتفرم',
    rules: [
      {
        title: 'رعایت احترام متقابل',
        content: 'کاربران موظف به رعایت احترام متقابل و پرهیز از هرگونه توهین یا تخریب هستند.'
      },
      {
        title: 'محتوای نامناسب',
        content: 'انتشار هرگونه محتوای غیراخلاقی، غیرقانونی یا مغایر با قوانین کشور ممنوع است.'
      }
    ]
  },
  {
    icon: FaExclamationTriangle,
    title: 'تخلفات و مجازات‌ها',
    description: 'پیامدهای نقض قوانین و مقررات سایت',
    rules: [
      {
        title: 'اخطار و تعلیق',
        content: 'در صورت مشاهده تخلف، ابتدا اخطار داده شده و در صورت تکرار، حساب کاربری تعلیق می‌شود.'
      },
      {
        title: 'مسدودسازی دائم',
        content: 'تخلفات جدی منجر به مسدودسازی دائمی حساب کاربری خواهند شد.'
      }
    ]
  }
];

export default function RulesPage() {
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
              قوانین و <span className="text-primary-400">مقررات</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              لطفاً قبل از استفاده از خدمات هم‌خدمتی، قوانین و مقررات را با دقت مطالعه فرمایید
            </p>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/30 rounded-full filter blur-3xl" />
      </section>

      {/* Rules Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {ruleSections.map((section, idx) => (
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
                    {section.rules.map((rule, ruleIdx) => (
                      <div key={ruleIdx} className="border-r-2 border-primary-500/20 pr-4">
                        <h3 className="text-lg font-bold text-white mb-2">{rule.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {rule.content}
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
    </div>
  );
}
