import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-background-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20 mb-8 self-start">
                                <span className="material-symbols-outlined text-sm text-primary-dark dark:text-primary">location_on</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-primary-dark dark:text-primary">Plavecká škola Prešov</span>
                            </div>
                            <h1 className="mb-6 font-display font-black leading-tight tracking-tight text-text-main dark:text-white drop-shadow-sm">
                                <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Budujeme</span>
                                <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary">
                                    sebavedomých plavcov
                                </span>
                            </h1>
                            <p className="mb-10 text-lg md:text-xl text-text-secondary dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Sme profesionálna plavecká škola v Prešove s vášňou pre vodu.
                                Naučíme vás a vaše deti plávať <span className="font-bold text-primary">technicky správne, bezpečne a s radosťou</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="cursor-pointer inline-flex items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-primary-dark text-white text-lg font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(0,194,203,0.39)] hover:shadow-[0_6px_20px_rgba(0,194,203,0.23)] hover:-translate-y-0.5">
                                    Spoznajte náš tím
                                </button>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjw8P9T-XXaPY37tfoGpK-PqhZb5DZsHkkMvhaw4x-RT8Fm9mpD752JGwvCqPMhgKHxIgIcoiBpA22fBI353vNFJrZ_UbhZOJHiWuV419dU3tycRfJTXSDO0MDDKGkYIBxoabrtdjLW9TrR8fjy8mkSqHeh7Ia5mdOQIsXCR6lRPW4avE21N0EXHhTL5welrAZcpxx1ncN7ESbF3jBmzpkF72ob-BTH-FVqr_6jqlJ55EHUJT2gk4tHmMeQjDsUT4568hMoEgmjj8"
                                    alt="Our Team"
                                    className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
                                />
                            </div>
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-[3rem] -rotate-3 scale-95 opacity-20 blur-sm -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-4 p-4">
                            <div className="bg-primary/10 rounded-full p-4 text-primary">
                                <span className="material-symbols-outlined text-4xl">school</span>
                            </div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Absolventov</p>
                                <p className="text-slate-900 dark:text-white text-3xl font-bold">500+</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 p-4 border-l-0 md:border-l border-slate-100 dark:border-slate-800">
                            <div className="bg-primary/10 rounded-full p-4 text-primary">
                                <span className="material-symbols-outlined text-4xl">history</span>
                            </div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Rokov skúseností</p>
                                <p className="text-slate-900 dark:text-white text-3xl font-bold">10</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 p-4 border-l-0 md:border-l border-slate-100 dark:border-slate-800">
                            <div className="bg-primary/10 rounded-full p-4 text-primary">
                                <span className="material-symbols-outlined text-4xl">verified_user</span>
                            </div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Certifikovaných trénerov</p>
                                <p className="text-slate-900 dark:text-white text-3xl font-bold">15</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="w-full py-16 md:py-24 px-4 md:px-10 bg-background-light dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
                    <div className="flex flex-col gap-4 text-center max-w-[720px] mx-auto">
                        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                            Naša Filozofia
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            Veríme, že plávanie je životná zručnosť, ktorá by mala byť prístupná pre každého v bezpečnom a podporujúcom prostredí.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">health_and_safety</span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Bezpečnosť na prvom mieste</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Dôraz na bezpečné prostredie a neustály dozor počas všetkých lekcií. Každý tréner ovláda prvú pomoc.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">sentiment_satisfied_alt</span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Zábavné učenie</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Využívame hry a zábavné aktivity na budovanie pozitívneho vzťahu k vode, najmä pri práci s deťmi.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">pool</span>
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Profesionálna technika</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Naši tréneri používajú moderné a certifikované tréningové metódy zamerané na správnu biomechaniku pohybu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* History Timeline */}
            <div className="w-full py-16 px-4 md:px-10 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-bold text-center mb-12">Naša Cesta</h2>
                    <div className="grid grid-cols-[60px_1fr] gap-x-6">
                        {/* 2013 */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary z-10">
                                <span className="material-symbols-outlined text-xl">flag</span>
                            </div>
                            <div className="w-0.5 bg-slate-200 dark:bg-slate-700 h-full -mt-2 -mb-2"></div>
                        </div>
                        <div className="pb-10 pt-2">
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">2013</span>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold mt-1">Založenie školy</h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-2">
                                SwimShark vznikol ako malý projekt dvoch nadšencov s cieľom zlepšiť plaveckú gramotnosť v regióne.
                            </p>
                        </div>
                        {/* 2016 */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary z-10">
                                <span className="material-symbols-outlined text-xl">pool</span>
                            </div>
                            <div className="w-0.5 bg-slate-200 dark:bg-slate-700 h-full -mt-2 -mb-2"></div>
                        </div>
                        <div className="pb-10 pt-2">
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">2016</span>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold mt-1">Prvý vlastný bazén</h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-2">
                                Otvorili sme naše prvé špecializované tréningové centrum s 25m bazénom.
                            </p>
                        </div>
                        {/* 2019 */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary z-10">
                                <span className="material-symbols-outlined text-xl">group</span>
                            </div>
                            <div className="w-0.5 bg-slate-200 dark:bg-slate-700 h-full -mt-2 -mb-2"></div>
                        </div>
                        <div className="pb-10 pt-2">
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">2019</span>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold mt-1">Rozšírenie tímu</h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-2">
                                Náš tím sa rozrástol na 10 certifikovaných trénerov a pridali sme kurzy pre bábätká.
                            </p>
                        </div>
                        {/* 2023 */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white z-10 shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined text-xl">star</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">2023 - Súčasnosť</span>
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold mt-1">Lídri v regióne</h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-2">
                                Dnes sme najväčšou plaveckou školou v Prešove s viac ako 500 absolventmi ročne.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="w-full py-16 md:py-24 px-4 md:px-10 bg-background-light dark:bg-background-dark">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">Spoznajte náš tím</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Naši tréneri sú nielen skvelí plavci, ale predovšetkým empatickí pedagógovia s medzinárodnými certifikátmi.
                            </p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Zobraziť všetkých <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Team Member 1 */}
                        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <div className="aspect-[4/5] w-full overflow-hidden bg-slate-200">
                                <img alt="Peter Novák" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEbw-OnmFp6QTdbDWh9xcrr_U2n4YtPiY1hikQc8O1pQP2gRr63Vc6-9GWz7j6mrukL4wT-LGHnX2_npcHt3qUEQhxJuB9cfw1PCPuyH9KJx60BIs_9Z7-IhzTwR0OteDAQUu_ttOCte5OH2R9dS3A_QBt6aD7dvp5KC9eEUwPDi8dTz24VVz3XRh2e-FamNXLAz4sPVEhA-XWvPdALyi7RdA4L7516DAbiHzjJWdHI4skzObS6eeiWO31SlMYZCAcQMIT21Od7aw" />
                            </div>
                            <div className="p-4">
                                <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Hlavný Tréner</p>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Peter Novák</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Bývalý reprezentant SR, špecialista na techniku kraul.</p>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <div className="aspect-[4/5] w-full overflow-hidden bg-slate-200">
                                <img alt="Jana Kováčová" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNhY-StliS010OytrPhxJ-lWJVur1cZ54ZJ5ZYPs2fLsOuNaIYpnnutCVOQq8LuKT-SW8cXvrV-CMh6G4JRuUUhhjJkM724WffJePaSUHlUG7J3p0RvoBawKozBTY-Nuyj37X9QtsIg3F6IIxf-0FCjhUWvd2xiUZiV_n8So8HWU0vQ7nKnV7epTPoST3uUQok0j8o_nBjkmKcFkk0_btIPrF-aLdMnC01LkA-FOlGFyoom4zFJ0Up70Ka2rruGTF_Ojut1qObvA4" />
                            </div>
                            <div className="p-4">
                                <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Trénerka Detí</p>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Jana Kováčová</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Certifikovaná inštruktorka pre dojčatá a batoľatá.</p>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <div className="aspect-[4/5] w-full overflow-hidden bg-slate-200">
                                <img alt="Michal Horváth" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg7kB1Cbg8qfAHYtqFFOU_qRrca7N0dqY5ZgCoJ_C-v7TjHCaWfIsEHAJSaWmiJTyGeBjinvBBLrCOPICa9KUOtzIKRMXsPwiU1JoI0lexqqqRgjCJ0kq1uzSzCpjbDQxPpmue2r-R2ADEfIhcLZPcdudyriowRv8FtblI7lqKLBMFNIFKQZjjJ--65YAE4tGr5igxvV7xDA3FmTdy3xZ0FMaeYoJnI9WqYkZTkU-k_exJqAQotgFA3Lw_c32HIXBBxu1mDw7cx0Y" />
                            </div>
                            <div className="p-4">
                                <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Kondičný Tréner</p>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Michal Horváth</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Zameriava sa na silovú prípravu a vytrvalosť.</p>
                            </div>
                        </div>
                        {/* Team Member 4 */}
                        <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <div className="aspect-[4/5] w-full overflow-hidden bg-slate-200">
                                <img alt="Elena Malá" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0dty2-fNMT_84TtbUILrDZJWmNFzYpeVNwbrQXtX5DPxW9vPVcFIvOiZ114NIvxVLWmpv-SMSUw9Hf8NvF_Y8e1gGmb4ca9wOU2vT-PQtnrBeLmen0QoxQ-clAaV_O0R0foRYhlaCjw0u8KyD0VPgpi_79w97hG0eW2IGiMIp84q4YfB-H_ZJUXHqU08ZdEkd4ugSzYN80scM3SdfGw0MWYbPsboGThXMgfBPyTyVnm1bxJsTUns6eT3xF_pGtx8RJvoleExPE9c" />
                            </div>
                            <div className="p-4">
                                <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Manažérka Kurzov</p>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Elena Malá</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Vaša prvá kontaktná osoba pre všetky otázky.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex md:hidden justify-center">
                        <button className="flex items-center gap-2 text-primary font-bold">
                            Zobraziť všetkých <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full px-4 md:px-10 py-16">
                <div className="max-w-[1280px] mx-auto bg-primary rounded-2xl overflow-hidden relative shadow-2xl">
                    {/* Background Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8 text-center md:text-left">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-white text-3xl md:text-4xl font-black">Pripravení skočiť do vody?</h2>
                            <p className="text-blue-100 text-lg">Pridajte sa k stovkám spokojných plavcov. Prvá lekcia je na skúšku zdarma.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/classes" className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg whitespace-nowrap">
                                Rezervovať kurz
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors whitespace-nowrap">
                                Kontaktujte nás
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
