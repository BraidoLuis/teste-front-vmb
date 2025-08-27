import ProductSection from './ProductSection';

export default function Products({ allProducts}) {
  const novidades = allProducts.slice(0, 8); 
  const maisVendidos = allProducts.slice(12, 20);
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 ">
        <ProductSection title="Novidades" products={novidades} isCarousel={true}/>
        <ProductSection title="Mais Vendidos" products={maisVendidos} isCarousel={true}/>
      </div>
    </div>
  );
}