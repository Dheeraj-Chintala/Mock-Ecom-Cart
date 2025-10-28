export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  timestamp: string;
}

const CART_KEY = 'vibe_commerce_cart';
const ORDERS_KEY = 'vibe_commerce_orders';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description: 'High-quality wireless headphones with noise cancellation',
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    description: 'Advanced fitness tracking and notifications',
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    description: 'Sleek design with multiple compartments',
  },
  {
    id: '4',
    name: 'Portable Bluetooth Speaker',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    description: 'Waterproof speaker with 360° sound',
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
    description: 'UV protection with premium frames',
  },
  {
    id: '6',
    name: 'Leather Wallet',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80',
    description: 'Genuine leather with RFID protection',
  },
  {
    id: '7',
    name: 'Fitness Yoga Mat',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80',
    description: 'Non-slip surface, eco-friendly material',
  },
  {
    id: '8',
    name: 'Coffee Maker Deluxe',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80',
    description: 'Programmable with built-in grinder',
  },
  {
    id: '9',
    name: 'Desk Organizer Set',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80',
    description: 'Bamboo construction, multiple compartments',
  },
  {
    id: '10',
    name: 'LED Desk Lamp',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    description: 'Adjustable brightness and color temperature',
  },
];

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  async getProducts(): Promise<Product[]> {
    await delay(300);
    return mockProducts;
  },

  async getCart(): Promise<{ items: CartItem[]; total: number }> {
    await delay(200);
    const cartData = localStorage.getItem(CART_KEY);
    const items: CartItem[] = cartData ? JSON.parse(cartData) : [];
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { items, total };
  },

  async addToCart(productId: string, quantity: number = 1): Promise<CartItem[]> {
    await delay(300);
    const product = mockProducts.find(p => p.id === productId);
    if (!product) throw new Error('Product not found');

    const cartData = localStorage.getItem(CART_KEY);
    const items: CartItem[] = cartData ? JSON.parse(cartData) : [];
    
    const existingItem = items.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.push({
        id: `cart_${Date.now()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
      });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(items));
    return items;
  },

  async removeFromCart(cartItemId: string): Promise<CartItem[]> {
    await delay(200);
    const cartData = localStorage.getItem(CART_KEY);
    const items: CartItem[] = cartData ? JSON.parse(cartData) : [];
    const updatedItems = items.filter(item => item.id !== cartItemId);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedItems));
    return updatedItems;
  },

  async updateCartQuantity(cartItemId: string, quantity: number): Promise<CartItem[]> {
    await delay(200);
    const cartData = localStorage.getItem(CART_KEY);
    const items: CartItem[] = cartData ? JSON.parse(cartData) : [];
    const item = items.find(item => item.id === cartItemId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        return this.removeFromCart(cartItemId);
      }
    }
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    return items;
  },

  async checkout(customerName: string, customerEmail: string): Promise<Order> {
    await delay(500);
    const { items, total } = await this.getCart();
    
    if (items.length === 0) {
      throw new Error('Cart is empty');
    }

    const order: Order = {
      id: `order_${Date.now()}`,
      items: [...items],
      total,
      customerName,
      customerEmail,
      timestamp: new Date().toISOString(),
    };

    // Save order to history
    const ordersData = localStorage.getItem(ORDERS_KEY);
    const orders: Order[] = ordersData ? JSON.parse(ordersData) : [];
    orders.push(order);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem(CART_KEY);

    return order;
  },
};
