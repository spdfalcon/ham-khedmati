'use client';
import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/app/_components/animations/FadeIn';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'شرایط امریه سربازی چیست؟',
    answer: 'برای دریافت امریه باید دارای مدرک تحصیلی مرتبط، معدل بالای ۱۴ و عدم غیبت باشید. همچنین سازمان مورد نظر باید سهمیه امریه داشته باشد.',
    category: 'امریه'
  },
  {
    question: 'حقوق سربازی چگونه محاسبه می‌شود؟',
    answer: 'حقوق سربازی براساس مدرک تحصیلی، محل خدمت، تأهل و مناطق عملیاتی محاسبه می‌شود. با استفاده از ماشین حساب سایت می‌توانید مبلغ دقیق را محاسبه کنید.',
    category: 'حقوق'
  },
  {
    question: 'مدت زمان دوره آموزشی چقدر است؟',
    answer: 'دوره آموزشی معمولاً ۲ ماه است، اما برای نیروهای مختلف متفاوت است. برای اطلاعات دقیق‌تر به بخش راهنمای خدمت مراجعه کنید.',
    category: 'آموزشی'
  },
  {
    question: 'شرایط کسری خدمت چیست؟',
    answer: 'کسری خدمت شامل مواردی مثل تأهل، فرزند، مناطق محروم و ایثارگری می‌شود. جزئیات کامل در بخش محاسبه کسری قابل مشاهده است.',
    category: 'کسری'
  }
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary-800">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            سوالات <span className="text-primary-400">متداول</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            پاسخ سوالات پرتکرار شما درباره خدمت سربازی
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="bg-secondary-900 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-right"
                >
                  <span className="text-lg text-white font-medium">
                    {faq.question}
                  </span>
                  <FaChevronDown 
                    className={`w-5 h-5 text-primary-400 transition-transform duration-300
                      ${openItem === index ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300
                  ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-4 pt-0 text-gray-400 leading-relaxed border-t border-secondary-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-500 transition-colors"
          >
            <span>مشاهده همه سوالات متداول</span>
            <span>←</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
