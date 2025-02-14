import dynamic from 'next/dynamic';
import type { SoldierFilter } from '@/app/_types/soldier';

const SearchFilters = dynamic(
  () => import('./SearchFilters'),
  { 
    ssr: false,
    loading: () => (
      <div className="animate-pulse space-y-4">
        <div className="h-12 bg-secondary-800/50 rounded-xl"></div>
        <div className="h-12 bg-secondary-800/50 rounded-xl"></div>
        <div className="h-12 bg-secondary-800/50 rounded-xl"></div>
      </div>
    )
  }
);

interface SearchFiltersWrapperProps {
  activeFilters: SoldierFilter;
  onFilterChange: (filters: SoldierFilter) => void;
}

export default function SearchFiltersWrapper(props: SearchFiltersWrapperProps) {
  return <SearchFilters {...props} />;
}
