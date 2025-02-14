'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaClock } from 'react-icons/fa';
import StarRating from './StarRating';
import FadeIn from '@/app/_components/animations/FadeIn';

interface PadeganCommentsProps {
  padeganId: string;
}

const dummyComments = [
  {
    id: '1',
    userId: 'user1',
    userName: 'علی محمدی',
    rating: 4,
    comment: 'امکانات خوابگاه عالی بود. برخورد کادر آموزشی هم محترمانه بود.',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'محمد حسینی',
    rating: 5,
    comment: 'تجربه خیلی خوبی داشتم. غذا و امکانات ورزشی خوب بود.',
    createdAt: '2024-01-10'
  }
];

export default function PadeganComments({ }: PadeganCommentsProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      // TODO: ارسال نظر به API
      await new Promise(resolve => setTimeout(resolve, 1000));
      reset();
      alert('نظر شما با موفقیت ثبت شد');
    } catch (error) {
      alert('خطا در ثبت نظر');
      console.log(error);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* فرم ثبت نظر */}
      <FadeIn>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={5} />
            <span className="text-sm text-gray-400">امتیاز شما</span>
          </div>
          
          <textarea
            {...register('comment')}
            rows={4}
            placeholder="تجربه خود را به اشتراک بگذارید..."
            className="w-full px-4 py-3 bg-secondary-900/50 rounded-xl border border-primary-500/10
              focus:border-primary-500/30 focus:ring-1 focus:ring-primary-500/30 
              text-white outline-none transition-all resize-none"
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-primary-500 text-white rounded-xl
              hover:bg-primary-600 transition-all disabled:opacity-50"
          >
            {isSubmitting ? 'در حال ثبت...' : 'ثبت نظر'}
          </button>
        </form>
      </FadeIn>

      {/* لیست نظرات */}
      <div className="space-y-6">
        {dummyComments.map((comment) => (
          <FadeIn key={comment.id}>
            <div className="bg-secondary-900/50 p-6 rounded-xl border border-primary-500/10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <FaUser className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{comment.userName}</div>
                    <StarRating rating={comment.rating} size="sm" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaClock className="w-4 h-4" />
                  <span>{new Date(comment.createdAt).toLocaleDateString('fa-IR')}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{comment.comment}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
