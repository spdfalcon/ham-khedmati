'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { 
    title: 'صفحه اصلی', 
    href: '/' 
  },
  { 
    title: 'محاسبه خدمت',
    href: '/calculate',
    subItems: [
      { title: 'محاسبه مدت خدمت', href: '/calculate/duration' },
      { title: 'محاسبه حقوق', href: '/calculate/salary' },
      { title: 'محاسبه کسری', href: '/calculate/deficit' },
    ]
  },
  { 
    title: 'پادگان‌ها',
    href: '/padegans',
  },
  { 
    title: 'هم‌خدمتی‌یابی',
    href: '/soldiers',
  },
  { 
    title: 'اطلاعات',
    href: '/info',
    subItems: [
      { title: 'درباره ما', href: '/about' },
      { title: 'تماس با ما', href: '/contact' },
      { title: 'قوانین', href: '/rules' },
      { title: 'حریم خصوصی', href: '/privacy' },
      { title: 'سوالات متداول', href: '/faq' },
    ]
  },
  { 
    title: 'مشاوره', 
    href: '/consult' 
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {navItems.map((item) => (
        <div
          key={item.href}
          className="relative"
          onMouseEnter={() => setHoveredItem(item.href)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link
            href={item.href}
            className="relative group flex items-center gap-1"
          >
            <span className={`text-gray-600 group-hover:text-primary-500 transition-colors
              ${pathname === item.href ? 'text-primary-500' : ''}`}
            >
              {item.title}
            </span>
            {item.subItems && (
              <ChevronDown className={`w-4 h-4 transition-transform duration-200
                ${hoveredItem === item.href ? 'rotate-180' : ''}`}
              />
            )}
          </Link>

          {pathname === item.href && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 h-0.5 bg-primary-500 bottom-0"
              initial={false}
            />
          )}

          {item.subItems && (
            <AnimatePresence>
              {hoveredItem === item.href && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl
                    border border-gray-100 backdrop-blur-lg bg-opacity-90"
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`block px-4 py-2 text-sm hover:bg-primary-50 
                        ${pathname === subItem.href 
                          ? 'text-primary-500 bg-primary-50/50' 
                          : 'text-gray-600'}`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </>
  );
}
