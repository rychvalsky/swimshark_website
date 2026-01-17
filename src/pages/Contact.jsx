
import { useState } from 'react';
import { sendEmail } from '../services/emailService';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        // Send Email
        const result = await sendEmail(
            import.meta.env.VITE_EMAILJS_TEMPLATE_KIDS,
            {
                to_name: 'Admin',
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                details: `Predmet: ${formData.subject}`, // Generic 'details' param
                reply_to: formData.email
            }
        );

        if (result.success) {
            setMessage({ type: 'success', text: 'Správa bola úspešne odoslaná! Ďakujeme.' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setMessage({ type: 'error', text: 'Nepodarilo sa odoslať správu. Skúste to prosím neskôr.' });
        }
        setLoading(false);
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
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 border border-blue-100 dark:border-blue-800 mb-8 self-start">
                                <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                                <span className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Sme tu pre vás</span>
                            </div>
                            <h1 className="mb-6 font-display font-black leading-tight tracking-tight text-text-main dark:text-white drop-shadow-sm">
                                <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Kontaktujte</span>
                                <span className="block text-5xl sm:text-6xl lg:text-7xl text-blue-500">
                                    nás
                                </span>
                            </h1>
                            <p className="mb-10 text-lg md:text-xl text-text-secondary dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Máte otázky ohľadom kurzov alebo tréningov?
                                <span className="font-bold text-blue-500"> Sme tu pre vás každý deň</span>. Neváhajte sa nám ozvať.
                            </p>
                        </div>

                        {/* Hero Image */}
                        <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/10 border-8 border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWYGsBH9uR7j41hB1ZdgO91BJBZ34n6QJFoJCbPlzQ9pSn13pvI3TKef62yw0n_GXwDeOpv400qZPg82PgJj7UvFUkx3AU1UqVTDUS71fsQdTSS5Y-n8ctHeNI3SIwL7_6HmJmjeEKhsGnVDTco8bur1HqEItoak-PVpRD4JfJ6fdDjFHb0IsW5nmN_mHPBeCcbEJv41F_zFf0GyzjHMTeMcT33TgONKjpWGuTqwlnyNMqiBbARK6F0_IfcLjpah_xN4duk6G1wDI"
                                    alt="Contact Us"
                                    className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
                                />
                            </div>
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-[3rem] -rotate-3 scale-95 opacity-20 blur-sm -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-12">
                <div className="layout-content-container max-w-[1200px] mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Info & Map */}
                        <div className="flex flex-col gap-8">
                            {/* Header */}
                            <div>
                                <h2 className="text-[#0d141b] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">
                                    Kde nás nájdete
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400">
                                    Naša hlavná pobočka sa nachádza v Bratislave. Radi vás privítame osobne počas našich otváracích hodín.
                                </p>
                            </div>
                            {/* Contact Details List */}
                            <div className="flex flex-col gap-2">
                                {/* Item: Address */}
                                <div className="flex items-center gap-4 bg-surface-light dark:bg-surface-dark px-5 py-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-1 duration-300">
                                    <div className="text-primary flex items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-800 shrink-0 size-12">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[#0d141b] dark:text-white text-base font-bold leading-normal">Adresa</p>
                                        <p className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-normal">Plaváreň Pasienky, Junácka 4, Bratislava</p>
                                    </div>
                                </div>
                                {/* Item: Phone */}
                                <div className="flex items-center gap-4 bg-surface-light dark:bg-surface-dark px-5 py-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-1 duration-300">
                                    <div className="text-primary flex items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-800 shrink-0 size-12">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[#0d141b] dark:text-white text-base font-bold leading-normal">Telefón</p>
                                        <a className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-normal hover:text-primary transition-colors" href="tel:+421900123456">+421 900 123 456</a>
                                    </div>
                                </div>
                                {/* Item: Email */}
                                <div className="flex items-center gap-4 bg-surface-light dark:bg-surface-dark px-5 py-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-transform hover:-translate-y-1 duration-300">
                                    <div className="text-primary flex items-center justify-center rounded-lg bg-blue-50 dark:bg-slate-800 shrink-0 size-12">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[#0d141b] dark:text-white text-base font-bold leading-normal">Email</p>
                                        <a className="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-normal hover:text-primary transition-colors" href="mailto:info@swimshark.sk">info@swimshark.sk</a>
                                    </div>
                                </div>
                            </div>
                            {/* Opening Hours */}
                            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="material-symbols-outlined text-primary">schedule</span>
                                    <h3 className="text-[#0d141b] dark:text-white font-bold text-lg">Otváracie hodiny</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex justify-between text-sm">
                                        <span className="text-slate-500 dark:text-slate-400 font-medium">Pondelok - Piatok</span>
                                        <span className="text-[#0d141b] dark:text-white font-bold">06:00 - 21:00</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-slate-500 dark:text-slate-400 font-medium">Sobota</span>
                                        <span className="text-[#0d141b] dark:text-white font-bold">08:00 - 20:00</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-slate-500 dark:text-slate-400 font-medium">Nedeľa</span>
                                        <span className="text-[#0d141b] dark:text-white font-bold">08:00 - 18:00</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Interactive Map Image Placeholder */}
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md group cursor-pointer border border-slate-200 dark:border-slate-700">
                                <img alt="Map Location" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaPXA-kscOT1rhlJiBzfrKxXNgNaa0LYGl96IoKQ4x2JlIGGC9hMbxHo28tHdXetn6ZfHZUZGfM_n5j_SbqN5unMeVjY5Jkf4NJrz67dM8gmmPS6BcF53GfDoQ2VCiogrnxkgx7AnB59R3L5Mo6x5HAvUlAYclLFTJd-WuixpZZ7Tb7bfwU0Zy3_46TdaEEhQ5Ie3R61EPhfIlGysW5aNA2oKIvs2550xYO7meFoTXADn1qMqSDgO10ZJpleBLqJWj3ekPkIDKqD4" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <button className="bg-white text-[#0d141b] px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-gray-50 transition-colors">
                                        <span className="material-symbols-outlined text-primary">map</span>
                                        Otvoriť mapu
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Contact Form */}
                        <div className="flex flex-col">
                            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 h-full">
                                <div className="mb-8">
                                    <h2 className="text-[#0d141b] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-2">
                                        Napíšte nám
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                        Vyplňte formulár nižšie a my sa vám ozveme do 24 hodín.
                                    </p>
                                </div>
                                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                    {/* Name Input */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#0d141b] dark:text-slate-200 text-sm font-bold" htmlFor="name">Meno a Priezvisko</label>
                                        <input
                                            className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 text-[#0d141b] dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jozef Novák"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    {/* Email Input */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#0d141b] dark:text-slate-200 text-sm font-bold" htmlFor="email">Váš Email</label>
                                        <input
                                            className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 text-[#0d141b] dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="jozef@priklad.sk"
                                            type="email"
                                            required
                                        />
                                    </div>
                                    {/* Subject Select */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#0d141b] dark:text-slate-200 text-sm font-bold" htmlFor="subject">Ako vám môžeme pomôcť?</label>
                                        <div className="relative">
                                            <select
                                                className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 text-[#0d141b] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none transition-all cursor-pointer"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option disabled value="">Vyberte predmet správy</option>
                                                <option value="courses">Detské plavecké kurzy</option>
                                                <option value="adults">Tréningy pre dospelých</option>
                                                <option value="individual">Individuálne lekcie</option>
                                                <option value="other">Iné</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Message Textarea */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#0d141b] dark:text-slate-200 text-sm font-bold" htmlFor="message">Správa</label>
                                        <textarea
                                            className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-4 text-[#0d141b] dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all"
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Napíšte nám vašu otázku..."
                                            rows="5"
                                            required
                                        ></textarea>
                                    </div>
                                    {/* Submit Button */}
                                    <button
                                        className="mt-2 w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                                Odosielam...
                                            </>
                                        ) : (
                                            <>
                                                <span>Odoslať správu</span>
                                                <span className="material-symbols-outlined text-sm">send</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                                {message && (
                                    <div className={`mt-4 p-4 rounded-lg text-sm font-bold text-center ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {message.text}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* FAQ Teaser Section */}
                    <div className="mt-20 flex flex-col items-center justify-center text-center">
                        <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-2xl p-8 max-w-3xl w-full shadow-sm">
                            <div className="size-12 bg-blue-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                <span className="material-symbols-outlined">help</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0d141b] dark:text-white mb-2">Často kladené otázky</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-6">
                                Skôr než nám napíšete, možno nájdete odpoveď v našej sekcii FAQ. Pripravili sme pre vás odpovede na najčastejšie otázky ohľadom parkovania, vybavenia a platieb.
                            </p>
                            <a className="inline-flex items-center justify-center text-primary font-bold hover:underline gap-1" href="#">
                                Prejsť na FAQ
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
