export default function Schedule() {
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[400px] w-full p-4 lg:p-8 bg-slate-900">
                <div className="absolute inset-0 z-0 hidden md:block">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJqlcFbkKKsj81YazSMVlOgIcDg1arhuIbrq0_PrRMVTRNazgazLfB62dN5ui7tAQ_QA_8HYBwXVDwA7d9fFFq3pxyknfgsmtS7eSseLz1L1zx1VPRQRzN7YXcq9v1FVe3Ki3aldomGHT-uNY8SlD0O16aA6HRQ_9rGGn_8lKU28pdAGYhSLvbLMSQlCwkKwiXVUm9S089aPuZmO0Wci30Mv9Yd91tdPPho4aNGxzRNR1LiJ8D_Gu2mhXKt4iAbjif8VRjFBBl4Eo"
                        alt="Background"
                        className="h-full w-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/60"></div>
                </div>
                <div className="max-w-[800px] flex flex-col gap-6 text-center z-10">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                        Nájdite si svoj rytmus vo vode
                    </h1>
                    <h2 className="text-slate-100 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                        Kompletný rozvrh lekcií a transparentný cenník na jednom mieste.
                        Začnite plávať ešte dnes.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                        <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-base font-bold shadow-lg shadow-blue-900/30">
                            Pozrieť rozvrh
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all text-white text-base font-bold">
                            Stiahnuť cenník (PDF)
                        </button>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-12 px-4 lg:px-40 flex flex-col items-center w-full">
                <div className="w-full max-w-[1200px]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Aktuálny Rozvrh</h2>
                        {/* Filters */}
                        <div className="flex gap-2 flex-wrap">
                            <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-sm transition-colors">
                                <span className="text-sm font-semibold">Všetky</span>
                            </button>
                            <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 px-5 transition-colors">
                                <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">Deti 3-6r</span>
                            </button>
                            <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 px-5 transition-colors">
                                <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">Školáci</span>
                            </button>
                            <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 px-5 transition-colors">
                                <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">Dospelí</span>
                            </button>
                        </div>
                    </div>
                    {/* Schedule Table Container */}
                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-surface-light dark:bg-surface-dark">
                        <table className="w-full min-w-[1000px] border-collapse">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                    <th className="px-6 py-4 text-left text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider w-24 sticky left-0 bg-slate-50 dark:bg-slate-800 z-10 border-r border-slate-200 dark:border-slate-700">Čas</th>
                                    <th className="px-4 py-4 text-center text-slate-900 dark:text-white text-base font-bold w-[14%]">Pondelok</th>
                                    <th className="px-4 py-4 text-center text-slate-900 dark:text-white text-base font-bold w-[14%]">Utorok</th>
                                    <th className="px-4 py-4 text-center text-slate-900 dark:text-white text-base font-bold w-[14%]">Streda</th>
                                    <th className="px-4 py-4 text-center text-slate-900 dark:text-white text-base font-bold w-[14%]">Štvrtok</th>
                                    <th className="px-4 py-4 text-center text-slate-900 dark:text-white text-base font-bold w-[14%]">Piatok</th>
                                    <th className="px-4 py-4 text-center text-slate-900 dark:text-white text-base font-bold w-[14%] text-primary">Sobota</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                {/* Row 16:00 */}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-sm font-medium sticky left-0 bg-surface-light dark:bg-surface-dark z-10 border-r border-slate-200 dark:border-slate-700">16:00</td>
                                    <td className="px-2 py-3">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/50 transition">
                                            Žabky (3-4r)<br /><span className="opacity-75 font-normal">Bazén A</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/50 transition">
                                            Žabky (3-4r)<br /><span className="opacity-75 font-normal">Bazén A</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3">
                                        <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-teal-200 dark:hover:bg-teal-900/50 transition">
                                            Korytnačky (5-6r)<br /><span className="opacity-75 font-normal">Bazén B</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                </tr>
                                {/* Row 17:00 */}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-sm font-medium sticky left-0 bg-surface-light dark:bg-surface-dark z-10 border-r border-slate-200 dark:border-slate-700">17:00</td>
                                    <td className="px-2 py-3">
                                        <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-teal-200 dark:hover:bg-teal-900/50 transition">
                                            Korytnačky (5-6r)<br /><span className="opacity-75 font-normal">Bazén B</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3">
                                        <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition">
                                            Delfíny (7+)<br /><span className="opacity-75 font-normal">Veľký bazén</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3">
                                        <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition">
                                            Delfíny (7+)<br /><span className="opacity-75 font-normal">Veľký bazén</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3">
                                        <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-amber-200 dark:hover:bg-amber-900/50 transition border border-amber-200 dark:border-amber-800">
                                            Súkromné lekcie<br /><span className="opacity-75 font-normal">Rezervácia</span>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 18:00 */}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-sm font-medium sticky left-0 bg-surface-light dark:bg-surface-dark z-10 border-r border-slate-200 dark:border-slate-700">18:00</td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3">
                                        <div className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                                            Kondičné plávanie<br /><span className="opacity-75 font-normal">Dráha 1-3</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3">
                                        <div className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                                            Kondičné plávanie<br /><span className="opacity-75 font-normal">Dráha 1-3</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3"></td>
                                </tr>
                                {/* Row 19:00 */}
                                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-sm font-medium sticky left-0 bg-surface-light dark:bg-surface-dark z-10 border-r border-slate-200 dark:border-slate-700">19:00</td>
                                    <td className="px-2 py-3">
                                        <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-900/50 transition">
                                            Dospelí - Začiatočníci<br /><span className="opacity-75 font-normal">Malý bazén</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3">
                                        <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-purple-200 dark:hover:bg-purple-900/50 transition">
                                            Dospelí - Pokročilí<br /><span className="opacity-75 font-normal">Veľký bazén</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                    <td className="px-2 py-3">
                                        <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 p-2 rounded-lg text-xs font-semibold text-center cursor-pointer hover:bg-rose-200 dark:hover:bg-rose-900/50 transition">
                                            Masters Pro<br /><span className="opacity-75 font-normal">Celý bazén</span>
                                        </div>
                                    </td>
                                    <td className="px-2 py-3"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            * Rozvrh sa môže meniť počas sviatkov. Pre individuálne lekcie nás prosím kontaktujte.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 px-4 lg:px-40 bg-slate-100 dark:bg-slate-900 w-full relative overflow-hidden" id="pricing">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="w-full max-w-[1200px] mx-auto relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-4">Transparentný Cenník</h2>
                        <p className="text-slate-600 dark:text-slate-300">
                            Žiadne skryté poplatky. Vyberte si balík, ktorý najviac vyhovuje vašim potrebám a cieľom.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {/* Card 1: Trial */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Na skúšku</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Ideálne pre prvé zoznámenie</p>
                            </div>
                            <div className="mb-6 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">15€</span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium">/ lekcia</span>
                            </div>
                            <ul className="flex flex-col gap-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>1 vstup (60 minút)</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Konzultácia s trénerom</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Zapožičanie pomôcok</span>
                                </li>
                            </ul>
                            <button className="w-full h-11 rounded-lg border border-primary text-primary hover:bg-primary/5 font-bold text-sm transition-colors">
                                Kúpiť vstup
                            </button>
                        </div>
                        {/* Card 2: Monthly (Popular) */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border-2 border-primary shadow-xl shadow-blue-500/10 flex flex-col relative transform md:-translate-y-4">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Najpopulárnejšie
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Mesačný kurz</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Pre pravidelných plavcov</p>
                            </div>
                            <div className="mb-6 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">50€</span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium">/ mesiac</span>
                            </div>
                            <ul className="flex flex-col gap-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>2x týždenne (8 vstupov)</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Garantované miesto v kurze</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Možnosť 1 náhrady lekcie</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Video analýza techniky</span>
                                </li>
                            </ul>
                            <button className="w-full h-11 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors shadow-lg shadow-blue-500/25">
                                Začať tento mesiac
                            </button>
                        </div>
                        {/* Card 3: Semester */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Sezóna - Polrok</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Najlepšia hodnota pre makačov</p>
                            </div>
                            <div className="mb-6 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">200€</span>
                                <span className="text-slate-500 dark:text-slate-400 font-medium">/ 5 mesiacov</span>
                            </div>
                            <ul className="flex flex-col gap-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Neobmedzený počet vstupov</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>SwimShark čiapka zdarma</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Prioritné rezervácie</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    <span>Zľava na súkromné lekcie</span>
                                </li>
                            </ul>
                            <button className="w-full h-11 rounded-lg border border-primary text-primary hover:bg-primary/5 font-bold text-sm transition-colors">
                                Stať sa členom
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800">
                <div className="max-w-4xl mx-auto bg-slate-900 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                    {/* Abstract waves */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
                    <div className="relative z-10 p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Neviete si vybrať?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                            Kontaktujte nás a my vám radi poradíme s výberom vhodného kurzu pre vás alebo vaše ratolesti.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-colors">
                                Kontaktovať nás
                            </button>
                            <button className="h-12 px-8 rounded-lg bg-transparent border border-slate-600 hover:border-slate-400 text-white font-bold transition-colors">
                                Časté otázky
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
