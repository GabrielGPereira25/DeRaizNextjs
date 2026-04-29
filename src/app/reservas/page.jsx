'use client';

import { useState } from 'react';
import Image from 'next/image';
import MenuCard from '@/components/MenuCard';

export default function ReservasPage() {
    // ESTADOS DO FORMULÁRIO
    const [diaSelecionado, setDiaSelecionado] = useState('');
    const [tipoReserva, setTipoReserva] = useState('comer-local');

    // MOCK DE DADOS: Simulação das ementas para os próximos dias
    // (Mais tarde isto virá da base de dados através de uma API)
    const ementasDisponiveis = {
        '2026-05-04': { sopa: 'Creme de Cenoura com Gengibre', prato: 'Tofu Espiritual com Salada Bio', sobremesa: 'Mousse de Manga Vegan' },
        '2026-05-05': { sopa: 'Sopa de Alho Francês', prato: 'Caril de Grão e Espinafres', sobremesa: 'Bolo de Chocolate Húmido' },
        '2026-05-06': { sopa: 'Canja de Cogumelos', prato: 'Feijoada de Cogumelos e Batata Doce', sobremesa: 'Fruta da Época' },
    };

    const ementaAtual = ementasDisponiveis[diaSelecionado] || null;

    return (
        <main className="bg-fundo min-h-screen font-principal text-castanho-raiz pb-24">

            {/* HERO SECTION */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-castanho-raiz">
                <Image
                    src="/sources/fundo-reservas.webp"
                    alt="Reservas De Raiz"
                    fill
                    priority
                    className="object-cover opacity-60 mix-blend-overlay"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="font-destaque text-5xl md:text-7xl leading-tight drop-shadow-md mb-4">
                        Reservas
                    </h1>
                    <p className="text-lg md:text-xl drop-shadow-sm">
                        Garanta o seu lugar ou encomende para levar.
                    </p>
                </div>
            </section>

            {/* ZONA DE RESERVAS (Formulário + Preview) */}
            <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20" id="reservar-agora">

                {/* Contentor Principal com Grelha */}
                <div className="bg-white rounded-3xl shadow-xl flex flex-col-reverse lg:grid lg:grid-cols-12 overflow-hidden border border-castanho-raiz/10">

                    {/* ESQUERDA: FORMULÁRIO (Ocupa 7 colunas em ecrãs grandes) */}
                    <div className="lg:col-span-7 p-8 md:p-12">
                        <h3 className="font-destaque text-3xl text-castanho-raiz mb-6 border-b-2 border-fundo pb-3">
                            Detalhes da Reserva
                        </h3>

                        <form className="space-y-6">
                            {/* Data e Hora */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="font-bold text-sm mb-2">Para que dia?</label>
                                    <select
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz focus:ring-1 focus:ring-verde-raiz transition-all bg-white"
                                        value={diaSelecionado}
                                        onChange={(e) => setDiaSelecionado(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Escolha um dia...</option>
                                        <option value="2026-05-04">Segunda-feira, 4 de Maio</option>
                                        <option value="2026-05-05">Terça-feira, 5 de Maio</option>
                                        <option value="2026-05-06">Quarta-feira, 6 de Maio</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-bold text-sm mb-2">A que horas?</label>
                                    <select
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz focus:ring-1 focus:ring-verde-raiz transition-all bg-white"
                                        required
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Escolha uma hora...</option>
                                        <option value="12:00">12:00</option>
                                        <option value="12:30">12:30</option>
                                        <option value="13:00">13:00</option>
                                        <option value="13:30">13:30</option>
                                        <option value="14:00">14:00</option>
                                    </select>
                                </div>
                            </div>

                            {/* Tipo de Reserva (Radio Buttons) */}
                            <div className="flex flex-col mb-4">
                                <label className="font-bold text-sm mb-3">Tipo de Reserva?</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="tipo"
                                            value="comer-local"
                                            checked={tipoReserva === 'comer-local'}
                                            onChange={() => setTipoReserva('comer-local')}
                                            className="w-5 h-5 text-verde-raiz focus:ring-verde-raiz accent-verde-raiz"
                                        />
                                        <span className="text-gray-700">Comer no Local</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="tipo"
                                            value="take-away"
                                            checked={tipoReserva === 'take-away'}
                                            onChange={() => setTipoReserva('take-away')}
                                            className="w-5 h-5 text-verde-raiz focus:ring-verde-raiz accent-verde-raiz"
                                        />
                                        <span className="text-gray-700">Take-away</span>
                                    </label>
                                </div>
                            </div>

                            {/* DADOS DINÂMICOS (Pessoas VS Quantidades) */}
                            <div className="p-6 bg-fundo/50 rounded-xl border border-fundo">
                                {tipoReserva === 'comer-local' ? (
                                    <div className="flex flex-col animate-in fade-in duration-300">
                                        <label className="font-bold text-sm mb-2">Quantas pessoas?</label>
                                        <input type="number" min="1" max="12" defaultValue="2" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz" required />
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-3 gap-4 animate-in fade-in duration-300">
                                        <div className="flex flex-col">
                                            <label className="font-bold text-xs text-gray-500 uppercase mb-1">Doses Sopa</label>
                                            <input type="number" min="0" defaultValue="0" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz text-center" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="font-bold text-xs text-gray-500 uppercase mb-1">Doses Prato</label>
                                            <input type="number" min="0" defaultValue="1" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz text-center" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="font-bold text-xs text-gray-500 uppercase mb-1">Doses Sobr.</label>
                                            <input type="number" min="0" defaultValue="0" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz text-center" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Dados Pessoais */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-fundo">
                                <div className="flex flex-col">
                                    <label className="font-bold text-sm mb-2">Nome</label>
                                    <input type="text" placeholder="O seu nome" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz" required />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-bold text-sm mb-2">Telefone</label>
                                    <input type="tel" placeholder="Nº de telemóvel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz" required />
                                </div>
                                <div className="flex flex-col md:col-span-2">
                                    <label className="font-bold text-sm mb-2">Observações / Alergias</label>
                                    <textarea rows="3" placeholder="Alguma restrição alimentar ou pedido especial?" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-verde-raiz resize-none"></textarea>
                                </div>
                            </div>

                            {/* Botão Submeter */}
                            <button type="button" className="w-full bg-castanho-raiz text-white font-bold text-lg py-4 rounded-full mt-6 hover:bg-[#2b221d] transition-colors shadow-lg">
                                Confirmar Reserva
                            </button>
                        </form>
                    </div>

                    {/* DIREITA: PREVIEW DA EMENTA (Ocupa 5 colunas em ecrãs grandes) */}
                    <div className="lg:col-span-5 bg-[#fcfaf7] p-8 md:p-12 border-b lg:border-b-0 lg:border-l border-castanho-raiz/10 flex flex-col">
                        <h3 className="font-destaque text-3xl text-verde-raiz mb-6 border-b-2 border-fundo pb-3">
                            Ementa do Dia
                        </h3>

                        {/* Aqui usamos o componente MenuCard! 
                            Se houver uma data escolhida, mostra os pratos, senão mostra a mensagem.
                        */}
                        <div className="grow">
                            {ementaAtual ? (
                                <MenuCard ementa={ementaAtual} variant="reservas" />
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 p-8 border-2 border-dashed border-gray-200 rounded-2xl">
                                    <span className="text-4xl mb-3">📅</span>
                                    <p>Por favor, selecione um dia no formulário para ver a ementa correspondente.</p>
                                </div>
                            )}
                        </div>

                        {/* Nota de Aviso para Take-Away */}
                        {tipoReserva === 'take-away' && (
                            <div className="mt-8 bg-orange-50 text-orange-800 p-4 rounded-xl text-sm border border-orange-100 animate-in fade-in">
                                <strong>Nota sobre Take-away:</strong> Os pedidos de take-away devem ser levantados na loja à hora selecionada. Se precisar de embalagens sustentáveis, avise nas observações.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}