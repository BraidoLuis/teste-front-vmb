import { useState } from 'react';
import { CiSearch, CiHeart, CiUser, CiShoppingCart, CiMenuFries } from "react-icons/ci";
import LogoHeader from '../../assets/Logo.svg';
import { useCartContext } from '../../context/CartContext';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart, openCart } = useCartContext();
    const navLinks = [
        { title: 'QUADROS' },
        { title: 'JOIAS' },
        { title: 'ELETRÔNICOS' },
        { title: 'ROUPAS' },
        { title: 'MANTAS' },
        { title: 'OBJETOS DECORATIVOS' },
        { title: 'COLEÇÕES' },
        { title: 'RASTREIO DE PEDIDOS' },
    ];

    return (
        <header className='bg-white w-full relative border-b border-gray-200'>

            <div className="bg-[#61A9CC]  text-white text-center py-2 px-4">
                <p className="hidden md:block text-xs font-nunito tracking-wider">GANHE PONTOS EM COMPRAS ACIMA DE R$ 100,00 E TROQUE POR BENEFÍCIOS EXCLUSIVOS</p>
            </div>

            <div className="container mx-auto px-4 h-20 flex items-center">

                <div className="w-1/3 flex justify-start items-center gap-4">
                    <div className="flex lg:hidden items-center gap-3">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <CiMenuFries className="h-7 w-7 text-[#686868]" />
                        </button>
                        <CiSearch className="w-7 h-7 text-[#686868] hover:text-gray-800 cursor-pointer" />
                    </div>
                </div>

                <div className="w-1/3 flex justify-center">
                    <img src={LogoHeader} alt="Neoclássico Logo" className="h-8" />
                </div>

                <div className="w-1/3 flex justify-end items-center">
                   
                    <div className="flex lg:hidden items-center gap-3">
                        <CiHeart className="w-7 h-7 text-[#686868] hover:text-gray-800 cursor-pointer" />
                        <CiUser className="w-7 h-7 text-[#686868] hover:text-gray-800 cursor-pointer" />
                        <button onClick={openCart} className="relative text-[#686868] hover:text-gray-800 cursor-pointer">
                            <CiShoppingCart className="w-7 h-7" />
                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-6">
                        <CiSearch className="w-7 h-7 text-[#686868] hover:text-gray-800 cursor-pointer hover:scale-110" />
                        <CiHeart className="w-7 h-7 text-[#686868] hover:text-gray-800 cursor-pointer hover:scale-110" />
                        <CiUser className="w-7 h-7 text-[#686868] hover:text-gray-800 cursor-pointer hover:scale-110" />
                        <button onClick={openCart} className="relative text-[#686868] hover:text-gray-800 cursor-pointer hover:scale-110">
                            <CiShoppingCart className="w-7 h-7" />
                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <nav className='hidden lg:flex justify-center items-center gap-8 py-4 border-t border-gray-200 '>
                {navLinks.map((link) => (
                    <a key={link.title} href="#" className='text-sm tracking-wider text-[#686868] hover:text-gray-900 font-nunito cursor-pointer'>
                        {link.title}
                    </a>
                ))}
            </nav>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden z-40 border-t border-gray-200">
                    <nav className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <a key={link.title} href="#" className='py-3 px-2 text-left text-md text-[#686868] hover:bg-gray-50'>
                                {link.title} 
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}