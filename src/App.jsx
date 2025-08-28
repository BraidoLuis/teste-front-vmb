import './App.css';

import { useProducts } from './hooks/useProducts';
import { Toaster } from 'sonner';

import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import Banner from './components/Main/Banner';
import Benefits from './components/Main/Benefits';
import Products from './components/Products/Products';
import Classic from './components/Main/Classic';
import Colection from './components/Main/Colection';
import News from './components/Main/News';
import CartSidebar from './components/cart/CartSidebar';


export default function App() {

  const { allProducts, loading, error } = useProducts();

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
      <CartSidebar />
      <Toaster richColors />
    </div>
  );
}