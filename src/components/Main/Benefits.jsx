import { PiSealPercentLight } from "react-icons/pi";
import { FaCoins, FaCreditCard } from "react-icons/fa";

export default function Benefits() {
    return (
        <section className="container mx-auto p-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
            
            <div className="flex items-center gap-4">
                <FaCreditCard className="w-10 h-10 text-[#61A9CC] flex-shrink-0" />
                <div>
                    <h3 className="text-sm font-nunito font-bold text-[#686868]">Parcele em até 5X sem juros</h3>
                    <p className="text-xs text-[#686868] font-nunito">Nas compras acima de R$ 300,00</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <PiSealPercentLight className="w-10 h-10 text-[#61A9CC] flex-shrink-0" />
                <div>
                    <h3 className="text-sm font-nunito font-bold text-[#686868]">5% de desconto no pix</h3>
                    <p className="text-xs text-[#686868] font-nunito">Pague com o pix e ganhe 5% de desconto</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <FaCoins className="w-10 h-10 text-[#61A9CC] flex-shrink-0" />
                <div>
                    <h3 className="text-sm font-nunito font-bold text-[#686868]">Ganhe pontos a cada R$ 100,00 em compras</h3>
                    <p className="text-xs text-[#686868] font-nunito">Garanta pontos que podem ser trocados por benefícios</p>
                </div>
            </div>

        </section>
    );
}