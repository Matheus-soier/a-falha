import React from 'react';
import { motion } from 'framer-motion';

const SocialProofSection: React.FC = () => {
    return (
        <section className="py-24 bg-brand-dark text-brand-text px-4 sm:px-6 lg:px-8 border-t border-brand-surface2 font-body relative overflow-hidden">
            {/* Ambient Background Matrix Dots */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(42,245,152,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="inline-flex items-center justify-center gap-2 mb-6 px-3 py-1 rounded-sm bg-brand-surface1 border border-brand-neon/30 text-brand-neon text-xs font-mono font-semibold tracking-widest uppercase shadow-[0_0_10px_rgba(42,245,152,0.1)]"
                >
                    &gt;_ Validação em Produção
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-4xl md:text-5xl font-heading font-bold mb-16 tracking-tight text-brand-text"
                >
                    Usuários que já instalaram o <span className="text-brand-neon">Kernel</span>
                </motion.h2>

                <div className="flex justify-center w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="w-full max-w-2xl bg-brand-surface1 rounded-sm border border-brand-surface2 hover:border-brand-neon/50 flex flex-col items-center justify-center p-12 overflow-hidden relative group transition-all duration-500 shadow-sm hover:shadow-[0_0_30px_rgba(42,245,152,0.15)] mt-10"
                    >
                        {/* Immersive background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="absolute top-6 left-6 text-xs text-brand-neon font-mono opacity-60 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                            [USER_IDENTIFICATION_PENDING]
                        </div>

                        {/* Matrix Hands Animation (From User Image) */}
                        <div className="relative z-10 w-full max-w-[800px] h-[350px] md:h-[450px] mt-6 mb-8 mx-auto flex justify-center items-center">
                            <motion.div
                                className="w-full h-full relative"
                                animate={{ y: [-15, 10, -15] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img
                                    src="/matrix-hands.png"
                                    alt="Matrix Hands Blue/Red Pill"
                                    className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(42,245,152,0.3)]"
                                />
                            </motion.div>
                        </div>

                        {/* Text */}
                        <motion.p
                            className="relative z-10 text-xl md:text-2xl font-mono text-brand-text max-w-lg text-center leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            "Você? talvez depende da decisão que vai tomar..."
                        </motion.p>

                        {/* Cursor blink effect */}
                        <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-4 h-6 bg-brand-neon mt-4 relative z-10"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
