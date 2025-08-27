// src/components/Navigation/Header.jsx

import { useState } from 'react';
import { CiSearch, CiHeart, CiUser, CiShoppingCart, CiMenuFries } from "react-icons/ci";
import LogoHeader from '../../assets/Logo.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: 'QUADROS' },
        { title: 'LUMINÁRIAS' },
        { title: 'ALMOFADAS' },
        { title: 'MESAS DE CENTRO' },
        { title: 'MANTAS' },
        { title: 'OBJETOS DECORATIVOS' },
        { title: 'COLEÇÕES' },
        { title: 'RASTREIO DE PEDIDOS' },
    ];

    return (
        <header className='bg-white w-full relative border-b border-gray-200'>

            {/* Barra azul superior (sem alterações) */}
            <div className="bg-[#61A9CC] text-white text-center py-2 px-4">
                <p className="text-xs font-nunito tracking-wider">GANHE PONTOS EM COMPRAS ACIMA DE R$ 100,00 E TROQUE POR BENEFÍCIOS EXCLUSIVOS</p>
            </div>

            {/* Seção 1: Logo e Ícones */}
            <div className="container mx-auto px-4 h-24 flex items-center">
                
                {/* Coluna da Esquerda (Espaço) - w-1/3 */}
                <div className="w-1/3"></div>

                {/* Coluna Central (Logo) - w-1/3 */}
                <div className="w-1/3 flex justify-center">
                    <img src={LogoHeader} alt="Neoclássico Logo" className="h-10" />
                </div>

                {/* Coluna da Direita (Ícones) - w-1/3 */}
                <div className="w-1/3 flex justify-end items-center gap-6">
                    <div className="hidden sm:flex items-center gap-6">
                        <CiSearch className="w-7 h-7 text-gray-500 hover:text-gray-800 cursor-pointer" />
                        <CiHeart className="w-7 h-7 text-gray-500 hover:text-gray-800 cursor-pointer" />
                        <CiUser className="w-7 h-7 text-gray-500 hover:text-gray-800 cursor-pointer" />
                        <CiShoppingCart className="w-7 h-7 text-gray-500 hover:text-gray-800 cursor-pointer" />
                    </div>
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <CiMenuFries className="h-8 w-8 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Seção 2: Navegação Desktop (escondida no mobile) */}
            <nav className='hidden lg:flex justify-center items-center gap-8 py-4 border-t border-gray-200'>
                {navLinks.map((link) => (
                    <a key={link.title} href="#" className='text-sm tracking-wider text-[#686868] hover:text-gray-900 font-nunito cursor-pointer'>
                        {link.title}
                    </a>
                ))}
            </nav>

            {/* Menu Mobile Dropdown (lógica continua a mesma) */}
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