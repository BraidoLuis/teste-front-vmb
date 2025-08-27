import { CreditCard, Percent, Coins } from 'lucide-react'; 

export default function Benefits() {
    return (
        <div className="container mx-auto p-10 flex justify-between items-center">
            <div className="flex-1 flex justify-start">
                <CreditCard className="inline-block w-8 h-9 text-[#61A9CC] mr-2" />
                <div className='flex flex-col'>
                    <h3 className="text-sm font-medium text-[#686868]">Parcele em até 5X sem juros</h3>
                    <p className="text-xs text-[#686868]">Nas compras acima de R$ 300,00</p>
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                <Percent className="inline-block w-8 h-9 text-[#61A9CC] mr-2" />
                <div className='flex flex-col'>
                    <h3 className="text-sm font-medium text-[#686868]">5% de desconto no pix</h3>
                    <p className="text-xs text-[#686868]">Pague com o pix e ganhe 5% de desconto</p>
                </div>
            </div>
            <div className="flex-1 flex justify-end">
                <Coins className="inline-block w-8 h-9 text-[#61A9CC] mr-2" />
                <div className='flex flex-col'>
                    <h3 className="text-sm font-medium text-[#686868]">Ganhe pontos a cada R$ 100,00 em compras</h3>
                    <p className="text-xs text-[#686868]">Garanta pontos que podem ser trocados por benefícios</p>
                </div>
            </div>
        </div>
    );
}