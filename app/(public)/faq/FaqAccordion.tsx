'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaArrowLeft } from 'react-icons/fa';

interface FaqItem {
  question: string;
  answer: string;
  link?: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="bg-secondary-800/50 rounded-xl overflow-hidden">
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-right"
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          >
            <span className="text-lg text-white hover:text-primary-400 transition-colors">
              {item.question}
            </span>
            <FaChevronDown 
              className={`w-5 h-5 text-primary-400 transition-transform duration-300
                ${activeIndex === idx ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence>
            {activeIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {item.answer}
                  </p>
                  {item.link && (
                    <Link 
                      href={item.link}
                      className="inline-flex items-center gap-2 text-primary-400 
                        hover:text-primary-300 transition-colors group"
                    >
                      <span>اطلاعات بیشتر</span>
                      <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
