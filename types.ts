export enum ScreenName {
  HOME = 'HOME',
  WARRANTY = 'WARRANTY',
  REWARDS = 'REWARDS',
  PROFILE = 'PROFILE',
  CREATE_WARRANTY = 'CREATE_WARRANTY',
  HISTORY = 'HISTORY',
  SUPPORT = 'SUPPORT',
  WARRANTY_DETAIL = 'WARRANTY_DETAIL',
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
}

export interface WarrantyItem {
  id: string;
  productName: string;
  serialNumber: string;
  status: 'PROCESSING' | 'REPAIRING' | 'COMPLETED';
  statusText: string;
  steps: {
    label: string;
    date?: string;
    description?: string;
    completed: boolean;
    active: boolean;
  }[];
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'COMPLETED' | 'SHIPPING' | 'CANCELLED';
  statusText: string;
  total: number;
  pointsEarned?: number;
  items: {
    name: string;
    image: string;
    quantity: number;
  }[];
  itemCount: number;
}
