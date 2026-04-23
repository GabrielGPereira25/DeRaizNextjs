import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-verde-raiz text-white pt-16 pb-8 px-6 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* COLUNA 1: MARCA */}
                <div className="space-y-4">
                    <h3 className="font-destaque text-3xl">De Raiz</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                        Sabores vegan e biológicos em Leiria. <br />
                        Comer bem é a nossa raiz.
                    </p>
                </div>

                {/* COLUNA 2: EXPLORAR */}
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b border-white/20 pb-2">Explorar</h4>
                    <ul className="space-y-3 text-gray-200">
                        <li><Link href="/menu" className="hover:text-white transition">Ementa Semanal</Link></li>
                        <li><Link href="/sobre-nos" className="hover:text-white transition">A Nossa História</Link></li>
                        <li><Link href="/reservas" className="hover:text-white transition">Reservas</Link></li>
                    </ul>
                </div>

                {/* COLUNA 3: LEGAL */}
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b border-white/20 pb-2">Informação</h4>
                    <ul className="space-y-3 text-gray-200">
                        <li><Link href="/privacidade" className="hover:text-white transition">Privacidade</Link></li>
                        <li><Link href="/termos" className="hover:text-white transition">Termos e Condições</Link></li>
                    </ul>
                </div>

                {/* COLUNA 4: CONTACTO */}
                <div>
                    <h4 className="font-bold text-lg mb-6 border-b border-white/20 pb-2">Onde Estamos</h4>
                    <p className="text-gray-200 text-sm">📍 Leiria, Portugal</p>
                    <p className="text-gray-200 text-sm mt-2">✉️ geral@deraiz.pt</p>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-300">
                <p>© {new Date().getFullYear()} De Raiz. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}