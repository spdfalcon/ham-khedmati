import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/app/_components/animations/FadeIn';
import { FaBook, FaShieldAlt, FaBrain } from 'react-icons/fa';

const categories = [
  {
    icon: FaBook,
    title: 'مقالات آموزشی',
    color: 'from-blue-500 to-blue-600',
    articles: [
      {
        title: 'راهنمای کامل اعزام به خدمت',
        excerpt: 'همه آنچه باید قبل از اعزام به خدمت سربازی بدانید...',
        image: '/images/articles/education-1.jpg',
        slug: 'military-service-guide'
      },
      {
        title: 'حقوق و مزایای سربازی',
        excerpt: 'آشنایی با حقوق، مزایا و بیمه دوران سربازی...',
        image: '/images/articles/education-2.jpg',
        slug: 'military-benefits'
      }
    ]
  },
  {
    icon: FaShieldAlt,
    title: 'راهنمای معافیت',
    color: 'from-green-500 to-green-600',
    articles: [
      {
        title: 'انواع معافیت‌های پزشکی',
        excerpt: 'بررسی شرایط و مدارک لازم برای معافیت پزشکی...',
        image: '/images/articles/exemption-1.jpg',
        slug: 'medical-exemption'
      },
      {
        title: 'معافیت‌های کفالت',
        excerpt: 'شرایط و مراحل دریافت معافیت کفالت...',
        image: '/images/articles/exemption-2.jpg',
        slug: 'family-exemption'
      }
    ]
  },
  {
    icon: FaBrain,
    title: 'مطالب روانشناسی',
    color: 'from-purple-500 to-purple-600',
    articles: [
      {
        title: 'سازگاری با محیط خدمت',
        excerpt: 'راهکارهای سازگاری با محیط جدید در دوران خدمت...',
        image: '/images/articles/psychology-1.jpg',
        slug: 'military-adaptation'
      },
      {
        title: 'مدیریت استرس در سربازی',
        excerpt: 'تکنیک‌های کاربردی برای کنترل استرس دوران خدمت...',
        image: '/images/articles/psychology-2.jpg',
        slug: 'stress-management'
      }
    ]
  }
];

export default function ArticlesSection() {
  return (
    <section className="py-20 bg-secondary-800">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            مقالات و <span className="text-primary-400">محتوای آموزشی</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            مجموعه‌ای از مقالات کاربردی برای آشنایی بیشتر با خدمت سربازی
          </p>
        </FadeIn>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <FadeIn key={idx} className="space-y-8">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color}
                  flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.articles.map((article, articleIdx) => (
                  <Link 
                    key={articleIdx}
                    href={`/articles/${article.slug}`}
                    className="group bg-secondary-900 rounded-2xl overflow-hidden hover:shadow-xl
                      transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400
                        transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 text-primary-400 text-sm flex items-center gap-2
                        group-hover:translate-x-2 transition-transform">
                        <span>ادامه مطلب</span>
                        <span>←</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
