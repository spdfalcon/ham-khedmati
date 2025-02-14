'use client';
import { useState } from 'react';
import { FaCertificate, FaDownload, FaPlus } from 'react-icons/fa';
import FadeIn from '@/app/_components/animations/FadeIn';

interface CertificatesTabProps {
  soldierId: string;
}

interface Certificate {
  id: string;
  title: string;
  type: 'military' | 'educational' | 'skill';
  issueDate: string;
  fileUrl: string;
}

const dummyCertificates: Certificate[] = [
  {
    id: '1',
    title: 'گواهی دوره آموزش نظامی',
    type: 'military',
    issueDate: '2024-01-15',
    fileUrl: '/certificates/military-training.pdf'
  },
  // ... سایر گواهی‌ها
];

export default function CertificatesTab({  }: CertificatesTabProps) {
  const [certificates] = useState<Certificate[]>(dummyCertificates);;

  return (
    <div className="p-6 space-y-8">
      {/* دکمه افزودن گواهی جدید */}
      <button className="w-full p-4 bg-secondary-900/50 rounded-xl border border-primary-500/10
        hover:border-primary-500/30 transition-all flex items-center justify-center gap-2 text-primary-400">
        <FaPlus className="w-5 h-5" />
        <span>افزودن گواهی جدید</span>
      </button>

      {/* لیست گواهی‌ها */}
      <div className="space-y-4">
        {certificates.map((cert) => (
          <FadeIn key={cert.id}>
            <div className="bg-secondary-900/50 p-4 rounded-xl border border-primary-500/10
              hover:border-primary-500/30 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <FaCertificate className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{cert.title}</h3>
                    <p className="text-sm text-gray-400">
                      تاریخ صدور: {new Date(cert.issueDate).toLocaleDateString('fa-IR')}
                    </p>
                  </div>
                </div>
                <a 
                  href={cert.fileUrl}
                  download
                  className="p-2 text-primary-400 hover:text-primary-500 transition-colors"
                >
                  <FaDownload className="w-5 h-5" />
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
