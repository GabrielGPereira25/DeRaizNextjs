'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-castanho-raiz text-[#fdfbf7] pt-16 font-sans">
            {/* Contentor Principal do Rodapé */}
            <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center lg:text-left items-start">

                {/* Coluna 1: Informações e Logo */}
                <div className="flex flex-col items-center space-y-4">
                    <Link href="/">
                        <Image
                            src="/sources/deraiz.webp"
                            alt="Logótipo DeRaiz"
                            width={130}
                            height={60}
                            className="transition-transform hover:scale-105"
                        />
                    </Link>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-xs text-center">
                        Cafetaria e Mercearia Biológica. <br />
                        A tua escolha natural em Leiria.
                    </p>

                    {/* Redes Sociais */}
                    <div className="flex justify-center gap-4 pt-4">
                        <SocialIcon href="https://www.instagram.com/de.raiz.bio/" icon="instagram" />
                        <SocialIcon href="https://www.facebook.com/deraiz.cafetaria/" icon="facebook" />
                    </div>
                </div>

                {/* Coluna 2: Links Úteis */}
                <div className="flex flex-col items-center">
                    <h4 className="text-[#e0d8cc] text-lg font-semibold uppercase tracking-wider mb-6">
                        Links Úteis
                    </h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link href="/" className="hover:text-verde-raiz transition-colors">Início</Link></li>
                        <li><Link href="/menu" className="hover:text-verde-raiz transition-colors">Menu</Link></li>
                        <li><Link href="/reservas" className="hover:text-verde-raiz transition-colors">Reservas</Link></li>
                        <li><Link href="/sobre-nos" className="hover:text-verde-raiz transition-colors">Sobre Nós</Link></li>
                        <li className="pt-2"><Link href="/termos" className="hover:text-verde-raiz transition-colors italic">Termos de Utilização</Link></li>
                        <li><Link href="/privacidade" className="hover:text-verde-raiz transition-colors italic">Política de Privacidade</Link></li>
                    </ul>
                </div>

                {/* Coluna 3: Contactos & Horário */}
                <div className="flex flex-col items-center">
                    <h4 className="text-[#e0d8cc] text-lg font-semibold uppercase tracking-wider mb-6">
                        Contactos & Horário
                    </h4>
                    <div className="space-y-4 text-gray-400 text-sm">
                        <p>📍 Rua Principal, Nº 123, Lisboa</p>
                        <p>📞 +351 912 345 678</p>
                        <p>📧 geral@deraiz.pt</p>

                        {/* Lista de Horários */}
                        <div className="pt-4 border-t border-white/10 w-full lg:w-auto">
                            <ul className="space-y-2">
                                <li className="flex justify-center lg:justify-start gap-4">
                                    <span className="font-bold text-[#e0d8cc] min-w-[80px] text-right lg:text-left">Ter - Sex</span>
                                    <span>08:00 - 19:00</span>
                                </li>
                                <li className="flex justify-center lg:justify-start gap-4">
                                    <span className="font-bold text-[#e0d8cc] min-w-[80px] text-right lg:text-left">Sáb - Dom</span>
                                    <span>09:00 - 13:00</span>
                                </li>
                                <li className="flex justify-center lg:justify-start gap-4 text-red-400">
                                    <span className="font-bold min-w-[80px] text-right lg:text-left">Segunda</span>
                                    <span>Encerrado</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-[#2e241f] py-6 px-6 text-center">
                <p className="text-[#999] text-xs">
                    &copy; {currentYear} DeRaiz - Padaria & Pastelaria Artesanal. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

// Componente auxiliar para os ícones sociais
function SocialIcon({ href, icon }) {
    // Função que devolve o SVG correto consoante a rede social
    const renderIcon = () => {
        switch (icon) {
            case 'instagram':
                return (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                );
            case 'facebook':
                return (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                );
            case 'tiktok':
                return (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.15 1.53.85 3.03 2.01 4.14 1.15 1.1 2.7 1.76 4.3 1.89v4.06c-1.52-.07-3.04-.49-4.38-1.21-.02 2.37-.02 4.75-.02 7.12 0 2.53-1.04 5-2.88 6.74-1.86 1.78-4.38 2.77-6.96 2.7-2.61-.08-5.1-1.15-6.9-3.02-1.78-1.88-2.73-4.4-2.65-6.99.08-2.6 1.15-5.1 3.02-6.9 1.52-1.46 3.52-2.32 5.6-2.5v4.13c-1.05.1-2.07.56-2.81 1.32-.77.78-1.21 1.85-1.21 2.96 0 1.12.44 2.19 1.21 2.97.74.76 1.76 1.22 2.81 1.32 1.09.11 2.21-.24 3.06-.94.85-.7 1.4-1.74 1.52-2.84.06-.55.05-5.96.05-15.01h4.31z" />
                    </svg>
                );
            default:
                // Se mandares algo que não esteja na lista, mostra a primeira letra como "fallback"
                return <span className="text-xs font-bold uppercase">{icon[0]}</span>;
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            // Adicionei a cor do ícone padrão (text-white) e no hover ele muda com o fundo
            className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full transition-all hover:bg-white hover:text-black shadow-sm"
        >
            {renderIcon()}
        </a>
    );
}