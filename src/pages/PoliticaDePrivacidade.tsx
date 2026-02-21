import React, { useEffect } from 'react';
import LegalLayout from '../components/LegalLayout';

const PoliticaDePrivacidade: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout>
            <div className="space-y-8 text-brand-muted leading-relaxed">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-brand-text mb-4 tracking-tight">Política de Privacidade</h1>
                    <p className="font-mono text-sm text-brand-neon">Última atualização: 21/02/2026</p>
                </div>

                <div className="space-y-6">
                    <p>
                        A <strong className="text-brand-text">Matheus Sampaio Soier Ltda</strong> (“nós”) respeita sua privacidade e trata dados pessoais conforme a <strong className="text-brand-text">Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)</strong> e o <strong className="text-brand-text">Marco Civil da Internet (Lei 12.965/2014)</strong>.
                    </p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">1. Quem somos (Controlador)</h2>
                    <ul className="space-y-2 list-none">
                        <li><strong className="text-brand-text">Controlador:</strong> Matheus Sampaio Soier Ltda</li>
                        <li><strong className="text-brand-text">CNPJ:</strong> 60.844.823/0001-25</li>
                        <li><strong className="text-brand-text">Endereço:</strong> Avenida Paulista, 726, Conj. 1202 — Bela Vista — São Paulo/SP — CEP 01310-910</li>
                        <li><strong className="text-brand-text">E-mail (Privacidade e Suporte):</strong> <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a></li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">2. Quais dados coletamos</h2>
                    <p>Podemos coletar:</p>

                    <h3 className="text-xl font-heading font-medium text-brand-text mt-4">a) Dados fornecidos por você</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Nome</li>
                        <li>E-mail e/ou WhatsApp</li>
                        <li>Informações de cadastro necessárias para acesso ao Produto</li>
                        <li>Conteúdo de mensagens enviadas ao suporte</li>
                    </ul>

                    <h3 className="text-xl font-heading font-medium text-brand-text mt-4">b) Dados de pagamento</h3>
                    <p>O pagamento é processado por plataformas de checkout/antifraude/PSPs (terceiros). Em geral, <strong className="text-brand-text">não armazenamos dados completos de cartão</strong>. Podemos receber do provedor informações como status da compra, identificadores de transação e histórico de cobrança.</p>

                    <h3 className="text-xl font-heading font-medium text-brand-text mt-4">c) Dados de navegação e uso</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>IP, data/hora, dispositivo, navegador, páginas acessadas</li>
                        <li>Logs de acesso e ações na plataforma</li>
                        <li>Identificadores e parâmetros de campanha: <strong className="text-brand-text">UTM (utm_source, utm_medium, utm_campaign, utm_content, utm_term)</strong>, além de identificadores como <strong className="text-brand-text">gclid/fbclid</strong> quando presentes</li>
                        <li>Dados de performance e comportamento agregados (por exemplo, eventos e conversões)</li>
                    </ul>

                    <h3 className="text-xl font-heading font-medium text-brand-text mt-4">d) Cookies e tecnologias similares</h3>
                    <p>Usamos cookies/SDKs/pixels para funcionamento, análise e marketing conforme descrito na <strong className="text-brand-text">Política de Cookies</strong>.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">3. Para que usamos seus dados (finalidades)</h2>
                    <p>Tratamos dados pessoais para:</p>
                    <ol className="list-decimal pl-6 space-y-1">
                        <li><strong className="text-brand-text">Entregar o Produto</strong> (criar conta, liberar acesso, autenticar, gerenciar assinatura e período de acesso)</li>
                        <li><strong className="text-brand-text">Suporte e atendimento</strong> (responder dúvidas, resolver incidentes)</li>
                        <li><strong className="text-brand-text">Segurança e prevenção a fraudes</strong> (controle de acesso, auditoria, bloqueio de abuso)</li>
                        <li><strong className="text-brand-text">Melhoria e análise</strong> (entender uso, corrigir erros, melhorar a experiência)</li>
                        <li><strong className="text-brand-text">Marketing e comunicação</strong> (envio de avisos e conteúdos relacionados ao Produto, quando permitido)</li>
                        <li><strong className="text-brand-text">Cumprimento de obrigações legais/regulatórias</strong> e exercício regular de direitos</li>
                    </ol>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">4. Bases legais (LGPD)</h2>
                    <p>Dependendo do caso, o tratamento pode se basear em:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong className="text-brand-text">Execução de contrato</strong> (fornecer acesso ao Produto)</li>
                        <li><strong className="text-brand-text">Cumprimento de obrigação legal/regulatória</strong></li>
                        <li><strong className="text-brand-text">Legítimo interesse</strong> (segurança, prevenção a fraudes, melhoria do serviço), com avaliação de impacto quando aplicável</li>
                        <li><strong className="text-brand-text">Consentimento</strong> (especialmente para cookies de marketing e comunicações promocionais, quando exigido)</li>
                    </ul>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">5. Compartilhamento com terceiros (operadores)</h2>
                    <p>Podemos compartilhar dados com fornecedores essenciais, como:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>plataforma de hospedagem e infraestrutura</li>
                        <li>plataforma de checkout/pagamento/antifraude</li>
                        <li>ferramentas de e-mail e atendimento</li>
                        <li>ferramentas de analytics e mensuração</li>
                        <li>ferramentas de marketing (pixels/SDKs) quando habilitadas e consentidas</li>
                    </ul>
                    <p>Esses terceiros atuam como <strong className="text-brand-text">operadores</strong> (quando processam dados em nosso nome) ou <strong className="text-brand-text">controladores independentes</strong> (quando definem seus próprios meios e finalidades). Buscamos contratar fornecedores que adotem medidas de segurança compatíveis.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">6. Transferência internacional</h2>
                    <p>Alguns fornecedores podem armazenar/processar dados fora do Brasil. Nesses casos, buscamos bases legais e salvaguardas adequadas conforme LGPD.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">7. Retenção e prazo de armazenamento</h2>
                    <p>Mantemos dados:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>durante o <strong className="text-brand-text">Período de Acesso</strong> e/ou enquanto necessário para entregar o serviço</li>
                        <li>pelo período exigido por lei, por segurança, auditoria e defesa em eventuais processos</li>
                    </ul>
                    <p>Após esse período, podemos eliminar ou anonimizar dados, quando possível.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">8. Segurança</h2>
                    <p>Adotamos medidas técnicas e organizacionais para proteger dados, como controles de acesso, logs, criptografia quando aplicável e boas práticas de segurança.</p>
                    <p>Ainda assim, nenhum sistema é 100% inviolável.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">9. Seus direitos (LGPD)</h2>
                    <p>Você pode solicitar:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>confirmação e acesso</li>
                        <li>correção</li>
                        <li>anonimização, bloqueio ou eliminação (quando aplicável)</li>
                        <li>portabilidade (quando aplicável)</li>
                        <li>informação sobre compartilhamento</li>
                        <li>revogação de consentimento (quando aplicável)</li>
                        <li>revisão de decisões automatizadas (quando aplicável)</li>
                    </ul>
                    <p>Para exercer direitos: <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors font-medium">ownersoier@gmail.com</a>. Podemos solicitar validação de identidade para sua segurança.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">10. Crianças e adolescentes</h2>
                    <p>O Produto é destinado ao público geral com capacidade para contratar. Se houver tratamento de dados de menores, será observado o disposto na LGPD e normas aplicáveis.</p>

                    <h2 className="text-2xl font-heading font-semibold text-brand-text mt-8 border-b border-brand-surface2 pb-2">11. Alterações nesta Política</h2>
                    <p>Podemos atualizar esta Política para refletir mudanças legais, técnicas ou operacionais. A versão vigente ficará disponível na página.</p>

                    <div className="pt-8 border-t border-brand-surface2 mt-12 mb-12">
                        <strong className="text-brand-text">Contato (Privacidade e Suporte):</strong> <a href="mailto:ownersoier@gmail.com" className="text-brand-neon hover:text-brand-cyan transition-colors">ownersoier@gmail.com</a>
                    </div>
                </div>
            </div>
        </LegalLayout>
    );
};

export default PoliticaDePrivacidade;
