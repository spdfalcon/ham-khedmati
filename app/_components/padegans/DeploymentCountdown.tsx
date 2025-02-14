'use client';
import { useEffect, useState } from 'react';
import { FaClock } from 'react-icons/fa';

interface DeploymentCountdownProps {
  date: string;
}

export default function DeploymentCountdown({ date }: DeploymentCountdownProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(date).getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return `${days} روز تا اعزام بعدی`;
      }
      return 'تاریخ اعزام بعدی اعلام نشده';
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000 * 60 * 60);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="flex items-center gap-2 text-primary-400 bg-primary-500/10 px-3 py-2 rounded-lg">
      <FaClock className="w-4 h-4" />
      <span className="text-sm font-medium">{timeLeft}</span>
    </div>
  );
}
