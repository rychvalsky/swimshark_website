import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSetting } from '../services/settingsService';

const SummerCamp = () => {
    const [campDates, setCampDates] = useState([]);

    useEffect(() => {
        const fetchDates = async () => {
            const dates = await getSetting('camp_dates', []);
            setCampDates(dates || []);
        };
        fetchDates();
    }, []);

    const formatSlovakDate = (dateString, includeYear = false) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}. ${month}.${includeYear ? ' ' + year : ''}`;
    };
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-background-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="mb-6 font-display font-black leading-tight tracking-tight text-text-main dark:text-white drop-shadow-sm">
                                <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Letné plavecké</span>
                                <span className="block text-5xl sm:text-6xl lg:text-7xl text-orange-500">
                                    tábory
                                </span>
                            </h1>
                            <p className="mb-10 text-lg md:text-xl text-text-secondary dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Nezabudnuteľné leto plné zábavy, športu a nových priateľstiev.
                                Doprajte deťom <span className="font-bold text-orange-500">prázdniny v pohybe</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/apply-camp" className="group h-14 px-8 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-0.5">
                                    Prihlásiť na tábor
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-500/10 border-8 border-white dark:border-gray-800 -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1mjsNc527ZzpI8rseamdb5vuJzdBU7h1XM5rE-U11H5guqYMGc-XTiICcRihufKGx-HLBjv15ixUdro5fJvEnn8ZDUoyGXfzT1-BLziBib585h0GNJ6B3kp5nAU72smFBRHCk0SLd1_A0gxhBvs9nYeII2qwsZFVzTJ8m6S-0zNnUrZ8OdrP1pSL4h5ONBPCB-C5x730QsX-JvfRgccJgZRb5EYk1OPRFbAhDfKJnKZGPmKQXl3v2ZyMDrWmAVex2KXyKSIdsDQk"
                                    alt="Summer Camp"
                                    className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
                                />
                            </div>
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-[3rem] rotate-3 scale-95 opacity-20 blur-sm -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="layout-container py-20 px-4 md:px-10 lg:px-20">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="material-symbols-outlined text-orange-500 text-5xl">camping</span>
                                <div>
                                    <h2 className="text-3xl font-bold text-text-main dark:text-white">Denný plavecký tábor</h2>
                                    <p className="text-text-secondary dark:text-gray-400 text-lg">Pre deti od 5 do 12 rokov</p>
                                </div>
                            </div>

                            <p className="text-text-secondary dark:text-gray-400 mb-10 leading-relaxed text-lg">
                                Náš denný tábor je ideálnou voľbou pre aktívne trávenie letných prázdnin. Deti sa pod vedením skúsených trénerov zdokonalia v plávaní, užijú si kopec zábavy pri hrách na suchu aj vo vode a nájdu si nových kamarátov. Program je koncipovaný tak, aby bol vyvážený medzi športovou aktivitou a oddychom.
                            </p>

                            <div className="mb-10 bg-blue-50 dark:bg-blue-900/10 p-6 md:p-8 rounded-3xl border border-blue-100 dark:border-blue-500/20">
                                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">Termíny 2026</h3>
                                <p className="text-text-secondary dark:text-gray-400 mb-6 text-lg">Turnusy sú týždenné (Pondelok - Piatok).</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Array.isArray(campDates) && campDates.length > 0 ? (
                                        campDates.map((date, index) => (
                                            <div
                                                key={index}
                                                className={`px-6 py-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between transition-all hover:shadow-md gap-4 ${date.isFull
                                                    ? 'bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 opacity-80'
                                                    : 'bg-white border-blue-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm'
                                                    }`}
                                            >
                                                <div className="text-center sm:text-left">
                                                    <span className="block text-xs font-black uppercase tracking-widest text-orange-500 mb-1">
                                                        {index + 1}. Turnus
                                                    </span>
                                                    <span className={`font-bold text-xl ${date.isFull ? 'text-gray-500' : 'text-primary'}`}>
                                                        {formatSlovakDate(date.start)} - {formatSlovakDate(date.end)}
                                                    </span>
                                                </div>
                                                {date.isFull ? (
                                                    <span className="text-xs font-black text-white bg-red-500 px-3 py-1.5 rounded-lg uppercase tracking-wider whitespace-nowrap">
                                                        Obsadené
                                                    </span>
                                                ) : (
                                                    <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-lg uppercase tracking-wider whitespace-nowrap">
                                                        Voľné
                                                    </span>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-span-full text-center py-8 text-text-secondary dark:text-gray-400 italic text-lg">
                                            Termíny na rok 2026 budú čoskoro zverejnené.
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl border border-orange-100 dark:border-orange-500/20">
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-500">schedule</span>
                                        Harmonogram dňa
                                    </h3>
                                    <ul className="space-y-3 text-text-secondary dark:text-gray-400">
                                        <li className="flex gap-3">
                                            <span className="font-bold text-text-main dark:text-white w-16">08:00</span>
                                            Príchod detí
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-text-main dark:text-white w-16">09:00</span>
                                            Dopoludňajší plavecký tréning
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-text-main dark:text-white w-16">10:30</span>
                                            Desiata
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-text-main dark:text-white w-16">11:00</span>
                                            Hry a aktivity na suchu
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-text-main dark:text-white w-16">12:30</span>
                                            Obed a oddych
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-text-main dark:text-white w-16">14:00</span>
                                            Popoludňajší tréning / Hry vo vode
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-text-main dark:text-white w-16">15:30</span>
                                            Olovrant
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-bold text-text-main dark:text-white w-16">16:00</span>
                                            Odchod domov
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-500">check_circle</span>
                                        Čo je v cene?
                                    </h3>
                                    <ul className="space-y-2 text-text-secondary dark:text-gray-400">
                                        <li className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                                            2x denne plavecký výcvik
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                                            Strava 3x denne (desiata, obed, olovrant)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                                            Pitný režim počas celého dňa
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                                            Vstupy do bazéna
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                                            Animátori a kvalifikovaní tréneri
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                                            Tričko a plavecká čiapka
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <Link to="/apply-camp" className="w-full md:w-auto flex items-center justify-center rounded-xl h-14 px-12 bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Nezáväzná prihláška na tábor
                                </Link>
                                <p className="text-sm text-text-secondary dark:text-gray-500">
                                    Po vyplnení prihlášky vás budeme kontaktovať pre potvrdenie termínu.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SummerCamp;
