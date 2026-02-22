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

                        {/* Talking Doorknob Animation */}
                        <div className="relative z-10 flex flex-col items-center mt-10 mb-8 w-full max-w-[200px] h-64 justify-center">
                            <motion.svg
                                viewBox="0 0 120 180"
                                className="w-full h-full drop-shadow-[0_0_15px_rgba(42,245,152,0.3)]"
                                initial={{ y: 0 }}
                                animate={{ y: [-3, 3, -3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* Backplate: Gold/Brass with dark aesthetic */}
                                <path
                                    d="M 20 20 Q 60 -10 100 20 L 105 160 Q 60 190 15 160 Z"
                                    fill="#111718"
                                    stroke="url(#brass-grad)"
                                    strokeWidth="3"
                                />

                                {/* Eyebrows */}
                                <path d="M 35 45 Q 45 35 55 45" fill="none" stroke="#2AF598" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M 85 45 Q 75 35 65 45" fill="none" stroke="#2AF598" strokeWidth="2.5" strokeLinecap="round" />

                                {/* Eyes */}
                                <ellipse cx="45" cy="55" rx="5" ry="8" fill="#111718" stroke="#2AF598" strokeWidth="1.5" />
                                <ellipse cx="75" cy="55" rx="5" ry="8" fill="#111718" stroke="#2AF598" strokeWidth="1.5" />
                                {/* Pupils */}
                                <circle cx="45" cy="57" r="2.5" fill="#2AF598" />
                                <circle cx="75" cy="57" r="2.5" fill="#2AF598" />

                                {/* Mouth Hole - Animates up and down */}
                                <motion.path
                                    d="M 40 120 C 40 120, 60 120, 80 120 C 75 160, 45 160, 40 120 Z"
                                    fill="#050505"
                                    stroke="#2AF598"
                                    strokeWidth="1.5"
                                    animate={{
                                        d: [
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 125, 45 125, 40 120 Z", // Closed
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 145, 45 145, 40 120 Z", // "Vo"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 130, 45 130, 40 120 Z", // "ce?"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 125, 45 125, 40 120 Z", // Pause
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 135, 45 135, 40 120 Z", // "Tal"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 140, 45 140, 40 120 Z", // "vez"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 125, 45 125, 40 120 Z", // Pause
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 135, 45 135, 40 120 Z", // "de"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 145, 45 145, 40 120 Z", // "pen"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 135, 45 135, 40 120 Z", // "de"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 125, 45 125, 40 120 Z", // Pause
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 140, 45 140, 40 120 Z", // "da de"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 150, 45 150, 40 120 Z", // "ci"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 130, 45 130, 40 120 Z", // "são"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 125, 45 125, 40 120 Z", // Pause
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 135, 45 135, 40 120 Z", // "que"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 140, 45 140, 40 120 Z", // "vai"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 155, 45 155, 40 120 Z", // "to"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 130, 45 130, 40 120 Z", // "mar"
                                            "M 40 120 C 40 120, 60 120, 80 120 C 75 125, 45 125, 40 120 Z"  // Closed
                                        ]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 1],
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Nose / Door Knob (3D look) */}
                                <circle cx="60" cy="85" r="30" fill="url(#knob-grad)" stroke="#111718" strokeWidth="2" />
                                <ellipse cx="50" cy="75" rx="10" ry="8" fill="rgba(255,255,255,0.15)" transform="rotate(-30 50 75)" />

                                {/* Screws */}
                                <circle cx="35" cy="140" r="4" fill="#111718" stroke="#2AF598" strokeWidth="1" />
                                <line x1="32" y1="140" x2="38" y2="140" stroke="#2AF598" strokeWidth="1" transform="rotate(45 35 140)" />

                                <circle cx="85" cy="140" r="4" fill="#111718" stroke="#2AF598" strokeWidth="1" />
                                <line x1="82" y1="140" x2="88" y2="140" stroke="#2AF598" strokeWidth="1" transform="rotate(-30 85 140)" />

                                <defs>
                                    <linearGradient id="brass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#2AF598" />
                                        <stop offset="50%" stopColor="#0B1011" />
                                        <stop offset="100%" stopColor="#2AF598" />
                                    </linearGradient>
                                    <radialGradient id="knob-grad" cx="40%" cy="30%" r="60%">
                                        <stop offset="0%" stopColor="#2AF598" />
                                        <stop offset="70%" stopColor="#0B1011" />
                                        <stop offset="100%" stopColor="#050505" />
                                    </radialGradient>
                                </defs>
                            </motion.svg>
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
