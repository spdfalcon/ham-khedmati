'use client'
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 20));
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm'}`}
    >
      {/* Add progress bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary-500/30"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Logo />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-8 space-x-reverse"
            >
              <NavLinks />
            </motion.div>
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-4 space-x-reverse"
          >
            <Link 
              href="/login"
              className="relative px-6 py-2 text-gray-600 overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-primary-500 transition-colors">
                ورود
              </span>
              <div className="absolute inset-0 bg-primary-50 transform translate-y-full
                group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/register"
                className="px-6 py-2 bg-primary-500 text-white rounded-lg relative overflow-hidden group
                  hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
              >
                <span className="relative z-10">ثبت نام</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full
                  group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} />
    </motion.header>
  );
}
