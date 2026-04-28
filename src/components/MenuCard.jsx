import Image from 'next/image';

export default function MenuCard({ ementa, variant = 'menu' }) {
    const sopa = ementa?.sopa || "---";
    const prato = ementa?.prato || "---";
    const sobremesa = ementa?.sobremesa || "---";
    const imagem = ementa?.imagem || "/sources/fundo-menu.webp";

    // ==========================================
    //                    HOME
    // ==========================================
    if (variant === 'home') {
        return (
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-castanho-raiz/10 text-left">
                <div className="relative w-full md:w-1/2 h-72 md:h-auto">
                    <Image src={imagem} alt={prato} fill className="object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-destaque text-4xl text-castanho-raiz mb-6">Ementa de Hoje</h3>
                    <div className="space-y-4">
                        <p className="text-gray-700 text-lg"><strong>🥣 Sopa:</strong> {sopa}</p>
                        <p className="text-gray-700 text-lg"><strong>🍲 Prato:</strong> {prato}</p>
                        <p className="text-gray-700 text-lg"><strong>🍰 Sobremesa:</strong> {sobremesa}</p>
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
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-castanho-raiz/5 flex flex-col md:flex-row text-left transition-transform hover:scale-[1.01]">
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                    <Image src={imagem} alt={prato} fill className="object-cover" />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                    <h3 className="font-destaque text-3xl text-verde-raiz mb-4">O Menu Completo</h3>
                    <ul className="space-y-3 text-castanho-raiz">
                        <li className="flex flex-col"><span className="text-xs uppercase font-bold text-gray-400">Sopa</span> <span className="text-lg">{sopa}</span></li>
                        <li className="flex flex-col"><span className="text-xs uppercase font-bold text-gray-400">Prato Principal</span> <span className="text-lg font-bold">{prato}</span></li>
                        <li className="flex flex-col"><span className="text-xs uppercase font-bold text-gray-400">Sobremesa</span> <span className="text-lg">{sobremesa}</span></li>
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
                <h4 className="font-bold text-castanho-raiz mb-4 uppercase text-sm tracking-widest border-b border-[#efe5d8] pb-2">Conteúdo da Ementa</h4>
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