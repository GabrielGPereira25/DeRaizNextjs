import Image from 'next/image';

export default function SobreNos() {
    return (
        <main className="font-principal text-castanho-raiz bg-fundo min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-castanho-raiz overflow-hidden">
                <Image
                    src="/sources/fundo-sobre-nos.webp"
                    alt="Sobre o De Raiz"
                    fill
                    priority
                    className="object-cover opacity-60 mix-blend-overlay"
                />
                <div className="relative z-10 text-center text-white px-4 mt-12">
                    <h1 className="font-destaque text-6xl md:text-8xl drop-shadow-md">
                        Sobre Nós
                    </h1>
                    <div className="w-24 h-1 bg-fundo mx-auto mt-2 mb-4"></div>
                    <p className="text-lg md:text-xl font-medium drop-shadow-sm">
                        Conheça a nossa história e a nossa paixão pelo que é natural.
                    </p>
                </div>
            </section>

            {/* 2. CONTEÚDO PRINCIPAL */}
            <section className="py-20 px-6 max-w-7xl mx-auto space-y-24">

                {/* Secção: A Nossa História */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="font-destaque text-4xl md:text-5xl text-verde-raiz">
                            A Nossa História
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                O <strong>De Raiz</strong> nasceu de um sonho de trazer para Leiria um conceito de alimentação mais consciente, biológica e artesanal. Queríamos criar um espaço onde a tradição da padaria se cruzasse com o bem-estar moderno.
                            </p>
                            <p>
                                Desde o primeiro dia, o nosso compromisso foi claro: utilizar apenas os melhores ingredientes, respeitando o tempo de fermentação natural e apoiando os produtores locais.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative h-75 md:h-112.5 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/sources/balcao-loja.webp"
                            alt="O balcão do De Raiz"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Secção: O Nosso Espaço & Filosofia */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="font-destaque text-4xl md:text-5xl text-verde-raiz">
                            Filosofia De Raiz
                        </h2>
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                            <p>
                                Acreditamos que comer bem é uma escolha que deve estar disponível para todos. Por isso, oferecemos uma vasta gama de opções vegan, vegetarianas e sem glúten, sem nunca comprometer o sabor.
                            </p>
                            <p>
                                O nosso espaço foi desenhado para ser uma extensão da sua casa — um lugar acolhedor onde pode desfrutar de um pequeno-almoço tardio, um almoço nutritivo ou simplesmente um café biológico acabado de moer.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative h-75 md:h-112.5 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/sources/nosso-espaço.webp"
                            alt="O nosso espaço interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Secção Final: Destaques / Valores */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-castanho-raiz/5 text-center space-y-3">
                        <span className="text-4xl">🌾</span>
                        <h3 className="font-bold text-xl">100% Artesanal</h3>
                        <p className="text-gray-600">Pão e pastelaria feitos diariamente com fermentação lenta.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-castanho-raiz/5 text-center space-y-3">
                        <span className="text-4xl">🌿</span>
                        <h3 className="font-bold text-xl">Bio & Local</h3>
                        <p className="text-gray-600">Priorizamos ingredientes de agricultura biológica e local.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-castanho-raiz/5 text-center space-y-3">
                        <span className="text-4xl">💚</span>
                        <h3 className="font-bold text-xl">Sustentável</h3>
                        <p className="text-gray-600">Cuidamos do planeta com práticas e embalagens eco-friendly.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}