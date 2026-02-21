import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const problems = [
    "Tracking quebrado → dados fantasmas e decisões erradas",
    "Operação manual → muito esforço, pouco avanço",
    "Sem visão de jornada → você perde pessoas no escuro",
    "Integrações frágeis → cada ajuste vira dor de cabeça"
];

const ProblemSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark text-brand-text px-4 sm:px-6 lg:px-8 border-t border-brand-surface2 font-body relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(rgba(255,92,124,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,92,124,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center justify-center md:justify-start gap-2 mb-6 px-3 py-1 rounded-sm bg-brand-surface1 border border-brand-warning/30 text-brand-warning text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(255,92,124,0.1)]"
                    >
                        <AlertTriangle className="w-4 h-4" />
                        Diagnóstico
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-brand-text flex flex-wrap justify-center md:justify-start gap-x-3 items-center"
                    >
                        <span>Sua operação está</span>
                        <motion.span
                            animate={{
                                x: [0, -2, 3, -1, 2, 0],
                                y: [0, 1, -2, 2, -1, 0],
                                skewX: [0, -5, 5, -2, 0],
                                filter: [
                                    "drop-shadow(0 0 0px rgba(255,92,124,0))",
                                    "drop-shadow(2px 0 5px rgba(255,92,124,0.8))",
                                    "drop-shadow(-2px 0 5px rgba(63,212,255,0.8))",
                                    "drop-shadow(0 0 0px rgba(255,92,124,0))"
                                ]
                            }}
                            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-brand-warning to-red-400 inline-block relative"
                        >
                            fragmentada?
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="text-lg text-brand-muted mt-6 max-w-2xl mx-auto md:mx-0 font-body"
                    >
                        O mundo acelerou. Quem continua no modo manual vira gargalo do próprio resultado.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="relative flex flex-col justify-center overflow-hidden rounded-sm border border-brand-surface2 bg-brand-surface1 p-8 shadow-sm transition-all duration-300 hover:border-brand-warning/50 hover:shadow-[0_0_15px_rgba(255,92,124,0.1)] group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10 flex items-start gap-4">
                                <span className="text-brand-warning font-mono font-bold text-lg leading-none mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                    [{String(index + 1).padStart(2, '0')}]
                                </span>
                                <p className="text-brand-text text-base leading-relaxed font-body group-hover:text-white transition-colors">
                                    {problem}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProblemSection;
