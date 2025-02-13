import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaCode, FaProjectDiagram, FaBrain } from "react-icons/fa";
import FadeIn from "@/app/_components/animations/FadeIn";

export default function MemberPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/"
            alt="پس‌زمینه تیم"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <FadeIn 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-500 mb-4 shadow-lg"
          >
            <Image
              src="/"
              alt="عکس پروفایل عضو تیم"
              width={160}
              height={160}
              className="object-cover"
            />
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-3xl md:text-5xl font-yekan font-bold text-primary-400 drop-shadow-lg">
              علی احمدی
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="mt-3 text-lg md:text-xl text-secondary-200">
              مدیر فنی
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-secondary-800">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-yekan font-bold text-primary-400 mb-8">
              داستان و اهداف من
            </h2>
            <div className="text-secondary-200 leading-relaxed">
              <p>
                من علی احمدی هستم، فردی با سابقه‌ای طولانی در حوزه فناوری که از
                آغاز کارم تا به امروز با چالش‌ها و موفقیت‌های فراوانی روبرو
                شده‌ام.
              </p>
              <p>
                مسیر من با علاقه به نوآوری و یادگیری مداوم آغاز شد و به مرور زمان
                تبدیل به یک سفر پر از تجربیات ارزشمند و دستاوردهای چشمگیر گردید.
              </p>
              <p>
                اهداف من شامل ارتقاء کیفیت خدمات فنی، الهام‌بخشی به تیم‌های جوان و
                ایجاد تفاوت در صنعت فناوری است. ارزش‌هایی مانند صداقت، پشتکار و
                خلاقیت، همیشه راهنمای من بوده‌اند.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-secondary-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-yekan font-bold text-primary-400 text-center mb-12">
              دستاوردها و تخصص‌های من
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaAward, title: "جوایز بین‌المللی" },
              { icon: FaCode, title: "تخصص برنامه‌نویسی" },
              { icon: FaProjectDiagram, title: "مدیریت پروژه" },
              { icon: FaBrain, title: "نوآوری" }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-secondary-800 p-6 rounded-2xl border border-primary-500/20 text-center group
                  hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <item.icon className="w-10 h-10 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-yekan font-semibold text-secondary-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-300 text-sm">
                    {item.title === "جوایز بین‌المللی" && "کسب جوایز معتبر در زمینه فناوری و نوآوری."}
                    {item.title === "تخصص برنامه‌نویسی" && "تسلط به زبان‌های برنامه‌نویسی مدرن و تکنولوژی‌های روز."}
                    {item.title === "مدیریت پروژه" && "رهبری و مدیریت پروژه‌های فناوری با موفقیت."}
                    {item.title === "نوآوری" && "به کارگیری ایده‌های نو برای حل چالش‌های پیچیده."}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-secondary-800">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-yekan font-bold text-primary-400 text-center mb-12">
              مهارت‌ها و تخصص‌های من
            </h2>
          </FadeIn>

          <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-secondary-900 rounded-2xl shadow-lg">
              <h3 className="text-xl font-yekan font-semibold text-secondary-200 mb-4">
                توسعه وب
              </h3>
              <ul className="space-y-2">
                <li className="text-secondary-300">
                  Next.js, React, Tailwind CSS
                </li>
                <li className="text-secondary-300">HTML, CSS, JavaScript</li>
                <li className="text-secondary-300">TypeScript</li>
              </ul>
            </div>

            <div className="p-6 bg-secondary-900 rounded-2xl shadow-lg">
              <h3 className="text-xl font-yekan font-semibold text-secondary-200 mb-4">
                طراحی UI/UX
              </h3>
              <ul className="space-y-2">
                <li className="text-secondary-300">Figma, Adobe XD</li>
                <li className="text-secondary-300">
                  Wireframing & Prototyping
                </li>
                <li className="text-secondary-300">Responsive Design</li>
              </ul>
            </div>

            <div className="p-6 bg-secondary-900 rounded-2xl shadow-lg">
              <h3 className="text-xl font-yekan font-semibold text-secondary-200 mb-4">
                مدیریت پروژه
              </h3>
              <ul className="space-y-2">
                <li className="text-secondary-300">Agile & Scrum</li>
                <li className="text-secondary-300">Team Leadership</li>
                <li className="text-secondary-300">Project Planning</li>
              </ul>
            </div>

            <div className="p-6 bg-secondary-900 rounded-2xl shadow-lg">
              <h3 className="text-xl font-yekan font-semibold text-secondary-200 mb-4">
                مهارت‌های دیگر
              </h3>
              <ul className="space-y-2">
                <li className="text-secondary-300">SEO Optimization</li>
                <li className="text-secondary-300">Version Control (Git)</li>
                <li className="text-secondary-300">Problem Solving</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-secondary-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-yekan font-bold text-primary-400 text-center mb-12">
              نمونه کارها / پروژه‌ها
            </h2>
          </FadeIn>

          <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary-800 p-6 rounded-2xl shadow-lg">
              <Image
                src="/images/project1.jpg"
                alt="پروژه اول"
                width={400}
                height={250}
                className="object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-yekan font-semibold text-secondary-200 mb-2">
                پروژه اول
              </h3>
              <p className="text-secondary-300 text-sm">
                توضیح مختصری درباره پروژه اول و دستاوردهای آن.
              </p>
            </div>

            <div className="bg-secondary-800 p-6 rounded-2xl shadow-lg">
              <Image
                src="/images/project2.jpg"
                alt="پروژه دوم"
                width={400}
                height={250}
                className="object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-yekan font-semibold text-secondary-200 mb-2">
                پروژه دوم
              </h3>
              <p className="text-secondary-300 text-sm">
                توضیح مختصری درباره پروژه دوم و دستاوردهای آن.
              </p>
            </div>

            <div className="bg-secondary-800 p-6 rounded-2xl shadow-lg">
              <Image
                src="/images/project3.jpg"
                alt="پروژه سوم"
                width={400}
                height={250}
                className="object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-yekan font-semibold text-secondary-200 mb-2">
                پروژه سوم
              </h3>
              <p className="text-secondary-300 text-sm">
                توضیح مختصری درباره پروژه سوم و دستاوردهای آن.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary-800">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-yekan font-bold text-primary-400 mb-4">
              ارتباط با من
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="mailto:ali.ahmadi@example.com"
                className="bg-primary-500 text-secondary-800 px-8 py-3 rounded-full font-semibold 
                  hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                ایمیل
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary-500 text-primary-400 px-8 py-3 rounded-full 
                  hover:bg-primary-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                فرم تماس
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
