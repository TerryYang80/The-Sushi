export type PageTab = 'home' | 'menu' | 'about' | 'gallery' | 'location' | 'reserve';

export interface MenuItem {
  id: string;
  name: string;
  japaneseName?: string;
  category: string;
  price: number;
  description: string;
  image?: string;
  badge?: 'Popular' | 'Chef Choice' | 'Award Winner' | 'Spicy' | 'Vegetarian' | 'Local BC Wild';
  pieces?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: 'Special Rolls' | 'Sashimi & Nigiri' | 'Aburi Oshi' | 'Hot Kitchen' | 'Restaurant & Bar';
}

export interface CartItem {
  dish: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationRequest {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Sushi Bar Counter' | 'Dining Table' | 'Booth' | 'Patio (Seasonal)';
  notes?: string;
}
