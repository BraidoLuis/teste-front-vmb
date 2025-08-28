import { createContext, useContext, useState, useEffect } from 'react';

const CART_STORAGE_KEY = 'neoclassico_cart';
const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    if (!productInCart) {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]); // Adicionamos quantidade
      alert(`${product.title} foi adicionado ao carrinho!`);
    } else {
      alert(`${product.title} já está no seu carrinho.`);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    isCartOpen,
    openCart,
    closeCart,
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}