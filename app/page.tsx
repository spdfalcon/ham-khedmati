import HeroSection from './_components/home/hero/HeroSection';
import QuickAccess from './_components/home/quickAccess/QuickAccess';
import LatestNews from './_components/home/news/LatestNews';
import MainServices from './_components/home/services/MainServices';
import ArticlesSection from './_components/home/articles/ArticlesSection';
import FaqSection from './_components/home/faq/FaqSection';
import ContactSection from './_components/home/contact/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'هم‌خدمتی | جامعه مجازی سربازان ایران',
  description: 'هم‌خدمتی، اولین و بزرگترین جامعه مجازی سربازان ایران با خدمات هوشمند محاسبه حقوق و مدت خدمت، مشاوره تخصصی و پشتیبانی ۲۴ ساعته',
  openGraph: {
    title: 'هم‌خدمتی | جامعه مجازی سربازان ایران',
    description: 'همراه شما از اولین روز اعزام تا پایان خدمت',
    images: ['/images/hero/hero-bg.jpg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuickAccess />
      {/* Latest News - آخرین اخبار */}
      <LatestNews />
      {/* Services Grid - خدمات اصلی */}
      <MainServices />
      {/* Blog/Articles - مقالات و محتوا */}
      <ArticlesSection />
      {/* FAQ Section - سوالات متداول */}
      <FaqSection />
      {/* Contact/Support - تماس و پشتیبانی */}
      <ContactSection />
    </main>
  );
}
