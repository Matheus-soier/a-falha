import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlitchText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="relative inline-block"
        >
            <span className="relative z-10">{text}</span>
            <motion.span
                animate={{
                    x: [-2, 2, -1, 3, -2],
                    opacity: [0, 0.7, 0, 0.5, 0],
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute top-0 left-0 -z-10 text-brand-neon opacity-70"
                style={{ clipPath: 'inset(10% 0 30% 0)' }}
            >
                {text}
            </motion.span>
            <motion.span
                animate={{
                    x: [2, -2, 3, -1, 2],
                    opacity: [0, 0.5, 0, 0.7, 0],
                }}
                transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute top-0 left-0 -z-10 text-brand-cyan opacity-70"
                style={{ clipPath: 'inset(40% 0 10% 0)' }}
            >
                {text}
            </motion.span>
        </motion.div>
    );
};

const AccessGranted: React.FC = () => {
    const [line, setLine] = useState(0);

    const lines = [
        "DECISÃO DETECTADA...",
        "ANALISANDO VONTADE...",
        "VONTADE IDENTIFICADA: ANTIFRÁGIL.",
        "VOCÊ TOMOU A DECISÃO CERTA.",
        "NÃO HÁ VOLTA PARA O SISTEMA ANTIGO.",
        "EM BREVE, VOCÊ SERÁ ADICIONADO AO GRUPO.",
        "AGUARDE O COMANDO DO @root.",
        "ELE É O MESTRE.",
        "O CONVITE CHEGARÁ NO MOMENTO EXATO."
    ];

    useEffect(() => {
        if (line < lines.length) {
            const timer = setTimeout(() => {
                setLine(prev => prev + 1);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [line, lines.length]);

    return (
        <div className="min-h-screen bg-black text-brand-neon font-mono flex items-center justify-center p-6 sm:p-12 overflow-hidden relative">
            {/* Scanlines Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 pointer-events-none bg-[size:100%_2px,3px_100%]" />

            {/* Ambient Noise */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

            <div className="max-w-2xl w-full space-y-4">
                <div className="border border-brand-neon/20 p-8 bg-brand-neon/5 backdrop-blur-sm relative">
                    <div className="absolute top-0 right-0 p-2 text-[10px] opacity-40">
                        HASH_ID: {Math.random().toString(36).substring(7).toUpperCase()}
                    </div>

                    <div className="space-y-2">
                        {lines.slice(0, line).map((text, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="opacity-40">[{i.toString().padStart(2, '0')}]</span>
                                <GlitchText text={text} />
                            </div>
                        ))}
                    </div>

                    {line === lines.length && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-12 pt-8 border-t border-brand-neon/20"
                        >
                            <div className="flex items-center gap-4 text-brand-cyan">
                                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                                <span className="text-sm tracking-[0.2em] font-bold">CONEXÃO ESTABELECIDA</span>
                            </div>
                            <p className="text-xs mt-4 opacity-60 leading-relaxed italic">
                                "A mudança é a única constante. No caos, encontramos a ordem do Kernel."
                            </p>
                        </motion.div>
                    )}
                </div>

                <div className="flex justify-between text-[10px] opacity-30 px-2 tracking-widest">
                    <span>ENCRYPTION: AES-256</span>
                    <span>SOURCE: @root_node</span>
                    <span>STATUS: MONITORING</span>
                </div>
            </div>

            {/* Accidental "Flicker" Overlay */}
            <motion.div
                animate={{ opacity: [0, 0.05, 0, 0.1, 0] }}
                transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.2, 0.3, 1] }}
                className="absolute inset-0 bg-brand-neon pointer-events-none z-40"
            />
        </div>
    );
};

export default AccessGranted;
