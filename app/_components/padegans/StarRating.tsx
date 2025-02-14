import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function StarRating({ rating, size = 'md' }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starSize = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }[size];

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full_${i}`} className={`${starSize} text-yellow-400`} />
      ))}
      {hasHalfStar && <FaStarHalfAlt className={`${starSize} text-yellow-400`} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty_${i}`} className={`${starSize} text-yellow-400`} />
      ))}
    </div>
  );
}
