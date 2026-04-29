"use client"; // Necessário para usar usePathname

import './globals.css';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith('/admin');

    return (
        <html lang="pt" className="scroll-smooth">
            <body className="min-h-screen flex flex-col bg-fundo">
                {!isAdminPage && <Header />}

                <main className="grow">
                    {children}
                </main>
                
                {!isAdminPage && <Footer />}
            </body>
        </html>
    );
}