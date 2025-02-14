'use client';
import { useState } from 'react';
import SearchFiltersWrapper from './SearchFiltersWrapper';
import SuggestedSoldiers from './SuggestedSoldiers';
import SoldiersList from './SoldiersList';
import type { SoldierFilter } from '@/app/_types/soldier';

export default function FindSoldiersWrapper() {
  const [activeFilters, setActiveFilters] = useState<SoldierFilter>({});

  return (
    <div className="container mx-auto px-4 py-12">
      {/* هدر صفحه */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          پیدا کردن <span className="text-primary-400">هم‌خدمتی</span>
        </h1>
        <p className="text-gray-400">
          با جستجو در بین هزاران سرباز، هم‌دوره‌های خود را پیدا کنید
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* فیلترهای جستجو */}
        <div className="lg:col-span-1">
          <SearchFiltersWrapper 
            activeFilters={activeFilters} 
            onFilterChange={setActiveFilters} 
          />
        </div>

        {/* نتایج جستجو */}
        <div className="lg:col-span-2">
          <SoldiersList filters={activeFilters} />
        </div>

        {/* پیشنهادات */}
        <div className="lg:col-span-1">
          <SuggestedSoldiers />
        </div>
      </div>
    </div>
  );
}
