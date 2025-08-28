import { useState, useEffect } from 'react';

export function useProducts() {

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []); 

  return { allProducts, loading, error };
}