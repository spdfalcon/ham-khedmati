import { Metadata } from 'next';
import FadeIn from '@/app/_components/animations/FadeIn';
import SalaryFormWrapper from '@/app/_components/calculate/SalaryFormWrapper';

export const metadata: Metadata = {
  title: 'محاسبه حقوق سربازی | هم‌خدمتی',
  description: 'محاسبه دقیق حقوق و مزایای خدمت سربازی با احتساب تمامی شرایط',
};

export default function SalaryCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              محاسبه <span className="text-primary-400">حقوق سربازی</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              حقوق و مزایای دوران خدمت خود را محاسبه کنید
            </p>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/30 rounded-full filter blur-3xl" />
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="bg-secondary-800/50 p-8 rounded-2xl border border-primary-500/10">
              <SalaryFormWrapper />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
