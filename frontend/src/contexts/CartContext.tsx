import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import * as api from '@/api/api';
import { CartItem } from '@/api/types';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  total: number;
  isLoading: boolean;
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
  updateQuantity: (cartItemId: string, quantity: number) => Promise<void>;
  clearCart: () => void;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const calculateTotal = (cartItems: CartItem[]) =>
    cartItems.reduce(
      (sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0),
      0
    );

  const refreshCart = async () => {
    try {
      const res = await api.getCart();
      const cartData = res.cart ?? res;
      const newItems = Array.isArray(cartData.items)
        ? cartData.items
        : cartData;
      setItems(newItems);
      setTotal(cartData.total ?? calculateTotal(newItems));
    } catch (error) {
      console.error('❌ Failed to refresh cart:', error);
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const addToCart = async (productId: string, quantity = 1) => {
    setIsLoading(true);
    try {
      await api.addToCart(productId, quantity);
      await refreshCart();
      toast({
        title: 'Added to cart',
        description: 'Item successfully added to your cart',
      });
    } catch (error) {
      console.error('❌ Failed to add to cart:', error);
      toast({
        title: 'Error',
        description: 'Failed to add item to cart',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (cartItemId: string) => {
    setIsLoading(true);
    try {
      await api.removeFromCart(cartItemId);
      await refreshCart();
      toast({
        title: 'Item removed',
        description: 'Item removed from your cart',
      });
    } catch (error) {
      console.error('❌ Failed to remove item:', error);
      toast({
        title: 'Error',
        description: 'Failed to remove item',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (cartItemId: string, quantity: number) => {
    setIsLoading(true);
    try {
      await api.updateCartQuantity(cartItemId, quantity);
      await refreshCart();
      toast({
        title: 'Quantity updated',
        description: 'Cart updated successfully',
      });
    } catch (error) {
      console.error('❌ Failed to update quantity:', error);
      toast({
        title: 'Error',
        description: 'Failed to update quantity',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = () => {
    setItems([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        isLoading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
