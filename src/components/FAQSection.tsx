import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Já fiz cursos teóricos e continuo perdido. O que muda?",
        answer: "A Falha é sistema de execução: padrões, templates e rotinas. Você instala um jeito de operar, não só assiste aulas."
    },
    {
        question: "Não sou programador. Vou travar?",
        answer: "Não precisa ser dev. Você segue templates e checklists. A parte avançada (automação/IA) entra por etapas e com exemplos prontos."
    },
    {
        question: "Serve para o meu modelo de negócio?",
        answer: "Serve para qualquer operação que depende de aquisição, dados e conversão: serviços, e-commerce, infoproduto, prestação."
    },
    {
        question: "E se eu estiver começando agora?",
        answer: "Melhor ainda: você já começa com base certa e evita anos de retrabalho."
    },
    {
        question: "Como funciona o acesso por 12 meses?",
        answer: "Você tem acesso ao conteúdo e atualizações por 12 meses a partir da compra. Ao final, você pode renovar para continuar acessando."
    },
    {
        question: "Terei suporte?",
        answer: "Sim. A Falha conta com uma comunidade baseada no Discord onde acompanhamos a implementação dos processos e tiramos dúvidas diretamente com a equipe."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-brand-dark text-brand-text px-4 sm:px-6 lg:px-8 border-t border-brand-surface2 font-body relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center gap-2 mb-6 px-3 py-1 rounded-sm bg-brand-surface1 border border-brand-neon/30 text-brand-neon text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(42,245,152,0.1)]"
                    >
                        <HelpCircle className="w-4 h-4" />
                        Dúvidas Frequentes
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-brand-text"
                    >
                        Banco de <span className="text-brand-neon">Respostas</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`border transition-all duration-300 bg-brand-surface1 rounded-sm overflow-hidden ${openIndex === index
                                ? 'border-brand-neon/50 shadow-[0_0_15px_rgba(42,245,152,0.1)]'
                                : 'border-brand-surface2 hover:border-brand-neon/30'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                            >
                                <span className="text-base font-heading font-semibold text-brand-text pr-4 flex items-center">
                                    <span className="text-brand-neon font-mono text-sm mr-3 opacity-80 group-hover:opacity-100 transition-opacity">[{String(index + 1).padStart(2, '0')}]</span>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-brand-muted group-hover:text-brand-neon transition-all duration-300 ${openIndex === index ? 'rotate-180 text-brand-neon' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-brand-muted font-body text-base leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
