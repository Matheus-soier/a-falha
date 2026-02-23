import React from 'react';
import { motion } from 'framer-motion';
import { Database, MousePointerClick, Cpu } from 'lucide-react';

const pillars = [
    {
        number: "01",
        title: "Aquisição & Mensuração",
        description: "Estruture Google Ads + Meta Ads com rastreio que presta: GTM, GA4, Pixels, deduplicação, UTMs e eventos via dataLayer. Pare de operar por sensação.",
        icon: <Database className="w-10 h-10 text-brand-neon" />
    },
    {
        number: "02",
        title: "Assets de Conversão (Lovable, AntiGravity, Cursor, Claude Code)",
        description: "Crie páginas e formulários clonáveis utilizando Lovable, AntiGravity, Cursor e Claude Code: LPs de alta conversão, multi-step, roteamento e base pronta para testes (CRO).",
        icon: <MousePointerClick className="w-10 h-10 text-brand-neon" />
    },
    {
        number: "03",
        title: "IA Ops e Automação",
        description: "Use AppScript, APIs e IA (OpenClaw/Codex) para automatizar rotinas: QA de tracking, auditoria, relatórios e padronização. Menos retrabalho. Mais consistência.",
        icon: <Cpu className="w-10 h-10 text-brand-neon" />
    }
];

const SystemOverviewSection: React.FC = () => {
    return (
        <section className="py-32 bg-brand-dark text-brand-text px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-brand-surface2 font-body">

            {/* Matrix Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(42,245,152,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,245,152,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Timeline line - mathematically perfect center point */}
                <div className="absolute left-1/2 top-40 bottom-20 w-[1px] bg-brand-surface2 hidden lg:block -translate-x-1/2 shadow-[0_0_15px_rgba(42,245,152,0.2)]" />

                <div className="mb-24 text-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className="inline-flex items-center gap-2 border border-brand-neon/30 bg-[#0B1411] px-4 py-1.5 mb-6 text-brand-neon font-mono text-xs tracking-widest uppercase rounded-sm font-semibold shadow-[0_0_10px_rgba(42,245,152,0.1)]">
                        <img src="/logo-a-falha.png" alt="Logo" className="w-4 h-4 object-contain" />
                        A Jornada
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-brand-text mb-6"
                    >
                        Dominar A Falha com <span className="text-brand-neon">engenharia de execução</span>
                    </motion.h2>
                </div>

                <div className="space-y-12 lg:space-y-24 relative z-20">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1, delay: 0.1 }}
                            // Using logical CSS Grid mapping instead of Flex to guarantee 50/50 splits
                            className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center group"
                        >
                            {/* Center Node perfectly tied to 50% left value in Grid context */}
                            <div className="hidden lg:flex w-14 h-14 bg-brand-surface1 border-2 border-brand-surface2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-30 transition-all duration-700 ease-out group-hover:border-brand-neon group-hover:shadow-[0_0_20px_rgba(42,245,152,0.4)] group-hover:bg-[#0B1411]">
                                <div className="w-3 h-3 bg-brand-surface2 rounded-sm transition-all duration-700 ease-out group-hover:bg-brand-neon group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(42,245,152,0.8)]" />
                            </div>

                            {/* Conditional placing for Right vs Left alignment in the Grid */}
                            <div className={`p-8 sm:p-12 bg-brand-surface1 rounded-sm border border-brand-surface2 hover:border-brand-neon/50 transition-all duration-500 w-full relative overflow-hidden group/card shadow-sm hover:shadow-[0_0_30px_rgba(42,245,152,0.1)] ${index % 2 !== 0 ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2 lg:text-left'}`}>

                                <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none" />

                                <div className={`relative z-10 w-16 h-16 bg-brand-surface2 border border-brand-surface2/50 rounded-sm flex items-center justify-center mb-8 shadow-inner group-hover/card:scale-110 group-hover/card:border-brand-neon/40 group-hover/card:bg-[#0B1411] transition-all duration-500 ease-out ${index % 2 !== 0 ? 'ml-auto' : ''}`}>
                                    {pillar.icon}
                                </div>

                                <div className={`relative z-10 flex items-center gap-4 mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                                    <span className="text-sm font-mono font-bold text-brand-neon tracking-widest uppercase">Fase {pillar.number}</span>
                                    <div className="h-px bg-gradient-to-r from-transparent via-brand-surface2 to-transparent flex-1" />
                                </div>

                                <h3 className="relative z-10 text-3xl sm:text-4xl font-heading font-semibold mb-4 text-brand-text tracking-tight">{pillar.title}</h3>
                                <p className="relative z-10 text-brand-muted leading-relaxed text-lg sm:text-lg font-body group-hover/card:text-brand-text transition-colors">{pillar.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SystemOverviewSection;
