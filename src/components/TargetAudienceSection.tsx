import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, UserCircle } from 'lucide-react';

const targets = [
    {
        title: "Profissionais de Elite",
        description: "Pra quem precisa substituir esforço manual por processo escalável.",
        icon: <Briefcase className="w-8 h-8 text-brand-neon" />
    },
    {
        title: "Empreendedores Digitais",
        description: "Pra quem quer arquiteturas replicáveis para times executarem com previsibilidade.",
        icon: <Building2 className="w-8 h-8 text-brand-neon" />
    },
    {
        title: "Futuros Especialistas",
        description: "Pra quem está subindo de nível e precisa construir base perfeita de dados + automação.",
        icon: <UserCircle className="w-8 h-8 text-brand-neon" />
    }
];

const TargetAudienceSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark text-brand-text px-4 sm:px-6 lg:px-8 border-t border-brand-surface2 overflow-hidden relative font-body">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-brand-text mb-6"
                    >
                        Para quem enxerga a falha <span className="text-brand-neon">antes do crash</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {targets.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="relative p-8 rounded-sm bg-brand-surface1 border border-brand-surface2 hover:border-brand-neon/50 hover:shadow-[0_0_20px_rgba(42,245,152,0.1)] transition-all duration-300 group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="w-16 h-16 rounded-sm bg-brand-surface2 border border-brand-surface2/50 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#111c18] transition-all duration-300 relative z-10 shadow-inner">
                                {target.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-semibold mb-4 text-brand-text relative z-10">{target.title}</h3>
                            <p className="text-brand-muted leading-relaxed text-base relative z-10 font-body group-hover:text-brand-text transition-colors">
                                {target.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudienceSection;
