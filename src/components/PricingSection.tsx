import React, { useState, useEffect } from 'react';
import { Css3DPill } from './Css3DPill';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Loader2, X } from 'lucide-react';

const questions = [
    {
        id: 'q1',
        title: 'Qual descreve melhor você hoje?',
        options: ['Estou começando do zero', 'Estudante / transição de carreira', 'Gestor de tráfego / mídia paga', 'Copy/Design/Dev/Operações (área correlata)', 'Empresário(a) / dono(a) de e-commerce', 'Prestador(a) de serviço (clínica, consultoria, etc.)']
    },
    {
        id: 'q2',
        title: 'Qual é o seu objetivo principal nos próximos 90 dias?',
        options: ['Conseguir clientes / fechar contratos', 'Estruturar meu sistema (tracking + funil + rotina)', 'Escalar vendas do meu negócio (e-commerce/serviço)', 'Automatizar processos e ganhar tempo (IA/Apps Script)', 'Virar referência e subir ticket com uma entrega mais técnica']
    },
    {
        id: 'q3',
        title: 'Qual seu nível hoje em tráfego (Google/Meta)?',
        options: ['Iniciante: ainda não rodei campanhas', 'Básico: já rodei, mas sem consistência', 'Intermediário: tenho campanhas ativas e otimizo', 'Avançado: opero bem, mas quero padronizar e escalar'],
        scores: [1, 2, 3, 4]
    },
    {
        id: 'q4',
        title: 'Qual seu nível hoje em IA e automações?',
        options: ['Uso IA só para textos/ideias', 'Já uso IA no dia a dia (prompts, organização, conteúdo)', 'Já automatizo alguma coisa (Zap/Make/AppScript)', 'Avançado: automações + agentes + integrações (API/eventos)'],
        scores: [1, 2, 3, 4]
    },
    {
        id: 'q5',
        title: 'Hoje, como está sua mensuração?',
        options: ['Não tenho GA4/GTM bem configurado', 'Tenho GA4, mas confio pouco nos dados', 'Tenho GA4 + GTM e eventos básicos', 'Tenho GTM/GA4 + eventos + UTMs (e quero evoluir)', 'Tenho tudo bem implementado e quero auditoria/QA + escala'],
        scores: [1, 2, 3, 4, 5]
    },
    {
        id: 'q6',
        title: 'Qual é seu maior gargalo AGORA?',
        options: ['Falta de clareza do que mexer (decido no escuro)', 'Tracking / eventos / UTMs / deduplicação', 'Criar assets que convertem (LP/form/roteamento)', 'Operação manual demais (relatório, follow-up, rotina)', 'Consistência (começo, paro, não mantenho)', 'Escala (não sei quando aumentar e como não quebrar)']
    },
    {
        id: 'q7',
        title: 'Você já investe (ou pretende investir) em anúncios?',
        options: ['Ainda não invisto', 'Até R$ 1.000/mês', 'R$ 1.000 a R$ 5.000/mês', 'R$ 5.000 a R$ 20.000/mês', 'Acima de R$ 20.000/mês']
    },
    {
        id: 'q8',
        title: 'Quanto tempo por semana você consegue dedicar pra implementar?',
        options: ['1–2 horas/semana', '3–5 horas/semana', '6–10 horas/semana', '10+ horas/semana'],
        scores: [1, 2, 3, 4]
    },
];

const PricingSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPill, setSelectedPill] = useState<'blue' | 'red' | null>(null);
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset modal state when closed after animation finishes
            setTimeout(() => {
                setStep(1);
                setAnswers({});
                setSelectedPill(null);
                setIsSubmitting(false);
            }, 300);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const openModal = (pill: 'blue' | 'red') => {
        setSelectedPill(pill);
        setIsModalOpen(true);
    };

    const handleOptionSelect = (qId: string, option: string) => {
        setAnswers(prev => ({ ...prev, [qId]: option }));

        // Auto-advance
        setTimeout(() => {
            if (step < questions.length) {
                setStep(step + 1);
            } else {
                setIsSubmitting(true);
                setTimeout(() => {
                    setIsSubmitting(false);
                    setStep(questions.length + 1); // Success step / Price Reveal
                }, 1000);
            }
        }, 350);
    };

    const handleCheckout = () => {
        window.location.href = '#checkout-url';
    };

    const calculateScore = () => {
        let score = 0;

        const q3Index = questions[2].options.indexOf(answers['q3']);
        if (q3Index !== -1 && questions[2].scores) score += questions[2].scores[q3Index];

        const q4Index = questions[3].options.indexOf(answers['q4']);
        if (q4Index !== -1 && questions[3].scores) score += questions[3].scores[q4Index];

        const q5Index = questions[4].options.indexOf(answers['q5']);
        if (q5Index !== -1 && questions[4].scores) score += questions[4].scores[q5Index];

        const q8Index = questions[7].options.indexOf(answers['q8']);
        if (q8Index !== -1 && questions[7].scores) score += questions[7].scores[q8Index];

        return score;
    };

    const getSegmentMessage = () => {
        const score = calculateScore();
        if (score <= 8) return 'Você precisa de base sólida pra não perder tempo com retrabalho.';
        if (score <= 13) return 'Você já opera — agora falta padrão, tracking confiável e rotina.';
        return 'Você está pronto pra auditoria, automação e consistência em alto nível.';
    };

    const isBlue = selectedPill === 'blue';
    const themeColorText = isBlue ? 'text-blue-500' : 'text-red-500';
    const themeColorBg = isBlue ? 'bg-blue-500' : 'bg-red-500';
    const themeColorBorder = isBlue ? 'border-blue-500' : 'border-red-500';
    const themeColorShadow = isBlue ? 'shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'shadow-[0_0_8px_rgba(239,68,68,0.5)]';
    const themeColorBgLight = isBlue ? 'bg-blue-500/10' : 'bg-red-500/10';
    const themeColorShadowLarge = isBlue ? 'shadow-[0_0_50px_rgba(59,130,246,0.05)]' : 'shadow-[0_0_50px_rgba(239,68,68,0.05)]';

    return (
        <section id="pricing" className="py-32 bg-brand-dark text-brand-text px-4 sm:px-6 lg:px-8 border-t border-brand-surface2 relative overflow-hidden font-body">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(42,245,152,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(42,245,152,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        className="inline-block px-5 py-2 mb-6 text-brand-neon bg-brand-surface1 border border-brand-neon/30 rounded-sm text-xs font-mono font-semibold tracking-widest uppercase shadow-[0_0_10px_rgba(42,245,152,0.1)]"
                    >
                        &gt;_ Acesso Root
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-brand-text"
                    >
                        Acesso total ao <span className="text-brand-neon font-mono font-normal tracking-wide">&lt;Kernel/&gt;</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                        className="text-xl text-brand-muted max-w-2xl mx-auto font-body"
                    >
                        Sua operação mudou. O mercado mudou. Qual caminho você vai escolher agora?
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center w-full">

                    {/* BLUE PILL (LEFT COLUMN) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="w-full lg:w-1/2 p-8 sm:p-12 bg-gradient-to-b from-[#02050A] to-[#010205] rounded-sm border border-blue-900/30 relative flex flex-col overflow-hidden group hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                    >
                        {/* Immersive background glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center h-full">
                            {/* Graphic 3D CSS Pill */}
                            <div
                                className="mb-[60px] mt-[30px] flex justify-center cursor-pointer perspective-[1000px] h-32 w-16"
                                onClick={() => openModal('blue')}
                            >
                                <motion.div
                                    animate={{
                                        y: [-10, 10, -10],
                                        rotateX: [-15, 15, -15],
                                        rotateY: [0, 360]
                                    }}
                                    transition={{
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                                        rotateY: { duration: 6, repeat: Infinity, ease: "linear" }
                                    }}
                                    className="relative w-full h-full"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <Css3DPill
                                        colorMain="#3B82F6"
                                        colorShadow="#1E3A8A"
                                        glowColor="rgba(59,130,246,0.5)"
                                    />
                                </motion.div>
                            </div>

                            <h3 className="text-3xl font-heading font-extrabold text-blue-400 mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">A Pílula Azul</h3>
                            <p className="text-sm font-mono text-blue-100/50 mb-6 uppercase tracking-widest text-center">Ficar no País das Maravilhas</p>

                            <p className="text-center text-blue-300 text-lg md:text-xl font-body italic mb-8 border-l-2 border-blue-500/30 pl-4">
                                "A ignorância é muito confortável. Mas o mercado não perdoa quem decide estagnar."
                            </p>

                            <div className="w-full space-y-4 border-t border-blue-900/30 pt-8 mt-auto flex-grow">
                                {[
                                    "Continuar rodando campanhas às cegas",
                                    "Gastar energia com funéis que não convertem",
                                    "Ficar refém de algoritmos e bloqueios",
                                    "Zero autonomia técnica nas suas LPs",
                                    "Acordar amanhã e nada ter mudado"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 text-blue-100/70">
                                        <div className="w-5 h-5 rounded-full border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-500 text-xs text-center font-bold">X</div>
                                        <span className="text-sm font-body">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 w-full">
                                <button
                                    onClick={() => openModal('blue')}
                                    className="w-full py-5 rounded-sm border border-blue-500/40 bg-blue-500/5 text-blue-400 font-mono font-bold text-sm tracking-widest hover:bg-blue-500/20 hover:border-blue-400 transition-all cursor-pointer uppercase flex items-center justify-center gap-2"
                                >
                                    Tomar a Pílula Azul
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* RED PILL / PRODUCT (RIGHT COLUMN) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="w-full lg:w-1/2 p-8 sm:p-12 bg-gradient-to-b from-[#0A0202] to-[#050101] rounded-sm border border-red-900/30 relative flex flex-col overflow-hidden group hover:border-red-500/50 transition-all duration-500 shadow-sm hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center h-full">
                            {/* Graphic 3D CSS Pill */}
                            <div
                                className="mb-[60px] mt-[30px] flex justify-center cursor-pointer perspective-[1000px] h-32 w-16"
                                onClick={() => openModal('red')}
                            >
                                <motion.div
                                    animate={{
                                        y: [-10, 10, -10],
                                        rotateX: [-15, 15, -15],
                                        rotateY: [0, -360]
                                    }}
                                    transition={{
                                        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                        rotateX: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                                        rotateY: { duration: 6, repeat: Infinity, ease: "linear" }
                                    }}
                                    className="relative w-full h-full"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <Css3DPill
                                        colorMain="#EF4444"
                                        colorShadow="#7F1D1D"
                                        glowColor="rgba(239,68,68,0.5)"
                                    />
                                </motion.div>
                            </div>

                            <h3 className="text-3xl font-heading font-extrabold text-red-500 mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">A Pílula Vermelha</h3>
                            <p className="text-sm font-mono text-red-500 mb-6 uppercase tracking-widest text-center">Acesso Root ao &lt;Kernel/&gt;</p>

                            <p className="text-center text-[#E9ECEE] text-lg md:text-xl font-body italic mb-8 border-l-2 border-red-500/50 pl-4">
                                "Nós só entramos no código para refazer tudo aquilo que você sabe que não funciona mais."
                            </p>

                            <div className="w-full space-y-4 border-t border-red-900/30 pt-8 mt-auto flex-grow">
                                {[
                                    "Base GTM e GA4 (padrões + templates)",
                                    "Clones LPs de Alta Conversão",
                                    "Frameworks Replicáveis Ads",
                                    "Rotina Otimização + Dash",
                                    "Garantia Incondicional 7D"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-brand-text text-sm font-body">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 w-full">
                                <button
                                    onClick={() => openModal('red')}
                                    className="w-full py-5 rounded-sm border border-red-500/40 bg-red-500/5 text-red-500 font-mono font-bold text-sm tracking-widest hover:bg-red-500/20 hover:border-red-500 transition-all cursor-pointer uppercase flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                                >
                                    Tomar a Pílula Vermelha
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* FULL SCREEN MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col px-4 py-8 bg-black/95 backdrop-blur-md overflow-y-auto"
                    >
                        <div className="flex-1 w-full max-w-xl mx-auto flex flex-col justify-center min-h-[min-content] my-auto">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="fixed top-4 right-4 sm:top-6 sm:right-6 text-brand-muted hover:text-brand-text transition-colors p-2 bg-brand-surface2 rounded-full z-50 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                                aria-label="Fechar"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            <AnimatePresence mode="popLayout">
                                {step <= questions.length ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className={`w-full space-y-4 sm:space-y-6 bg-[#0b1011] border border-brand-surface2 rounded-sm p-6 sm:p-8 ${themeColorShadowLarge}`}
                                    >
                                        <div className="mb-2">
                                            {selectedPill === 'blue' ? (
                                                <h4 className="text-xl sm:text-2xl font-heading font-bold text-blue-400 mb-2">Ok. Vamos direto ao ponto.</h4>
                                            ) : (
                                                <h4 className="text-xl sm:text-2xl font-heading font-bold text-red-500 mb-2">Você escolheu enxergar a Falha.</h4>
                                            )}

                                            <p className="text-brand-muted font-body text-sm sm:text-base mb-4 leading-relaxed">
                                                {selectedPill === 'blue'
                                                    ? 'Responde rápido essas perguntas (leva 40 segundos). No final eu te mostro a melhor forma de entrar na A Falha com clareza e sem achismo.'
                                                    : 'Responde rápido essas perguntas (leva 40 segundos). No final eu te mostro o caminho mais eficiente pra operar com IA + tráfego + automação nos próximos 12 meses.'}
                                            </p>

                                            {/* Progress Bar */}
                                            <div className="flex flex-col gap-2 mb-2">
                                                <div className={`flex justify-between text-xs font-mono uppercase tracking-widest ${themeColorText}`}>
                                                    <span>Progresso</span>
                                                    <span>{step}/{questions.length}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-brand-surface2 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full transition-all duration-300 ${themeColorBg} ${themeColorShadow}`}
                                                        style={{ width: `${(step / questions.length) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3 sm:space-y-4 text-left">
                                            <label className="block text-lg sm:text-xl font-heading font-bold text-brand-text mb-4 leading-snug">
                                                {questions[step - 1].title}
                                            </label>

                                            <div className="space-y-2 sm:space-y-3">
                                                {questions[step - 1].options.map((opt, i) => {
                                                    const qId = questions[step - 1].id;
                                                    const isSelected = answers[qId] === opt;

                                                    return (
                                                        <div
                                                            key={i}
                                                            onClick={() => handleOptionSelect(qId, opt)}
                                                            className={`p-3 sm:p-4 rounded-sm border cursor-pointer transition-all flex items-center gap-3 sm:gap-4 group ${isSelected ? `${themeColorBorder} ${themeColorBgLight}` : 'border-brand-surface2/60 bg-[#070A0A] hover:border-brand-surface2'}`}
                                                        >
                                                            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex flex-col items-center justify-center flex-shrink-0 transition-colors ${isSelected ? `${themeColorBorder} ${themeColorShadow}` : 'border-brand-surface2 group-hover:border-brand-muted'}`}>
                                                                {isSelected && <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${themeColorBg}`} />}
                                                            </div>
                                                            <span className={`text-sm sm:text-base font-body transition-colors ${isSelected ? `${themeColorText} font-semibold` : 'text-brand-muted group-hover:text-brand-text'}`}>
                                                                {opt}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="pt-2 flex justify-between items-center gap-4">
                                            {step > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(step - 1)}
                                                    className="py-2 px-4 sm:py-3 sm:px-6 border border-brand-surface2 text-brand-muted hover:text-brand-text hover:border-brand-surface2/80 rounded-sm font-mono text-xs sm:text-sm tracking-wide transition-all"
                                                >
                                                    Voltar
                                                </button>
                                            )}

                                            {isSubmitting && (
                                                <div className={`flex-1 flex justify-end items-center text-sm font-mono ${themeColorText}`}>
                                                    <Loader2 className="w-5 h-5 animate-spin mr-2" /> Analisando respostas...
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        onMouseEnter={() => {
                                            // Back-redirect logic (exit intent on mouse leaving window)
                                            document.body.onmouseleave = () => {
                                                if (step > questions.length) {
                                                    document.body.onmouseleave = null;
                                                    window.location.href = '#ultimas-vagas';
                                                }
                                            };
                                        }}
                                        className="text-center bg-[#0b1011] border border-brand-surface2 rounded-sm p-6 sm:p-8 shadow-[0_0_50px_rgba(42,245,152,0.1)] w-full"
                                    >
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#070A0A] border border-brand-neon/30 flex items-center justify-center mx-auto rounded-full mb-6 shadow-[0_0_30px_rgba(42,245,152,0.2)]">
                                            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-brand-neon" />
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-heading font-black mb-3 sm:mb-4 text-brand-text">
                                            Seu próximo passo está pronto.
                                        </h3>
                                        <p className="text-brand-muted text-base sm:text-lg font-body mb-6 sm:mb-8 border-l-2 border-brand-neon/50 pl-4 py-2 mx-auto max-w-md text-left italic leading-relaxed">
                                            "{getSegmentMessage()}"
                                        </p>

                                        <div className="bg-brand-surface1 p-6 sm:p-8 rounded-sm border border-brand-surface2 mb-8 relative overflow-hidden group max-w-md mx-auto">
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(42,245,152,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(42,245,152,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                                            <div className="relative z-10 flex flex-col items-center">
                                                <h4 className="text-lg sm:text-xl font-heading font-bold text-brand-text mb-3 tracking-tight uppercase">A Falha</h4>
                                                <div className="flex justify-center items-baseline gap-2 mb-3">
                                                    <span className="text-brand-neon text-xl sm:text-2xl font-mono">12x</span>
                                                    <span className="text-brand-neon text-xl sm:text-2xl font-mono">R$</span>
                                                    <span className="text-5xl sm:text-6xl font-heading font-black text-brand-text tracking-tighter">49,70</span>
                                                </div>
                                                <p className="text-brand-muted text-[10px] sm:text-xs font-mono uppercase tracking-widest bg-brand-surface2 px-3 py-1 rounded-sm">Ou R$ 497 à vista</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
                                            <button
                                                onClick={handleCheckout}
                                                className="w-full py-4 sm:py-5 bg-brand-neon hover:brightness-110 cursor-pointer text-[#070A0A] rounded-sm font-heading font-black text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(42,245,152,0.3)] hover:shadow-[0_0_30px_rgba(42,245,152,0.5)] hover:scale-[1.02]"
                                            >
                                                Ir para o checkout
                                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 font-bold" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PricingSection;
