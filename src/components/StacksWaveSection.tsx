import React from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from 'framer-motion';

// Core custom icons provided by user + some extra dev tools to make the wave dense
const baseIcons = [
    { icon: <img src="/stacks/antigravity.png" alt="Antigravity" className="w-full h-full object-contain" />, name: "Antigravity" },
    { icon: <img src="/stacks/antigravity_red.png" alt="GA4" className="w-full h-full object-contain" />, name: "GA4" },
    { icon: <img src="/stacks/codex.png" alt="Codex" className="w-full h-full object-contain" />, name: "Codex" },
    { icon: <img src="/stacks/fathom.png" alt="Meta Ads" className="w-full h-full object-contain" />, name: "Meta Ads" },
    { icon: <img src="/stacks/google_ads.png" alt="Clarity" className="w-full h-full object-contain" />, name: "Clarity" },
    { icon: <img src="/stacks/google_analytics.png" alt="OpenClaw" className="w-full h-full object-contain" />, name: "OpenClaw" },
    { icon: <img src="/stacks/gtm.png" alt="Search Console" className="w-full h-full object-contain" />, name: "Search Console" },
    { icon: <img src="/stacks/lightning.png" alt="Coworking" className="w-full h-full object-contain" />, name: "Coworking" },
    { icon: <img src="/stacks/looker.png" alt="GTM" className="w-full h-full object-contain" />, name: "GTM" },
    { icon: <img src="/stacks/meta.png" alt="Freepik" className="w-full h-full object-contain" />, name: "Freepik" },
    { icon: <img src="/stacks/openclaw.png" alt="Edtis" className="w-full h-full object-contain" />, name: "Edtis" },
    { icon: <img src="/stacks/prisma.png" alt="Google Ads" className="w-full h-full object-contain" />, name: "Google Ads" },
    { icon: <img src="/stacks/sparkles.png" alt="Claude" className="w-full h-full object-contain" />, name: "Claude" },
];

// Duplicate to ensure seamless infinite looping track
const CAROUSEL_ITEMS = [...baseIcons, ...baseIcons, ...baseIcons, ...baseIcons];
const ITEM_WIDTH = 115; // Fixed spacing per item
const TOTAL_WIDTH = CAROUSEL_ITEMS.length * ITEM_WIDTH;

interface WaveNodeProps {
    item: { icon: React.ReactNode; name: string };
    index: number;
    globalX: any;
}

const WaveNode: React.FC<WaveNodeProps> = ({ item, index, globalX }) => {
    // Initial static X relative to the zero-point of the track
    const initialX = index * ITEM_WIDTH;

    // We wrap the absolute position dynamically so that items leaving the left edge
    // elegantly wrap around to the right edge.
    const xWrapped = useTransform(globalX, (v: any) => {
        // wrap(min, max, value)
        // Offset by a safe margin so items don't pop out in the middle of the screen
        return wrap(-ITEM_WIDTH * 2, TOTAL_WIDTH - ITEM_WIDTH * 2, v + initialX);
    });

    // Calculate Continuous Sine Wave Y position based on X coordinate
    const ySine = useTransform(xWrapped, (xPosition) => {
        // One full wave every 900px approx
        const waveLength = 900;
        const amplitude = 50; // max displacement up/down
        return Math.sin((xPosition / waveLength) * Math.PI * 2) * amplitude;
    });

    return (
        <motion.div
            className="absolute top-1/2 left-0 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing group"
            style={{
                x: xWrapped,
                y: ySine,
                width: ITEM_WIDTH,
            }}
        >
            <div
                className={`
                    flex items-center justify-center bg-brand-surface2 border border-brand-cyan/20 
                    rounded-full transition-all duration-300 group-hover:border-brand-neon 
                    hover:shadow-[0_0_20px_rgba(42,245,152,0.2)] w-24 h-24 shadow-sm text-brand-muted hover:-translate-y-1
                `}
            >
                <div
                    className="w-full h-full flex items-center justify-center p-[26%]"
                >
                    {item.icon}
                </div>
            </div>

            {/* Label */}
            <div className="text-xs font-mono font-medium whitespace-nowrap absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-neon pointer-events-none">
                {item.name}
            </div>
        </motion.div>
    );
};

const StacksWaveSection: React.FC = () => {
    // Global scrolling coordinate
    const globalX = useMotionValue(0);
    const baseVelocity = -60; // slower pixels per second

    // Keep track of time and update globalX manually
    useAnimationFrame((_t, delta) => {
        let moveBy = baseVelocity * (delta / 1000); // Normalize delta
        // If dragging, we might pause the auto-scroll or just add to it. Let's make it auto.
        globalX.set(globalX.get() + moveBy);
    });

    // Drag constraints - Technically we don't need a drag constraint if it's infinite,
    // but we can map the drag gesture to increment `globalX`.
    const handleDrag = (_event: any, info: any) => {
        // Stop the auto velocity while dragging if needed, or just add the delta.
        // Adding the delta makes it feel like we are "spinning" the wheel.
        globalX.set(globalX.get() + info.delta.x);
    };

    return (
        <section className="py-12 md:py-24 bg-brand-surface1 border-t border-brand-surface2 overflow-hidden relative min-h-[350px] md:min-h-[400px] flex flex-col justify-center font-body">
            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full mb-4">
                <div className="text-center mb-16 space-y-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-brand-text mb-4"
                    >
                        Integração <span className="text-brand-neon">sem remendos</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                        className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        O novo padrão de trabalho é: ferramentas + dados + automação.<br />
                        <span className="text-brand-text font-medium">A Falha foi construída para funcionar com o mundo real — do anúncio ao evento, do evento à decisão.</span>
                    </motion.p>
                </div>

                {/* The Infinite Wave Track */}
                <div
                    className="relative flex justify-center items-center h-[280px] w-full"
                >
                    {/* Soft gradients for edge fading restricted to the track so they do not blur text */}
                    <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-brand-surface1 to-transparent pointer-events-none z-30" />
                    <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-brand-surface1 to-transparent pointer-events-none z-30" />

                    {/* Draggable surface */}
                    <motion.div
                        className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }} // Snap back instantly but fire drag events
                        dragElastic={0} // No elastic resistance
                        onDrag={handleDrag}
                        onDragStart={() => {
                            // Optional: Could pause auto-scroll
                        }}
                    >
                        {CAROUSEL_ITEMS.map((item, i) => (
                            <WaveNode
                                key={`wave-item-${i}`}
                                item={item}
                                index={i}
                                globalX={globalX}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default StacksWaveSection;
