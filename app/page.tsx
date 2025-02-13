import HeroSection from './_components/home/hero/HeroSection';
import QuickAccess from './_components/home/quickAccess/QuickAccess';
import LatestNews from './_components/home/news/LatestNews';
import MainServices from './_components/home/services/MainServices';
import ArticlesSection from './_components/home/articles/ArticlesSection';
import FaqSection from './_components/home/faq/FaqSection';
import ContactSection from './_components/home/contact/ContactSection';

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
