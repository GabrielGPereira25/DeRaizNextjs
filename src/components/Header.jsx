'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Efeito para detetar o scroll da página
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Corre uma vez ao montar para garantir o estado correto
        handleScroll(); 

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // O Header passa a ser 'fixed' para ficar por cima da imagem da Hero Section
    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-castanho-raiz shadow-lg py-3' : 'bg-transparent py-5'
            }`}
        >
            {/* Dividimos o Header em 3 partes (Esquerda, Centro, Direita) para centrar perfeitamente o menu */}
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* 1. ESQUERDA: LOGOTIPO (Ocupa 25% do espaço) */}
                <div className="w-1/4 flex justify-start">
                    <Link href="/" className="transition-transform hover:scale-105">
                        <Image
                            src="/sources/deraiz.webp"
                            alt="De Raiz Logo"
                            width={110}
                            height={45}
                            priority
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* 2. CENTRO: LINKS DE NAVEGAÇÃO (Ocupa 50% do espaço) */}
                <nav className="hidden md:flex flex-1 justify-center items-center gap-6 text-white font-medium">
                    <Link href="/" className="hover:text-gray-200 border-b-2 border-white pb-1 transition-all">
                        Início
                    </Link>
                    <Link href="/menu" className="hover:text-gray-200 border-b-2 border-transparent hover:border-gray-200 pb-1 transition-all">
                        Menu
                    </Link>
                    <Link href="/reservas" className="hover:text-gray-200 border-b-2 border-transparent hover:border-gray-200 pb-1 transition-all">
                        Reservas
                    </Link>
                    <Link href="/sobre-nos" className="hover:text-gray-200 border-b-2 border-transparent hover:border-gray-200 pb-1 transition-all">
                        Sobre
                    </Link>
                    <Link href="/contactos" className="hover:text-gray-200 border-b-2 border-transparent hover:border-gray-200 pb-1 transition-all">
                        Contactos
                    </Link>
                    
                    {/* BOTÃO ADMIN VERMELHO */}
                    <Link
                        href="/admin"
                        className="bg-[#c0392b] text-white px-3 py-1.5 rounded-md font-bold flex items-center gap-2 hover:bg-red-800 transition-colors ml-2 shadow-md"
                    >
                        <span>🛠️</span> Admin
                    </Link>
                </nav>

                {/* 3. DIREITA: PERFIL & MENU MOBILE (Ocupa 25% do espaço) */}
                <div className="w-1/4 flex justify-end items-center gap-4">
                    
                    {/* DROPDOWN DO PERFIL */}
                    <div 
                        className="relative hidden md:block"
                        onMouseEnter={() => setIsProfileOpen(true)}
                        onMouseLeave={() => setIsProfileOpen(false)}
                    >
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white/80 shadow-sm bg-white/20 flex items-center justify-center">
                                <Image src="/sources/user.svg" alt="Perfil" width={40} height={40} className="object-cover" />
                            </div>
                            <span className={`text-white text-xs font-bold transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : 'rotate-0'}`}>
                                ▼
                            </span>
                        </div>

                        {/* Menu Aberto do Perfil */}
                        <div className={`absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top ${isProfileOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                            <Link href="/perfil" className="block px-4 py-3 text-castanho-raiz font-bold hover:bg-fundo border-b border-fundo transition-colors">
                                👤 O Meu Perfil
                            </Link>
                            <button className="w-full text-left px-4 py-3 text-[#c0392b] font-bold hover:bg-red-50 transition-colors">
                                🚪 Sair
                            </button>
                        </div>
                    </div>

                    {/* BOTÃO HAMBURGUER (Mobile) */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* MENU MOBILE EXPANDIDO (Só aparece em telemóveis) */}
            {isMobileOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-castanho-raiz border-t border-white/10 flex flex-col p-6 gap-4 shadow-xl animate-in slide-in-from-top">
                    <Link href="/" className="text-white font-bold" onClick={() => setIsMobileOpen(false)}>Início</Link>
                    <Link href="/menu" className="text-white font-bold" onClick={() => setIsMobileOpen(false)}>Menu</Link>
                    <Link href="/reservas" className="text-white font-bold" onClick={() => setIsMobileOpen(false)}>Reservas</Link>
                    <Link href="/sobre-nos" className="text-white font-bold" onClick={() => setIsMobileOpen(false)}>Sobre</Link>
                    <Link href="/contactos" className="text-white font-bold" onClick={() => setIsMobileOpen(false)}>Contactos</Link>
                    <Link href="/admin" className="bg-[#c0392b] text-white text-center py-2 rounded-lg font-bold" onClick={() => setIsMobileOpen(false)}>
                        🛠️ Admin
                    </Link>
                    <div className="border-t border-white/20 mt-2 pt-4">
                        <Link href="/perfil" className="text-white block mb-2" onClick={() => setIsMobileOpen(false)}>👤 O Meu Perfil</Link>
                        <button className="text-red-300 block">🚪 Sair</button>
                    </div>
                </div>
            )}
        </header>
    );
}