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

                        {/* Matrix Hands Animation */}
                        <div className="relative z-10 flex flex-col items-center mt-6 mb-8 w-full max-w-[400px] h-[250px] justify-center">
                            <svg
                                viewBox="0 0 400 300"
                                className="w-full h-full drop-shadow-[0_0_15px_rgba(42,245,152,0.2)]"
                            >
                                <defs>
                                    <linearGradient id="blue-pill-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#4A90E2" />
                                        <stop offset="50%" stopColor="#0066FF" />
                                        <stop offset="100%" stopColor="#003399" />
                                    </linearGradient>
                                    <linearGradient id="red-pill-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#FF6B6B" />
                                        <stop offset="50%" stopColor="#E60000" />
                                        <stop offset="100%" stopColor="#990000" />
                                    </linearGradient>
                                    <filter id="neon-glow-hand" x="-20%" y="-20%" width="140%" height="140%">
                                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#2AF598" floodOpacity="0.4" />
                                    </filter>
                                    <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                                        <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#0066FF" floodOpacity="0.9" />
                                    </filter>
                                    <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                                        <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#E60000" floodOpacity="0.9" />
                                    </filter>
                                </defs>

                                {/* LEFT HAND (BLUE PILL) */}
                                <motion.g animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                                    {/* Hand Silhouette */}
                                    <path d="M 0 200 C 20 195, 35 170, 40 150 C 45 100, 70 70, 95 80 C 105 85, 105 110, 95 130 C 120 90, 160 90, 160 115 C 160 130, 140 140, 125 140 C 160 130, 185 135, 185 160 C 185 175, 155 175, 140 170 C 165 170, 180 185, 170 205 C 160 220, 140 210, 130 200 C 150 210, 150 240, 135 250 C 115 260, 95 240, 80 250 C 70 255, 60 265, 50 270 C 30 280, 15 285, 0 280 Z" fill="#050808" stroke="#2AF598" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-glow-hand)" />
                                    {/* Inner Creases */}
                                    <path d="M 40 150 C 60 160, 65 190, 50 230" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M 95 130 C 105 160, 95 190, 80 210" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M 75 160 C 85 175, 80 195, 65 210" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M 125 140 C 115 150, 110 160, 105 165" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M 140 170 C 125 180, 115 185, 105 185" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M 130 200 C 115 205, 105 210, 95 205" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />

                                    {/* Blue Pill */}
                                    <g transform="translate(85, 160) rotate(15)">
                                        <ellipse cx="0" cy="0" rx="30" ry="16" fill="url(#blue-pill-grad)" stroke="#1a8cff" strokeWidth="1.5" filter="url(#glow-blue)" />
                                        <ellipse cx="-12" cy="-6" rx="10" ry="4" fill="#ffffff" opacity="0.6" transform="rotate(-15)" />
                                        <path d="M -30 0 L 30 0" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
                                    </g>
                                </motion.g>

                                {/* RIGHT HAND (RED PILL) */}
                                <motion.g animate={{ y: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                                    <g transform="translate(400, 0) scale(-1, 1)">
                                        {/* Hand Silhouette */}
                                        <path d="M 0 200 C 20 195, 35 170, 40 150 C 45 100, 70 70, 95 80 C 105 85, 105 110, 95 130 C 120 90, 160 90, 160 115 C 160 130, 140 140, 125 140 C 160 130, 185 135, 185 160 C 185 175, 155 175, 140 170 C 165 170, 180 185, 170 205 C 160 220, 140 210, 130 200 C 150 210, 150 240, 135 250 C 115 260, 95 240, 80 250 C 70 255, 60 265, 50 270 C 30 280, 15 285, 0 280 Z" fill="#050808" stroke="#2AF598" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-glow-hand)" />
                                        {/* Inner Creases */}
                                        <path d="M 40 150 C 60 160, 65 190, 50 230" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M 95 130 C 105 160, 95 190, 80 210" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M 75 160 C 85 175, 80 195, 65 210" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M 125 140 C 115 150, 110 160, 105 165" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M 140 170 C 125 180, 115 185, 105 185" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M 130 200 C 115 205, 105 210, 95 205" fill="none" stroke="#2AF598" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>

                                    {/* Red Pill */}
                                    <g transform="translate(315, 160) rotate(-15)">
                                        <ellipse cx="0" cy="0" rx="30" ry="16" fill="url(#red-pill-grad)" stroke="#ff4b4b" strokeWidth="1.5" filter="url(#glow-red)" />
                                        <ellipse cx="-12" cy="-6" rx="10" ry="4" fill="#ffffff" opacity="0.6" transform="rotate(-15)" />
                                        <path d="M -30 0 L 30 0" stroke="rgba(0,0,0,0.4)" strokeWidth="2" />
                                    </g>
                                </motion.g>
                            </svg>
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
