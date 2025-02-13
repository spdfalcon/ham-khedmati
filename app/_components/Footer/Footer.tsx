import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaTelegramPlane, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaRegQuestionCircle,
  FaShieldAlt,
  FaInfoCircle
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "دسترسی سریع",
      items: [
        { title: "درباره ما", href: "/about", icon: <FaInfoCircle className="w-4 h-4" /> },
        { title: "تماس با ما", href: "/contact", icon: <FaEnvelope className="w-4 h-4" /> },
        { title: "سوالات متداول", href: "/faq", icon: <FaRegQuestionCircle className="w-4 h-4" /> },
        { title: "حریم خصوصی", href: "/privacy", icon: <FaShieldAlt className="w-4 h-4" /> },
      ]
    },
    {
      title: "خدمات سربازی",
      items: [
        { title: "محاسبه مدت خدمت", href: "/calculate/service", icon: <FaInfoCircle className="w-4 h-4" /> },
        { title: "راهنمای معافیت", href: "/guide/exemptions", icon: <FaInfoCircle className="w-4 h-4" /> },
        { title: "امریه و جایگزین", href: "/guide/amrie", icon: <FaInfoCircle className="w-4 h-4" /> },
        { title: "مشاوره تخصصی", href: "/consult", icon: <FaInfoCircle className="w-4 h-4" /> },
      ]
    },
    {
      title: "امکانات ویژه",
      items: [
        { title: "هم‌خدمتی‌یابی", href: "/find-mate", icon: <FaInfoCircle className="w-4 h-4" /> },
        { title: "انجمن گفتگو", href: "/forum", icon: <FaInfoCircle className="w-4 h-4" /> },
        { title: "فروشگاه تجهیزات", href: "/shop", icon: <FaInfoCircle className="w-4 h-4" /> },
        { title: "اخبار و مقالات", href: "/news", icon: <FaInfoCircle className="w-4 h-4" /> },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
      {/* بخش اول - اطلاعات اصلی */}
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* ستون اول - لوگو و توضیحات */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="هم‌خدمتی"
                width={56}
                height={56}
                className="rounded-xl shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold text-primary-400">هم‌خدمتی</h2>
                <p className="text-sm text-gray-400">جامعه مجازی سربازان ایران</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              همراه شما از شروع تا پایان خدمت سربازی
              با ارائه خدمات محاسباتی، مشاوره‌ای و اطلاع‌رسانی
            </p>
            <div className="flex items-center gap-4">
              <a href="https://t.me/hamkhedmati" 
                className="p-2 bg-secondary-700 rounded-lg hover:bg-secondary-600 transition-all">
                <FaTelegramPlane className="w-5 h-5 text-primary-400" />
              </a>
              <a href="https://instagram.com/hamkhedmati" 
                className="p-2 bg-secondary-700 rounded-lg hover:bg-secondary-600 transition-all">
                <FaInstagram className="w-5 h-5 text-primary-400" />
              </a>
            </div>
          </div>

          {/* ستون‌های منو */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* بخش تماس */}
        <div className="flex flex-wrap justify-center gap-8 py-6 border-t border-secondary-700">
          <a href="tel:+989123456789" 
            className="flex items-center gap-2 text-gray-400 hover:text-primary-400">
            <FaPhoneAlt className="w-4 h-4" />
            <span className="text-sm">۰۹۱۲۳۴۵۶۷۸۹</span>
          </a>
          <a href="mailto:info@hamkhedmati.ir" 
            className="flex items-center gap-2 text-gray-400 hover:text-primary-400">
            <FaEnvelope className="w-4 h-4" />
            <span className="text-sm">info@hamkhedmati.ir</span>
          </a>
          <div className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span className="text-sm">تهران، خیابان آزادی</span>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="text-center py-4 border-t border-secondary-700">
          <p className="text-sm text-gray-500">
            {`© ${currentYear} کلیه حقوق برای جامعه مجازی هم‌خدمتی محفوظ است.`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
