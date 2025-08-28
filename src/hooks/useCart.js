import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const CART_STORAGE_KEY = 'neoclassico_cart';

export function useCart() {

  const [cart, setCart] = useState(() => {
    try {
        const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error("Erro ao ler o carrinho do localStorage", error);
        return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error("Erro ao salvar o carrinho no localStorage", error);
    }
  }, [cart]);

  const addToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    
    if (!productInCart) {
        setCart(prevCart => [...prevCart, product]);
        toast.success(`${product.title} foi adicionado ao carrinho!`);
    } else {
        toast.info(`${product.title} já está no seu carrinho.`);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return { cart, addToCart, removeFromCart, isCartOpen, openCart, closeCart };
}