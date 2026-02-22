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

                        {/* Talking Doorknob Animation - Dark/Neon Replica */}
                        <div className="relative z-10 flex flex-col items-center mt-6 mb-8 w-full max-w-[220px] h-[300px] justify-center">
                            <motion.svg
                                viewBox="0 0 200 320"
                                className="w-full h-full drop-shadow-[0_0_15px_rgba(42,245,152,0.3)]"
                                initial={{ y: 0 }}
                                animate={{ y: [-2, 2, -2] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <defs>
                                    <linearGradient id="neon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#2AF598" />
                                        <stop offset="50%" stopColor="rgba(42,245,152,0.3)" />
                                        <stop offset="100%" stopColor="#2AF598" />
                                    </linearGradient>

                                    {/* Knob Gradient - Dark Sphere with Neon Edge */}
                                    <radialGradient id="knob-dark-grad" cx="40%" cy="30%" r="60%">
                                        <stop offset="0%" stopColor="rgba(42,245,152,0.4)" />
                                        <stop offset="25%" stopColor="#0B1011" />
                                        <stop offset="100%" stopColor="#050505" />
                                    </radialGradient>

                                    {/* Eyes - Dark Socket */}
                                    <radialGradient id="eye-socket-neon" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="rgba(42,245,152,0.15)" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </radialGradient>

                                    <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#2AF598" floodOpacity="0.5" />
                                    </filter>
                                </defs>

                                {/* --- Base Shape (The Plate) --- */}
                                {/* Main Body */}
                                <path
                                    d="M 30 70 L 40 280 Q 100 310 160 280 L 170 70 Z"
                                    fill="#070A0A"
                                    stroke="url(#neon-grad)"
                                    strokeWidth="2"
                                />

                                {/* Bottom Curve Details */}
                                <path d="M 40 280 Q 100 310 160 280 L 165 290 Q 100 320 35 290 Z" fill="#030505" stroke="#2AF598" strokeWidth="1" />
                                <path d="M 70 282 Q 100 305 130 282 L 132 288 Q 100 315 68 288 Z" fill="#0B1011" stroke="rgba(42,245,152,0.5)" strokeWidth="1" />

                                {/* Plate Edge Highlights */}
                                <path d="M 30 70 L 40 280" fill="none" stroke="#2AF598" strokeWidth="0.5" />
                                <path d="M 170 70 L 160 280" fill="none" stroke="#2AF598" strokeWidth="0.5" />

                                {/* --- Top Crest (The Hair-like ornate top) --- */}
                                {/* Shadow under crest */}
                                <path d="M 20 60 Q 60 75 100 65 Q 140 75 180 60 L 170 75 Q 100 85 30 75 Z" fill="#0B1011" />
                                {/* Crest Main */}
                                <path
                                    d="M 20 40 Q 20 30 35 30 Q 50 30 50 45 Q 75 30 100 45 Q 125 30 150 45 Q 150 30 165 30 Q 180 30 180 40 Q 180 50 170 60 Q 140 45 100 55 Q 60 45 30 60 Q 20 50 20 40 Z"
                                    fill="#0B1011"
                                    stroke="#2AF598"
                                    strokeWidth="1.5"
                                />
                                {/* Crest Highlights */}
                                <path d="M 35 32 Q 50 32 50 45" fill="none" stroke="#2AF598" strokeWidth="1" strokeLinecap="round" />
                                <path d="M 165 32 Q 150 32 150 45" fill="none" stroke="#2AF598" strokeWidth="1" strokeLinecap="round" />
                                <path d="M 55 42 Q 75 28 100 42" fill="none" stroke="#2AF598" strokeWidth="1" strokeLinecap="round" />
                                <path d="M 145 42 Q 125 28 100 42" fill="none" stroke="#2AF598" strokeWidth="1" strokeLinecap="round" />

                                {/* --- Eyebrows & Eyes --- */}
                                {/* Dark shadows around eyes */}
                                <ellipse cx="100" cy="90" rx="45" ry="30" fill="url(#eye-socket-neon)" />

                                {/* Thick Dark Eyebrows */}
                                <path d="M 32 85 Q 50 50 85 70 Q 95 80 100 95 Q 105 80 115 70 Q 150 50 168 85 Q 150 75 115 90 Q 105 100 100 115 Q 95 100 85 90 Q 50 75 32 85 Z" fill="#050505" stroke="#2AF598" strokeWidth="1" />

                                {/* The Eyes - Sclera */}
                                <ellipse cx="75" cy="85" rx="15" ry="24" fill="#070A0A" stroke="#2AF598" strokeWidth="1.5" filter="url(#neon-glow)" />
                                <ellipse cx="125" cy="85" rx="15" ry="24" fill="#070A0A" stroke="#2AF598" strokeWidth="1.5" filter="url(#neon-glow)" />

                                {/* The Pupils */}
                                <ellipse cx="80" cy="90" rx="6" ry="10" fill="#2AF598" />
                                <ellipse cx="120" cy="90" rx="6" ry="10" fill="#2AF598" />
                                {/* Pupil Highlights */}
                                <circle cx="78" cy="86" r="2" fill="#070A0A" />
                                <circle cx="118" cy="86" r="2" fill="#070A0A" />

                                {/* --- Details on the Plate --- */}
                                {/* Wrinkles/Cracks */}
                                <path d="M 162 100 Q 150 110 145 125" fill="none" stroke="rgba(42,245,152,0.6)" strokeWidth="1" strokeLinecap="round" />
                                <path d="M 145 125 Q 155 135 165 145" fill="none" stroke="rgba(42,245,152,0.6)" strokeWidth="1" strokeLinecap="round" />
                                <path d="M 165 145 Q 160 160 155 170" fill="none" stroke="rgba(42,245,152,0.6)" strokeWidth="1" strokeLinecap="round" />

                                {/* --- Mouth Cavity & Lips --- */}
                                {/* Animated Lips - Matrix Style */}
                                <motion.path
                                    fill="#000000"
                                    stroke="#2AF598"
                                    strokeWidth="2.5"
                                    filter="url(#neon-glow)"
                                    animate={{
                                        d: [
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z",
                                            "M 60 170 Q 100 240 140 170 Q 140 230 100 250 Q 60 230 60 170 Z",
                                            "M 60 170 Q 100 210 140 170 Q 140 200 100 215 Q 60 200 60 170 Z",
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z",
                                            "M 60 170 Q 100 235 140 170 Q 130 220 100 240 Q 70 220 60 170 Z",
                                            "M 60 170 Q 100 215 140 170 Q 140 205 100 225 Q 60 205 60 170 Z",
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z",
                                            "M 60 170 Q 100 225 140 170 Q 130 210 100 230 Q 70 210 60 170 Z",
                                            "M 60 170 Q 100 230 140 170 Q 140 220 100 245 Q 60 220 60 170 Z",
                                            "M 60 170 Q 100 220 140 170 Q 130 205 100 225 Q 70 205 60 170 Z",
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z",
                                            "M 60 170 Q 100 235 140 170 Q 130 220 100 240 Q 70 220 60 170 Z",
                                            "M 60 170 Q 100 230 140 170 Q 140 220 100 245 Q 60 220 60 170 Z",
                                            "M 60 170 Q 100 215 140 170 Q 140 205 100 225 Q 60 205 60 170 Z",
                                            "M 60 170 Q 100 235 140 170 Q 130 220 100 240 Q 70 220 60 170 Z",
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z",
                                            "M 60 170 Q 100 225 140 170 Q 130 210 100 230 Q 70 210 60 170 Z",
                                            "M 60 170 Q 100 235 140 170 Q 130 220 100 240 Q 70 220 60 170 Z",
                                            "M 60 170 Q 100 215 140 170 Q 140 205 100 225 Q 60 205 60 170 Z",
                                            "M 60 170 Q 100 240 140 170 Q 140 230 100 250 Q 60 230 60 170 Z",
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z"
                                        ]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* --- The Big Knob (The Nose) --- */}
                                {/* Shadow of the Knob on the face */}
                                <ellipse cx="100" cy="170" rx="42" ry="25" fill="#000" opacity="0.8" filter="blur(4px)" />

                                {/* The Sphere Base */}
                                <circle cx="100" cy="135" r="45" fill="url(#knob-dark-grad)" stroke="#2AF598" strokeWidth="1.5" />
                                {/* Bright Spherical Highlight */}
                                <ellipse cx="85" cy="115" rx="15" ry="8" fill="rgba(42,245,152,0.4)" filter="blur(2px)" transform="rotate(-30 85 115)" />
                                {/* Shaft connection */}
                                <path d="M 85 170 Q 100 185 115 170 L 110 160 L 90 160 Z" fill="#050505" stroke="#2AF598" strokeWidth="1" opacity="0.8" />


                                {/* --- The Screws --- */}
                                {/* Left Screw */}
                                <g transform="translate(60, 250)">
                                    <circle cx="0" cy="0" r="10" fill="#0B1011" stroke="#2AF598" strokeWidth="1.5" />
                                    <circle cx="0" cy="0" r="8" fill="none" stroke="rgba(42,245,152,0.4)" strokeWidth="0.5" />
                                    {/* Screw Slot */}
                                    <path d="M -7 -4 L 7 4 L 6 6 L -8 -2 Z" fill="#050505" />
                                    <path d="M -6 -5 L 8 3" stroke="#2AF598" strokeWidth="0.5" />
                                </g>

                                {/* Right Screw */}
                                <g transform="translate(140, 250)">
                                    <circle cx="0" cy="0" r="10" fill="#0B1011" stroke="#2AF598" strokeWidth="1.5" />
                                    <circle cx="0" cy="0" r="8" fill="none" stroke="rgba(42,245,152,0.4)" strokeWidth="0.5" />
                                    {/* Screw Slot */}
                                    <path d="M -5 7 L 5 -7 L 7 -6 L -3 8 Z" fill="#050505" />
                                    <path d="M -6 6 L 4 -8" stroke="#2AF598" strokeWidth="0.5" />
                                </g>

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
