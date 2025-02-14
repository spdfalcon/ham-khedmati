'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaImages, FaTrash } from 'react-icons/fa';
import FadeIn from '@/app/_components/animations/FadeIn';

interface GalleryTabProps {
  soldierId: string;
}

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  createdAt: string;
}

const dummyImages: GalleryImage[] = [
  {
    id: '1',
    url: '/images/gallery/1.jpg',
    caption: 'روز اول دوره آموزشی',
    createdAt: '2024-01-15'
  },
  // ... سایر تصاویر
];

export default function GalleryTab({ }: GalleryTabProps) {
  const [images] = useState<GalleryImage[]>(dummyImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="p-6 space-y-8">
      {/* بخش آپلود تصویر */}
      <div className="bg-secondary-900/50 p-4 rounded-xl border border-primary-500/10">
        <div className="flex items-center justify-center border-2 border-dashed border-primary-500/20 
          rounded-xl p-8 hover:border-primary-500/40 transition-colors cursor-pointer">
          <div className="text-center">
            <FaImages className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <p className="text-gray-400">برای آپلود تصویر کلیک کنید یا فایل را اینجا رها کنید</p>
          </div>
          <input type="file" className="hidden" accept="image/*" multiple />
        </div>
      </div>

      {/* گرید تصاویر */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <FadeIn key={image.id}>
            <div 
              className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.url}
                alt={image.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent 
                to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">{image.caption}</p>
                  <p className="text-gray-300 text-xs">
                    {new Date(image.createdAt).toLocaleDateString('fa-IR')}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* مودال نمایش تصویر */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={selectedImage.url}
              alt={selectedImage.caption}
              fill
              className="object-contain"
            />
            <button 
              className="absolute top-4 right-4 p-2 bg-red-500 rounded-full hover:bg-red-600
                transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                // حذف تصویر
              }}
            >
              <FaTrash className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
