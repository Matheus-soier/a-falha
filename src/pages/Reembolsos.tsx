import React, { useEffect } from 'react';
import LegalLayout from '../components/LegalLayout';

const Reembolsos: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout>
            <div className="space-y-8 text-brand-muted leading-relaxed">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Reembolsos e Cancelamentos</h1>
                    <p className="font-mono text-sm text-brand-neon">Última atualização: 21/02/2026</p>
                </div>

                <div className="space-y-6">
                    <p>Esta política define regras de reembolso, cancelamento e arrependimento para compras feitas online.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">1. Prazo de acesso</h2>
                    <p>O Produto dá direito a <strong className="text-brand-text">12 (doze) meses de acesso</strong> a partir da confirmação de pagamento.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">2. Direito de arrependimento (compras online)</h2>
                    <p>Conforme o <strong className="text-brand-text">Código de Defesa do Consumidor (Lei 8.078/1990)</strong> e regras do comércio eletrônico, compras realizadas fora do estabelecimento comercial (online) podem ter <strong className="text-brand-text">direito de arrependimento em até 7 (sete) dias</strong> contados da confirmação da compra (ou do início da fruição do serviço, conforme o caso).</p>

                    <h3 className="text-xl font-heading font-medium text-brand-text mt-4">Como solicitar</h3>
                    <p>Envie e-mail para <strong className="text-brand-text"><a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a></strong> com:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Nome completo</li>
                        <li>E-mail usado na compra</li>
                        <li>Data da compra</li>
                        <li>Motivo (opcional)</li>
                    </ul>
                    <p>Após validação, faremos:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>o cancelamento do acesso; e</li>
                        <li>a solicitação de estorno/reembolso conforme o meio de pagamento.</li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">3. Como ocorre o reembolso</h2>
                    <p>O prazo e a forma de devolução dependem do método de pagamento e do processador (checkout, cartão, PIX, boleto):</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong className="text-brand-text">Cartão:</strong> estorno pode aparecer em faturas futuras conforme regras do emissor.</li>
                        <li><strong className="text-brand-text">PIX:</strong> devolução para a conta pagadora, quando aplicável.</li>
                        <li><strong className="text-brand-text">Boleto:</strong> reembolso via transferência/PIX, mediante dados do titular.</li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">4. Após o prazo de 7 dias</h2>
                    <p>Após o prazo legal de arrependimento, reembolsos poderão ocorrer <strong className="text-brand-text">apenas quando exigidos por lei</strong> ou quando houver falha comprovada na prestação do serviço que não tenha sido sanada em prazo razoável, considerando a natureza digital do Produto.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">5. Cancelamento e expiração do acesso</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Como o acesso é por <strong className="text-brand-text">12 meses</strong>, ele expira automaticamente ao final do período, salvo renovação.</li>
                        <li>Caso exista opção de renovação, ela será informada ao final do período com condições vigentes.</li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">6. Uso indevido e violação de termos</h2>
                    <p>Se houver violação dos <strong className="text-brand-text">Termos de Uso</strong> (por exemplo: compartilhamento de login, pirataria, fraude), o acesso pode ser suspenso/cancelado <strong className="text-brand-text">sem reembolso</strong>, sem prejuízo de medidas legais cabíveis.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">7. Suporte e solução de problemas</h2>
                    <p>Se seu motivo for dificuldade técnica de acesso, recomendamos contatar o suporte antes: <strong className="text-brand-text"><a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a></strong>.</p>

                    <div className="pt-8 border-t border-brand-surface2 mt-12 mb-12">
                        <strong className="text-brand-text">Contato para reembolsos/cancelamentos:</strong> <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a>
                    </div>
                </div>
            </div>
        </LegalLayout>
    );
};

export default Reembolsos;
