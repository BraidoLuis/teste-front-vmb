// App.js - ASSIM ESTÁ CORRETO
import './App.css';
import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import Banner from './components/Main/Banner';
import Benefits from './components/Main/Benefits';
import Products from './components/Products/Products';
import Classic from './components/Main/Classic';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='sticky top-0 z-50'>
        <Header />
      </div>
      <main>
        <Banner />
        <Benefits />
        <Products />
        <Classic />
      </main>
      <Footer />
    </div>
  );
}