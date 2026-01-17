import { Link } from 'react-router-dom';

export default function Classes() {
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
                                <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Plávanie pre</span>
                                <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary">
                                    každého
                                </span>
                            </h1>
                            <p className="mb-10 text-lg md:text-xl text-text-secondary dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Od prvých záberov vo vode až po zdokonaľovanie techniky.
                                <span className="font-bold text-primary"> Profesionálni tréneri</span>, moderné prostredie a individuálny prístup.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to="/apply" className="group h-14 px-8 flex items-center justify-center rounded-full bg-primary hover:bg-primary-dark text-white text-lg font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,194,203,0.39)] hover:shadow-[0_6px_20px_rgba(0,194,203,0.23)] hover:-translate-y-0.5">
                                    Registrácia na kurz
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgFjWOfpB-oAjgEjksd3YYYUaO_c0JfQ0LH-la3gpgU-pp3ssRQ7CI9PvHVVBDRblzAJYhWm1WlVSxVdKhVKW4g3PUconlSPtKrZ1NRQvOpy_sVppV3dtRhTywxm5i9rHX9hlKaKQJbk9wIh89zTT90uj5MzOzmIeCMMPvXiPnKmP8JmkXy7iUsYU8lhDNxQSVshpFSSdCC0GqOwkKLnDJnYINbDUcyfCrbne2Lxpkq5UBJXowa3wttw39yxMXiwks4rpU1uwVN9U"
                                    alt="Swimming Classes"
                                    className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
                                />
                            </div>
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-400 rounded-[3rem] -rotate-3 scale-95 opacity-20 blur-sm -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="layout-container flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
                <div className="w-full max-w-[1200px] mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-text-main dark:text-white mb-4">Naša ponuka</h2>
                        <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>

                    {/* Individual Lessons Header */}
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-text-main dark:text-white">Individuálne hodiny</h2>
                        <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">


                        {/* 2. Individuálne hodiny */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 dark:border-gray-800 flex flex-col">
                            <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 hidden md:block" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_X5pINReVyqEOh2QPHlOUrUR0DaSrA6dm-xbPUgTyuqKSiQtBKKgJbron332VFED4yVvA1-LvULIKrh4Fkmm1Go182LIArEso8bsKgc9bsVpZwOvyDAzznzXWf1QhOMBe9VlZEWZI3Em_rkGxhWtDfy-9t0tIMp5uYDugoTdLU3RkyFjhoZebXrC1b0tx0l5BRtyIehgL6-9hWQgpBsbqs1b_7972tB9pW5p_IS1ASXyfgvPJuY4AyL_qagLfZh7_OnnY_0j6HdU")' }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">Individuálne hodiny</h3>
                                    <p className="text-white/80 font-medium">One-on-one prístup</p>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <p className="text-text-secondary dark:text-gray-400 mb-6 leading-relaxed flex-1">
                                    Maximálne efektívny tréning s trénerom len pre vás. Ideálne na rýchle odstránenie chýb, prekonanie strachu z vody alebo intenzívnu prípravu. Čas a obsah lekcie prispôsobíme vašim potrebám.
                                </p>
                                <button className="w-full h-12 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                    Rezervovať trénera <span className="material-symbols-outlined">calendar_today</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Adult Courses Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-2xl font-bold text-text-main dark:text-white">Programy pre dospelých</h2>
                            <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* 3a. Plávanie pre dospelých (Začiatočníci) */}
                            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 dark:border-gray-800 flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 hidden md:block" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkyvSezjpyjEb4cMxOIFCdg5LIwKdL9Fn1-u23QYMsq8qYXwgePl7iQgJpjlXFzpeNvKcpSlm2zlOeDULry7dqXutvBjM6XzSCXbwiQlKudy2D_9UA7fEELp59MVEYuZac97EFhDGlp1TmFrDx8fHf414igqwgsjpXSz8t7H7ki0GpUMWQEqgrwi_n1tnR3hto8dMF8wYA8_xdNMLyiq8YaFTKWXAD_DYdPCRqj4J2wmYUYO8IpYhhmm0XHSF9UM-o7s5Hv-xQbUU")' }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                        Začiatočníci
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-xl font-bold text-white mb-1">Plávanie pre dospelých</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <p className="text-text-secondary dark:text-gray-400 mb-4 leading-relaxed text-sm flex-1">
                                        Prekonanie strachu z vody, základy dýchania a splývania. Trpezlivý prístup.
                                    </p>
                                    <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm">
                                        Detail kurzu
                                    </button>
                                </div>
                            </div>

                            {/* 3b. Kondičné plávanie (Pokročilí) */}
                            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 dark:border-gray-800 flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 hidden md:block" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_X5pINReVyqEOh2QPHlOUrUR0DaSrA6dm-xbPUgTyuqKSiQtBKKgJbron332VFED4yVvA1-LvULIKrh4Fkmm1Go182LIArEso8bsKgc9bsVpZwOvyDAzznzXWf1QhOMBe9VlZEWZI3Em_rkGxhWtDfy-9t0tIMp5uYDugoTdLU3RkyFjhoZebXrC1b0tx0l5BRtyIehgL6-9hWQgpBsbqs1b_7972tB9pW5p_IS1ASXyfgvPJuY4AyL_qagLfZh7_OnnY_0j6HdU")' }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                        Pokročilí
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-xl font-bold text-white mb-1">Kondičné plávanie</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <p className="text-text-secondary dark:text-gray-400 mb-4 leading-relaxed text-sm flex-1">
                                        Zlepšenie kondície a štýlu pre pokročilých. Kompenzácia k sedavému zamestnaniu.
                                    </p>
                                    <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm">
                                        Detail kurzu
                                    </button>
                                </div>
                            </div>

                            {/* 3c. Triatlonová príprava (Expert) */}
                            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 dark:border-gray-800 flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 hidden md:block" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlVQOPzkZatKsWBGqljqJllCT89MILWfyZBv4ZqNTCgYtWAO6FfkKZMMCF29a-Oh9EcTsujYTeap0UpXnQlzuJMWbmIwMt3m3sE5YumJw2_bom1W1vdJclNr60EJRHiCd6BEMkaCRTPl0inE6C7objcFIE1jQiaSnSxqSCWXUx-nhjUx9RKxyw5LM2iZhEm8OrayK1t6UONpKjCnynTtFdoRqs3TxWo847Ftsjs4YMdnT3L1dl9gbzAnGZmFxczkTEAXo-6qZ-U7I")' }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                        Expert
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-xl font-bold text-white mb-1">Triatlonová príprava</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <p className="text-text-secondary dark:text-gray-400 mb-4 leading-relaxed text-sm flex-1">
                                        Technika a vytrvalosť pre triatlonistov. Príprava na preteky a zlepšenie časov.
                                    </p>
                                    <button className="w-full h-10 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm">
                                        Detail kurzu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Promo Banner */}
                <section className="w-full max-w-[1200px] mb-20 rounded-2xl bg-gradient-to-r from-blue-900 to-primary p-8 md:p-12 relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-16 -mb-16 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-black mb-4">Neviete si vybrať ten správny kurz?</h2>
                            <p className="text-blue-100 text-lg mb-0">
                                Príďte na nezáväznú skúšobnú lekciu zdarma! Náš tréner posúdi vašu úroveň a odporučí ideálny program.
                            </p>
                        </div>
                        <button className="whitespace-nowrap bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1">
                            Rezervovať skúšobnú lekciu
                        </button>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="w-full max-w-[1200px] mb-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">Čo o nás hovoria</h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="flex gap-1 text-amber-400 mb-4">
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                            </div>
                            <p className="text-text-main dark:text-gray-300 italic mb-6">
                                "Môj syn sa bál vody, ale vďaka inštruktorom v Baby Shark kurze sa teraz teší na každú lekciu. Úžasný prístup!"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">Z</div>
                                <div>
                                    <p className="font-bold text-sm text-text-main dark:text-white">Zuzana Kováčová</p>
                                    <p class="text-xs text-text-secondary">Mamička 4-ročného Jakubka</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="flex gap-1 text-amber-400 mb-4">
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                            </div>
                            <p className="text-text-main dark:text-gray-300 italic mb-6">
                                "Kondičné plávanie mi pomohlo zbaviť sa bolestí chrbta. Bazény sú vždy čisté a atmosféra príjemná."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">M</div>
                                <div>
                                    <p className="font-bold text-sm text-text-main dark:text-white">Michal Novák</p>
                                    <p className="text-xs text-text-secondary">Program Kondičné plávanie</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="flex gap-1 text-amber-400 mb-4">
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star</span>
                                <span className="material-symbols-outlined text-xl">star_half</span>
                            </div>
                            <p className="text-text-main dark:text-gray-300 italic mb-6">
                                "Skvelá príprava na môj prvý triatlon. Technika kraulu sa mi zlepšila o 100%. Odporúčam každému."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">P</div>
                                <div>
                                    <p className="font-bold text-sm text-text-main dark:text-white">Peter Horváth</p>
                                    <p className="text-xs text-text-secondary">Triatlonista amatér</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
