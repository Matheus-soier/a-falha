import React, { useEffect } from 'react';
import LegalLayout from '../components/LegalLayout';

const Contato: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout>
            <div className="space-y-8 text-brand-muted leading-relaxed">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Contato — A Falha</h1>
                </div>

                <div className="space-y-6">
                    <p className="text-lg">
                        <strong className="text-brand-text">Suporte e atendimento:</strong> <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a>
                    </p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">Informações do responsável</h2>
                    <ul className="space-y-2 list-none">
                        <li><strong className="text-brand-text">Razão Social:</strong> Matheus Sampaio Soier Ltda</li>
                        <li><strong className="text-brand-text">CNPJ:</strong> 60.844.823/0001-25</li>
                        <li><strong className="text-brand-text">Endereço cadastral:</strong> Avenida Paulista, 726, Conj. 1202 — Bela Vista — São Paulo/SP — CEP 01310-910</li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">Horário e prazos</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-brand-text">Horário de atendimento:</strong> Segunda a Sexta, das 9h às 18h</li>
                        <li><strong className="text-brand-text">Prazo médio de resposta:</strong> Até 2 dias úteis</li>
                    </ul>
                </div>
            </div>
        </LegalLayout>
    );
};

export default Contato;
