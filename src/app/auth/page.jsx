'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
    const router = useRouter();
    const [view, setView] = useState('login');

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErro('');

        const res = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        if (res?.error) {
            setErro(res.error);
            setLoading(false);
        } else {
            router.push('/perfil');
            router.refresh();
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErro('');
        setSucesso('');

        if (password !== confirmPassword) {
            setErro('As palavras-passe não coincidem.');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                setErro(data.message);
            } else {
                setSucesso('Conta criada com sucesso! A iniciar sessão...');
                await signIn('credentials', { redirect: false, email, password });
                router.push('/perfil');
                router.refresh();
            }
        } catch (err) {
            setErro('Erro de ligação ao servidor.');
        }

        setLoading(false);
    };

    return (
        <main className="min-h-screen bg-fundo flex items-center justify-center p-6 pt-32 pb-16">
            <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-castanho-raiz/10">

                {/* LADO ESQUERDO: IMAGEM E BOAS-VINDAS */}
                <div className="hidden md:block md:w-1/2 relative">
                    <Image src="/sources/balcao-loja.webp" alt="De Raiz Ambiente" fill className="object-cover" />
                    <div className="absolute inset-0 bg-castanho-raiz/40 flex flex-col items-center justify-center text-white p-12 text-center">
                        <h2 className="font-destaque text-5xl mb-4 drop-shadow-lg">Bem-vindo!</h2>
                        <p className="text-lg font-medium drop-shadow-md">
                            {view === 'login' ? 'Ainda não tem conta? Junte-se à nossa comunidade biológica.' : 'Já faz parte da família? Entre para gerir as suas encomendas.'}
                        </p>
                        <button
                            onClick={() => { setView(view === 'login' ? 'register' : 'login'); setErro(''); setSucesso(''); }}
                            className="mt-8 border-2 border-white px-8 py-2 rounded-full font-bold hover:bg-white hover:text-castanho-raiz transition-all"
                        >
                            {view === 'login' ? 'Criar Conta' : 'Fazer Login'}
                        </button>
                    </div>
                </div>

                {/* LADO DIREITO: FORMULÁRIOS */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">

                    {/* TOGGLE MOBILE */}
                    <div className="flex md:hidden bg-fundo p-1 rounded-full mb-8">
                        <button onClick={() => { setView('login'); setErro(''); }} className={`flex-1 py-2 rounded-full font-bold text-sm transition-all ${view === 'login' ? 'bg-castanho-raiz text-white shadow-md' : 'text-gray-500'}`}>Entrar</button>
                        <button onClick={() => { setView('register'); setErro(''); }} className={`flex-1 py-2 rounded-full font-bold text-sm transition-all ${view === 'register' ? 'bg-castanho-raiz text-white shadow-md' : 'text-gray-500'}`}>Registar</button>
                    </div>

                    {/* MENSAGENS DE ERRO E SUCESSO */}
                    {erro && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-bold mb-4 border border-red-100">{erro}</div>}
                    {sucesso && <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm font-bold mb-4 border border-green-100">{sucesso}</div>}

                    {/* FORMULÁRIO DE LOGIN */}
                    {view === 'login' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="font-destaque text-4xl text-castanho-raiz mb-2">Entrar</h3>
                            <p className="text-gray-500 mb-8">Bem-vindo de volta! Por favor, insira os seus dados.</p>

                            <form className="space-y-5" onSubmit={handleLogin}>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Email</label>
                                    <input
                                        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="exemplo@email.com" required
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-verde-raiz transition-all"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-bold">Palavra-passe</label>
                                        <Link href="/auth/recuperar" className="text-xs text-verde-raiz hover:underline">Esqueceu-se?</Link>
                                    </div>
                                    <input
                                        type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••" required
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-verde-raiz transition-all"
                                    />
                                </div>
                                <button disabled={loading} className="w-full bg-castanho-raiz text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#2b221d] transition-all disabled:opacity-50">
                                    {loading ? 'A verificar...' : 'Entrar na Conta'}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* FORMULÁRIO DE REGISTO */}
                    {view === 'register' && (
                        <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                            <h3 className="font-destaque text-4xl text-castanho-raiz mb-2">Criar Conta</h3>
                            <p className="text-gray-500 mb-8">Comece hoje a sua jornada De Raiz.</p>

                            <form className="space-y-4" onSubmit={handleRegister}>
                                <div>
                                    <label className="block text-sm font-bold mb-1">Nome Completo</label>
                                    <input
                                        type="text" value={nome} onChange={(e) => setNome(e.target.value)}
                                        placeholder="O seu nome" required
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-verde-raiz transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-1">Email</label>
                                    <input
                                        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="exemplo@email.com" required
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-verde-raiz transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold mb-1">Palavra-passe</label>
                                        <input
                                            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••" required minLength="6"
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-verde-raiz transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-1">Confirmar</label>
                                        <input
                                            type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="••••••••" required minLength="6"
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-verde-raiz transition-all"
                                        />
                                    </div>
                                </div>
                                <button disabled={loading} className="w-full bg-verde-raiz text-white font-bold py-4 rounded-xl shadow-lg hover:bg-opacity-90 transition-all mt-4 disabled:opacity-50">
                                    {loading ? 'A processar...' : 'Registar Agora'}
                                </button>
                            </form>
                        </div>
                    )}

                </div>
            </div>
        </main>
    );
}