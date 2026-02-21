const fs = require('fs');

let content = fs.readFileSync('src/components/PricingSection.tsx', 'utf8');

// The replacement logic: We'll replace the entire `div className="flex flex-col lg:flex-row...` block.
const startIndex = content.indexOf('<div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">');
const endMarker = '</section>';
const endIndex = content.lastIndexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const beforeStr = content.substring(0, startIndex);
    const afterStr = content.substring(endIndex);

    const handleBluePillCode = `
    const handleBluePill = () => {
        alert("A história acaba aqui. Você acorda na sua cama e acredita no que quiser acreditar.");
        window.location.href = "https://www.google.com";
    };
    `;

    // inject handleBluePill
    let finalBeforeStr = beforeStr;
    if (!finalBeforeStr.includes('handleBluePill')) {
       finalBeforeStr = finalBeforeStr.replace('const handleCheckout = () => {', handleBluePillCode + '\n    const handleCheckout = () => {');
    }

    const newContainer = `
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

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Graphic */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="mb-6 flex justify-center cursor-pointer"
                                onClick={handleBluePill}
                            >
                                <div className="w-16 h-32 rounded-full relative overflow-hidden border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_0_30px_rgba(59,130,246,0.5)] bg-gradient-to-b from-blue-500 to-blue-900 group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_0_50px_rgba(59,130,246,0.8)] transition-all duration-500">
                                    <div className="absolute top-[5px] left-[10px] w-[15px] h-[80px] bg-gradient-to-b from-white/80 to-transparent rounded-[10px] -rotate-12 blur-[1px] z-10" />
                                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/30 -translate-y-1/2 z-10" />
                                </div>
                            </motion.div>

                            <h3 className="text-3xl font-heading font-extrabold text-blue-400 mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">A Pílula Azul</h3>
                            <p className="text-sm font-mono text-blue-100/50 mb-8 uppercase tracking-widest text-center">Ficar no País das Maravilhas</p>

                            <div className="w-full space-y-4 mb-10 border-t border-blue-900/30 pt-8">
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

                            <div className="mt-auto w-full pt-6">
                                <button
                                    onClick={handleBluePill}
                                    className="w-full py-4 rounded-sm border border-blue-500/40 text-blue-400 font-mono font-bold text-sm hover:bg-blue-500/10 hover:border-blue-400 transition-all cursor-pointer uppercase tracking-widest"
                                >
                                    Continuar Dormindo
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

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex flex-col items-center mb-8">
                                {/* Graphic */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="mb-6 flex justify-center cursor-pointer"
                                >
                                    <div className="w-16 h-32 rounded-full relative overflow-hidden border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_0_40px_rgba(239,68,68,0.7)] bg-gradient-to-b from-red-600 to-red-950 group-hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_0_60px_rgba(239,68,68,0.9)] transition-all duration-500">
                                        <div className="absolute top-[5px] left-[10px] w-[15px] h-[80px] bg-gradient-to-b from-white/80 to-transparent rounded-[10px] -rotate-12 blur-[1px] z-10" />
                                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/40 -translate-y-1/2 z-10" />
                                    </div>
                                </motion.div>

                                <h3 className="text-3xl font-heading font-extrabold text-red-500 mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">A Pílula Vermelha</h3>
                                <p className="text-sm font-mono text-brand-neon mb-2 uppercase tracking-widest text-center">Acesso Root ao &lt;Kernel/&gt;</p>
                            </div>

                            <div className="mb-8 border-t border-red-900/30 pt-8 flex flex-col items-center text-center">
                                <span className="inline-block text-brand-muted text-xs font-mono tracking-widest uppercase mb-4">Em até 12x no cartão</span>
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-brand-neon text-2xl font-mono font-bold">R$</span>
                                    <span className="text-5xl font-heading font-black tracking-tighter text-brand-text drop-shadow-sm">497</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                {[
                                    "Base GTM e GA4 (padrões + templates)",
                                    "Clones LPs de Alta Conversão",
                                    "Frameworks Replicáveis Ads",
                                    "Rotina Otimização + Dash",
                                    "Garantia Incondicional 7D"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckCircle className="w-4 h-4 text-brand-neon flex-shrink-0 mt-0.5" />
                                        <span className="text-brand-text text-sm font-body">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Form Inline */}
                            <div className="mt-auto w-full pt-6 border-t border-brand-surface2/30">
                                <AnimatePresence mode="popLayout">
                                    {step < 4 ? (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleNext}
                                            className="space-y-4 relative z-10 w-full"
                                        >
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-xs font-mono font-bold text-brand-neon uppercase tracking-widest">Etapa {step}/3</span>
                                                <div className="flex gap-1">
                                                    {[1, 2, 3].map((s) => (
                                                        <div key={s} className={\`h-1 w-6 rounded-full transition-all duration-500 \${s <= step ? 'bg-brand-neon' : 'bg-brand-surface2'}\`} />
                                                    ))}
                                                </div>
                                            </div>

                                            {step === 1 && (
                                                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-2">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full px-4 py-3 bg-[#110404] border border-red-900/30 rounded-sm focus:border-brand-neon focus:ring-1 focus:ring-brand-neon text-brand-text text-sm outline-none font-body transition-all"
                                                        placeholder="Nome Completo (e.g. Neo)"
                                                    />
                                                </motion.div>
                                            )}

                                            {step === 2 && (
                                                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-2">
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.contact}
                                                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                                        className="w-full px-4 py-3 bg-[#110404] border border-red-900/30 rounded-sm focus:border-brand-neon focus:ring-1 focus:ring-brand-neon text-brand-text text-sm outline-none font-body transition-all"
                                                        placeholder="E-mail de acesso root"
                                                    />
                                                </motion.div>
                                            )}

                                            {step === 3 && (
                                                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-2">
                                                    <select
                                                        required
                                                        value={formData.level}
                                                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                                        className="w-full px-4 py-3 bg-[#110404] border border-red-900/30 rounded-sm focus:border-brand-neon focus:ring-1 focus:ring-brand-neon text-brand-text text-sm outline-none font-body transition-all appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled className="text-brand-muted">Nível de Operação</option>
                                                        <option value="iniciante">Escalando de 0 a 10k</option>
                                                        <option value="intermediario">Operação de 10k a 50k</option>
                                                        <option value="avancado">High Ticket (50k+)</option>
                                                    </select>
                                                </motion.div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-sm tracking-wide rounded-sm mt-4 transition-all flex justify-center items-center shadow-[0_0_15px_rgba(239,68,68,0.3)] disabled:opacity-70 disabled:cursor-not-allowed uppercase"
                                            >
                                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Eu Quero a Verdade"}
                                            </button>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center space-y-4 py-6"
                                        >
                                            <div className="w-12 h-12 bg-brand-neon/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-neon/50">
                                                <CheckCircle className="w-6 h-6 text-brand-neon" />
                                            </div>
                                            <h4 className="text-xl font-heading font-bold text-brand-text">Acesso Liberado</h4>
                                            <p className="text-brand-muted text-sm pb-4">Seus dados foram verificados.</p>
                                            <button
                                                onClick={handleCheckout}
                                                className="px-8 py-3 bg-brand-neon text-black font-heading font-extrabold uppercase tracking-widest rounded-sm hover:brightness-110 shadow-[0_0_20px_rgba(42,245,152,0.4)] transition-all flex items-center justify-center gap-2 mx-auto"
                                            >
                                                Finalizar Pagamento <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className="pt-6 flex justify-center text-sm font-mono text-brand-muted gap-2">
                                   <ShieldAlert className="w-4 h-4 text-brand-neon" /> Seguro (SSL)
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
`;

    fs.writeFileSync('src/components/PricingSection.tsx', finalBeforeStr + newContainer + afterStr);
    console.log("Pricing updated successfully");
} else {
    console.log("Could not find markers.");
}
