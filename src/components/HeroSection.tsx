import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TerminalSquare, ChevronRight } from 'lucide-react';

const ScrambleText: React.FC<{ text: string }> = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const letters = '01-_/\\*';

    useEffect(() => {
        let iteration = 0;
        let interval: any = null;

        setTimeout(() => {
            interval = setInterval(() => {
                setDisplayText(
                    text.split('')
                        .map((char, index) => {
                            if (index < iteration) return char;
                            if (char === ' ') return ' ';
                            return letters[Math.floor(Math.random() * letters.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setDisplayText(text);
                }

                // Faster iteration for a more subtle, quicker effect
                iteration += 1 / 1.5;
            }, 40);
        }, 500); // Less initial delay

        return () => clearInterval(interval);
    }, [text]);

    return <>{displayText || ' '.repeat(text.length)}</>;
};

const HeroSection: React.FC = () => {
    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-brand-text pt-12 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-body">

            {/* Dark Glitch/Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111718_1px,transparent_1px),linear-gradient(to_bottom,#111718_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

            {/* Subtle Neon Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-neon/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10 mt-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 25 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-brand-surface1 border border-brand-surface2 text-brand-neon text-xs sm:text-sm font-mono tracking-widest uppercase shadow-sm"
                >
                    <TerminalSquare className="w-4 h-4" />
                    A Falha
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 25, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-brand-text leading-[1.1]"
                >
                    O mundo que você conhecia mudou{' '}
                    <span className="block mt-4 text-brand-neon">
                        <ScrambleText text="e você ainda não percebeu." />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 25, delay: 0.2 }}
                    className="text-xl sm:text-2xl font-heading font-medium text-brand-text"
                >
                    IA não é "tendência". É infraestrutura.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 25, delay: 0.25 }}
                    className="text-lg sm:text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed font-body"
                >
                    Aprenda a operar com IA, tráfego e automação de forma prática: aquisição, tracking real, assets clonáveis e rotinas que escalam sem virar caos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 25, delay: 0.3 }}
                    className="pt-12 flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <button
                        onClick={scrollToPricing}
                        className="group inline-flex items-center justify-center rounded-sm bg-brand-neon px-8 py-4 text-sm font-mono font-bold text-brand-dark shadow-[0_0_20px_rgba(42,245,152,0.3)] transition-all duration-300 hover:bg-[#1ee087] hover:scale-105 hover:shadow-[0_0_30px_rgba(42,245,152,0.5)] uppercase tracking-widest cursor-pointer"
                    >
                        Acessar o Kernel
                        <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <button
                        onClick={() => document.getElementById('deliverables')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group inline-flex items-center justify-center rounded-sm bg-brand-surface1 border border-brand-surface2 px-8 py-4 text-sm font-mono font-medium text-brand-muted transition-all duration-300 hover:text-brand-text hover:border-brand-muted hover:bg-brand-surface2 uppercase tracking-wide cursor-pointer"
                    >
                        Ver o que você vai quebrar (e reconstruir)
                    </button>
                </motion.div>


            </div>
        </section>
    );
};

export default HeroSection;
