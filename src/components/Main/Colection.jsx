import ProductSection from '../Products/ProductSection'; 

export default function Colection({ allProducts }) {

  const tecnologia = allProducts.filter(p => p.category === 'electronics').slice(0, 8);

  return (
    <div className="bg-white pb-12"> 
      <div className="container mx-auto px-4">
        <ProductSection title="Coleção Tecnologia" products={tecnologia} isCarousel={true}/>
      </div>
    </div>
  );
}