// src/pages/Products.jsx (ou onde seu componente principal está)

import { useState, useEffect } from 'react';
import ProductSection from './ProductSection'; // Ajuste o caminho se necessário

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        // Vamos buscar todos os produtos de uma vez
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Erro ao carregar os produtos');
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
  }, []); // O array vazio [] faz com que a busca ocorra apenas uma vez

  // Se estiver carregando, mostre uma mensagem
  if (loading) {
    return <div className="text-center py-20">Carregando...</div>;
  }

  // Se houver erro, mostre uma mensagem de erro
  if (error) {
    return <div className="text-center py-20 text-red-600">Erro: {error}</div>;
  }
  
  // Vamos dividir a lista de produtos para simular as seções
  const novidades = allProducts.slice(0, 4);
  const maisVendidos = allProducts.slice(4, 8);

  return (
    <div className="bg-white py-12 ">
      <div className="container mx-auto px-4 ">
        <ProductSection title="Novidades" products={novidades} />
        <ProductSection title="Mais Vendidos" products={maisVendidos} />
      </div>
    </div>
  );
}