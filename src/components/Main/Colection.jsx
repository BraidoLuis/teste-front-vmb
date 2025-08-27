import ProductSection from '../Products/ProductSection'; // Ajuste o caminho

export default function Colection({ productsCamadas }) {
  return (
    <div className="bg-white pb-12"> 
      <div className="container mx-auto px-4">
        <ProductSection title="Coleção Tecnologia" products={productsCamadas} />
      </div>
    </div>
  );
}