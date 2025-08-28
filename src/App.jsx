import './App.css';

import { useProducts } from './hooks/useProducts';

import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import Banner from './components/Main/Banner';
import Benefits from './components/Main/Benefits';
import Products from './components/Products/Products';
import Classic from './components/Main/Classic';
import Colection from './components/Main/Colection';
import News from './components/Main/News';


export default function App() {
  // 2. Usamos o hook com uma única linha para obter tudo o que precisamos!
  const { allProducts, loading, error } = useProducts();

  // O resto do seu componente (loading, error, return) continua exatamente igual
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