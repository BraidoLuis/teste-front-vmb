// src/hooks/useCart.js

import { useState, useEffect } from 'react';

// A chave que usaremos para salvar o carrinho no localStorage
const CART_STORAGE_KEY = 'neoclassico_cart';

export function useCart() {
  // 1. Inicializa o estado do carrinho.
  // Ele tenta ler do localStorage primeiro. Se não houver nada, começa com um array vazio.
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Erro ao ler o carrinho do localStorage", error);
      return [];
    }
  });

  // 2. Um 'useEffect' que observa mudanças no estado 'cart'.
  // Toda vez que o carrinho mudar, ele salva a nova versão no localStorage.
  useEffect(() => {
    try {
      const serializedCart = JSON.stringify(cart);
      window.localStorage.setItem(CART_STORAGE_KEY, serializedCart);
    } catch (error) {
      console.error("Erro ao salvar o carrinho no localStorage", error);
    }
  }, [cart]);

  // 3. Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    // Verificamos se o produto já existe para não duplicar (opcional)
    const productInCart = cart.find(item => item.id === product.id);
    if (!productInCart) {
      setCart(prevCart => [...prevCart, product]);
      alert(`${product.title} foi adicionado ao carrinho!`);
    } else {
      alert(`${product.title} já está no seu carrinho.`);
    }
  };

  // 4. Função para remover um produto (exemplo)
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // 5. O hook retorna o estado do carrinho e as funções para manipulá-lo
  return { cart, addToCart, removeFromCart };
}