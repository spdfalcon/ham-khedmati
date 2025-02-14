import { Metadata } from 'next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import FadeIn from '@/app/_components/animations/FadeIn';
import ContactForm from './ContactForm';
import type { ContactMethod, SocialLink } from '@/app/_types/contact';

export const metadata: Metadata = {
  title: 'تماس با هم‌خدمتی | پشتیبانی ۲۴ ساعته',
  description: 'در تماس باشید. تیم پشتیبانی هم‌خدمتی ۲۴ ساعته آماده پاسخگویی به سوالات شما است.',
};

const contactMethods: ContactMethod[] = [
  {
    icon: FaPhoneAlt,
    title: 'تماس تلفنی',
    description: 'در ساعات اداری پاسخگوی شما هستیم',
    items: [
      { label: 'شماره تماس', value: '۰۲۱-۹۱۰۰۹۹۰۰', href: 'tel:02191009900' },
      { label: 'تلفن پشتیبانی', value: '۰۲۱-۹۱۰۰۹۹۰۱', href: 'tel:02191009901' }
    ]
  },
  {
    icon: FaEnvelope,
    title: 'ارتباط با ایمیل',
    description: 'پاسخگویی در کمتر از ۲۴ ساعت',
    items: [
      { label: 'پشتیبانی', value: 'support@hamkhedmati.ir', href: 'mailto:support@hamkhedmati.ir' },
      { label: 'همکاری', value: 'info@hamkhedmati.ir', href: 'mailto:info@hamkhedmati.ir' }
    ]
  },
  {
    icon: FaMapMarkerAlt,
    title: 'آدرس دفتر مرکزی',
    description: 'ساعات کاری: شنبه تا چهارشنبه ۸ تا ۱۷',
    items: [
      { label: 'تهران', value: 'خیابان آزادی، برج آزادی، طبقه ۵، واحد ۵۰۳' }
    ]
  }
];

const socialLinks: SocialLink[] = [
  { 
    icon: FaTelegram,
    label: 'تلگرام',
    href: 'https://t.me/hamkhedmati',
    color: 'hover:bg-blue-500/10 hover:text-blue-500'
  },
  { 
    icon: FaWhatsapp,
    label: 'واتس‌اپ',
    href: 'https://wa.me/989123456789',
    color: 'hover:bg-green-500/10 hover:text-green-500'
  },
  { 
    icon: FaInstagram,
    label: 'اینستاگرام',
    href: 'https://instagram.com/hamkhedmati',
    color: 'hover:bg-pink-500/10 hover:text-pink-500'
  }
];

export default function ContactPage() {
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
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              در تماس <span className="text-primary-400">باشید</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              تیم پشتیبانی هم‌خدمتی آماده پاسخگویی به سؤالات و پیشنهادات شما عزیزان است
            </p>
          </FadeIn>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/30 rounded-full filter blur-3xl" />
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-secondary-800/50 p-8 rounded-2xl border border-primary-500/10
                  hover:border-primary-500/30 transition-all h-full">
                  <div className="bg-primary-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <method.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  <div className="space-y-3">
                    {method.items.map((item, itemIdx) => (
                      <div key={itemIdx}>
                        <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white hover:text-primary-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white">{item.value}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>

          {/* Social Links */}
          <div className="mt-20 text-center">
            <FadeIn>
              <h3 className="text-2xl font-bold text-white mb-8">
                ما را در شبکه‌های اجتماعی دنبال کنید
              </h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-xl flex items-center justify-center
                      bg-secondary-800/50 transition-all ${link.color}`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9627430847677!2d51.37766857677716!3d35.69959297246705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00a61f30034d%3A0xe59caa0641d32861!2sAzadi%20Tower!5e0!3m2!1sen!2s!4v1697887037241!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale contrast-125"
        />
      </section>
    </div>
  );
}
