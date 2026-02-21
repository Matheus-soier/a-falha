import React, { useEffect } from 'react';
import LegalLayout from '../components/LegalLayout';

const TermosDeUso: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout>
            <div className="space-y-8 text-brand-muted leading-relaxed">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Termos de Uso</h1>
                    <p className="font-mono text-sm text-brand-neon">Última atualização: 21/02/2026</p>
                </div>

                <div className="space-y-6">
                    <p>
                        Bem-vindo(a) à <strong className="text-brand-text">A Falha</strong> (“Produto/Plataforma”). Ao comprar, acessar ou utilizar o conteúdo, você concorda com estes <strong className="text-brand-text">Termos de Uso</strong>. Se você não concorda, não utilize a Plataforma.
                    </p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">1. Identificação do fornecedor</h2>
                    <ul className="space-y-2 list-none">
                        <li><strong className="text-brand-text">Razão Social:</strong> Matheus Sampaio Soier Ltda</li>
                        <li><strong className="text-brand-text">CNPJ:</strong> 60.844.823/0001-25</li>
                        <li><strong className="text-brand-text">Endereço cadastral:</strong> Avenida Paulista, 726, Conj. 1202 — Bela Vista — São Paulo/SP — CEP 01310-910</li>
                        <li><strong className="text-brand-text">E-mail de suporte:</strong> <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a></li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">2. O que é a A Falha</h2>
                    <p>
                        A Falha é um produto educacional que oferece conteúdos, aulas, materiais, templates, checklists e orientações sobre <strong className="text-brand-text">IA aplicada, gestão de tráfego, mensuração, automações, operações e ferramentas</strong> (“Conteúdo”), disponibilizados por meio de plataforma online.
                    </p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">3. Elegibilidade e cadastro</h2>
                    <p>Você declara que:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>possui capacidade civil para contratar; e</li>
                        <li>fornecerá informações corretas e atualizadas.</li>
                    </ul>
                    <p>O acesso pode exigir cadastro e autenticação. Você é responsável por manter a confidencialidade das credenciais de acesso.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">4. Compra, acesso e prazo</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>O Produto é comercializado por <strong className="text-brand-text">pagamento único</strong> no valor de <strong className="text-brand-text">R$ 497</strong> (quatrocentos e noventa e sete reais), salvo alterações informadas na página de vendas/checkout.</li>
                        <li>O acesso é concedido por <strong className="text-brand-text">12 (doze) meses</strong> contados a partir da confirmação do pagamento (“Período de Acesso”).</li>
                        <li>Ao final do Período de Acesso, você poderá perder o acesso ao Conteúdo, salvo se houver <strong className="text-brand-text">renovação</strong> (quando aplicável) em condições informadas no momento da renovação.</li>
                    </ul>
                    <div className="bg-brand-surface1 border border-brand-surface2 p-4 rounded-sm italic border-l-brand-neon border-l-2">
                        <strong className="text-brand-text not-italic">Importante:</strong> eventuais bônus, módulos e atualizações podem ser adicionados, alterados ou descontinuados conforme evolução de ferramentas e integrações, sem obrigação de manutenção eterna de recursos específicos.
                    </div>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">5. Entrega e disponibilidade</h2>
                    <p>O acesso ao Conteúdo ocorre, em regra, de forma digital após confirmação de pagamento.</p>
                    <p>Podem ocorrer indisponibilidades temporárias por manutenção, falhas de terceiros (hospedagem, serviços de internet), atualizações ou eventos fora do controle do fornecedor.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">6. Licença de uso e propriedade intelectual</h2>
                    <p>Todo o Conteúdo é protegido por direitos autorais e propriedade intelectual.</p>
                    <p>Você recebe uma <strong className="text-brand-text">licença limitada, pessoal, revogável, não exclusiva e intransferível</strong> para acessar e usar o Conteúdo durante o Período de Acesso, <strong className="text-brand-text">somente para fins lícitos e pessoais/profissionais internos</strong>.</p>
                    <p>É proibido:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>compartilhar login, vender, sublicenciar ou ceder acesso a terceiros;</li>
                        <li>copiar, distribuir, republicar, revender ou disponibilizar o Conteúdo (total ou parcial) sem autorização;</li>
                        <li>remover avisos de direitos autorais ou marcas;</li>
                        <li>gravar e redistribuir aulas (salvo se a própria plataforma permitir downloads autorizados).</li>
                    </ul>
                    <p>O descumprimento pode resultar em <strong className="text-brand-text">suspensão/cancelamento do acesso</strong>, sem prejuízo de medidas legais cabíveis.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">7. Uso adequado, conduta e segurança</h2>
                    <p>Você concorda em:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>não usar a Plataforma para fins ilícitos;</li>
                        <li>não tentar invadir, explorar vulnerabilidades, automatizar acessos de forma abusiva, ou burlar limitações técnicas;</li>
                        <li>não enviar conteúdo malicioso ou que viole direitos de terceiros.</li>
                    </ul>
                    <p>Podemos adotar medidas para prevenir fraude e abuso, incluindo bloqueios e verificação de segurança.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">8. Avisos importantes sobre resultados e responsabilidade</h2>
                    <p>A Falha é um produto educacional. <strong className="text-brand-text">Não garantimos resultados específicos</strong> (financeiros, de desempenho ou de carreira), pois eles dependem de fatores individuais e externos: nicho, orçamento, execução, mercado, ferramentas, time, etc.</p>
                    <p>O Conteúdo pode envolver referências a plataformas e ferramentas de terceiros (por exemplo, Google, Meta, Microsoft e outras). <strong className="text-brand-text">Não somos afiliados, endossados ou administrados</strong> por essas empresas, salvo se expressamente indicado.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">9. Atualizações e alterações do Produto</h2>
                    <p>Podemos:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>atualizar Conteúdos, templates e exemplos;</li>
                        <li>alterar a organização do Conteúdo;</li>
                        <li>descontinuar recursos que dependam de terceiros, quando necessário.</li>
                    </ul>
                    <p>Essas mudanças visam manter o Produto funcional e atualizado, sem caracterizar obrigação de manutenção perpétua de ferramentas específicas.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">10. Reembolsos e cancelamentos</h2>
                    <p>As regras de reembolso/cancelamento estão descritas no documento/página de <strong className="text-brand-text">Reembolsos e Cancelamentos</strong>, que integra estes Termos.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">11. Rescisão e suspensão</h2>
                    <p>Podemos suspender ou encerrar seu acesso, com ou sem aviso, em caso de:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>violação destes Termos;</li>
                        <li>uso fraudulento do pagamento;</li>
                        <li>violação de direitos de propriedade intelectual;</li>
                        <li>abuso de sistemas e tentativas de exploração.</li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">12. Comunicações</h2>
                    <p>Podemos enviar comunicações relacionadas à compra, acesso, segurança, alterações relevantes e suporte pelo e-mail informado no cadastro.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">13. Legislação aplicável e foro</h2>
                    <p>Estes Termos são regidos pelas leis brasileiras, incluindo <strong className="text-brand-text">Marco Civil da Internet (Lei 12.965/2014)</strong>, <strong className="text-brand-text">LGPD (Lei 13.709/2018)</strong> e <strong className="text-brand-text">CDC (Lei 8.078/1990)</strong> quando aplicável.</p>
                    <p>Fica eleito o foro do domicílio do consumidor, nos termos do CDC, para dirimir eventuais controvérsias.</p>

                    <div className="pt-8 border-t border-brand-surface2 mt-12 mb-12">
                        <strong className="text-brand-text">Contato:</strong> <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a>
                    </div>
                </div>
            </div>
        </LegalLayout>
    );
};

export default TermosDeUso;
