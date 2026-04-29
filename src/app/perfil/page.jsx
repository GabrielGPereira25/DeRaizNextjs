'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PerfilPage() {
    const [tabAtiva, setTabAtiva] = useState('dados');

    // Dados simulados do utilizador (Mais tarde virão da tua Auth/BD)
    const user = {
        nome: "Gabriel Pereira",
        email: "gabriel@email.com",
        telefone: "917 969 431",
        foto: "/sources/user.svg",
        dataRegisto: "Janeiro 2024"
    };

    // Dados simulados de reservas (Historico)
    const reservas = [
        { id: "#8842", data: "2026-05-04", tipo: "Comer no Local", pessoas: 2, status: "Confirmada" },
        { id: "#8710", data: "2026-04-28", tipo: "Take-away", pessoas: 1, status: "Concluída" },
    ];

    return (
        <main className="bg-fundo min-h-screen pt-32 pb-24 px-6">
            <div className="max-w-5xl mx-auto">

                {/* 1. CABEÇALHO DO PERFIL */}
                <div className="bg-white rounded-3xl shadow-sm border border-castanho-raiz/10 p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-fundo bg-fundo/50 flex items-center justify-center">
                        <Image src={user.foto} alt="Foto de Perfil" fill className="object-cover p-4" />
                    </div>
                    <div className="text-center md:text-left grow">
                        <h1 className="font-destaque text-4xl text-castanho-raiz mb-1">{user.nome}</h1>
                        <p className="text-gray-500 font-medium">Membro desde {user.dataRegisto}</p>
                        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="bg-[#e8f8f5] text-[#27ae60] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Cliente Verificado</span>
                            <span className="bg-fundo text-castanho-raiz px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">5 Reservas Efetuadas</span>
                        </div>
                    </div>
                    <button className="bg-red-50 text-red-500 px-6 py-2 rounded-full font-bold text-sm hover:bg-red-500 hover:text-white transition-all">
                        Terminar Sessão
                    </button>
                </div>

                {/* 2. NAVEGAÇÃO DE ABAS */}
                <div className="flex border-b border-castanho-raiz/10 mb-8 overflow-x-auto">
                    <button
                        onClick={() => setTabAtiva('dados')}
                        className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all whitespace-nowrap border-b-2 ${tabAtiva === 'dados' ? 'border-verde-raiz text-verde-raiz' : 'border-transparent text-gray-400 hover:text-castanho-raiz'}`}
                    >
                        👤 Os Meus Dados
                    </button>
                    <button
                        onClick={() => setTabAtiva('historico')}
                        className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all whitespace-nowrap border-b-2 ${tabAtiva === 'historico' ? 'border-verde-raiz text-verde-raiz' : 'border-transparent text-gray-400 hover:text-castanho-raiz'}`}
                    >
                        📜 Histórico de Reservas
                    </button>
                    <button
                        onClick={() => setTabAtiva('seguranca')}
                        className={`px-8 py-4 font-bold text-sm uppercase tracking-widest transition-all whitespace-nowrap border-b-2 ${tabAtiva === 'seguranca' ? 'border-verde-raiz text-verde-raiz' : 'border-transparent text-gray-400 hover:text-castanho-raiz'}`}
                    >
                        🔒 Segurança
                    </button>
                </div>

                {/* 3. CONTEÚDO DINÂMICO */}
                <div className="bg-white rounded-3xl shadow-lg border border-castanho-raiz/10 p-8 md:p-12 animate-in fade-in duration-500">

                    {/* ABA: DADOS PESSOAIS */}
                    {tabAtiva === 'dados' && (
                        <div>
                            <h2 className="font-destaque text-3xl text-castanho-raiz mb-8">Informações da Conta</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-400 uppercase mb-2">Nome Completo</label>
                                    <input type="text" defaultValue={user.nome} className="p-3 bg-fundo/30 border border-gray-200 rounded-xl focus:outline-none focus:border-verde-raiz font-medium" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-400 uppercase mb-2">Endereço de Email</label>
                                    <input type="email" defaultValue={user.email} className="p-3 bg-fundo/30 border border-gray-200 rounded-xl focus:outline-none focus:border-verde-raiz font-medium" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-400 uppercase mb-2">Telemóvel</label>
                                    <input type="tel" defaultValue={user.telefone} className="p-3 bg-fundo/30 border border-gray-200 rounded-xl focus:outline-none focus:border-verde-raiz font-medium" />
                                </div>
                                <div className="flex items-end">
                                    <button type="button" className="bg-verde-raiz text-white w-full py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
                                        Guardar Alterações
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* ABA: HISTÓRICO */}
                    {tabAtiva === 'historico' && (
                        <div className="space-y-6">
                            <h2 className="font-destaque text-3xl text-castanho-raiz mb-4">As Minhas Reservas</h2>
                            {reservas.length > 0 ? (
                                <div className="overflow-hidden border border-gray-100 rounded-2xl">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-fundo/50 text-gray-500 text-xs uppercase font-bold">
                                            <tr>
                                                <th className="p-4">Ref</th>
                                                <th className="p-4">Data</th>
                                                <th className="p-4">Tipo</th>
                                                <th className="p-4">Doses/Pessoas</th>
                                                <th className="p-4">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-castanho-raiz font-medium">
                                            {reservas.map((res) => (
                                                <tr key={res.id} className="border-t border-gray-100 hover:bg-fundo/10 transition-colors">
                                                    <td className="p-4 font-bold">{res.id}</td>
                                                    <td className="p-4">{res.data}</td>
                                                    <td className="p-4">{res.tipo}</td>
                                                    <td className="p-4 text-center">{res.pessoas}</td>
                                                    <td className="p-4">
                                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${res.status === 'Confirmada' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                                            {res.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p className="text-gray-400 italic">Ainda não efetuou nenhuma reserva.</p>
                            )}
                        </div>
                    )}

                    {/* ABA: SEGURANÇA */}
                    {tabAtiva === 'seguranca' && (
                        <div className="max-w-md">
                            <h2 className="font-destaque text-3xl text-castanho-raiz mb-8">Alterar Palavra-passe</h2>
                            <form className="space-y-6">
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-400 uppercase mb-2">Palavra-passe Atual</label>
                                    <input type="password" placeholder="••••••••" className="p-3 bg-fundo/30 border border-gray-200 rounded-xl focus:outline-none focus:border-verde-raiz" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-bold text-gray-400 uppercase mb-2">Nova Palavra-passe</label>
                                    <input type="password" placeholder="••••••••" className="p-3 bg-fundo/30 border border-gray-200 rounded-xl focus:outline-none focus:border-verde-raiz" />
                                </div>
                                <button type="button" className="bg-castanho-raiz text-white px-10 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
                                    Atualizar Password
                                </button>
                            </form>
                        </div>
                    )}

                </div>
            </div>
        </main>
    );
}