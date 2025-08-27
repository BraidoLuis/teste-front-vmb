// src/components/ProductCard.jsx

// Função para formatar o preço para o padrão brasileiro (R$)
const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export default function ProductCard({ product }) {
  return (
    <div className="text-center">

      <div className="bg-gray-100 mb-4 overflow-hidden rounded-[5px]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full font-hedvig h-80 object-cover object-center transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="px-2">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-2 h-10">
          {product.title}
        </h3>
        <p className="text-lg font-medium text-gray-900 mb-4 mt-6">
          {formatPrice(product.price)}
        </p>
        <button className="w-full bg-[#61A9CC] text-white uppercase py-2 text-sm font-semibold hover:bg-[#5390ae] transition-colors duration-300 hover:shadow-lg rounded-[5px] cursor-pointer">
          Comprar
        </button>
      </div>
    </div>
  );
}