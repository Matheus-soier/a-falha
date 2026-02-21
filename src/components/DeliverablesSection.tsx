import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const deliverables = [
    "Blueprint do funil (Lead → Contato → Qualificado → Agenda → Show → Venda)",
    "Padrão de naming + UTMs + documentação dataLayer (GTM/GA4)",
    "Framework replicável de aquisição (Search/Display) + rotina de otimização",
    "Engines de conversão: LPs, formulários multi-step e tracking base pré-configurados",
    "Cockpit de dados (dash) + pipelines práticos de reporting diário",
    "Módulos de automação (Webhooks/APIs) + AI Ops com OpenClaw/Codex para auditoria"
];

const DeliverablesSection: React.FC = () => {
    return (
        <section id="deliverables" className="py-24 bg-brand-dark text-brand-text px-4 sm:px-6 lg:px-8 border-t border-brand-surface2 relative font-body overflow-hidden">
            {/* Ambient Matrix Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-neon/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6"
                    >
                        Seu <span className="font-mono text-brand-neon font-normal tracking-wide">&lt;Kernel/&gt;</span> pronto para uso
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Deliverables List */}
                    <div className="lg:col-span-3 space-y-4">
                        {deliverables.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                className="flex items-start gap-4 p-5 bg-brand-surface1 border border-brand-surface2 rounded-sm hover:border-brand-neon/30 hover:bg-[#0B1411] hover:shadow-[0_0_15px_rgba(42,245,152,0.05)] transition-all group"
                            >
                                <div className="p-1.5 rounded-sm bg-brand-surface2 border border-brand-surface2/50 group-hover:bg-brand-neon/10 group-hover:border-brand-neon/20 transition-colors mt-0.5 shadow-inner">
                                    <Check className="w-4 h-4 text-brand-neon" />
                                </div>
                                <span className="text-brand-muted leading-relaxed text-sm lg:text-base font-body group-hover:text-brand-text transition-colors">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bonus Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="lg:col-span-2 relative p-8 bg-brand-surface1 border border-brand-surface2 rounded-sm flex flex-col justify-center overflow-hidden group hover:border-brand-neon/50 hover:shadow-[0_0_30px_rgba(42,245,152,0.1)] transition-all"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,245,152,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(42,245,152,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10 text-center space-y-6">
                            <div className="w-16 h-16 mx-auto bg-brand-surface2 rounded-sm flex items-center justify-center border border-brand-surface2/50 shadow-inner group-hover:scale-110 group-hover:bg-[#0B1411] transition-transform duration-500">
                                <Zap className="w-8 h-8 text-brand-neon" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold tracking-tight text-brand-text">
                                Protocolo de Atualização
                            </h3>
                            <div className="w-12 h-1 bg-brand-neon mx-auto rounded-full shadow-[0_0_10px_rgba(42,245,152,0.5)]" />
                            <p className="text-brand-muted text-sm leading-relaxed font-body">
                                Acesso a <strong className="text-brand-neon font-normal">patches futuros</strong> do modelo operativo e novos módulos de IA conforme a pilha evolui.
                            </p>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DeliverablesSection;
