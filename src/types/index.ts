export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  priceRange?: { min: number; max: number };
  category: string;
  images: string[];
  sellerId: string;
  sellerName: string;
  rating: number;
  reviewCount: number;
  stock: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
  shippingAddress: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'seller';
  phone?: string;
  address?: string;
}

export interface Seller extends User {
  companyName: string;
  companyAddress: string;
  totalSales: number;
  productCount: number;
}
