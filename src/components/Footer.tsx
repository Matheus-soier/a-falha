import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark py-12 border-t border-brand-surface2 text-brand-muted text-sm font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 border-b border-brand-surface2/50 pb-8">
                    <div className="flex items-center gap-3">
                        <img src="/logo-a-falha.png" alt="A Falha Logo" className="w-5 h-5 object-contain opacity-80" />
                        <p className="font-semibold text-brand-text">&copy; 2026 <strong className="text-brand-neon font-normal">A Falha</strong> — Matheus Sampaio Soier Ltda. Todos os direitos reservados.</p>
                    </div>

                    <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                        <a href="#termos" className="hover:text-brand-neon transition-colors uppercase tracking-widest text-xs font-semibold">Termos de Uso</a>
                        <a href="#privacidade" className="hover:text-brand-neon transition-colors uppercase tracking-widest text-xs font-semibold">Política de Privacidade</a>
                        <a href="#cookies" className="hover:text-brand-neon transition-colors uppercase tracking-widest text-xs font-semibold">Política de Cookies</a>
                        <a href="#reembolsos" className="hover:text-brand-neon transition-colors uppercase tracking-widest text-xs font-semibold">Reembolsos e Cancelamentos</a>
                        <a href="#contato" className="hover:text-brand-neon transition-colors uppercase tracking-widest text-xs font-semibold">Contato</a>
                    </div>
                </div>

                <div className="text-center md:text-left text-xs space-y-2 opacity-80 mb-8 max-w-4xl mx-auto md:mx-0">
                    <p><strong className="text-brand-text">Razão Social:</strong> Matheus Sampaio Soier Ltda</p>
                    <p><strong className="text-brand-text">CNPJ:</strong> 60.844.823/0001-25</p>
                    <p><strong className="text-brand-text">Endereço cadastral:</strong> Avenida Paulista, 726, Conj. 1202 — Bela Vista — São Paulo/SP — CEP 01310-910</p>
                    <p><strong className="text-brand-text">Suporte:</strong> <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a></p>
                </div>

                <div className="pt-8 border-t border-brand-surface2 text-center opacity-60 text-xs leading-relaxed font-body">
                    <p>
                        Este produto não é afiliado, endossado ou administrado por Google, Meta ou qualquer plataforma de anúncios.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
