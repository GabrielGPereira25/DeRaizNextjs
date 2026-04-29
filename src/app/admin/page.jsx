'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminDashboard() {
    // ESTADOS GERAIS
    const [tabAtiva, setTabAtiva] = useState('ementa');

    // ESTADOS DA EMENTA
    const [semanaAtiva, setSemanaAtiva] = useState('atual');
    const [diaSelecionado, setDiaSelecionado] = useState('Segunda-Feira');
    const diasSemana = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    // ESTADOS DE CLIENTES (Modal)
    const [modalAberto, setModalAberto] = useState(false);

    // ==========================================
    // DADOS SIMULADOS (MOCKS) - Substituirás por chamadas à API depois
    // ==========================================
    const mockReservas = [
        { id: 1, estado: 'Pendente', nome: 'João Silva', efetuada: '28/04/2026', dataHora: '04/05/2026 13:00', tipo: 'Comer no Local', pessoas: 2, pedido: '-' },
        { id: 2, estado: 'Confirmada', nome: 'Maria Gomes', efetuada: '29/04/2026', dataHora: '05/05/2026 12:30', tipo: 'Take-away', pessoas: '-', pedido: '1 Sopa, 2 Pratos' },
        { id: 3, estado: 'Concluída', nome: 'Rui Santos', efetuada: '29/04/2026', dataHora: '30/04/2026 13:00', tipo: 'Comer no Local', pessoas: 4, pedido: '-' },
    ];

    const mockHistorico = [
        { id: 101, nome: 'Ana Costa', dataPedido: '10/04/2026', dataReserva: '15/04/2026 12:30', tipo: 'Comer no Local', pessoas: 2, pedido: '-' },
        { id: 102, nome: 'Carlos Nogueira', dataPedido: '12/04/2026', dataReserva: '16/04/2026 13:00', tipo: 'Take-away', pessoas: '-', pedido: '2 Pratos, 2 Sobremesas' },
    ];

    const mockClientes = [
        { id: 1, nome: 'João Silva', email: 'joao@email.com', tipo: 'Email', verificado: true },
        { id: 2, nome: 'Margarida Sousa', email: 'margarida@gmail.com', tipo: 'Google', verificado: true },
        { id: 3, nome: 'Pedro Lima', email: 'pedrolima@email.com', tipo: 'Email', verificado: false },
    ];

    return (
        <div className="min-h-screen bg-[#f4f4f4] font-principal text-castanho-raiz pb-12">

            {/* CABEÇALHO DO ADMIN */}
            <header className="bg-castanho-raiz text-white py-5 px-6 md:px-12 flex justify-between items-center shadow-md mb-10">
                <h1 className="font-destaque text-3xl md:text-4xl m-0 text-fundo">Admin DeRaiz</h1>
                <Link href="/" className="text-white font-bold flex items-center gap-2 hover:text-verde-raiz transition-colors">
                    &larr; Voltar ao Site
                </Link>
            </header>

            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* NAVEGAÇÃO DO ADMIN (TABS) */}
                <nav className="flex flex-wrap gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
                    <button onClick={() => setTabAtiva('ementa')} className={`flex-1 min-w-37.5 py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${tabAtiva === 'ementa' ? 'bg-castanho-raiz text-white shadow-md' : 'bg-fundo/50 text-gray-500 hover:bg-fundo hover:text-castanho-raiz'}`}>
                        📝 Gerir Ementa
                    </button>
                    <button onClick={() => setTabAtiva('reservas')} className={`flex-1 min-w-37.5 py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${tabAtiva === 'reservas' ? 'bg-castanho-raiz text-white shadow-md' : 'bg-fundo/50 text-gray-500 hover:bg-fundo hover:text-castanho-raiz'}`}>
                        📅 Ver Reservas
                    </button>
                    <button onClick={() => setTabAtiva('historico')} className={`flex-1 min-w-37.5 py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${tabAtiva === 'historico' ? 'bg-castanho-raiz text-white shadow-md' : 'bg-fundo/50 text-gray-500 hover:bg-fundo hover:text-castanho-raiz'}`}>
                        📂 Histórico
                    </button>
                    <button onClick={() => setTabAtiva('clientes')} className={`flex-1 min-w-37.5 py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${tabAtiva === 'clientes' ? 'bg-castanho-raiz text-white shadow-md' : 'bg-fundo/50 text-gray-500 hover:bg-fundo hover:text-castanho-raiz'}`}>
                        👥 Clientes
                    </button>
                </nav>

                {/* CONTEÚDO DAS ABAS */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10 animate-in fade-in duration-300">

                    {/* ==================================================== */}
                    {/* ABA: GERIR EMENTA */}
                    {/* ==================================================== */}
                    {tabAtiva === 'ementa' && (
                        <div className="space-y-8 animate-in fade-in">
                            <div className="flex justify-center gap-4 bg-fundo p-4 rounded-2xl">
                                <button onClick={() => setSemanaAtiva('atual')} className={`px-6 py-2 rounded-lg font-bold transition-all ${semanaAtiva === 'atual' ? 'bg-verde-raiz text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:border-verde-raiz'}`}>Semana Atual</button>
                                <button onClick={() => setSemanaAtiva('proxima')} className={`px-6 py-2 rounded-lg font-bold transition-all ${semanaAtiva === 'proxima' ? 'bg-verde-raiz text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:border-verde-raiz'}`}>Próxima Semana</button>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                {diasSemana.map((dia) => (
                                    <button key={dia} onClick={() => setDiaSelecionado(dia)} className={`px-5 py-2 rounded-full border-2 font-bold transition-all ${diaSelecionado === dia ? 'bg-castanho-raiz border-castanho-raiz text-white' : 'border-[#dcd0c0] text-[#7a6a60] hover:border-castanho-raiz'}`}>{dia}</button>
                                ))}
                            </div>

                            <form className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-6 border-t border-gray-100">
                                <div className="space-y-6">
                                    <h2 className="font-destaque text-3xl text-verde-raiz border-b-2 border-fundo pb-2">Detalhes: {diaSelecionado}</h2>

                                    <div className="flex flex-col">
                                        <label className="font-bold text-sm uppercase text-gray-500 mb-1">Sopa</label>
                                        <input type="text" placeholder="Nome da Sopa" className="p-3 border border-gray-300 rounded-xl focus:border-verde-raiz focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-bold text-sm uppercase text-gray-500 mb-1">Prato Principal</label>
                                        <input type="text" placeholder="Nome do Prato Principal" className="p-3 border border-gray-300 rounded-xl focus:border-verde-raiz focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-bold text-sm uppercase text-gray-500 mb-1">Sobremesa</label>
                                        <input type="text" placeholder="Nome da Sobremesa" className="p-3 border border-gray-300 rounded-xl focus:border-verde-raiz focus:outline-none" />
                                    </div>
                                    <button type="button" className="w-full bg-verde-raiz text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all mt-4">Guardar {diaSelecionado}</button>
                                </div>

                                <div className="flex flex-col bg-fundo/30 p-6 rounded-2xl border-2 border-dashed border-[#dcd0c0] justify-center items-center text-center">
                                    <span className="text-4xl mb-4">📸</span>
                                    <h3 className="font-bold text-xl mb-2">Imagem do Prato</h3>
                                    <p className="text-sm text-gray-500 mb-6">Carregue a imagem da ementa para este dia.</p>
                                    <label className="bg-white text-castanho-raiz border border-castanho-raiz px-6 py-3 rounded-full font-bold cursor-pointer hover:bg-castanho-raiz hover:text-white transition-all shadow-sm">
                                        Selecionar Ficheiro
                                        <input type="file" className="hidden" accept="image/*" />
                                    </label>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* ==================================================== */}
                    {/* ABA: VER RESERVAS */}
                    {/* ==================================================== */}
                    {tabAtiva === 'reservas' && (
                        <div className="animate-in fade-in space-y-6">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                                <div>
                                    <h2 className="font-destaque text-3xl text-castanho-raiz mb-1">Gestão de Reservas</h2>
                                    <p className="text-gray-500 text-sm">Total de reservas ativas: <strong>{mockReservas.length}</strong></p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-100 transition-colors border border-blue-200 shadow-sm">
                                        📂 Arquivar Concluídas
                                    </button>
                                    <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-100 transition-colors border border-red-200 shadow-sm">
                                        🗑️ Apagar Selecionadas
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-auto border border-gray-200 rounded-xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                                        <tr>
                                            <th className="p-4 text-center"><input type="checkbox" className="w-4 h-4" /></th>
                                            <th className="p-4">Estado</th>
                                            <th className="p-4">Nome</th>
                                            <th className="p-4">Efetuada Em</th>
                                            <th className="p-4">Dia/Hora Reserva</th>
                                            <th className="p-4">Tipo</th>
                                            <th className="p-4">Pessoas</th>
                                            <th className="p-4">Pedido (TA)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium">
                                        {mockReservas.map((res) => (
                                            <tr key={res.id} className="border-t border-gray-100 hover:bg-fundo/30">
                                                <td className="p-4 text-center"><input type="checkbox" className="w-4 h-4" /></td>
                                                <td className="p-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${res.estado === 'Confirmada' ? 'bg-green-100 text-green-700' : res.estado === 'Pendente' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>{res.estado}</span>
                                                </td>
                                                <td className="p-4 text-castanho-raiz font-bold">{res.nome}</td>
                                                <td className="p-4 text-gray-500">{res.efetuada}</td>
                                                <td className="p-4 text-castanho-raiz">{res.dataHora}</td>
                                                <td className="p-4 text-gray-500">{res.tipo}</td>
                                                <td className="p-4 text-center text-gray-500">{res.pessoas}</td>
                                                <td className="p-4 text-gray-500 text-xs max-w-37.5 truncate" title={res.pedido}>{res.pedido}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* ==================================================== */}
                    {/* ABA: HISTÓRICO */}
                    {/* ==================================================== */}
                    {tabAtiva === 'historico' && (
                        <div className="animate-in fade-in space-y-6">
                            <div>
                                <h2 className="font-destaque text-3xl text-castanho-raiz mb-1">Arquivo de Reservas</h2>
                                <p className="text-gray-500 text-sm">Reservas concluídas e guardadas em histórico.</p>
                            </div>

                            <div className="overflow-x-auto border border-gray-200 rounded-xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-100 text-gray-500 text-xs uppercase font-bold">
                                        <tr>
                                            <th className="p-4">Nome</th>
                                            <th className="p-4">Data Pedido</th>
                                            <th className="p-4">Data Reserva</th>
                                            <th className="p-4">Tipo</th>
                                            <th className="p-4">Pessoas</th>
                                            <th className="p-4">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium">
                                        {mockHistorico.map((hist) => (
                                            <tr key={hist.id} className="border-t border-gray-100 hover:bg-gray-50 text-gray-600">
                                                <td className="p-4 font-bold">{hist.nome}</td>
                                                <td className="p-4">{hist.dataPedido}</td>
                                                <td className="p-4">{hist.dataReserva}</td>
                                                <td className="p-4">{hist.tipo}</td>
                                                <td className="p-4">{hist.pessoas}</td>
                                                <td className="p-4">
                                                    <button className="text-red-500 hover:bg-red-50 px-3 py-1 rounded text-xs font-bold transition-colors">Apagar Definitivo</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* ==================================================== */}
                    {/* ABA: CLIENTES */}
                    {/* ==================================================== */}
                    {tabAtiva === 'clientes' && (
                        <div className="animate-in fade-in space-y-6">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                                <div>
                                    <h2 className="font-destaque text-3xl text-castanho-raiz mb-1">Lista de Utilizadores</h2>
                                    <p className="text-gray-500 text-sm">Total de Clientes: <strong>{mockClientes.length}</strong></p>
                                </div>
                                <button
                                    onClick={() => setModalAberto(true)}
                                    className="bg-verde-raiz text-white px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-md flex items-center gap-2"
                                >
                                    <span>+</span> Novo Cliente
                                </button>
                            </div>

                            <div className="overflow-x-auto border border-gray-200 rounded-xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                                        <tr>
                                            <th className="p-4">Nome</th>
                                            <th className="p-4">Email</th>
                                            <th className="p-4">Tipo Conta</th>
                                            <th className="p-4">Estado</th>
                                            <th className="p-4">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium">
                                        {mockClientes.map((cliente) => (
                                            <tr key={cliente.id} className="border-t border-gray-100 hover:bg-fundo/30">
                                                <td className="p-4 text-castanho-raiz font-bold">{cliente.nome}</td>
                                                <td className="p-4 text-gray-500">{cliente.email}</td>
                                                <td className="p-4">
                                                    {cliente.tipo === 'Google'
                                                        ? <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold">Google</span>
                                                        : <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">Email</span>
                                                    }
                                                </td>
                                                <td className="p-4">
                                                    {cliente.verificado
                                                        ? <span className="text-green-600 text-xs font-bold">✅ Verificado</span>
                                                        : <span className="text-orange-500 text-xs font-bold">⏳ Pendente</span>
                                                    }
                                                </td>
                                                <td className="p-4">
                                                    <button className="text-red-500 hover:bg-red-50 px-3 py-1 rounded text-xs font-bold transition-colors">Apagar</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* ==================================================== */}
            {/* MODAL: NOVO CLIENTE (Controlado por Estado React) */}
            {/* ==================================================== */}
            {modalAberto && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="bg-castanho-raiz text-white p-5 flex justify-between items-center">
                            <h3 className="font-bold text-lg">Criar Novo Cliente</h3>
                            <button onClick={() => setModalAberto(false)} className="text-white/70 hover:text-white text-xl leading-none">&times;</button>
                        </div>
                        <form className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-1">Nome Completo</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:border-verde-raiz focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-1">Email</label>
                                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:border-verde-raiz focus:outline-none" required />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-1">Palavra-passe Temporária</label>
                                <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:border-verde-raiz focus:outline-none" required />
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-6">
                                <button type="button" onClick={() => setModalAberto(false)} className="px-5 py-2 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors">Cancelar</button>
                                <button type="submit" className="px-5 py-2 rounded-lg bg-verde-raiz text-white font-bold hover:opacity-90 transition-colors shadow-md">Criar Cliente</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}