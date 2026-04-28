import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'De Raiz | Comer Bem é De Raiz',
    description: 'Sabores vegan e biológicos em Leiria.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt" className="scroll-smooth">
            <body className="min-h-screen flex flex-col bg-fundo">
                <Header />
                <main className="grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

