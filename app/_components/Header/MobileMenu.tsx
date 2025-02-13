import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
}
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
    subItems: [
      { title: 'لیست پادگان‌ها', href: '/padegans/list' },
      { title: 'نقشه پادگان‌ها', href: '/padegans/map' },
      { title: 'ثبت نظر', href: '/padegans/review' },
    ]
  },
  { 
    title: 'هم‌خدمتی‌یابی',
    href: '/soldiers',
    subItems: [
      { title: 'جستجوی هم‌خدمتی', href: '/soldiers/search' },
      { title: 'چت و گفتگو', href: '/soldiers/chat' },
      { title: 'تجربیات', href: '/soldiers/experiences' },
    ]
  },
  { 
    title: 'مشاوره', 
    href: '/consult' 
  },
];
export default function MobileMenu({ isOpen }: MobileMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (href: string) => {
    setActiveSubmenu(activeSubmenu === href ? null : href);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-6 bg-white/95 backdrop-blur-md border-t">
            <motion.div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  <div
                    className="flex items-center justify-between py-2"
                    onClick={() => item.subItems && toggleSubmenu(item.href)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      {item.title}
                    </Link>
                    {item.subItems && (
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200
                          ${activeSubmenu === item.href ? 'rotate-180' : ''}`}
                      />
                    )}
                  </div>
                  
                  {item.subItems && (
                    <AnimatePresence>
                      {activeSubmenu === item.href && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pr-4 border-r border-primary-200"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block py-2 text-sm text-gray-500 hover:text-primary-500"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
              
              <motion.hr variants={itemVariants} className="border-gray-200" />
              <motion.div variants={itemVariants} className="flex flex-col space-y-3">
                <Link
                  href="/login"
                  className="px-4 py-2.5 text-gray-600 hover:text-primary-500 transition-colors
                    hover:bg-primary-50 rounded-lg text-center"
                >
                  ورود
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 
                    transition-all hover:shadow-lg hover:shadow-primary-500/30 text-center"
                >
                  ثبت نام
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
