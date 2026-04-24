'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Importante: hook para saber a página atual

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const pathname = usePathname(); // Exemplo: devolve '/' ou '/menu' ou '/reservas'

    // SIMULAÇÃO DE ESTADO (Mais tarde iremos ligar isto à tua base de dados/autenticação)
    // Muda o isLoggedIn para false para veres o botão de Login aparecer!
    const isLoggedIn = true;
    const isAdmin = true;
    const userPhoto = '/sources/user.svg';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Função auxiliar para verificar se o link está ativo
    const isActive = (path) => pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-castanho-raiz shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* 1. ESQUERDA: LOGOTIPO */}
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

                {/* 2. CENTRO: LINKS DE NAVEGAÇÃO */}
                <nav className="hidden md:flex flex-1 justify-center items-center gap-6 text-white font-medium">
                    <Link href="/" className={`hover:text-gray-200 border-b-2 pb-1 transition-all ${isActive('/') ? 'border-white' : 'border-transparent hover:border-gray-200'}`}>
                        Início
                    </Link>
                    <Link href="/menu" className={`hover:text-gray-200 border-b-2 pb-1 transition-all ${isActive('/menu') ? 'border-white' : 'border-transparent hover:border-gray-200'}`}>
                        Menu
                    </Link>
                    <Link href="/reservas" className={`hover:text-gray-200 border-b-2 pb-1 transition-all ${isActive('/reservas') ? 'border-white' : 'border-transparent hover:border-gray-200'}`}>
                        Reservas
                    </Link>
                    <Link href="/sobre-nos" className={`hover:text-gray-200 border-b-2 pb-1 transition-all ${isActive('/sobre-nos') ? 'border-white' : 'border-transparent hover:border-gray-200'}`}>
                        Sobre
                    </Link>
                    <Link href="/contactos" className={`hover:text-gray-200 border-b-2 pb-1 transition-all ${isActive('/contactos') ? 'border-white' : 'border-transparent hover:border-gray-200'}`}>
                        Contactos
                    </Link>

                    {/* BOTÃO ADMIN - Só aparece se for Admin */}
                    {isAdmin && (
                        <Link
                            href="/admin"
                            className="bg-[#c0392b] text-white px-3 py-1.5 rounded-md font-bold flex items-center gap-2 hover:bg-red-800 transition-colors ml-2 shadow-md"
                        >
                            <span>🛠️</span> Admin
                        </Link>
                    )}
                </nav>

                {/* 3. DIREITA: PERFIL / LOGIN & MENU MOBILE */}
                <div className="w-1/4 flex justify-end items-center gap-4">

                    {isLoggedIn ? (
                        /* DROPDOWN DO PERFIL (Utilizador Logado) */
                        <div
                            className="relative hidden md:block"
                            onMouseEnter={() => setIsProfileOpen(true)}
                            onMouseLeave={() => setIsProfileOpen(false)}
                        >
                            <div className="flex items-center gap-2 cursor-pointer">
                                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white/80 shadow-sm bg-white/20 flex items-center justify-center">
                                    <Image src={userPhoto} alt="Perfil" width={40} height={40} className="object-cover" />
                                </div>
                                <span className={`text-white text-xs font-bold transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    ▼
                                </span>
                            </div>

                            <div className={`absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top ${isProfileOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                                <Link href="/perfil" className="block px-4 py-3 text-castanho-raiz font-bold hover:bg-fundo border-b border-gray-100 transition-colors">
                                    👤 O Meu Perfil
                                </Link>
                                <button className="w-full text-left px-4 py-3 text-[#c0392b] font-bold hover:bg-red-50 transition-colors">
                                    🚪 Sair
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* BOTÃO DE LOGIN (Utilizador Não Logado) */
                        <Link href="/auth" className="hidden md:flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity">
                            <Image src="/sources/user.svg" alt="Entrar/Registar" width={24} height={24} />
                            <span>Entrar / Registar</span>
                        </Link>
                    )}

                    {/* BOTÃO HAMBURGUER (Mobile) */}
                    <button
                        className="md:hidden text-white z-50 relative"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        <svg className="w-8 h-8 drop-shadow-md transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* MENU MOBILE EXPANDIDO */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-castanho-raiz border-t border-white/10 flex flex-col p-6 gap-4 shadow-xl transition-all duration-300 origin-top ${isMobileOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 hidden'}`}>
                <Link href="/" className={`font-bold ${isActive('/') ? 'text-[#e0d8cc]' : 'text-white'}`} onClick={() => setIsMobileOpen(false)}>Início</Link>
                <Link href="/menu" className={`font-bold ${isActive('/menu') ? 'text-[#e0d8cc]' : 'text-white'}`} onClick={() => setIsMobileOpen(false)}>Menu</Link>
                <Link href="/reservas" className={`font-bold ${isActive('/reservas') ? 'text-[#e0d8cc]' : 'text-white'}`} onClick={() => setIsMobileOpen(false)}>Reservas</Link>
                <Link href="/sobre-nos" className={`font-bold ${isActive('/sobre-nos') ? 'text-[#e0d8cc]' : 'text-white'}`} onClick={() => setIsMobileOpen(false)}>Sobre</Link>
                <Link href="/contactos" className={`font-bold ${isActive('/contactos') ? 'text-[#e0d8cc]' : 'text-white'}`} onClick={() => setIsMobileOpen(false)}>Contactos</Link>

                {isAdmin && (
                    <Link href="/admin" className="bg-[#c0392b] text-white text-center py-2 rounded-lg font-bold" onClick={() => setIsMobileOpen(false)}>
                        🛠️ Admin
                    </Link>
                )}

                <div className="border-t border-white/20 mt-2 pt-4">
                    {isLoggedIn ? (
                        <>
                            <Link href="/perfil" className="text-white block mb-3 font-bold" onClick={() => setIsMobileOpen(false)}>👤 O Meu Perfil</Link>
                            <button className="text-red-300 block font-bold" onClick={() => setIsMobileOpen(false)}>🚪 Sair</button>
                        </>
                    ) : (
                        <Link href="/auth" className="flex items-center gap-2 text-white font-bold" onClick={() => setIsMobileOpen(false)}>
                            <Image src="/sources/user.svg" alt="Login" width={24} height={24} />
                            Entrar / Registar
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}