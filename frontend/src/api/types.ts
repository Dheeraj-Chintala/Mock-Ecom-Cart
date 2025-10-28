export interface CartItem {
  _id: string;           
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartResponse {
  items: CartItem[];
  total: number;
}
export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  timestamp: string;
}