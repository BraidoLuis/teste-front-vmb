export default function News() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">

                    <div className="text-center lg:text-left">
                        <h2 className="font-hedvig text-2xl font-light uppercase text-[#686868]">
                            Receba nossas novidades
                        </h2>

                        <p className="text-sm text-[#686868]">
                            cadastre-se na nossa newsletter
                        </p>
                    </div>

                    <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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
                            className="bg-[#61A9CC] text-white py-2 px-6 text-sm font-semibold hover:bg-[#5390ae] transition-colors duration-300 rounded-md cursor-pointer w-full sm:w-auto"
                        >
                            Cadastre-se
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}