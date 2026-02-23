import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioControllerProps {
    isMuted: boolean;
    onToggle: () => void;
    isVisible: boolean;
}

const AudioController: React.FC<AudioControllerProps> = ({ isMuted, onToggle, isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[120]"
                >
                    <button
                        onClick={onToggle}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-surface1 border border-brand-surface2 text-brand-muted hover:text-brand-neon hover:border-brand-neon shadow-lg transition-all duration-300 group relative"
                        title={isMuted ? "Ativar som" : "Desativar som"}
                    >
                        {/* Pulsing Ring when active */}
                        {!isMuted && (
                            <motion.div
                                className="absolute inset-0 rounded-full border border-brand-neon/50"
                                animate={{ scale: [1, 1.4, 1.6], opacity: [0.5, 0.2, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        )}

                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AudioController;
