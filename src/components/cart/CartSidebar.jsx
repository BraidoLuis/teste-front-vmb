import { useCartContext } from '../../context/CartContext';
import { CiCircleRemove, CiTrash } from "react-icons/ci"; 

export default function CartSidebar() {
  const { isCartOpen, closeCart, cart, removeFromCart } = useCartContext();

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-[#61A9CC] bg-opacity-50 transition-opacity" 
      onClick={closeCart}
      ></div>

      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
       
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Seu Carrinho ({cart.length})</h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-gray-800 cursor-pointer">
           
            <CiCircleRemove size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">Seu carrinho está vazio.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {cart.map(product => (
                <li key={product.id} className="flex py-4">
                  <img src={product.image} alt={product.title} className="h-20 w-20 object-contain rounded-md" />
                  <div className="ml-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
                      <p className="text-lg font-bold text-gray-900 mt-1">R$ {product.price.toFixed(2)}</p>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(product.id)}
                      className="flex items-center gap-1 font-medium text-red-500 hover:text-red-700 text-xs text-left w-fit-content cursor-pointer"
                    >
                      <CiTrash size={14} />
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-[#61A9CC] text-white py-3 rounded-md hover:bg-[#5390ae]">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}