import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="font-principal text-castanho-raiz">
            {/* HERO SECTION - Antiga hero-section hero-home */}
            <section className="relative h-[80vh] flex items-center justify-center bg-[url('/sources/fundo-loja.webp')] bg-cover bg-center">
                {/* Overlay para legibilidade */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="font-destaque text-5xl md:text-7xl leading-tight mb-4">
                        Comer Bem é<br />De Raiz.
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Sabores vegan e biológicos todos os dias da semana.
                    </p>
                    <Link
                        href="#ementa-hoje"
                        className="bg-verde-raiz text-white px-8 py-3 rounded-full font-bold hover:bg-verde-escuro transition-all"
                    >
                        Ver Ementa de Hoje
                    </Link>
                </div>
            </section>

            {/* EMENTA HOJE - Antigo #ementa-hoje */}
            <section id="ementa-hoje" className="py-16 px-5 bg-fundo text-center">
                <div className="max-w-3xl mx-auto mb-8">
                    <h2 className="font-destaque text-4xl md:text-5xl text-verde-raiz mb-2">
                        A Nossa Ementa
                    </h2>
                    <p className="text-gray-600 text-lg">
                        O nosso prato de <b className="text-castanho-raiz">hoje</b> feito com muito <b className="text-castanho-raiz">Amor</b>
                    </p>
                </div>

                <div id="ementa-hoje-wrapper" className="flex justify-center mt-8 px-5">
                    <p className="text-gray-500 italic">A carregar o menu de hoje... ⏳</p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/menu"
                        className="bg-castanho-raiz text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all w-full sm:w-auto"
                    >
                        Ver Menu Completo
                    </Link>
                    <Link
                        href="/reservas"
                        className="bg-verde-raiz text-white px-8 py-3 rounded-full font-bold hover:bg-verde-escuro transition-all w-full sm:w-auto"
                    >
                        Fazer Encomenda Agora
                    </Link>
                </div>
            </section>

            {/* NOSSO ESPAÇO */}
            <section className="py-12 flex justify-center">
                <div className="max-w-4xl w-full px-5">
                    <Image
                        src="/sources/nosso-espaço.webp"
                        alt="O nosso espaço - De Raiz"
                        width={800}
                        height={500}
                        className="rounded-2xl shadow-xl w-full h-auto object-cover"
                        priority
                    />
                </div>
            </section>
        </main>
    );
}