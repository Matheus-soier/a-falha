import React from 'react';
import { Terminal, ArrowLeft } from 'lucide-react';
import Footer from './Footer';

interface LegalLayoutProps {
    children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-brand-dark text-brand-text font-body selection:bg-brand-neon/30 selection:text-white flex flex-col">
            <header className="py-6 border-b border-brand-surface2 bg-[#070A0A]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 text-brand-neon hover:text-brand-cyan transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-mono text-sm tracking-widest uppercase">Voltar ao Início</span>
                    </a>
                    <div className="flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-brand-neon" />
                        <span className="font-heading font-bold text-lg tracking-tight">A Falha</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 py-16 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LegalLayout;
