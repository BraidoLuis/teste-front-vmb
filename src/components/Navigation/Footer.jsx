import Logo from  '../../assets/Logo.svg'
import Pagamento from '../../assets/Payment.svg'; 
import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; 
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";


const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left">
      <h3 className="font-hedvig-serif uppercase tracking-wider text-gray-700">{title}</h3>
     
      {isOpen ? <IoRemoveOutline size={20} /> : <IoAddOutline size={20} />}
    </button>
    {isOpen && (
      <div className="pt-4 text-sm text-gray-500">
        {children}
      </div>
    )}
  </div>
);


export default function Footer() {

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (title) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    const LanguageSelector = () => (
        <div className="w-full">
            <h3 className="font-hedvig-serif uppercase tracking-wider text-gray-700 mb-4">Idioma</h3>
            <div className="relative">
            <select defaultValue="pt-br" className="w-full appearance-none bg-white border border-gray-300 text-gray-600 py-3 px-4 pr-8 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400">
                <option value="pt-br">Português (Brasil)</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="zh">中文 (Chinese)</option>
            </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <LuLanguages size={20} />
                </div>
            </div>
        </div>
    );

    return (
        <footer className="bg-white text-gray-500 font-light">
            <div className="container mx-auto px-8 py-12">
                <div className="hidden lg:block">
                    <div className="border-t border-gray-200 mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">

                        <div className="xl:col-span-2">
                            <img src={Logo} alt="Neoclássico Logo" className="w-48 mb-4" />
                            <p className="text-sm font-hedvig-sans leading-relaxed pr-8">
                                Na neoclássico, combinamos design atemporal e contemporâneo para transformar espaços. Descubra o novo clássico.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold font-hedvig uppercase tracking-wider text-gray-600 mb-4 text-sm">Sobre Nós</h3>
                            <nav className="flex flex-col gap-3 text-sm font-hedvig-sans">
                                <a href="/nossa-historia" className="hover:text-gray-800">Nossa história</a>
                                <a href="/curadoria" className="hover:text-gray-800">Curadoria Exclusiva</a>
                            </nav>
                        </div>

                        <div>
                            <h3 className="font-semibold font-hedvig uppercase tracking-wider text-gray-600 mb-4 text-sm">Contato</h3>
                            <nav className="flex flex-col gap-3 text-sm font-hedvig-sans">
                                <a href="/fale-conosco" className="hover:text-gray-800">Fale conosco</a>
                                <a href="/trabalhe-conosco" className="hover:text-gray-800">Trabalhe Conosco</a>
                            </nav>
                        </div>

                        <div className="xl:col-span-2">
                            <h3 className="font-semibold font-hedvig uppercase tracking-wider text-gray-600 mb-4 text-sm">Atendimento</h3>
                            <div className="text-sm flex flex-col gap-2 font-hedvig-sans">
                                <p>Segunda a sexta das 8h às 18h e sábado das 8h às 15h</p>
                                <p>Whatsapp: +55 (21) 98812-4064</p>
                                <p>E-mail: felipebraido11@outlook.com</p>
                            </div>
                        </div>

                        <div className="xl:col-span-2 mt-8">
                            <h3 className="font-semibold font-hedvig uppercase tracking-wider text-gray-600 mb-4 text-sm">Nossas Redes</h3>
                            <div className="flex items-center gap-6">
                                <a href="https://wa.me/5521988124064" target='_blank' aria-label="Whatsapp" className="text-[#61A9CC] hover:text-gray-700"><FaWhatsapp size={24} /></a>
                                <a href="https://www.instagram.com/luis_braido/" target='_blank' aria-label="Instagram" className="text-[#61A9CC] hover:text-gray-700"><FaInstagram size={24} /></a>
                                <a href="#" aria-label="Facebook" className="text-[#61A9CC] hover:text-gray-700"><FaFacebook size={24} /></a>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-3 xl:col-span-4 mt-8">
                            <h3 className="font-semibold font-hedvig uppercase tracking-wider text-gray-600 mb-4 text-sm">Meios de Pagamento</h3>

                            <img src={Pagamento} alt="Meios de Pagamento" className="h-8 bg-[#61A9CC] rounded-[2px]"/>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 mt-12 mb-6"></div>

                    <div className="text-left text-xs text-gray-400 font-medium font-hedvig-sans">
                        <p>&copy; 2025 Luís Felipe dos Santos Braido, Vambora.</p>
                    </div>
                </div>

            <div className="lg:hidden">
          
                <AccordionItem
                    title="Atendimento"
                    isOpen={openAccordion === 'atendimento'}
                    onClick={() => handleAccordionClick('atendimento')}
                >
                    <div className="text-sm flex flex-col gap-2 font-hedvig-sans">
                        <p>Segunda a sexta das 8h às 18h e sábado das 8h às 15h</p>
                        <p>Whatsapp: +55 (21) 98812-4064</p>
                        <p>E-mail: felipebraido11@outlook.com</p>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    title="Institucional"
                    isOpen={openAccordion === 'institucional'}
                    onClick={() => handleAccordionClick('institucional')}
                >
                    <div>
                        <h3 className="font-semibold font-hedvig uppercase tracking-wider text-gray-600 mb-4 text-sm">Sobre Nós</h3>
                        <nav className="flex flex-col gap-3 text-sm font-hedvig-sans">
                            <a href="/nossa-historia" className="hover:text-gray-800">Nossa história</a>
                            <a href="/curadoria" className="hover:text-gray-800">Curadoria Exclusiva</a>
                        </nav>
                    </div>
                </AccordionItem>
                
                <AccordionItem
                    title="Fale Conosco"
                    isOpen={openAccordion === 'faleconosco'}
                    onClick={() => handleAccordionClick('faleconosco')}
                >
                    <div>
                        <h3 className="font-semibold font-hedvig uppercase tracking-wider text-gray-600 mb-4 text-sm">Contato</h3>
                        <nav className="flex flex-col gap-3 text-sm font-hedvig-sans">
                            <a href="/fale-conosco" className="hover:text-gray-800">Fale conosco</a>
                            <a href="/trabalhe-conosco" className="hover:text-gray-800">Trabalhe Conosco</a>
                        </nav>
                    </div>
                </AccordionItem>

                <div className="py-6 border-b border-gray-200">
                    <LanguageSelector />
                </div>

                <div className="xl:col-span-2 mt-8 flex justify-center">
                    <div className="flex items-center gap-6">
                        <a href="https://wa.me/5521988124064" target='_blank' aria-label="Whatsapp" className="text-[#61A9CC] hover:text-gray-700"><FaWhatsapp size={24} /></a>
                        <a href="https://www.instagram.com/luis_braido/" target='_blank' aria-label="Instagram" className="text-[#61A9CC] hover:text-gray-700"><FaInstagram size={24} /></a>
                        <a href="#" aria-label="Facebook" className="text-[#61A9CC] hover:text-gray-700"><FaFacebook size={24} /></a>
                    </div>
                </div>
                <div className="lg:col-span-3 xl:col-span-4 mt-8 flex flex-col items-center">
                    <h3 className="font-semibold font-hedvig uppercase tracking-wider text-gray-600 mb-4 text-sm">Meios de Pagamento</h3>

                    <img src={Pagamento} alt="Meios de Pagamento" className="h-8 bg-[#61A9CC] rounded-[2px]"/>
                </div>

                <div className="border-t border-gray-200 mt-12 mb-6"></div>

                <div className="text-left text-xs text-gray-400 font-medium font-hedvig-sans">
                    <p>&copy; 2025 Luís Felipe dos Santos Braido, Vambora.</p>
                </div>

            </div>
                
                
            </div>
        </footer>
    );
}