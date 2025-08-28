import { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart'; 

const CartContext = createContext();

export function CartProvider({ children }) {

  const cartLogic = useCart();

  return (
    <CartContext.Provider value={cartLogic}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
return useContext(CartContext);
}