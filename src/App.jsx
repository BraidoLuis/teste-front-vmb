import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import Banner from './components/Main/Banner';
import Benefits from './components/Main/Benefits';
import Products from './components/Products/Products';
import Classic from './components/Main/Classic';
import Colection from './components/Main/Colection';
import News from './components/Main/News';


export default function App() {
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

  if (loading) {
    return <div className="text-center py-40">Carregando produtos...</div>;
  }
  if (error) {
    return <div className="text-center py-40 text-red-600">Erro: {error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <main>
        <Banner />
        <Benefits />
        <Products allProducts={allProducts} />
        <Classic />
        <Colection allProducts={allProducts} />
        
        <News />
      </main>
      <Footer />
    </div>
  );
}