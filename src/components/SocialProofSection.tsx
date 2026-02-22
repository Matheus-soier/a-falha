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

                        {/* Talking Doorknob Animation - Faithful Replica */}
                        <div className="relative z-10 flex flex-col items-center mt-6 mb-8 w-full max-w-[220px] h-[300px] justify-center">
                            <motion.svg
                                viewBox="0 0 200 320"
                                className="w-full h-full drop-shadow-2xl"
                                initial={{ y: 0 }}
                                animate={{ y: [-2, 2, -2] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <defs>
                                    {/* Main Body Gradient - Golden/Orangeish Brass */}
                                    <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#D98A44" />
                                        <stop offset="15%" stopColor="#EAA560" />
                                        <stop offset="50%" stopColor="#F5B26B" />
                                        <stop offset="85%" stopColor="#DE8E48" />
                                        <stop offset="100%" stopColor="#C87A36" />
                                    </linearGradient>

                                    {/* Top Crest Gradient - Brighter Gold */}
                                    <linearGradient id="crest-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#F9C379" />
                                        <stop offset="50%" stopColor="#E29F52" />
                                        <stop offset="100%" stopColor="#CD883C" />
                                    </linearGradient>

                                    {/* Knob Gradient - Spherical Gold */}
                                    <radialGradient id="knob-grad" cx="40%" cy="30%" r="60%">
                                        <stop offset="0%" stopColor="#FFE082" />
                                        <stop offset="25%" stopColor="#F4D03F" />
                                        <stop offset="70%" stopColor="#D4AC0D" />
                                        <stop offset="90%" stopColor="#9A7D0A" />
                                        <stop offset="100%" stopColor="#7D6608" />
                                    </radialGradient>

                                    {/* Eye Socket Shadow */}
                                    <radialGradient id="eye-shadow" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#1A1A1A" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </radialGradient>

                                    {/* Eye Yellow Gradient */}
                                    <linearGradient id="eye-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#FCEFC2" />
                                        <stop offset="50%" stopColor="#FAD759" />
                                        <stop offset="100%" stopColor="#E1B31B" />
                                    </linearGradient>

                                    {/* Lower Lip Gradient */}
                                    <linearGradient id="lip-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#E7A85B" />
                                        <stop offset="50%" stopColor="#F9BE74" />
                                        <stop offset="100%" stopColor="#C47D3A" />
                                    </linearGradient>

                                    {/* Screw Gradient */}
                                    <linearGradient id="screw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#F8C77F" />
                                        <stop offset="50%" stopColor="#DB9C48" />
                                        <stop offset="100%" stopColor="#B37830" />
                                    </linearGradient>

                                    {/* Shadows */}
                                    <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
                                    </filter>
                                    <filter id="inner-shadow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feOffset dx="0" dy="5" />
                                        <feGaussianBlur stdDeviation="3" result="offset-blur" />
                                        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                                        <feFlood floodColor="black" floodOpacity="0.5" result="color" />
                                        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                                        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                                    </filter>
                                </defs>

                                {/* --- Base Shape (The Plate) --- */}
                                {/* Main Body */}
                                <path
                                    d="M 30 70 L 40 280 Q 100 310 160 280 L 170 70 Z"
                                    fill="url(#body-grad)"
                                    filter="url(#drop-shadow)"
                                />

                                {/* Bottom Curve Details (The 3D bevel at the bottom) */}
                                <path d="M 40 280 Q 100 310 160 280 L 165 290 Q 100 320 35 290 Z" fill="#9C5A20" />
                                <path d="M 70 282 Q 100 305 130 282 L 132 288 Q 100 315 68 288 Z" fill="#E29F52" />

                                {/* Plate Edge Highlights/Shadows */}
                                <path d="M 30 70 L 40 280 L 45 278 L 35 70 Z" fill="rgba(255,255,255,0.4)" />
                                <path d="M 170 70 L 160 280 L 155 278 L 165 70 Z" fill="rgba(0,0,0,0.3)" />

                                {/* --- Top Crest (The Hair-like ornate top) --- */}
                                {/* Shadow under crest */}
                                <path d="M 20 60 Q 60 75 100 65 Q 140 75 180 60 L 170 75 Q 100 85 30 75 Z" fill="#A55F1E" />
                                {/* Crest Main */}
                                <path
                                    d="M 20 40 Q 20 30 35 30 Q 50 30 50 45 Q 75 30 100 45 Q 125 30 150 45 Q 150 30 165 30 Q 180 30 180 40 Q 180 50 170 60 Q 140 45 100 55 Q 60 45 30 60 Q 20 50 20 40 Z"
                                    fill="url(#crest-grad)"
                                    filter="url(#drop-shadow)"
                                />
                                {/* Crest Highlights */}
                                <path d="M 35 32 Q 50 32 50 45" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M 165 32 Q 150 32 150 45" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M 55 42 Q 75 28 100 42" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M 145 42 Q 125 28 100 42" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" />

                                {/* --- Eyebrows & Eyes --- */}
                                {/* Dark shadows around eyes */}
                                <ellipse cx="100" cy="90" rx="45" ry="30" fill="url(#eye-shadow)" opacity="0.6" />

                                {/* Thick Dark Eyebrows */}
                                <path d="M 32 85 Q 50 50 85 70 Q 95 80 100 95 Q 105 80 115 70 Q 150 50 168 85 Q 150 75 115 90 Q 105 100 100 115 Q 95 100 85 90 Q 50 75 32 85 Z" fill="#131720" />

                                {/* The Eyes - Inner Yellow Sclera */}
                                <ellipse cx="75" cy="85" rx="15" ry="24" fill="url(#eye-grad)" stroke="#8C5C26" strokeWidth="1.5" />
                                <ellipse cx="125" cy="85" rx="15" ry="24" fill="url(#eye-grad)" stroke="#8C5C26" strokeWidth="1.5" />

                                {/* The Pupils - Dark Blue/Black */}
                                <ellipse cx="80" cy="90" rx="8" ry="12" fill="#151A22" />
                                <ellipse cx="120" cy="90" rx="8" ry="12" fill="#151A22" />
                                {/* Pupil Highlights */}
                                <circle cx="78" cy="84" r="2.5" fill="#FFFFFF" />
                                <circle cx="118" cy="84" r="2.5" fill="#FFFFFF" />
                                <circle cx="83" cy="93" r="1" fill="#FFFFFF" opacity="0.6" />
                                <circle cx="123" cy="93" r="1" fill="#FFFFFF" opacity="0.6" />

                                {/* --- Details on the Plate --- */}
                                {/* Wrinkles/Cracks */}
                                <path d="M 162 100 Q 150 110 145 125" fill="none" stroke="#A96426" strokeWidth="2" strokeLinecap="round" />
                                <path d="M 145 125 Q 155 135 165 145" fill="none" stroke="#A96426" strokeWidth="2" strokeLinecap="round" />
                                <path d="M 165 145 Q 160 160 155 170" fill="none" stroke="#A96426" strokeWidth="2" strokeLinecap="round" />

                                {/* --- Mouth Cavity & Lips --- */}
                                {/* Dark Background of Mouth Hole */}
                                <path
                                    d="M 60 170 Q 100 240 140 170 Q 140 230 100 250 Q 60 230 60 170 Z"
                                    fill="#131822"
                                    filter="url(#inner-shadow)"
                                />

                                {/* Animated Lips - Matches Sylvia's Voice (Você? Talvez...) */}
                                <motion.path
                                    fill="url(#lip-grad)"
                                    stroke="#5C3615"
                                    strokeWidth="1"
                                    filter="url(#drop-shadow)"
                                    animate={{
                                        d: [
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z", // Closed / Neutral
                                            "M 60 170 Q 100 240 140 170 Q 140 230 100 250 Q 60 230 60 170 Z", // Open Wide ("Vo")
                                            "M 60 170 Q 100 210 140 170 Q 140 200 100 215 Q 60 200 60 170 Z", // Small Open ("cê")
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z", // Closed (pause)
                                            "M 60 170 Q 100 235 140 170 Q 130 220 100 240 Q 70 220 60 170 Z", // Open ("Tal")
                                            "M 60 170 Q 100 215 140 170 Q 140 205 100 225 Q 60 205 60 170 Z", // Medium ("vez")
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z", // Closed (pause)
                                            "M 60 170 Q 100 225 140 170 Q 130 210 100 230 Q 70 210 60 170 Z", // Open ("de")
                                            "M 60 170 Q 100 230 140 170 Q 140 220 100 245 Q 60 220 60 170 Z", // Wide ("pen")
                                            "M 60 170 Q 100 220 140 170 Q 130 205 100 225 Q 70 205 60 170 Z", // Small ("da")
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z", // Closed (pause)
                                            "M 60 170 Q 100 235 140 170 Q 130 220 100 240 Q 70 220 60 170 Z", // Open ("da")
                                            "M 60 170 Q 100 230 140 170 Q 140 220 100 245 Q 60 220 60 170 Z", // Wide ("de")
                                            "M 60 170 Q 100 215 140 170 Q 140 205 100 225 Q 60 205 60 170 Z", // Small ("ci")
                                            "M 60 170 Q 100 235 140 170 Q 130 220 100 240 Q 70 220 60 170 Z", // Open ("são")
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z", // Closed (pause)
                                            "M 60 170 Q 100 225 140 170 Q 130 210 100 230 Q 70 210 60 170 Z", // Open ("que")
                                            "M 60 170 Q 100 235 140 170 Q 130 220 100 240 Q 70 220 60 170 Z", // Wide ("vai")
                                            "M 60 170 Q 100 215 140 170 Q 140 205 100 225 Q 60 205 60 170 Z", // Small ("to")
                                            "M 60 170 Q 100 240 140 170 Q 140 230 100 250 Q 60 230 60 170 Z", // Wide ("mar")
                                            "M 60 170 Q 100 220 140 170 Q 150 200 100 215 Q 50 200 60 170 Z"  // Closed
                                        ]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Deep Throat (Keyhole) inside the mouth */}
                                <path
                                    d="M 90 205 Q 100 190 110 205 L 115 220 C 115 230 85 230 85 220 Z"
                                    fill="#000000"
                                    opacity="0.85"
                                />

                                {/* --- The Big Golden Knob (The Nose) --- */}
                                {/* Shadow of the Knob on the face */}
                                <ellipse cx="100" cy="170" rx="42" ry="25" fill="rgba(0,0,0,0.5)" filter="blur(4px)" />

                                {/* The Sphere Base */}
                                <circle cx="100" cy="135" r="45" fill="url(#knob-grad)" filter="url(#drop-shadow)" />
                                {/* Bright Spherical Highlight */}
                                <ellipse cx="85" cy="115" rx="18" ry="12" fill="rgba(255,255,255,0.7)" filter="blur(2px)" transform="rotate(-30 85 115)" />
                                {/* Secondary Highlight */}
                                <ellipse cx="120" cy="150" rx="20" ry="10" fill="rgba(255,180,0,0.4)" filter="blur(3px)" transform="rotate(30 120 150)" />
                                {/* Shaft connection (underneath knob) */}
                                <path d="M 85 170 Q 100 185 115 170 L 110 160 L 90 160 Z" fill="#7D6608" opacity="0.8" />


                                {/* --- The Screws --- */}
                                {/* Left Screw */}
                                <g transform="translate(60, 250)">
                                    <circle cx="0" cy="0" r="10" fill="url(#screw-grad)" filter="url(#drop-shadow)" />
                                    <circle cx="0" cy="0" r="8" fill="none" stroke="#EDC17B" strokeWidth="0.5" />
                                    {/* Screw Slot */}
                                    <path d="M -7 -4 L 7 4 L 6 6 L -8 -2 Z" fill="#7D4616" />
                                    <path d="M -6 -5 L 8 3" stroke="#FCEFC2" strokeWidth="0.5" />
                                </g>

                                {/* Right Screw */}
                                <g transform="translate(140, 250)">
                                    <circle cx="0" cy="0" r="10" fill="url(#screw-grad)" filter="url(#drop-shadow)" />
                                    <circle cx="0" cy="0" r="8" fill="none" stroke="#EDC17B" strokeWidth="0.5" />
                                    {/* Screw Slot */}
                                    <path d="M -5 7 L 5 -7 L 7 -6 L -3 8 Z" fill="#7D4616" />
                                    <path d="M -6 6 L 4 -8" stroke="#FCEFC2" strokeWidth="0.5" />
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
