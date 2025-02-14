import { Metadata } from 'next';
import FadeIn from '@/app/_components/animations/FadeIn';
import ClientForm from '../../../_components/calculate/ClientForm';

export const metadata: Metadata = {
  title: 'محاسبه مدت خدمت | هم‌خدمتی',
  description: 'محاسبه دقیق مدت خدمت سربازی با احتساب کسری‌ها، تحصیلات و شرایط خاص',
};

export default function ServiceDurationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-900 to-secondary-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              محاسبه <span className="text-primary-400">مدت خدمت</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              با وارد کردن اطلاعات خود، مدت دقیق خدمت سربازی‌تان را محاسبه کنید
            </p>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/30 rounded-full filter blur-3xl" />
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ClientForm />
          </div>
        </div>
      </section>
    </div>
  );
}
