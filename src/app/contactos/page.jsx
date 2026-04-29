'use client';

import Image from 'next/image';
import { scrollToSection } from '@/utils/smoothScroll';

export default function ContactosPage() {
    return (
        <main className="font-principal text-castanho-raiz bg-texto-claro min-h-screen pb-24">

            {/* 1. HERO SECTION */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-castanho-raiz overflow-hidden">
                {/* Nota: O componente Image do Next.js é inteligente o suficiente para carregar
                  a versão otimizada da imagem consoante o ecrã, não precisando das 3 imagens 
                  distintas (tablet/telemovel) que usavas no SCSS, a menos que as fotos sejam 
                  cenários completamente diferentes.
                */}
                <Image
                    src="/sources/fundo-contactos.webp"
                    alt="Contactos De Raiz"
                    fill
                    priority
                    className="object-cover opacity-60 mix-blend-overlay"
                />
                <div className="relative z-10 text-center text-white px-4 mt-12">
                    <h1 className="font-destaque text-6xl md:text-8xl drop-shadow-md mb-2">
                        Fale Connosco
                    </h1>
                    <p className="text-lg md:text-xl font-medium drop-shadow-sm mb-8">
                        Estamos à sua espera no coração de Leiria.
                    </p>
                    <button
                        onClick={(e) => scrollToSection(e, 'contact-info')}
                        className="bg-verde-raiz text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl"
                    >
                        Ver Contactos
                    </button>
                </div>
            </section>

            {/* 2. ZONA DE CONTACTOS */}
            <section className="pt-20 px-6 max-w-6xl mx-auto scroll-mt-28" id="contact-info">

                {/* Grelha Superior (Info + Google Reviews) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">

                    {/* CARTÃO ESQUERDO: INFORMAÇÕES */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-castanho-raiz/10 flex flex-col justify-center h-full">

                        {/* Morada */}
                        <div className="flex gap-5 mb-8 items-start">
                            <div className="w-12 h-12 bg-[#e8f8f5] rounded-full flex items-center justify-center shrink-0 text-castanho-raiz">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-destaque text-2xl text-castanho-raiz mb-1">Morada</h3>
                                <a href="https://www.google.com/maps/place/De+Raiz+-+Cafetaria+%26+Mercearia/@39.736637,-8.798771,379m/data=!3m1!1e3!4m6!3m5!1s0xd2273005a7bf0ad:0xdcdd0f8b22e65ace!8m2!3d39.7366366!4d-8.7987705!16s%2Fg%2F11m6w8q1c7?hl=pt-PT&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#27ae60] transition-colors leading-relaxed block">
                                    R. Miguel Torga Lt2, R/C Direito<br />
                                    2410-132 Leiria, Portugal
                                </a>
                            </div>
                        </div>

                        {/* Telefone */}
                        <div className="flex gap-5 mb-8 items-start">
                            <div className="w-12 h-12 bg-[#e8f8f5] rounded-full flex items-center justify-center shrink-0 text-castanho-raiz">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-destaque text-2xl text-castanho-raiz mb-1">Telefone</h3>
                                <a href="tel:+351917969431" className="text-gray-600 hover:text-[#27ae60] transition-colors text-lg font-medium block">
                                    +351 917 969 431
                                </a>
                                <small className="text-gray-400">Chamada para rede móvel nacional</small>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-5 mb-8 items-start">
                            <div className="w-12 h-12 bg-[#e8f8f5] rounded-full flex items-center justify-center shrink-0 text-castanho-raiz">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-destaque text-2xl text-castanho-raiz mb-1">Email</h3>
                                <a href="mailto:geral@deraiz.pt" className="text-gray-600 hover:text-[#27ae60] transition-colors block mb-1">geral@deraiz.pt</a>
                                <a href="mailto:suporte@deraiz.pt" className="text-gray-600 hover:text-[#27ae60] transition-colors block mb-2">suporte@deraiz.pt</a>
                                <small className="text-gray-400 block leading-snug max-w-xs">Em caso de dúvidas ou erros/bugs encontrados no site, contacte-nos pelo suporte.</small>
                            </div>
                        </div>

                        {/* Horário */}
                        <div className="flex gap-5 items-start">
                            <div className="w-12 h-12 bg-[#e8f8f5] rounded-full flex items-center justify-center shrink-0 text-castanho-raiz">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-destaque text-2xl text-castanho-raiz mb-1">Horário</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    <strong>Seg - Sex:</strong> 09:00 - 19:00<br />
                                    <strong>Sábado:</strong> 09:00 - 17:00<br />
                                    <strong className="text-red-400">Domingo:</strong> Encerrado
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* CARTÃO DIREITO: REVIEWS GOOGLE */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-castanho-raiz/10 flex flex-col items-center justify-center text-center h-full">
                        <div className="mb-6 relative w-32 h-12">
                            <Image
                                src="/sources/google-logo.webp"
                                alt="Google"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h2 className="font-destaque text-5xl md:text-6xl text-castanho-raiz mb-4">Já nos visitou?</h2>
                        <p className="text-gray-600 text-lg mb-4">A sua opinião ajuda-nos a crescer e a servir melhor.</p>

                        {/* Estrelas */}
                        <div className="text-[#f1c40f] text-5xl tracking-widest mb-4">
                            ★★★★★
                        </div>

                        <p className="text-gray-400 text-sm mb-8">Partilhe a sua experiência no Google.</p>

                        <a
                            href="https://www.google.com/search?q=De+Raiz+-+Cafetaria+%26+Mercearia+Leiria+reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#4285F4] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#3367d6] hover:-translate-y-1 hover:shadow-lg transition-all"
                        >
                            Escrever Crítica
                        </a>
                    </div>
                </div>

                {/* Grelha Inferior (Mapa Google) */}
                <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 h-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655.1910920715292!2d-8.798781704525085!3d39.73668211844628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2273005a7bf0ad%3A0xdcdd0f8b22e65ace!2sDe%20Raiz%20-%20Cafetaria%20%26%20Mercearia!5e1!3m2!1spt-PT!2spt!4v1770647868025!5m2!1spt-PT!2spt"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                </div>

            </section>
        </main>
    );
}