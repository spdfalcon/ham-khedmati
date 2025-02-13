'use client';
import { FormEvent, useState } from 'react';
import FadeIn from '@/app/_components/animations/FadeIn';
import { FaPhoneAlt, FaEnvelope, FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  { icon: FaPhoneAlt, label: 'تماس مستقیم', value: '۰۲۱-۹۱۰۰۹۹۰۰', href: 'tel:02191009900' },
  { icon: FaWhatsapp, label: 'واتس‌اپ', value: '۰۹۱۲۳۴۵۶۷۸۹', href: 'https://wa.me/989123456789' },
  { icon: FaEnvelope, label: 'ایمیل', value: 'info@hamkhedmati.ir', href: 'mailto:info@hamkhedmati.ir' },
];

const socialLinks = [
  { icon: FaTelegram, label: 'تلگرام', href: 'https://t.me/hamkhedmati' },
  { icon: FaInstagram, label: 'اینستاگرام', href: 'https://instagram.com/hamkhedmati' },
];

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulating form submission
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-secondary-800">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            در تماس <span className="text-primary-400">باشید</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            تیم پشتیبانی هم‌خدمتی ۲۴ ساعته آماده پاسخگویی به شما عزیزان است
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <FadeIn className="bg-secondary-900/50 p-6 rounded-2xl border border-primary-500/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm text-gray-400">نام و نام خانوادگی</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-secondary-800 rounded-xl border border-primary-500/10
                    focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
                    text-white outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-gray-400">شماره تماس</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-secondary-800 rounded-xl border border-primary-500/10
                    focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
                    text-white outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-gray-400">پیام شما</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary-800 rounded-xl border border-primary-500/10
                    focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
                    text-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className={`w-full py-4 rounded-xl text-white font-medium transition-all
                  ${formStatus === 'loading' 
                    ? 'bg-primary-500/50 cursor-wait' 
                    : formStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-primary-500 hover:bg-primary-600 hover:-translate-y-0.5'}`}
              >
                {formStatus === 'loading' ? 'در حال ارسال...' 
                  : formStatus === 'success' ? 'پیام شما ارسال شد'
                  : 'ارسال پیام'}
              </button>
            </form>
          </FadeIn>

          {/* Contact Info */}
          <div className="space-y-8">
            <FadeIn className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-secondary-900/50 rounded-xl
                    border border-primary-500/10 hover:border-primary-500/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-secondary-900/50 p-6 rounded-2xl border border-primary-500/10">
                <h3 className="text-white font-medium mb-4">ما را در شبکه‌های اجتماعی دنبال کنید</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary-800 rounded-xl flex items-center justify-center
                        hover:bg-primary-500/10 transition-all group"
                    >
                      <link.icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
