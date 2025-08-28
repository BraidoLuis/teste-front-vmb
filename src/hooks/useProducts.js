// src/hooks/useProducts.js

import { useState, useEffect } from 'react';

export function useProducts() {
  // 1. A lógica de estado que estava no App.jsx vem para cá.
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. A lógica de buscar dados (useEffect) também vem para cá.
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Erro ao carregar os produtos da API');
        }
        const data = await response.json();
        setAllProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []); // O array vazio garante que a busca ocorra apenas uma vez

  // 3. O hook retorna os dados e os estados para quem o usar.
  return { allProducts, loading, error };
}