export interface Soldier {
  id: string;
  name: string;
  avatar?: string;
  deploymentDate: string;
  province: string;
  city: string;
  padeganId: string;
  padeganName: string;
  education: string;
  interests: string[];
  bio?: string;
  isOnline: boolean;
  lastSeen?: string;
}

export interface SoldierFilter {
  deploymentDateRange?: {
    start: string;
    end: string;
  };
  province?: string;
  city?: string;
  padeganId?: string;
  education?: string;
  interests?: string[];
}
