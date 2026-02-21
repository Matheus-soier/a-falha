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

                        {/* Coded Silhouette (3D Mirror Animation) */}
                        <motion.div
                            className="relative z-10 flex flex-col items-center mt-10 mb-8"
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="relative w-48 h-60 flex justify-center [perspective:1000px]">
                                {/* SVG Definition for Unified Clip Path */}
                                <svg width="0" height="0" className="absolute">
                                    <defs>
                                        <clipPath id="unified-silhouette">
                                            {/* Matches the 100x100 viewBox of the wrapper, scaled to object bounds via CSS if needed, but here we just map it 1:1 if we use absolute positioning or a proper wrapper */}
                                        </clipPath>
                                    </defs>
                                </svg>

                                <motion.div
                                    className="w-full h-full relative will-change-transform"
                                    animate={{
                                        rotateY: [-12, 12, -12],
                                        rotateX: [2, -2, 2],
                                        y: [-8, 8, -8]
                                    }}
                                    transition={{
                                        rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                                        rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* The Mask Layer using inline SVG clip path for pixel perfection */}
                                    <div className="absolute inset-0 z-10" style={{ clipPath: 'url(#keyhole-mask)' }}>
                                        <svg width="0" height="0" className="absolute">
                                            <defs>
                                                {/* Use exactly the same path, but scaled for a 192x240 container (w-48 h-60). 
                                                    Or better, use clipPathUnits="objectBoundingBox" with perfectly matching math 
                                                    Math for path: 
                                                    Circle Center: 50, 25. Radius: 25. (0.5, 0.25, R=0.25)
                                                    Line to bottom corners: 10,90 and 90,90. 
                                                */}
                                                <clipPath id="keyhole-mask" clipPathUnits="objectBoundingBox">
                                                    <path d="M 0.5 0.1 A 0.25 0.25 0 1 1 0.3 0.25 C 0.3 0.5, 0.2 0.8, 0.1 0.9 L 0.9 0.9 C 0.8 0.8, 0.7 0.5, 0.7 0.25 A 0.25 0.25 0 1 1 0.5 0.1 Z" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1210] to-[#040807]">
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(42,245,152,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(42,245,152,0.1)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

                                            {/* Parallax Rain Layers */}
                                            <motion.div
                                                className="absolute w-full top-0 font-mono text-[9px] leading-[1.3] tracking-widest text-[#1ea367] break-all p-2 text-justify select-none opacity-60"
                                                animate={{ y: [0, -1000] }}
                                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                            >
                                                {'011010000110010101101100011011000110111110010101011010010110111001110100'.repeat(150)}
                                            </motion.div>

                                            <motion.div
                                                className="absolute w-full top-0 font-mono text-[13px] leading-[1.1] text-brand-neon break-all p-2 text-center select-none drop-shadow-[0_0_5px_rgba(42,245,152,0.8)]"
                                                animate={{ y: [0, -1000] }}
                                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                            >
                                                {'01 10 11 00 '.repeat(100)}
                                            </motion.div>

                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Outline Stroke Overlay using same clip logic or matching SVG box */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_12px_rgba(42,245,152,0.5)] z-20" viewBox="0 0 1 1" preserveAspectRatio="none">
                                        <path
                                            d="M 0.5 0.1 A 0.25 0.25 0 1 1 0.3 0.25 C 0.3 0.5, 0.2 0.8, 0.1 0.9 L 0.9 0.9 C 0.8 0.8, 0.7 0.5, 0.7 0.25 A 0.25 0.25 0 1 1 0.5 0.1 Z"
                                            fill="none"
                                            stroke="url(#glitch-gradient-outer)"
                                            strokeWidth="0.015"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        <defs>
                                            <linearGradient id="glitch-gradient-outer" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#2AF598" />
                                                <stop offset="50%" stopColor="rgba(42,245,152,0.2)" />
                                                <stop offset="100%" stopColor="#2AF598" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Secondary inner glow line for 3D bevel effect */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 mix-blend-screen" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ transform: 'scale(0.95)' }}>
                                        <path
                                            d="M 50 10 C 70 10, 75 30, 70 45 C 67 51, 60 54, 58 56 C 75 60, 85 80, 90 100 L 10 100 C 15 80, 25 60, 42 56 C 40 54, 33 51, 30 45 C 25 30, 30 10, 50 10 Z"
                                            fill="none"
                                            stroke="#2AF598"
                                            strokeWidth="0.5"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>

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
