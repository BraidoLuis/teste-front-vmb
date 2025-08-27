// src/components/Products/Products.jsx

import ProductSection from './ProductSection';

// O componente agora recebe as listas de produtos como props
export default function Products({ productsNovidades, productsMaisVendidos }) {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <ProductSection title="Novidades" products={productsNovidades} />
        <ProductSection title="Mais Vendidos" products={productsMaisVendidos} />
      </div>
    </div>
  );
}