import NewClassic from '../../assets/NewClassic.svg'

export default function Classic() {
    return (
        <section className="container mx-auto p-10">
            <div className='flex flex-col md:flex-row items-center gap-12'>
                
                {/* Coluna da Imagem */}
                <div className='w-full md:w-1/2'>
                    {/* Corrigido o typo e melhorado para ser responsivo */}
                    <img src={NewClassic} alt='Imagem novo clássico' className='w-full h-auto rounded-[3px] shadow-lg'></img>
                </div>
                
                {/* Coluna do Texto */}
                <div className='w-full md:w-1/2'>
                    <h2 className="font-hedvig text-3xl text-[#61A9CC] font-bold mb-4">Novo Clássico</h2>
            
                    <p className="font-hedvig-sans text-base text-gray-600 leading-relaxed mb-8">
                        Na neoclássico, reinventamos a elegância atemporal com um toque contemporâneo. 
                        Nossa curadoria de objetos de decoração combina sofisticação e design para transformar qualquer ambiente. 
                        De mesas de centro a luminárias de chão, cada peça reflete um equilíbrio entre tradição e modernidade. 
                        Descubra o novo clássico e deixe sua casa contar a sua história.
                    </p>

                    <button className="bg-[#61A9CC] w-[200px] text-left text-white uppercase py-3 px-6 text-sm font-semibold hover:bg-[#5390ae] transition-colors duration-300 rounded-md cursor-pointer">
                        Explore
                    </button>
                </div>
            </div>
        </section>
    );
}