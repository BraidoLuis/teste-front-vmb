import NewClassic from '../../assets/NewClassic.svg'

export default function Classic() {
    return (
        <div className="container mx-auto p-10">
            <div className='flex flex-col items-center md:flex-row gap-12'>
                <div className='w-full md:w-1/2'>
                    <img src={NewClassic} alt='Imagem novo clássico' className='h-[200p]'></img>
                </div>
                
                <div className='w-full md:w-1/2'>
                    <h2 className="font-hedvig text-3xl text-[#61A9CC] font-bold mb-4">Novo Clássico</h2>
                    <p className="font-hedvig font-light text-sm text-[#686868] mb-6">
                        Na neoclássico, reinventamos a elegância atemporal<br/>
                        com um toque contemporâneo. Nossa curadoria de <br/>
                        objetos de decoração combina sofisticação e design<br/>
                        para transformar qualquer ambiente. De mesas de<br/> 
                        centro a luminárias de chão, cada peça reflete um <br/>
                        equilíbrio entre tradição e modernidade. Descubra o<br/> 
                        novo clássico e deixe sua casa contar a sua história.
                    </p>
                    <button className="bg-[#61A9CC] w-[200px] items-start text-white uppercase py-2 px-6 text-sm font-semibold hover:bg-[#5390ae] transition-colors duration-300 rounded-[5px] cursor-pointer">
                        Explore
                    </button>
                </div>
            </div>
            
        </div>
    );
}