import Image from 'next/image';

export default function MenuCard({ ementa, variant = 'menu' }) {
    const limitarTexto = (texto, limite) => {
        if (!texto) return "---";
        return texto.length > limite ? texto.substring(0, limite).trim() + '...' : texto;
    };

    const sopa = limitarTexto(ementa?.sopa, 60);
    const prato = limitarTexto(ementa?.prato, 85);
    const sobremesa = limitarTexto(ementa?.sobremesa, 60);
    const imagem = ementa?.imagem || "/sources/fundo-menu.webp";

    // ==========================================
    //                    HOME
    // ==========================================
    if (variant === 'home') {
        return (
            <div className="max-w-4xl mx-auto h-150 md:h-87.5 bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-castanho-raiz/10 text-left">
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
                    <Image src={imagem} alt={prato} fill className="object-cover" />
                </div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 flex flex-col justify-center">
                    <h3 className="font-destaque text-4xl text-castanho-raiz mb-6 shrink-0">Ementa de Hoje</h3>
                    {/* line-clamp-2 garante que não passa de 2 linhas visualmente */}
                    <div className="space-y-4 overflow-hidden">
                        <p className="text-gray-700 text-lg line-clamp-2"><strong>🥣 Sopa:</strong> {sopa}</p>
                        <p className="text-gray-700 text-lg line-clamp-2"><strong>🍲 Prato:</strong> {prato}</p>
                        <p className="text-gray-700 text-lg line-clamp-2"><strong>🍰 Sobremesa:</strong> {sobremesa}</p>
                    </div>
                </div>
            </div>
        );
    }

    // ==========================================
    //                    MENU
    // ==========================================
    if (variant === 'menu') {
        return (
            // Altura fixa adicionada aqui: h-[500px] md:h-[320px]
            <div className="max-w-2xl mx-auto h-125 md:h-80 bg-white rounded-2xl shadow-lg overflow-hidden border border-castanho-raiz/5 flex flex-col md:flex-row text-left transition-transform hover:scale-[1.01]">
                <div className="relative w-full md:w-2/5 h-2/5 md:h-full">
                    <Image src={imagem} alt={prato} fill className="object-cover" />
                </div>
                <div className="p-8 md:w-3/5 h-3/5 md:h-full flex flex-col justify-center">
                    <h3 className="font-destaque text-3xl text-verde-raiz mb-4 shrink-0">O Menu Completo</h3>
                    <ul className="space-y-3 text-castanho-raiz overflow-hidden">
                        <li className="flex flex-col">
                            <span className="text-xs uppercase font-bold text-gray-400">Sopa</span>
                            <span className="text-lg line-clamp-2" title={ementa?.sopa}>{sopa}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-xs uppercase font-bold text-gray-400">Prato Principal</span>
                            <span className="text-lg font-bold line-clamp-2" title={ementa?.prato}>{prato}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-xs uppercase font-bold text-gray-400">Sobremesa</span>
                            <span className="text-lg line-clamp-2" title={ementa?.sobremesa}>{sobremesa}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    // ==========================================
    //                  RESERVAS
    // ==========================================
    if (variant === 'reservas') {
        return (
            <div className="p-6 bg-[#fcfaf7] rounded-xl border-2 border-fundo text-left">
                <h4 className="font-bold text-castanho-raiz mb-4 uppercase text-sm tracking-widest border-b border-fundo pb-2">Conteúdo da Ementa</h4>
                <ul className="space-y-3">
                    <li className="text-gray-700"><strong>Sopa:</strong> {sopa}</li>
                    <li className="text-gray-700"><strong>Prato:</strong> {prato}</li>
                    <li className="text-gray-700"><strong>Sobremesa:</strong> {sobremesa}</li>
                </ul>
            </div>
        );
    }

    return null;
}