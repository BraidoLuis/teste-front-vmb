// src/components/ProductSection.jsx
import ProductCard from './ProductCard';

export default function ProductSection({ title, products }) {
  return (
    <section className="mb-16">
      <h2 className="font-hedvig text-3xl text-[#61A9CC] font-bold mb-8 ml-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}