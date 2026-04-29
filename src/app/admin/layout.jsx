export const metadata = {
    title: 'Painel de Administração | De Raiz',
    description: 'Gestão de ementas, reservas e clientes.',
};

export default function AdminLayout({ children }) {
    return (
        <section className="admin-wrapper bg-[#f4f4f4] min-h-screen">
            {/* Se um dia quiseres um menu lateral fixo para todas 
               as janelas do admin, colocarias o componente aqui 
            */}
            {children}
        </section>
    );
}