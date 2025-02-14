'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaComments, FaImages, FaCertificate } from 'react-icons/fa';
import type { Soldier } from '@/app/_types/soldier';
import AboutTab from './tabs/AboutTab';
import ExperiencesTab from './tabs/ExperiencesTab';
import CertificatesTab from './tabs/CertificatesTab';
import GalleryTab from './tabs/GalleryTab';

interface ProfileTabsProps {
  soldier: Soldier;
}

const tabs = [
  { id: 'about', label: 'درباره من', icon: FaUserAlt },
  { id: 'experiences', label: 'تجربیات', icon: FaComments },
  { id: 'gallery', label: 'گالری تصاویر', icon: FaImages },
  { id: 'certificates', label: 'مدارک و گواهی‌ها', icon: FaCertificate },
];

export default function ProfileTabs({ soldier }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="space-y-8">
      {/* تب‌ها */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap
              ${activeTab === tab.id 
                ? 'bg-primary-500 text-white' 
                : 'bg-secondary-800/50 text-gray-400 hover:bg-primary-500/10'}`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* محتوای تب‌ها */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-secondary-800/50 rounded-2xl border border-primary-500/10 overflow-hidden"
      >
        {activeTab === 'about' && <AboutTab soldier={soldier} />}
        {activeTab === 'experiences' && <ExperiencesTab soldierId={soldier.id} />}
        {activeTab === 'gallery' && <GalleryTab soldierId={soldier.id} />}
        {activeTab === 'certificates' && <CertificatesTab soldierId={soldier.id} />}
      </motion.div>
    </div>
  );
}
