import { useState, useEffect } from 'react';

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

  useEffect(() => {
    try {
      const serializedCart = JSON.stringify(cart);
      window.localStorage.setItem(CART_STORAGE_KEY, serializedCart);
    } catch (error) {
      console.error("Erro ao salvar o carrinho no localStorage", error);
    }
  }, [cart]);

  const addToCart = (product) => {

    const productInCart = cart.find(item => item.id === product.id);
    if (!productInCart) {
      setCart(prevCart => [...prevCart, product]);
      alert(`${product.title} foi adicionado ao carrinho!`);
    } else {
      alert(`${product.title} já está no seu carrinho.`);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return { cart, addToCart, removeFromCart };
}