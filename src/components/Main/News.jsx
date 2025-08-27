export default function News() {
    return (
        <section className="bg-white py-4">
            <div className="container mx-auto px-4 sm:flex-col">
                <div className="container mx-auto px-4 sm:flex-col">
                    <div className="flex justify-center items-center gap-40">
                        <div className="text-center lg:text-left">
                            <h2 className="font-hedvig text-2xl font-light uppercase text-[#686868]">Receba nossas novidades</h2>
                            <h2 className="text-2x1 text-center text-[#686868]">Cadastre-se na nossa newsletter</h2>
                        </div>
                        <form className="flex flex-col sm:flex-row items-center justify-center gap-40 w-full lg:w-auto">
                            <input 
                                type="text" 
                                placeholder="Digite seu nome" 
                                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#61A9CC]"
                            />
                            <input 
                                type="email" 
                                placeholder="Digite seu e-mail" 
                                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#61A9CC]"
                            />
                            <button 
                                type="submit" 
                                className="bg-[#61A9CC] text-white  py-2 px-6 text-sm font-semibold hover:bg-[#5390ae] transition-colors duration-300 rounded-[3px] cursor-pointer w-full sm:w-auto"
                            >
                                Cadastre-se
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}