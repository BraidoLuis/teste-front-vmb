import { CiSearch, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import LogoHeader from '../../assets/Logo.svg';

export default function Header() {
    return (
        <header className='bg-white w-full'>

            <div className="bg-[#61A9CC] text-white text-center py-3 px-4">
                <h1 className="text-xs font-medium">GANHE PONTOS EM COMPRAS ACIMA DE R$ 100,00 E TROQUE POR BENEFÍCIOS EXCLUSIVOS</h1>
            </div>

        
            <div className="container mx-auto p-4 flex justify-between items-center">
                
                <div className='flex-1'></div>

                <div className='flex-1 flex justify-center'>
                    <img src={LogoHeader} alt="Vambora Logo" className="h-15"/> 
                </div>
                <div className='flex-1 flex justify-end'>
                    <nav className="space-x-4">
                        <CiSearch className="inline-block w-9 h-9 text-[#61A9CC] hover:text-gray-800 cursor-pointer" />
                        <CiHeart className="inline-block w-9 h-9 text-[#61A9CC] hover:text-gray-800 cursor-pointer" />
                        <CiUser className="inline-block w-9 h-9 text-[#61A9CC] hover:text-gray-800 cursor-pointer" />
                        <CiShoppingCart className="inline-block w-9 h-9 text-[#61A9CC] hover:text-gray-800 cursor-pointer" />
                    </nav>
                </div>
                    
            </div>

            <div className='flex justify-center space-x-6 bg-white py-3'>
                <button className='text-sm text-[#686868] hover:text-gray-900 font-medium cursor-pointer'>QUADROS</button>
                <button className='text-sm text-[#686868] hover:text-gray-900 font-medium cursor-pointer'>LUMINÁRIAS</button>
                <button className='text-sm text-[#686868] hover:text-gray-900 font-medium cursor-pointer'>ALMOFADAS</button>
                <button className='text-sm text-[#686868] hover:text-gray-900 font-medium cursor-pointer'>MESAS DE CENTRO</button>
                <button className='text-sm text-[#686868] hover:text-gray-900 font-medium cursor-pointer'>MANTAS</button>
                <button className='text-sm text-[#686868] hover:text-gray-900 font-medium cursor-pointer'>OBJETOS DECORATIVOS</button>
                <button className='text-sm text-[#686868] hover:text-gray-900 font-medium cursor-pointer'>COLEÇÕES</button>
                <button className='text-sm text-[#686868] hover:text-gray-900 font-medium cursor-pointer'>RASTREIO DE PEDIDOS</button>
            </div>
        </header>
        
    );
}