import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaHeadset, FaStar, FaUsers } from "react-icons/fa";
import { FaBullseye, FaBinoculars } from "react-icons/fa";
import {
  FaCalculator,
  FaGraduationCap,
  FaBullhorn,
  FaNewspaper,
} from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaShieldAlt, FaLightbulb, FaHandshake, FaEye } from "react-icons/fa";
import Link from "next/link";
import FadeIn from "@/app/_components/animations/FadeIn";

const teamMembers = [
  {
    id: 1,
    name: "نام عضو",
    role: "سمت",
    slug: "slug-unique",
  },
  {
    id: 2,
    name: "نام عضو",
    role: "سمت",
    slug: "slug-unique",
  },
];

const stats = [
  {
    icon: FaUsers,
    value: "+50K",
    label: "کاربر فعال",
  },
  {
    icon: FaCalendarAlt,
    value: "1500+",
    label: "روز فعالیت مستمر",
  },
  {
    icon: FaStar,
    value: "98%",
    label: "رضایت کاربران",
  },
  {
    icon: FaHeadset,
    value: "24/7",
    label: "پشتیبانی تمام وقت",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-secondary-700">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10">
          <FadeIn className="mb-6">
            <h1 className="text-4xl md:text-6xl font-yekan font-bold">
              <span className="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">
                هم‌خدمتی
              </span>
              <br />
              <span className="text-secondary-200">
                پلتفرم هوشمند سربازی ایران
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={300} className="mb-8">
            <p className="text-lg md:text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
              اولین سامانه جامع خدمات سربازی با بیش از ۵۰,۰۰۰ کاربر فعال
              <br />
              همراه شما از اولین روز اعزام تا پایان خدمت
            </p>
          </FadeIn>

          <FadeIn delay={500} className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary-500 text-secondary-800 px-8 py-3 rounded-xl font-semibold 
              hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              شروع کنید
            </button>
            <button className="border-2 border-primary-500 text-primary-400 px-8 py-3 rounded-xl 
              hover:bg-primary-500/10 transition-all hover:-translate-y-1">
              ویدیو معرفی
            </button>
          </FadeIn>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-secondary-800/70 to-secondary-900/90 z-0" />
        <Image
          src="/images/hero-bg.jpg"
          alt="سربازان ایران"
          fill
          className="object-cover z-0 opacity-30"
          priority
        />
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-secondary-800 to-secondary-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn 
                key={index} 
                delay={index * 100}
                className="group p-6 bg-secondary-700 rounded-2xl border border-primary-500/20 
                  hover:border-primary-500/40 transition-all hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary-400" />
                  </div>
                </div>
                <div className="text-5xl font-yekan font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-secondary-200 text-lg">{stat.label}</h3>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- ویژگی‌های کلیدی --- */}
      {/* کارت‌های افقی/عمودی با امکانات اصلی سایت */}
      {/* --- ویژگی‌های کلیدی --- */}
      <section className="relative py-20 bg-secondary-800">
        <div className="container mx-auto px-4">
          <FadeIn className="text-3xl md:text-4xl font-yekan font-bold text-center text-secondary-100 mb-12">
            <span className="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">
              امکانات منحصر به فرد
            </span>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* کارت ۱ - جامعه سربازی */}
            <FadeIn className="group bg-secondary-700 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all">
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <FaUsers className="w-8 h-8 text-primary-400 group-hover:text-accent-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-100 mb-3">
                جامعه پویای سربازی
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                ارتباط با هزاران هم‌خدمتی در سراسر کشور و به اشتراک گذاری
                تجربیات
              </p>
            </FadeIn>

            {/* کارت ۲ - محاسبات هوشمند */}
            <FadeIn delay={100} className="group bg-secondary-700 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all">
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <FaCalculator className="w-8 h-8 text-primary-400 group-hover:text-accent-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-100 mb-3">
                محاسبات هوشمند
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                محاسبه دقیق مدت خدمت، کسری‌ها و حقوق با آخرین قوانین
              </p>
            </FadeIn>

            {/* کارت ۳ - پشتیبانی تخصصی */}
            <FadeIn delay={200} className="group bg-secondary-700 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all">
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <FaHeadset className="w-8 h-8 text-primary-400 group-hover:text-accent-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-100 mb-3">
                پشتیبانی ۲۴ ساعته
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                پاسخگویی تیم متخصص به سوالات حقوقی، پزشکی و روانشناسی
              </p>
            </FadeIn>

            {/* کارت ۴ - آموزش تعاملی */}
            <FadeIn delay={300} className="group bg-secondary-700 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all">
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <FaGraduationCap className="w-8 h-8 text-primary-400 group-hover:text-accent-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-100 mb-3">
                آموزش تعاملی
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                دوره‌های آموزشی تخصصی برای آمادگی قبل و حین خدمت
              </p>
            </FadeIn>

            {/* کارت ۵ - نیازمندی‌ها */}
            <FadeIn delay={400} className="group bg-secondary-700 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all">
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <FaBullhorn className="w-8 h-8 text-primary-400 group-hover:text-accent-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-100 mb-3">
                نیازمندی‌ها
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                ثبت و مشاهده آگهی‌های مرتبط با خدمت سربازی
              </p>
            </FadeIn>

            {/* کارت ۶ - اخبار بروز */}
            <FadeIn delay={500} className="group bg-secondary-700 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all">
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <FaNewspaper className="w-8 h-8 text-primary-400 group-hover:text-accent-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-100 mb-3">
                اخبار بروز
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                اطلاع‌رسانی لحظه‌ای از تغییرات قوانین نظام وظیفه
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- ماموریت و چشم‌انداز --- */}
      {/* متن + تصویر با استایل خاص */}
      {/* --- ماموریت و چشم‌انداز --- */}
      <section className="relative py-20 bg-secondary-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* متن */}
            <FadeIn className="space-y-12">
              {/* ماموریت */}
              <div className="group bg-secondary-700/50 p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <FaBullseye className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-yekan font-semibold text-secondary-100">
                    ماموریت ما
                  </h3>
                </div>
                <p className="text-secondary-300 leading-relaxed">
                  ایجاد تحول در تجربه خدمت سربازی از طریق ارائه راهکارهای
                  دیجیتال، تسهیل ارتباطات و افزایش آگاهی سربازان با استفاده از
                  فناوری‌های روز دنیا
                </p>
              </div>

              {/* چشم‌انداز */}
              <div className="group bg-secondary-700/50 p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <FaBinoculars className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-yekan font-semibold text-secondary-100">
                    چشم‌انداز
                  </h3>
                </div>
                <p className="text-secondary-300 leading-relaxed">
                  تبدیل شدن به مرجع اصلی خدمات سربازی در خاورمیانه تا سال ۱۴۰۵
                  با بیش از ۱ میلیون کاربر فعال و ارائه خدمات در ۵ کشور منطقه
                </p>
              </div>
            </FadeIn>

            {/* تصویر */}
            <FadeIn className="relative h-[500px] rounded-[40px] overflow-hidden border-4 border-primary-500/20">
              <Image
                src="/images/mission-vision.jpg"
                alt="ماموریت و چشم‌انداز"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h4 className="text-xl font-yekan text-secondary-100 mb-2">
                  از ایده تا اجرا
                </h4>
                <p className="text-secondary-300 text-sm">
                  تیم هم‌خدمتی همواره در کنار شماست
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- تیم ما --- */}
      {/* کارت‌های اعضای تیم با عکس و لینک */}
      {/* --- تیم ما --- */}
      <section className="relative py-20 bg-secondary-800">
        <div className="container mx-auto px-4">
          <FadeIn className="text-4xl font-yekan font-bold text-center text-secondary-100 mb-16">
            <span className="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">
              خانواده هم‌خدمتی
            </span>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Link
                href={`/about/${member.slug}`}
                key={member.id}
                className="group"
              >
                <FadeIn delay={index * 100} className="relative bg-secondary-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  {/* Image Container */}
                  <div className="relative h-96">
                    <Image
                      src={`/images/team-${member.id}.jpg`}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-xl font-semibold text-secondary-100 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-400 mb-4">{member.role}</p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaLinkedin className="w-6 h-6 text-secondary-300 hover:text-primary-400 cursor-pointer" />
                      <FaTwitter className="w-6 h-6 text-secondary-300 hover:text-primary-400 cursor-pointer" />
                      <FaInstagram className="w-6 h-6 text-secondary-300 hover:text-pink-500 cursor-pointer" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors" />
                </FadeIn>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* --- ارزش‌های اصلی --- */}
      {/* لیست ارزش‌ها با آیکون‌های خاص */}
      {/* --- ارزش‌های اصلی --- */}
      <section className="relative py-20 bg-gradient-to-b from-secondary-800 to-secondary-900">
        <div className="container mx-auto px-4">
          <FadeIn className="text-4xl font-yekan font-bold text-center text-secondary-100 mb-16">
            <span className="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">
              ستون‌های استوار ما
            </span>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ارزش ۱ - اعتماد */}
            <FadeIn className="group bg-secondary-700 p-8 rounded-2xl border border-primary-500/20 hover:border-accent-300/40 transition-all">
              <div className="w-20 h-20 bg-accent-300/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FaShieldAlt className="w-10 h-10 text-accent-300 group-hover:rotate-[15deg] transition-transform" />
              </div>
              <h3 className="text-2xl font-yekan font-semibold text-center text-secondary-100 mb-4">
                اعتماد
              </h3>
              <p className="text-secondary-300 text-center leading-relaxed">
                حریم خصوصی کاربران برای ما مقدس است. اطلاعات شما با پیشرفته‌ترین
                روش‌های رمزنگاری محافظت می‌شود
              </p>
            </FadeIn>

            {/* ارزش ۲ - نوآوری */}
            <FadeIn delay={100} className="group bg-secondary-700 p-8 rounded-2xl border border-primary-500/20 hover:border-accent-300/40 transition-all">
              <div className="w-20 h-20 bg-accent-300/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FaLightbulb className="w-10 h-10 text-accent-300 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-yekan font-semibold text-center text-secondary-100 mb-4">
                نوآوری
              </h3>
              <p className="text-secondary-300 text-center leading-relaxed">
                همیشه یک قدم جلوتر از نیازهای شما با استفاده از آخرین فناوری‌های
                روز دنیا
              </p>
            </FadeIn>

            {/* ارزش ۳ - مسئولیت پذیری */}
            <FadeIn delay={200} className="group bg-secondary-700 p-8 rounded-2xl border border-primary-500/20 hover:border-accent-300/40 transition-all">
              <div className="w-20 h-20 bg-accent-300/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FaHandshake className="w-10 h-10 text-accent-300 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-yekan font-semibold text-center text-secondary-100 mb-4">
                مسئولیت پذیری
              </h3>
              <p className="text-secondary-300 text-center leading-relaxed">
                پاسخگویی دائمی به کاربران و بهبود مستمر خدمات بر اساس بازخوردهای
                شما
              </p>
            </FadeIn>

            {/* ارزش ۴ - شفافیت */}
            <FadeIn delay={300} className="group bg-secondary-700 p-8 rounded-2xl border border-primary-500/20 hover:border-accent-300/40 transition-all">
              <div className="w-20 h-20 bg-accent-300/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <FaEye className="w-10 h-10 text-accent-300 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-yekan font-semibold text-center text-secondary-100 mb-4">
                شفافیت
              </h3>
              <p className="text-secondary-300 text-center leading-relaxed">
                هیچ چیز پنهانی وجود ندارد. تمام فرآیندها و قوانین به صورت شفاف
                اطلاع‌رسانی می‌شوند
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* --- همکاری‌ها --- */}
      {/* لوگوهای سازمان‌های همکار */}
      {/* --- همکاری‌ها --- */}
      <section className="relative py-20 bg-secondary-800">
        <div className="container mx-auto px-4">
          <FadeIn className="text-3xl md:text-4xl font-yekan font-bold text-center text-secondary-100 mb-12">
            <span className="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">
              شرکای استراتژیک
            </span>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <FadeIn key={item} delay={index * 100} className="group relative">
                <Link
                  href="#"
                  className="block p-4 bg-secondary-700 rounded-xl border border-primary-500/20 hover:border-accent-300/40 transition-all"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={`/`}
                      alt={`شریک ${item}`}
                      fill
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-300/0 to-accent-300/0 group-hover:to-accent-300/10 transition-all" />
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={500} className="text-center text-secondary-300 mt-12">
            همکاری با برترین سازمان‌های دولتی و خصوصی برای ارائه بهترین خدمات
          </FadeIn>
        </div>
      </section>
      {/* --- CTA نهایی --- */}
      {/* بخش دعوت به اقدام با دکمه ثبت نام */}
      {/* --- CTA نهایی --- */}
      <section className="relative py-32 bg-gradient-to-r from-primary-600 to-accent-500 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-yekan font-black text-secondary-100 mb-6">
              زمان اقدام <span className="text-accent-300">فرا رسیده!</span>
            </h2>

            <p className="text-xl text-secondary-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              همین حالا به خانواده هزاران سرباز خوشحال ما بپیوندید و از تمام
              امکانات ویژه بهره‌مند شوید
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-accent-300 text-secondary-800 px-8 py-4 rounded-xl font-yekan font-bold text-lg hover:bg-accent-400 transition-all shadow-2xl hover:shadow-3xl">
                ثبت نام رایگان
              </button>

              <button className="border-2 border-secondary-100 text-secondary-100 px-8 py-4 rounded-xl hover:bg-secondary-100/10 transition-all">
                راهنمای شروع
              </button>
            </div>
          </FadeIn>
        </div>

        {/* المان‌های دکوراتیو */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-accent-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-400/20 rounded-full blur-3xl" />
      </section>
      {/* --- فرم تماس --- */}
      {/* فرم ساده برای ارتباط با پشتیبانی */}
      {/* --- فرم تماس --- */}
      <section className="relative py-20 bg-secondary-800">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-yekan font-bold text-center text-secondary-100 mb-12">
              <span className="bg-gradient-to-r from-primary-400 to-accent-300 bg-clip-text text-transparent">
                در تماس باشید
              </span>
            </h2>

            <form className="space-y-8">
              {/* نام و ایمیل */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-secondary-300 text-sm font-medium">
                    نام کامل
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-secondary-700 rounded-lg border border-primary-500/20 focus:border-accent-300/40 focus:ring-2 focus:ring-accent-300/20 text-secondary-100 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-secondary-300 text-sm font-medium">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-secondary-700 rounded-lg border border-primary-500/20 focus:border-accent-300/40 focus:ring-2 focus:ring-accent-300/20 text-secondary-100 transition-all"
                  />
                </div>
              </div>

              {/* موضوع */}
              <div className="space-y-2">
                <label className="block text-secondary-300 text-sm font-medium">
                  موضوع
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-secondary-700 rounded-lg border border-primary-500/20 focus:border-accent-300/40 focus:ring-2 focus:ring-accent-300/20 text-secondary-100 transition-all"
                />
              </div>

              {/* پیام */}
              <div className="space-y-2">
                <label className="block text-secondary-300 text-sm font-medium">
                  پیام شما
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-secondary-700 rounded-lg border border-primary-500/20 focus:border-accent-300/40 focus:ring-2 focus:ring-accent-300/20 text-secondary-100 transition-all"
                ></textarea>
              </div>

              {/* دکمه ارسال */}
              <button
                type="submit"
                className="w-full bg-accent-300 text-secondary-800 px-8 py-4 rounded-lg font-yekan font-bold hover:bg-accent-400 transition-all"
              >
                ارسال پیام
              </button>
            </form>

            <p className="text-center text-secondary-400 mt-8 text-sm">
              پاسخگویی حداکثر طی ۲۴ ساعت کاری
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
