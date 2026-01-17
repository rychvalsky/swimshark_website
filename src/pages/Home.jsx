import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSetting } from '../services/settingsService';

export default function Home() {
    const [courseSeason, setCourseSeason] = useState('Nový detský');
    const [courseDates, setCourseDates] = useState('1. Február - 30. Apríl');

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const [season, dates] = await Promise.all([
                    getSetting('current_course_season', 'Nový detský'),
                    getSetting('current_course_dates', '1. Február - 30. Apríl')
                ]);
                setCourseSeason(season);
                setCourseDates(dates);
            } catch (error) {
                console.error('Failed to fetch settings:', error);
            }
        };
        fetchSettings();
    }, []);

    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-background-dark">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-neon-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-neon-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20 mb-8 self-start">
                                <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(0,194,203,0.8)]"></span>
                                <span className="text-sm font-bold uppercase tracking-widest text-primary-dark dark:text-primary">Letné kurzy otvorené</span>
                            </div>

                            <h1 className="mb-6 font-display font-black leading-tight tracking-tight text-text-main dark:text-white drop-shadow-sm">
                                <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Naučte sa</span>
                                <span className="block text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-secondary drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                                    plávať štýlovo
                                </span>
                            </h1>

                            <p className="mb-10 text-lg md:text-xl text-text-secondary dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Prémiové plavecké kurzy v bazéne s morskou vodou.
                                Zažite <span className="text-neon-secondary font-bold drop-shadow-[0_0_8px_rgba(255,0,255,0.4)]">leto plné istoty</span> a radosti z pohybu pod dohľadom expertov.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/classes" className="group h-14 px-8 flex items-center justify-center rounded-full bg-neon-primary hover:bg-cyan-400 text-black text-lg font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,255,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,255,0.6)] hover:-translate-y-0.5">
                                    <span className="material-symbols-outlined mr-2 group-hover:scale-110 transition-transform text-black">pool</span>
                                    Chcem plávať
                                </Link>
                                <Link to="/about" className="h-14 px-8 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-text-main dark:text-white text-lg font-bold hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300">
                                    Zistiť viac
                                </Link>
                            </div>

                            {/* Kids Course Alert Card */}
                            <div className="mt-12 p-8 rounded-3xl bg-neon-secondary/10 border-[3px] border-neon-secondary/30 flex flex-col items-center gap-4 max-w-xl mx-auto text-center shadow-[0_0_30px_rgba(255,0,255,0.15)] hover:scale-105 transition-transform duration-300">
                                <div className="h-16 w-16 rounded-full bg-neon-secondary text-white flex items-center justify-center shrink-0 shadow-lg shadow-neon-secondary/40 mb-2">
                                    <span className="material-symbols-outlined text-4xl">child_care</span>
                                </div>
                                <div className="flex-1 w-full">
                                    <h3 className="text-2xl font-display font-black text-text-main dark:text-white mb-3 uppercase tracking-wide">
                                        {courseSeason} kurz otvorený!
                                    </h3>
                                    <div className="flex items-center justify-center gap-4 text-text-secondary dark:text-gray-300 bg-white/50 dark:bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-3xl text-neon-primary">calendar_month</span>
                                            <span className="text-2xl font-black text-neon-primary tracking-tight">{courseDates}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/apply-kids" className="shrink-0 w-full sm:w-auto px-8 py-4 rounded-full bg-neon-secondary text-white text-lg font-bold shadow-lg shadow-neon-secondary/30 hover:bg-fuchsia-500 transition-all hover:shadow-neon-secondary/50 mt-2">
                                    Prihlásiť dieťa
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image - "Less bigger" and contained */}
                        <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-neon-primary/20 border-8 border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
                                    alt="Swimming pool"
                                    className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
                                />
                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[200px]">
                                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <span className="material-symbols-outlined">water_drop</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-text-muted font-bold uppercase">Teplota vody</div>
                                        <div className="text-xl font-black text-text-main">31°C</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background shape behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-primary to-neon-secondary rounded-[3rem] -rotate-3 scale-95 opacity-30 blur-sm -z-10"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats / Trust Indicators */}
            {/* Stats / Trust Indicators - Floating Glass Strip */}
            <section className="relative -mt-20 z-20 pb-16 lg:pb-24 px-4 pointer-events-none">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pointer-events-auto">
                        {[
                            { number: "500+", label: "Spokojných plavcov", color: "from-neon-primary to-cyan-500" },
                            { number: "15", label: "Certifikovaných trénerov", color: "from-neon-secondary to-fuchsia-600" },
                            { number: "3", label: "Moderné bazény", color: "from-neon-accent to-lime-500" },
                            { number: "100%", label: "Garancia spokojnosti", color: "from-emerald-400 to-emerald-500" }
                        ].map((stat, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-white/5 p-6 md:p-8 text-center shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:-translate-y-2 transition-transform duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative">
                                    <p className={`text-4xl lg:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b ${stat.color} mb-2 drop-shadow-sm`}>
                                        {stat.number}
                                    </p>
                                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-secondary dark:text-gray-300">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark relative">
                {/* Decorative Elements - Subtle gradients */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-neon-primary/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-neon-secondary/20 rounded-full blur-[120px]"></div>
                </div>

                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest border border-primary/20">
                            Prečo práve my?
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-text-main dark:text-white mb-6">
                            Kvalita, na ktorej <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-primary drop-shadow-[0_0_5px_rgba(0,255,255,0.6)]">záleží</span>
                        </h2>
                        <p className="text-xl text-text-secondary dark:text-gray-400 font-light leading-relaxed">
                            Vytvorili sme prostredie, kde sa spája technická precíznosť s radosťou z pohybu. Každý detail je prispôsobený pre váš maximálny komfort.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-neon-primary/30 hover:-translate-y-1">
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative h-full bg-surface-light dark:bg-gray-900/90 rounded-[2.3rem] p-8 lg:p-10 flex flex-col gap-6 overflow-hidden">
                                <div className="w-20 h-20 rounded-2xl bg-neon-primary/10 flex items-center justify-center text-neon-primary group-hover:bg-neon-primary group-hover:text-black transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-neon-primary/30">
                                    <span className="material-symbols-outlined !text-[40px]">verified</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-text-main dark:text-white mb-3">Expertní Inštruktori</h3>
                                    <p className="text-text-secondary dark:text-gray-400 leading-relaxed font-light">
                                        Náš tím tvoria certifikovaní tréneri s rokmi skúseností. Ich prístup je trpezlivý, odborný a vždy zameraný na individuálne potreby plavca.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-neon-secondary/30 hover:-translate-y-1">
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-secondary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative h-full bg-surface-light dark:bg-gray-900/90 rounded-[2.3rem] p-8 lg:p-10 flex flex-col gap-6 overflow-hidden">
                                <div className="w-20 h-20 rounded-2xl bg-neon-secondary/10 flex items-center justify-center text-neon-secondary group-hover:bg-neon-secondary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-neon-secondary/30">
                                    <span className="material-symbols-outlined !text-[40px]">groups</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-text-main dark:text-white mb-3">Malé Skupiny</h3>
                                    <p className="text-text-secondary dark:text-gray-400 leading-relaxed font-light">
                                        Garantujeme maximálnu pozornosť pre každého. V malých skupinách dosahujeme rýchlejší progres a bezpečnejšie prostredie pre výučbu.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-neon-accent/30 hover:-translate-y-1">
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative h-full bg-surface-light dark:bg-gray-900/90 rounded-[2.3rem] p-8 lg:p-10 flex flex-col gap-6 overflow-hidden">
                                <div className="w-20 h-20 rounded-2xl bg-neon-accent/10 flex items-center justify-center text-neon-accent group-hover:bg-neon-accent group-hover:text-black transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-neon-accent/30">
                                    <span className="material-symbols-outlined !text-[40px]">water_ec</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-text-main dark:text-white mb-3">Moderné Priestory</h3>
                                    <p className="text-text-secondary dark:text-gray-400 leading-relaxed font-light">
                                        Bazény so slanou vodou šetrnou k pokožke a očiam. Najnovšie technológie filtrácie a stabilná teplota 31°C po celý rok.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-20 lg:py-32 bg-white dark:bg-[#0d141b] relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-3xl">
                            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 text-accent-dark dark:text-accent font-bold text-xs uppercase tracking-widest border border-accent/20">
                                Vyberte si svoje tempo
                            </div>
                            <h2 className="text-4xl font-display font-black tracking-tight text-text-main dark:text-white sm:text-6xl">
                                Naše Kurzy
                            </h2>
                            <p className="mt-6 text-xl text-text-secondary font-light max-w-2xl">
                                Od prvých temp až po profesionálny tréning. Programy prispôsobené pre každú úroveň.
                            </p>
                        </div>
                        <Link to="/classes" className="hidden md:flex items-center gap-2 text-neon-primary font-bold text-lg hover:text-cyan-400 transition-all group px-6 py-3 rounded-full hover:bg-neon-primary/10 border border-transparent hover:border-neon-primary/30">
                            Zobraziť všetky kurzy
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Course Card 1 */}
                        <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-[2.5rem] p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-100 dark:hover:shadow-none hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqnyhFtnjRR-ft1EwE3ZMr8Q5ddUC2EtnUjToJAJQ43-vZg4PzOsbn1GaNXflKDmrx676u2wSCqsuhpG3SBQ998c491xdvGyKC46l1UUnEC964RNMH4RRqiGowCo4NG10MiVKpACXD5ZjaVVyo8Dd6uNbRY_aygs7F-x3kjBXwFrKeHHJeULcOho_hUc4h_5l0gZrmDcJOtGxmSGsTi9Qtfy9AjqxTWO87q9xBGX5KGnkkr_oFbE2cmNy9e2oYYk18tUktpaRe-e8"
                                    alt="Baby Shark Class"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm text-text-main px-4 py-1.5 text-sm font-bold shadow-lg">
                                        Pre deti
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col px-4 pb-4">
                                <div className="mb-3 flex items-center gap-2 text-amber-400">
                                    <span className="material-symbols-outlined text-xl fill-current">stars</span>
                                    <span className="text-sm font-bold text-text-muted">4.9 (120+ hodnotení)</span>
                                </div>
                                <h3 className="mb-3 text-3xl font-display font-bold text-text-main dark:text-white group-hover:text-neon-primary transition-colors">Baby Shark</h3>
                                <p className="mb-8 flex-1 text-text-secondary dark:text-gray-400 font-light leading-relaxed">
                                    Zábavné zoznámenie s vodou pre najmenších (3-5 rokov). Hry, bezpečnosť a základné pohyby.
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="block text-sm text-text-muted">Cena kurzu</span>
                                        <span className="text-2xl font-bold text-text-main dark:text-white">89€ <span className="text-sm font-normal text-text-muted">/ mesiac</span></span>
                                    </div>
                                    <button className="h-12 w-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-text-main dark:text-white group-hover:bg-neon-primary group-hover:text-black transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-neon-primary/50">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Course Card 2 */}
                        <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-[2.5rem] p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-100 dark:hover:shadow-none hover:-translate-y-2 border border-gray-100 dark:border-gray-800 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-secondary/30 z-20">
                                Najobľúbenejšie
                            </div>
                            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 ring-4 ring-neon-secondary/20 group-hover:ring-neon-secondary/50 transition-all">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1mjsNc527ZzpI8rseamdb5vuJzdBU7h1XM5rE-U11H5guqYMGc-XTiICcRihufKGx-HLBjv15ixUdro5fJvEnn8ZDUoyGXfzT1-BLziBib585h0GNJ6B3kp5nAU72smFBRHCk0SLd1_A0gxhBvs9nYeII2qwsZFVzTJ8m6S-0zNnUrZ8OdrP1pSL4h5ONBPCB-C5x730QsX-JvfRgccJgZRb5EYk1OPRFbAhDfKJnKZGPmKQXl3v2ZyMDrWmAVex2KXyKSIdsDQk"
                                    alt="Junior Shark Class"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm text-text-main px-4 py-1.5 text-sm font-bold shadow-lg">
                                        6-12 rokov
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col px-4 pb-4">
                                <div className="mb-3 flex items-center gap-2 text-amber-400">
                                    <span className="material-symbols-outlined text-xl fill-current">stars</span>
                                    <span className="text-sm font-bold text-text-muted">5.0 (250+ hodnotení)</span>
                                </div>
                                <h3 className="mb-3 text-3xl font-display font-bold text-text-main dark:text-white group-hover:text-neon-secondary transition-colors">Junior Shark</h3>
                                <p className="mb-8 flex-1 text-text-secondary dark:text-gray-400 font-light leading-relaxed">
                                    Pokročilé techniky plávania pre deti vo veku 6-12 rokov. Zdokonaľovanie štýlov a kondície.
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="block text-sm text-text-muted">Cena kurzu</span>
                                        <span className="text-2xl font-bold text-text-main dark:text-white">99€ <span className="text-sm font-normal text-text-muted">/ mesiac</span></span>
                                    </div>
                                    <button className="h-12 w-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-text-main dark:text-white group-hover:bg-neon-secondary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-neon-secondary/50">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Course Card 3 */}
                        <div className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-[2.5rem] p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-100 dark:hover:shadow-none hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
                            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtG053A9OE8rIlXEJG_cZrPoJhylQ-id0Jyzhz_UaN-OFDuYzWJ8e2sUESFDsWnDtaru30-IBqnXWCSbw7lpBTj7tfNr2EKCD_dUfZpqml17baNAbrm0u10zM7gtEC-k4CxjpBd8jp26Zi6Zluc0IcZloXS7C0pCH5Kp7N3gTOlYbfaulMnNoB4XYgQHdn7haTJvk_ziYkVfre3Y221ZsOP21BeR0D2a_h4eyFiKtA_r36_RD2gdbbAsXyD0cjIRzf3YoxGviWFbk"
                                    alt="Pro Shark Class"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm text-text-main px-4 py-1.5 text-sm font-bold shadow-lg">
                                        Pre dospelých
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col px-4 pb-4">
                                <div className="mb-3 flex items-center gap-2 text-amber-400">
                                    <span className="material-symbols-outlined text-xl fill-current">stars</span>
                                    <span className="text-sm font-bold text-text-muted">4.8 (85+ hodnotení)</span>
                                </div>
                                <h3 className="mb-3 text-3xl font-display font-bold text-text-main dark:text-white group-hover:text-neon-accent transition-colors">Pro Shark</h3>
                                <p className="mb-8 flex-1 text-text-secondary dark:text-gray-400 font-light leading-relaxed">
                                    Intenzívny tréning pre dospelých a pokročilých plavcov. Zameranie na vytrvalosť a techniku.
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="block text-sm text-text-muted">Cena kurzu</span>
                                        <span className="text-2xl font-bold text-text-main dark:text-white">119€ <span className="text-sm font-normal text-text-muted">/ mesiac</span></span>
                                    </div>
                                    <button className="h-12 w-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-text-main dark:text-white group-hover:bg-neon-accent group-hover:text-black transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-neon-accent/50">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-[400px]">format_quote</span>
                </div>
                <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-10 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                            <span className="material-symbols-outlined text-4xl">format_quote</span>
                        </div>
                        <blockquote className="text-3xl md:text-5xl font-display font-medium leading-tight text-text-main dark:text-gray-200 mb-12 drop-shadow-sm">
                            "SwimShark zmenil prístup môjho syna k vode. Z ustráchaného dieťaťa je dnes <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-secondary to-purple-500 font-bold drop-shadow-[0_0_8px_rgba(255,0,255,0.4)]">sebavedomý plavec</span>."
                        </blockquote>
                        <div className="flex flex-col items-center gap-4">
                            <div className="h-20 w-20 p-1 rounded-full bg-gradient-to-br from-neon-primary to-neon-secondary">
                                <img alt="Woman portrait" className="h-full w-full object-cover rounded-full border-4 border-white dark:border-gray-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc5MOva5WkUVJJPuQpk7z139ma69dRLOB--ty0gx9PYylj1Xv__Ya79qw1_XtExerqSrarUqO2xoWUPaeMlkEJDg2mAS_b_dJ-wfg-_YAPqD1kQdbMCpDMBABZZ3cVZftbOXvQx7PaH_Gp3DrsRaAyRSCkyS-35L1E_nPx4nlWznEfoYpVQSBTATxAIBPHiZNGI5PNYZ36Oeu5DORT6O54C-Mc-fpRR3Loof28ekKHxZmOZELMb_BKGexPbe5KETIPhEc16-QstH8" />
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-text-main dark:text-white">Jana Nováková</div>
                                <div className="text-sm font-bold text-primary uppercase tracking-wider mt-1">Mama 6-ročného Jakuba</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden py-32 mx-4 mb-4 rounded-[3rem] bg-gray-900">
                <div className="absolute inset-0 z-0 hidden md:block">
                    <img
                        src="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop"
                        alt="Underwater swimming"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-neon-primary/30 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-4xl md:text-7xl font-display font-black text-white tracking-tight drop-shadow-xl">
                        Pripravení skočiť do toho?
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-xl md:text-2xl text-white/90 font-light drop-shadow-md">
                        Rezervujte si svoje miesto ešte dnes a získajte <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded-lg border border-white/20 backdrop-blur-sm">prvú lekciu zadarmo</span>.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Link to="/apply" className="group h-16 min-w-[220px] flex items-center justify-center rounded-full bg-white px-8 text-xl font-bold text-neon-primary shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
                            Registrácia
                            <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                        <Link to="/contact" className="h-16 min-w-[220px] flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 text-xl font-bold text-white transition-all hover:bg-white/10 hover:border-white/50">
                            Kontaktujte nás
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
