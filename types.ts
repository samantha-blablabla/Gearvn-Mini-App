
export enum ScreenName {
  HOME = 'HOME',
  WARRANTY = 'WARRANTY',
  REWARDS = 'REWARDS',
  PROFILE = 'PROFILE',
  CREATE_WARRANTY = 'CREATE_WARRANTY',
  HISTORY = 'HISTORY',
  SUPPORT = 'SUPPORT',
  WARRANTY_DETAIL = 'WARRANTY_DETAIL',
  SHIPPING_ADDRESS = 'SHIPPING_ADDRESS',
  SETTINGS = 'SETTINGS',
  HELP_CENTER = 'HELP_CENTER',
  SERVICE_APPOINTMENTS = 'SERVICE_APPOINTMENTS',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_OF_SERVICE = 'TERMS_OF_SERVICE',
  HOT_DEALS = 'HOT_DEALS',
  // New Screens
  POINTS_POLICY = 'POINTS_POLICY',
  MY_REWARDS = 'MY_REWARDS',
  REWARD_DETAIL = 'REWARD_DETAIL',
  ALL_REWARDS = 'ALL_REWARDS',
  ORDER_SEARCH = 'ORDER_SEARCH',
  ORDER_DETAIL = 'ORDER_DETAIL',
  SERVICE_BOOKING = 'SERVICE_BOOKING',
  SERVICE_BOOKING_SUCCESS = 'SERVICE_BOOKING_SUCCESS',
  MINIGAME = 'MINIGAME', // New Gacha Game
  CHAT = 'CHAT', // GearBot Chatbot
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