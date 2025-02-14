'use client';
import dynamic from 'next/dynamic';
import FadeIn from '@/app/_components/animations/FadeIn';

// Dynamic import of CalculateDurationForm to prevent hydration errors
const CalculateDurationForm = dynamic(() => import('../../_components/calculate/CalculateDurationForm'), {
  ssr: false, // This is important - it prevents server-side rendering
});

export default function ClientForm() {
  return (
    <FadeIn className="bg-secondary-800/50 p-8 rounded-2xl border border-primary-500/10">
      <CalculateDurationForm />
    </FadeIn>
  );
}
