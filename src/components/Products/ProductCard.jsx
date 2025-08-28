import { useCartContext } from '../../context/CartContext';

const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

export default function ProductCard({ product }) {
  const { addToCart } = useCartContext();
  return (
    

    <div className="group text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

      <div className="bg-gray-100 mb-4 overflow-hidden rounded-[5px]">
        <img
          src={product.image}
          alt={product.title}

          className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="px-2 pb-4"> 
        <h3 

          className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-2 h-10 transition-colors group-hover:text-[#61A9CC]"
        >
          {product.title}
        </h3>
        <p className="text-lg font-medium text-gray-900 mb-4 mt-6">
          {formatPrice(product.price)}
        </p>
        <button onClick={() => addToCart(product)} className="w-full bg-[#61A9CC] text-white uppercase py-2 text-sm font-semibold hover:bg-[#5390ae] transition-all duration-300 hover:shadow-lg rounded-[5px]">
          Comprar
        </button>
      </div>
    </div>
  );
}