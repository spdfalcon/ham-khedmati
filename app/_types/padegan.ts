import { StaticImageData } from "next/image";

export interface Padegan {
  id: string;
  name: string;
  slug: string;
  city: string;
  province: string;
  type: 'آموزشی' | 'عملیاتی' | 'پشتیبانی';
  image: string | StaticImageData;
  rating: number;
  totalRatings: number;
  description: string;
  nextDeploymentDate: string;
  upcomingDeployments: number; // تعداد افراد در انتظار اعزام
  features: string[];
}

export interface PadeganRating {
  id: string;
  padeganId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}
