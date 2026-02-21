import React, { useEffect } from 'react';
import LegalLayout from '../components/LegalLayout';

const PoliticaDeCookies: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout>
            <div className="space-y-8 text-brand-muted leading-relaxed">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Política de Cookies</h1>
                    <p className="font-mono text-sm text-brand-neon">Última atualização: 21/02/2026</p>
                </div>

                <div className="space-y-6">
                    <p>
                        Esta Política explica como usamos <strong className="text-brand-text">cookies</strong> e tecnologias semelhantes (pixels, tags, SDKs) para operar, medir e melhorar o site e a plataforma.
                    </p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">1. O que são cookies</h2>
                    <p>Cookies são pequenos arquivos armazenados no seu navegador/dispositivo que ajudam a lembrar preferências, manter sessões, medir desempenho e personalizar experiências.</p>
                    <p>Também podemos usar tecnologias semelhantes (pixels/tags) para registrar eventos de navegação e conversões.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">2. Tipos de cookies/tecnologias que podemos usar</h2>

                    <h3 className="text-xl font-heading font-medium text-brand-text mt-4">a) Estritamente necessários (Essenciais)</h3>
                    <p>Permitem que o site funcione corretamente:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>autenticação/login</li>
                        <li>segurança, prevenção a fraudes</li>
                        <li>balanceamento de carga e performance básica</li>
                    </ul>
                    <p><strong className="text-brand-text">Base legal:</strong> execução de contrato e legítimo interesse.</p>
                    <p>Esses geralmente não podem ser desativados sem comprometer o funcionamento.</p>

                    <h3 className="text-xl font-heading font-medium text-brand-text mt-4">b) Analíticos (Medição)</h3>
                    <p>Ajudam a entender como o site é usado:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>páginas visitadas, cliques, rolagem</li>
                        <li>origem de tráfego e parâmetros de campanha (<strong className="text-brand-text">UTMs</strong>, gclid/fbclid quando existentes)</li>
                        <li>eventos e conversões (por exemplo: lp_view, cta_click, form_submit)</li>
                    </ul>
                    <p><strong className="text-brand-text">Base legal:</strong> legítimo interesse e/ou consentimento (dependendo da tecnologia/configuração e do seu banner de consentimento).</p>

                    <h3 className="text-xl font-heading font-medium text-brand-text mt-4">c) Marketing (Publicidade)</h3>
                    <p>Podem ser usados para:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>medir performance de campanhas</li>
                        <li>criar públicos e remarketing (quando habilitado)</li>
                        <li>atribuição de conversões</li>
                    </ul>
                    <p><strong className="text-brand-text">Base legal:</strong> consentimento quando exigido.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">3. Como gerenciar suas preferências</h2>
                    <p>Você pode:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>ajustar preferências no <strong className="text-brand-text">banner/central de cookies</strong> (quando disponível)</li>
                        <li>configurar o navegador para bloquear/apagar cookies (isso pode afetar funcionalidades)</li>
                        <li>desativar personalização/anúncios em plataformas de terceiros, quando aplicável</li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">4. Cookies de terceiros</h2>
                    <p>Podemos utilizar serviços de terceiros que definem seus próprios cookies/identificadores. Esses serviços estão sujeitos às políticas dos respectivos fornecedores.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">5. Atualizações desta Política</h2>
                    <p>Podemos alterar esta Política para refletir mudanças técnicas e regulatórias. A versão vigente ficará disponível no site.</p>

                    <div className="pt-8 border-t border-brand-surface2 mt-12 mb-12">
                        <strong className="text-brand-text">Contato:</strong> <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a>
                    </div>
                </div>
            </div>
        </LegalLayout>
    );
};

export default PoliticaDeCookies;
