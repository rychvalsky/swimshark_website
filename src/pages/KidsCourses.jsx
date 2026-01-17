import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSetting } from '../services/settingsService';

const KidsCourses = () => {
    const [prices, setPrices] = useState({
        preschool: { price1: '120 €', price2: '225 €' },
        group: { price1: '110 €', price2: '210 €' },
        conditioning: { price1: '100 €', price2: '195 €' },
        teens: { price1: '100 €', price2: '195 €' }
    });

    useEffect(() => {
        const fetchPrices = async () => {
            const loadedPrices = await getSetting('course_prices', null);
            if (loadedPrices) {
                setPrices(loadedPrices);
            }
        };
        fetchPrices();
    }, []);

    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-background-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 dark:bg-cyan-900/20 px-4 py-1.5 border border-cyan-100 dark:border-cyan-800 mb-8 self-start">
                                <span className="text-sm font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Aquapark Delňa Prešov</span>
                            </div>
                            <h1 className="mb-6 font-display font-black leading-tight tracking-tight text-text-main dark:text-white drop-shadow-sm">
                                <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Skupinové kurzy pre</span>
                                <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary">
                                    deti a  dorast
                                </span>
                            </h1>
                            <p className="mb-10 text-lg md:text-xl text-text-secondary dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Zábavné a efektívne tréningy pre všetky vekové kategórie.
                                <span className="font-bold text-primary"> Od prvých temp až po kondičné plávanie</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/apply-kids" className="group h-14 px-8 flex items-center justify-center rounded-full bg-primary hover:bg-primary-dark text-white text-lg font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,194,203,0.39)] hover:shadow-[0_6px_20px_rgba(0,194,203,0.23)] hover:-translate-y-0.5">
                                    Prihlásiť dieťa
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYtWBOgVse5FyvbMHb1vvxKQQqsUZtRUdPSuwYjEzld6m2dq7XoQp-3_Rk6Bt_-3mKXv2AFK9r5T6rkw3-GOd3UZZLfZY_rQInj_AGwD4vOH3J2mfcj11_AfDq0QU4h5-1SLACXy3mS1c5HM3N-o1froiQeCF99xIBfIo_EZ8u7Bk1QJN0ZAZ8hmmRAyJzVdmKY-d7jkfT_tcYIBDobWMRjxeoqiEWVlPl1ixaqEviP2x1PuoF_FBJc_7zNQokkdTN-6IRLls6XHY"
                                    alt="Kids Swimming"
                                    className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
                                />
                            </div>
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-[3rem] -rotate-3 scale-95 opacity-20 blur-sm -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="layout-container py-20 px-4 md:px-10 lg:px-20">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-text-main dark:text-white mb-4">Naša ponuka kurzov</h2>
                        <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>


                    {/* Pricing Section */}
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-black text-text-main dark:text-white mb-4">Cenník kurzov</h2>
                            <p className="text-text-secondary dark:text-gray-400 text-lg">Investícia do zdravia a bezpečnosti vašich detí.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { title: '3 - 4 ročné deti', price1: prices.preschool.price1, price2: prices.preschool.price2, color: 'blue' },
                                { title: 'Skupinové plávanie', price1: prices.group.price1, price2: prices.group.price2, color: 'cyan' },
                                { title: 'Kondičné plávanie', price1: prices.conditioning.price1, price2: prices.conditioning.price2, color: 'indigo' },
                                { title: 'Plávanie 11+', price1: prices.teens.price1, price2: prices.teens.price2, color: 'orange' },
                            ].map((item, index) => (
                                <div key={index} className={`bg-white dark:bg-surface-dark p-6 rounded-2xl border border-${item.color}-100 dark:border-${item.color}-900/30 shadow-sm hover:shadow-md transition-all`}>
                                    <h3 className={`text-xl font-bold text-${item.color}-600 dark:text-${item.color}-400 mb-4 h-14 flex items-center`}>{item.title}</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-gray-800">
                                            <span className="text-sm text-text-secondary dark:text-gray-400">1x týždenne</span>
                                            <span className="text-lg font-bold text-text-main dark:text-white">{item.price1}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-text-secondary dark:text-gray-400">2x týždenne</span>
                                            <span className="text-lg font-bold text-text-main dark:text-white">{item.price2}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {/* 1. Kurz pre 3 - 4 ročné deti */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col">
                            <div className="h-40 bg-blue-100 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center opacity-80 hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-surface-dark to-transparent"></div>
                                <h3 className="relative z-10 text-2xl font-black text-primary-dark tracking-tight">Kurz pre 3 - 4 ročné deti</h3>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">groups</span>
                                        MAX 3 deti
                                    </span>
                                </div>
                                <p className="text-text-secondary dark:text-gray-400 mb-6 leading-relaxed flex-1">
                                    Cieľom kurzu je oboznámenie detí s vodným prostredím, odstránenie strachu z vody a získanie základných zručností ako sú ponáranie, skoky do vody, splývanie a základy plávania.
                                </p>
                            </div>
                        </div>

                        {/* 2. Skupinové plávanie */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col">
                            <div className="h-40 bg-cyan-100 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center opacity-80 hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596464716127-f9a087413579?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-surface-dark to-transparent"></div>
                                <h3 className="relative z-10 text-2xl font-black text-cyan-900 tracking-tight">Skupinové plávanie</h3>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">groups</span>
                                        MAX 4-5 detí
                                    </span>
                                </div>
                                <p className="text-text-secondary dark:text-gray-400 mb-6 leading-relaxed flex-1">
                                    Cieľom kurzu plávania pre neplavcov je osvojenie si základných plaveckých zručností – orientácia vo vode, správne dýchanie a osvojenie si techník prsia, znak, kraul. Pre „lepších plavcov“ zdokonalenie techník. Kurz je zakončený súťažami a diplomom.
                                </p>
                            </div>
                        </div>

                        {/* 3. Kondičné plávanie */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col">
                            <div className="h-40 bg-indigo-100 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center opacity-80 hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551241607-4286dc5cee01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-surface-dark to-transparent"></div>
                                <h3 className="relative z-10 text-2xl font-black text-indigo-900 tracking-tight">Kondičné plávanie</h3>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">groups</span>
                                        MAX 6-7 detí
                                    </span>
                                </div>
                                <p className="text-text-secondary dark:text-gray-400 mb-6 leading-relaxed flex-1">
                                    Pre tých, ktorí sa chcú zdokonaliť, ale nechcú robiť výkonnostný šport. Cieľom je zlepšiť techniku, vytrvalosť a rýchlosť využitím prvkov športového tréningu. Program je obohatený o základy potápania, vodného póla, synchronizovaného plávania a záchranárstva.
                                </p>
                            </div>
                        </div>

                        {/* 4. Plávanie 11+ */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col">
                            <div className="h-40 bg-orange-100 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center opacity-80 hidden md:block" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}></div>
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-surface-dark to-transparent"></div>
                                <h3 className="relative z-10 text-2xl font-black text-orange-900 tracking-tight">Plávanie 11+</h3>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">groups</span>
                                        MAX 6-7 detí
                                    </span>
                                </div>
                                <p className="text-text-secondary dark:text-gray-400 mb-6 leading-relaxed flex-1">
                                    Pre deti so zvládnutým zdokonaľovacím výcvikom. Forma tréningu v trvaní 60 minút. Odstraňovanie technických nedostatkov, zvyšovanie fyzickej zdatnosti a kapacity pľúc.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {/* What to bring */}
                        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-2xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">backpack</span>
                                Čo si priniesť
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-text-secondary dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                                    <div>
                                        <strong className="text-text-main dark:text-gray-200 block">Plavky</strong>
                                        U dievčat nie sú vhodné dvojdielne plavky a u chlapcov bermudy.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-text-secondary dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                                    <div>
                                        <strong className="text-text-main dark:text-gray-200 block">Obuv</strong>
                                        Protišmyková obuv k bazénu.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-text-secondary dark:text-gray-400">
                                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                                    <div>
                                        <strong className="text-text-main dark:text-gray-200 block">Uterák</strong>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 text-text-secondary dark:text-gray-400">
                                    <span className="material-symbols-outlined text-gray-400 mt-0.5">help</span>
                                    <div>
                                        <strong className="text-text-main dark:text-gray-200 block">Okuliare</strong>
                                        Nie sú povinné.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Lesson Plan */}
                        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-2xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                                Priebeh lekcie
                            </h3>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 h-5 w-5 rounded-full border-2 border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800 ml-0.5 mt-1"></div>
                                    <div className="ml-10">
                                        <h4 className="text-lg font-bold text-text-main dark:text-white">Pred začiatkom</h4>
                                        <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                                            Príchod min. 10 minút vopred. Inštruktori prevezmú deti a pomôžu im v šatni.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 h-5 w-5 rounded-full border-2 border-primary bg-primary ml-0.5 mt-1 animate-pulse"></div>
                                    <div className="ml-10">
                                        <h4 className="text-lg font-bold text-text-main dark:text-white">Počas lekcie</h4>
                                        <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                                            5-10 min rozcvička a sprcha<br />
                                            45 min plavecká výuka<br />
                                            5 min hry vo vode
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex items-start group">
                                    <div className="absolute left-0 h-5 w-5 rounded-full border-2 border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800 ml-0.5 mt-1"></div>
                                    <div className="ml-10">
                                        <h4 className="text-lg font-bold text-text-main dark:text-white">Po lekcii</h4>
                                        <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
                                            Deti sa osprchujú a rodičia si ich prevezmú v šatni.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Schedule Info */}
                    <div className="bg-primary/5 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-6">Kedy plávame?</h2>
                        <div className="overflow-hidden bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8 text-left">
                            <div className="bg-primary/10 dark:bg-gray-800 p-4 border-b border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-text-main dark:text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">place</span>
                                    Aquapark Delňa, Prešov
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm md:text-base">
                                    <thead className="bg-gray-50 dark:bg-gray-800/50 text-text-secondary dark:text-gray-400 font-medium">
                                        <tr>
                                            <th className="px-6 py-4 text-left">Deň</th>
                                            <th className="px-6 py-4 text-left">Čas</th>
                                            <th className="px-6 py-4 text-left">Kurz</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {/* Pondelok */}
                                        <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-text-main dark:text-white whitespace-nowrap">Pondelok</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-text-secondary dark:text-gray-300">
                                                <div className="flex flex-col gap-2">
                                                    <span>16:30 - 17:30</span>
                                                    <span>16:30 - 17:30</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary dark:text-gray-300">
                                                <div className="flex flex-col gap-2">
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                                        Skupinové plávanie
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                                        Kurz pre 3 - 4 ročné deti
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Utorok */}
                                        <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-text-main dark:text-white whitespace-nowrap">Utorok</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-text-secondary dark:text-gray-300">
                                                <div className="flex flex-col gap-2">
                                                    <span>17:00 - 18:00</span>
                                                    <span>17:00 - 18:00</span>
                                                    <span>17:00 - 18:00</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary dark:text-gray-300">
                                                <div className="flex flex-col gap-2">
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                                        Skupinové plávanie
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                                        Kondičné plávanie
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                                        Plávanie 11+
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Streda */}
                                        <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-text-main dark:text-white whitespace-nowrap">Streda</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-text-secondary dark:text-gray-300">
                                                18:30 - 19:30
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary dark:text-gray-300">
                                                <span className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                                    Skupinové plávanie
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Štvrtok */}
                                        <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-text-main dark:text-white whitespace-nowrap">Štvrtok</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-text-secondary dark:text-gray-300">
                                                <div className="flex flex-col gap-2">
                                                    <span>16:30 - 17:30</span>
                                                    <span>16:30 - 17:30</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary dark:text-gray-300">
                                                <div className="flex flex-col gap-2">
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                                        Skupinové plávanie
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                                        Kurz pre 3 - 4 ročné deti
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Piatok */}
                                        <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-text-main dark:text-white whitespace-nowrap">Piatok</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-text-secondary dark:text-gray-300">
                                                <div className="flex flex-col gap-2">
                                                    <span>17:00 - 18:00</span>
                                                    <span>17:00 - 18:00</span>
                                                    <span>17:00 - 18:00</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary dark:text-gray-300">
                                                <div className="flex flex-col gap-2">
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                                        Skupinové plávanie
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                                        Kondičné plávanie
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                                        Plávanie 11+
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto mb-10">
                            Konkrétne dni a časy pre vašu skupinu si dohodnete pri zápise.
                        </p>
                        <Link to="/apply-kids" className="inline-flex items-center justify-center rounded-xl h-14 px-10 bg-primary hover:bg-primary-dark text-white text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Prihlásiť dieťa na kurz
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default KidsCourses;
