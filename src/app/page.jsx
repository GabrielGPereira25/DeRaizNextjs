'use client';

import Link from 'next/link';
import Image from 'next/image';
import { scrollToSection } from '@/utils/smoothScroll';
import MenuCard from '@/components/MenuCard';

const pratoDeHoje = {
    nome: "Tofu Espiritual com Salada Bio",
    descricao: "Uma deliciosa e reconfortante recriação vegan do clássico português, feita com tofu biológico, cenoura, creme vegetal e gratinado no forno. Acompanha com uma salada fresca.",
    preco: "8,50 €",
    imagem: "/sources/croissans.webp",
    vegan: true,
    semGluten: true
};

export default function Home() {
    return (
        <main className="font-principal text-castanho-raiz">
            {/* Hero */}
            <section className="relative h-screen flex items-center justify-center bg-[url('/sources/fundo-loja.webp')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="font-destaque text-destaque text-5xl md:text-8xl leading-tight mb-4 text-shadow-lg/50">
                        Comer Bem é<br />De Raiz.
                    </h2>
                    <p className="text-lg md:text-xl mb-16 drop-shadow-md">
                        Sabores vegan e biológicos todos os dias da semana.
                    </p>
                    <button
                        onClick={(e) => scrollToSection(e, 'ementa-hoje')}
                        className="inline-block bg-verde-raiz text-white px-8 py-3 rounded-full font-bold hover:bg-verde-escuro transition-all shadow-md/20"
                    >
                        Ver Ementa de Hoje
                    </button>
                </div>
            </section>

            {/* Ementa de Hoje */}
            <section id="ementa-hoje" className="py-16 px-5 bg-fundo text-center scroll-mt-24">
                <div className="max-w-3xl mx-auto mb-8">
                    <h2 className="font-destaque text-4xl md:text-5xl text-verde-raiz mb-2">
                        A Nossa Ementa
                    </h2>
                    <p className="text-gray-600 text-lg">
                        O nosso prato de <b className="text-castanho-raiz">hoje</b> feito com muito <b className="text-castanho-raiz">Amor</b>
                    </p>
                </div>

                <div id="ementa-hoje-wrapper" className="mt-10 px-6">
                    <MenuCard ementa={pratoDeHoje} variant="home" />
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

            {/* 3. Imagem do nosso espaço */}
            <section className="pb-24 px-6 bg-fundo flex justify-center items-center">
                <div className="max-w-md w-full mx-auto">
                    <Image
                        src="/sources/nosso-espaço.webp"
                        alt="O nosso espaço - De Raiz"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>
            </section>
        </main>
    );
}