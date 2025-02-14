'use client';
import { useState } from 'react';
import { FaCalendar, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import Image from 'next/image';
import FadeIn from '@/app/_components/animations/FadeIn';

interface Experience {
  id: string;
  content: string;
  date: string;
  likes: number;
  comments: number;
  images?: string[];
  tags: string[];
}

interface ExperiencesTabProps {
  soldierId: string;
}

const dummyExperiences: Experience[] = [
  {
    id: '1',
    content: 'دوره آموزشی رو با موفقیت گذروندم. تجربه خیلی خوبی بود و با افراد زیادی آشنا شدم.',
    date: '2024-01-15',
    likes: 24,
    comments: 5,
    images: ['/images/experiences/1.jpg'],
    tags: ['دوره_آموزشی', 'تجربه_اول']
  },
  // ... more experiences
];

export default function ExperiencesTab({  }: ExperiencesTabProps) {
  const [experiences] = useState<Experience[]>(dummyExperiences);

  return (
    <div className="p-6 space-y-8">
      {/* فرم ثبت تجربه جدید */}
      <div className="bg-secondary-900/50 p-4 rounded-xl border border-primary-500/10">
        <textarea
          placeholder="تجربه خود را به اشتراک بگذارید..."
          className="w-full bg-transparent border-0 text-white placeholder-gray-500 focus:ring-0 resize-none"
          rows={3}
        />
        <div className="flex justify-between items-center mt-4">
          <button className="p-2 text-gray-400 hover:text-primary-400 transition-colors">
            <FaCalendar className="w-5 h-5" />
          </button>
          <button className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            ارسال تجربه
          </button>
        </div>
      </div>

      {/* لیست تجربیات */}
      <div className="space-y-6">
        {experiences.map((experience) => (
          <FadeIn key={experience.id}>
            <div className="bg-secondary-900/50 p-6 rounded-xl border border-primary-500/10">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{experience.content}</p>
                
                {experience.images && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {experience.images.map((image, idx) => (
                      <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`تصویر ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-secondary-800">
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>{new Date(experience.date).toLocaleDateString('fa-IR')}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-primary-400">
                      <FaThumbsUp className="w-4 h-4" />
                      <span>{experience.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-primary-400">
                      <FaComment className="w-4 h-4" />
                      <span>{experience.comments}</span>
                    </button>
                    <button className="text-gray-400 hover:text-primary-400">
                      <FaShare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
