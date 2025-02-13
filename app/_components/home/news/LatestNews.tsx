import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/app/_components/animations/FadeIn';
import { FaRegNewspaper, FaRegClock, FaRegBookmark } from 'react-icons/fa';

const newsItems = [
  {
    id: 1,
    title: 'افزایش حقوق سربازان در سال 1403',
    summary: 'جزئیات افزایش حقوق سربازان وظیفه در سال جدید اعلام شد...',
    image: '/images/news/salary.jpg',
    category: 'قوانین جدید',
    date: '2 ساعت پیش',
    isImportant: true
  },
  {
    id: 2,
    title: 'تغییر در شرایط امریه سربازی',
    summary: 'شرایط جدید پذیرش امریه سربازی در دستگاه‌های دولتی...',
    image: '/images/news/army.jpg',
    category: 'اطلاعیه مهم',
    date: '5 ساعت پیش',
    isImportant: true
  },
  {
    id: 3,
    title: 'زمان اعزام مشمولان خرداد ماه',
    summary: 'سازمان نظام وظیفه تاریخ اعزام به خدمت مشمولان را اعلام کرد...',
    image: '/images/news/time.jpg',
    category: 'اخبار اعزام',
    date: '1 روز پیش',
    isImportant: false
  }
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-secondary-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">
              <span className="text-primary-400">آخرین</span> اخبار و اطلاعیه‌ها
            </h2>
            <Link 
              href="/news"
              className="text-primary-400 hover:text-primary-500 transition-colors"
            >
              مشاهده همه اخبار
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <FadeIn key={news.id} delay={index * 100}>
              <Link href={`/news/${news.id}`}>
                <article className="bg-secondary-800 rounded-2xl overflow-hidden hover:shadow-xl
                  transition-all duration-300 hover:-translate-y-1 group">
                  {/* تصویر خبر */}
                  <div className="relative h-48">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {news.isImportant && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 
                        rounded-full text-sm">
                        مهم
                      </div>
                    )}
                  </div>

                  {/* محتوای خبر */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <FaRegNewspaper />
                        {news.category}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaRegClock />
                        {news.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400
                      transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {news.summary}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-primary-400 text-sm group-hover:text-primary-500
                        transition-colors">
                        ادامه مطلب
                      </span>
                      <button className="text-gray-400 hover:text-primary-400 transition-colors">
                        <FaRegBookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
