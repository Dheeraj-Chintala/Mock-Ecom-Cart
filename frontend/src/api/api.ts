import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust if deployed
});

// PRODUCT APIs
export const getProducts = async () => {
  const { data } = await API.get('/products');
  return data;
};

// CART APIs
export const getCart = async () => {
  const { data } = await API.get('/cart');
  return data;
};

export const addToCart = async (productId: string, quantity: number = 1) => {
  const { data } = await API.post('/cart/', { productId, quantity });
  return data;
};

export const removeFromCart = async (cartItemId: string) => {
  const { data } = await API.delete(`/cart/${cartItemId}`);
  return data;
};

export const updateCartQuantity = async (cartItemId: string, quantity: number) => {
  const { data } = await API.put(`/cart/${cartItemId}`, { quantity });
  return data;
};

// ORDER APIs
export const checkout = async (customerName: string, customerEmail: string) => {
  const { data } = await API.post('/orders/checkout/', { customerName, customerEmail });
  return data;
};
export const createOrder = async (orderData: {
  customerName: string;
  customerEmail: string;
  items: { productId: string; quantity: number }[];
  total: number;
}) => {
  const { data } = await API.post('/orders', orderData);
  return data;
};
