import { Metadata } from "next";
import { FaSearch } from "react-icons/fa";
import FadeIn from "@/app/_components/animations/FadeIn";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "سوالات متداول | هم‌خدمتی",
  description: "پاسخ به سوالات رایج شما درباره خدمت سربازی و خدمات هم‌خدمتی",
};

const faqCategories = [
  {
    title: "خدمت سربازی",
    items: [
      {
        question: "شرایط معافیت تحصیلی چیست؟",
        answer:
          "معافیت تحصیلی برای دانشجویان مقاطع مختلف با شرایط سنی متفاوت ارائه می‌شود. برای مثال در مقطع کارشناسی تا سن 24 سال امکان استفاده از معافیت تحصیلی وجود دارد.",
        link: "/guide/education-exemption",
      },
      {
        question: "حقوق سربازی چگونه محاسبه می‌شود؟",
        answer:
          "حقوق سربازی براساس مدرک تحصیلی، محل خدمت و وضعیت تأهل محاسبه می‌شود. می‌توانید با استفاده از ماشین حساب سایت، حقوق خود را محاسبه کنید.",
        link: "/calculate/salary",
      },
    ],
  },
  {
    title: "کسری خدمت",
    items: [
      {
        question: "چه مواردی شامل کسری خدمت می‌شود؟",
        answer:
          "کسری خدمت شامل مواردی مانند مناطق عملیاتی، ایثارگری، تأهل، فرزند و... می‌شود. برای اطلاعات دقیق‌تر به صفحه محاسبه کسری مراجعه کنید.",
        link: "/calculate/deficit",
      },
      {
        question: "کسری مناطق عملیاتی چگونه محاسبه می‌شود؟",
        answer:
          "هر ماه خدمت در مناطق عملیاتی درجه 1، معادل دو ماه کسری محسوب می‌شود. برای مناطق درجه 2 و 3 ضرایب متفاوتی اعمال می‌شود.",
        link: "/guide/operation-areas",
      },
    ],
  },
  {
    title: "امریه و انتقالی",
    items: [
      {
        question: "شرایط درخواست امریه چیست؟",
        answer:
          "برای درخواست امریه باید شرایطی مانند معدل، رشته تحصیلی مرتبط و سایر موارد را داشته باشید. جزئیات کامل در راهنمای امریه موجود است.",
        link: "/guide/amrie",
      },
      {
        question: "انتقالی بین یگان‌ها چه شرایطی دارد؟",
        answer:
          "انتقالی معمولاً براساس شرایطی مانند وضعیت تأهل، بیماری یا مشکلات خانوادگی امکان‌پذیر است.",
        link: "/guide/transfer",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              سوالات <span className="text-primary-400">متداول</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              پاسخ سوالات پرتکرار شما درباره خدمت سربازی و خدمات هم‌خدمتی
            </p>

            {/* Search Box */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 right-4 flex items-center">
                <FaSearch className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="جستجو در سوالات متداول..."
                className="w-full px-12 py-4 bg-secondary-800/50 rounded-xl border border-primary-500/10
                  focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
                  text-white outline-none transition-all"
              />
            </div>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/30 rounded-full filter blur-3xl" />
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {category.title}
                  </h2>
                  <FaqAccordion items={category.items} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
