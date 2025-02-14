import { Metadata } from 'next';
import FadeIn from '@/app/_components/animations/FadeIn';
import DeficitFormWrapper from '@/app/_components/calculate/DeficitFormWrapper';

export const metadata: Metadata = {
  title: 'محاسبه کسری خدمت | هم‌خدمتی',
  description: 'محاسبه دقیق میزان کسری خدمت سربازی با احتساب تمامی شرایط',
};

export default function DeficitCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              محاسبه <span className="text-primary-400">کسری خدمت</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              میزان کسری خدمت خود را با احتساب تمامی شرایط محاسبه کنید
            </p>
          </FadeIn>
        </div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/30 rounded-full filter blur-3xl" />
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="bg-secondary-800/50 p-8 rounded-2xl border border-primary-500/10">
              <DeficitFormWrapper />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
