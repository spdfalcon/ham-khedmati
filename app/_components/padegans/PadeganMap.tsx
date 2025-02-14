import dynamic from 'next/dynamic';
import type { Padegan } from '@/app/_types/padegan';

const MapContainer = dynamic(
  () => import('./MapContainerComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-secondary-800/50 rounded-xl h-[500px]"></div>
    )
  }
);

interface PadeganMapProps {
  padegan: Padegan;
}

export default function PadeganMap({ padegan }: PadeganMapProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-primary-500/10">
      <MapContainer padegan={padegan} />
    </div>
  );
}
