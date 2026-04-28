'use client';

import { useState } from 'react';
import Image from 'next/image';
import MenuCard from '@/components/MenuCard';

export default function MenuPage() {
    const [diaSelecionado, setDiaSelecionado] = useState('Segunda');
    const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    // Simulação de dados. Se o dia não estiver aqui, o MenuCard mostrará "---"
    const ementas = {
        'Segunda': {
            sopa: 'Creme de Cenoura com Gengibre',
            prato: 'Tofu Espiritual com Salada Bio',
            sobremesa: 'Mousse de Manga Vegan',
            imagem: '/sources/croissans.webp'
        },
        'Quarta': {
            sopa: 'Canja de Cogumelos',
            prato: 'Feijoada de Cogumelos e Batata Doce',
            sobremesa: 'Fruta da Época',
            imagem: '/sources/balcao-loja.webp'
        }
    };

    const ementaAtual = ementas[diaSelecionado] || {};

    return (
        <main className="bg-fundo min-h-screen font-principal">
            {/* HERO SECTION */}
            <section className="relative h-[45vh] flex items-center justify-center bg-castanho-raiz overflow-hidden">
                <Image 
                    src="/sources/fundo-menu-ementa.webp" 
                    alt="Menu da Semana" 
                    fill 
                    priority 
                    className="object-cover opacity-50"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="font-destaque text-6xl md:text-8xl leading-tight drop-shadow-lg">
                        Menu da<br/>Semana.
                    </h1>
                </div>
            </section>

            {/* TABELA DE DIAS */}
            <section className="py-16 px-6 max-w-5xl mx-auto text-center">
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {dias.map((dia) => (
                        <button
                            key={dia}
                            onClick={() => setDiaSelecionado(dia)}
                            className={`px-6 py-2 rounded-full border-2 transition-all font-bold ${
                                diaSelecionado === dia 
                                ? 'bg-castanho-raiz border-castanho-raiz text-white shadow-md' 
                                : 'bg-transparent border-[#dcd0c0] text-[#7a6a60] hover:border-castanho-raiz'
                            }`}
                        >
                            {dia}
                        </button>
                    ))}
                </div>

                {/* EXIBIÇÃO DA EMENTA DO DIA */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <MenuCard ementa={ementaAtual} variant="menu" />
                </div>

                {/* AVISO LEGAL */}
                <div className="mt-12 text-gray-500 text-sm italic max-w-2xl mx-auto">
                    <p>
                        * As imagens apresentadas são meramente ilustrativas e podem haver diferenças entre a imagem e o prato real servido. 
                        A ementa está sujeita a alterações dependendo da frescura dos ingredientes.
                    </p>
                </div>
            </section>
        </main>
    );
}