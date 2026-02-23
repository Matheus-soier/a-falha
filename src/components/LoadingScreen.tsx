import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [glitchText, setGlitchText] = useState('INICIALIZANDO KERNEL...');

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsComplete(true);
                    return 100;
                }
                const step = Math.random() * 15;
                return Math.min(prev + step, 100);
            });
        }, 200);

        const textInterval = setInterval(() => {
            const texts = [
                'INICIALIZANDO KERNEL...',
                'BYPASSING FIREWALLS...',
                'CONNECTING TO NEURAL LINK...',
                'DECRYPTING ASSETS...',
                'A FALHA ESTA VINDO...',
            ];
            setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[110] bg-black flex flex-col items-center justify-center font-mono overflow-hidden">
            {/* Matrix-like background effect (simple) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-neon)_1px,_transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="w-64 md:w-96 relative space-y-6">
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <motion.span
                            className="text-brand-neon text-[10px] md:text-xs tracking-[0.2em] font-bold"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.1, repeat: Infinity }}
                        >
                            {glitchText}
                        </motion.span>
                        <span className="text-brand-neon text-xs font-bold">{Math.round(progress)}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1 w-full bg-brand-surface2 border border-brand-surface2 relative overflow-hidden">
                        <motion.div
                            className="h-full bg-brand-neon shadow-[0_0_15px_rgba(42,245,152,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />

                        {/* Glitch Overlay on Progress Bar */}
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                                left: ['-100%', '200%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>

                    <div className="flex justify-between text-[8px] text-brand-muted uppercase">
                        <span>Sect: Delta-9</span>
                        <span>Status: {isComplete ? "LOADED" : "Critical"}</span>
                        <span>Buffer: Overload</span>
                    </div>
                </div>

                {/* Enter Button after loading */}
                <AnimatePresence>
                    {isComplete && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="pt-4"
                        >
                            <button
                                onClick={onLoadingComplete}
                                className="w-full py-3 bg-brand-neon/10 border border-brand-neon/50 text-brand-neon text-sm font-bold tracking-[0.3em] uppercase hover:bg-brand-neon hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(42,245,152,0.2)] hover:shadow-[0_0_30px_rgba(42,245,152,0.5)]"
                            >
                                INICIAR
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-brand-neon/30" />
            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-brand-neon/30" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-brand-neon/30" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-brand-neon/30" />
        </div>
    );
};

export default LoadingScreen;
