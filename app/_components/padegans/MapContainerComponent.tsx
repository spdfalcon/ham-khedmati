'use client';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Padegan } from '@/app/_types/padegan';

interface MapContainerProps {
  padegan: Padegan;
}

interface ExtendedIconOptions extends L.IconOptions {
  _getIconUrl?: string;
}

export default function MapContainerComponent({ padegan }: MapContainerProps) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Fix for leaflet icon issue in Next.js
      delete (L.Icon.Default.prototype as unknown as ExtendedIconOptions)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
        iconUrl: '/images/leaflet/marker-icon.png',
        shadowUrl: '/images/leaflet/marker-shadow.png',
      });

      // Initialize map
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([35.6892, 51.3890], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapRef.current);

        // Add marker
        L.marker([35.6892, 51.3890])
          .addTo(mapRef.current)
          .bindPopup(padegan.name)
          .openPopup();
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [padegan]);

  return <div id="map" className="h-[500px]" />;
}
