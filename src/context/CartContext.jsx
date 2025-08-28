// src/context/CartContext.js

import { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart'; // Importa nosso hook

// Cria o contexto
const CartContext = createContext();

// Cria o "Provedor", que vai "envolver" nossa aplicação
export function CartProvider({ children }) {
  const cartManager = useCart(); // Usa nosso hook para obter os dados do carrinho
  return (
    <CartContext.Provider value={cartManager}>
      {children}
    </CartContext.Provider>
  );
}

// Uma forma fácil de usar o contexto nos componentes
export function useCartContext() {
  return useContext(CartContext);
}