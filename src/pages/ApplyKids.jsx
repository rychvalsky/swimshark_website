import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { sendEmail } from '../services/emailService';

const COURSE_SCHEDULE = {
    "Skupinové plávanie": [
        "Pondelok (16:30 - 17:30)",
        "Utorok (17:00 - 18:00)",
        "Streda (18:30 - 19:30)",
        "Štvrtok (16:30 - 17:30)",
        "Piatok (17:00 - 18:00)"
    ],
    "Kurz pre 3 - 4 ročné deti": [
        "Pondelok (16:30 - 17:30)",
        "Štvrtok (16:30 - 17:30)"
    ],
    "Kondičné plávanie": [
        "Utorok (17:00 - 18:00)",
        "Piatok (17:00 - 18:00)"
    ],
    "Plávanie 11+": [
        "Utorok (17:00 - 18:00)",
        "Piatok (17:00 - 18:00)"
    ]
};

const ApplyKids = () => {
    const [formData, setFormData] = useState({
        student_name: '',
        birth_date: '',
        parent_name: '',
        email: '',
        phone: '',
        program: '',
        time_slot: '',
        health_restrictions: 'no',
        health_details: '',
        notes: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const updates = { [name]: value };
            // Reset time_slot if program changes
            if (name === 'program') {
                updates.time_slot = '';
            }
            return { ...prev, ...updates };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const { error } = await supabase
                .from('kids_applications')
                .insert([
                    { ...formData, status: 'pending' }
                ]);

            if (error) throw error;

            if (error) throw error;

            // Send Email Confirmation
            await sendEmail(
                import.meta.env.VITE_EMAILJS_TEMPLATE_KIDS,
                {
                    to_name: formData.student_name,
                    to_email: formData.email,
                    message: `Dobrý deň, ďakujeme za Vašu prihlášku na detský kurz (${formData.program}). Budeme Vás čoskoro kontaktovať.`,
                    details: `Program: ${formData.program}, Čas: ${formData.time_slot}`
                }
            );

            setMessage({ type: 'success', text: 'Prihláška bola úspešne odoslaná! Čoskoro vás budeme kontaktovať.' });
            setFormData({
                student_name: '',
                birth_date: '',
                parent_name: '',
                email: '',
                phone: '',
                program: '',
                time_slot: '',
                health_restrictions: 'no',
                health_details: '',
                notes: ''
            });
        } catch (error) {
            console.error('Error submitting application:', error);
            setMessage({ type: 'error', text: 'Nepodarilo sa odoslať prihlášku. Skúste to prosím znova alebo nás kontaktujte.' });
        } finally {
            setLoading(false);
        }
    };

    const availableTimes = formData.program ? COURSE_SCHEDULE[formData.program] || [] : [];

    return (
        <div className="layout-container py-20 px-4 md:px-10 lg:px-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-text-main dark:text-white mb-4">Prihláška na detský kurz</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-text-secondary dark:text-gray-400 text-lg">
                        Vyplňte formulár nižšie pre záväznú registráciu do kurzov plávania pre deti a dorast.
                    </p>
                </div>

                {message && (
                    <div className={`p-4 rounded-xl mb-8 flex items-center gap-3 ${message.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                        <span className="material-symbols-outlined">
                            {message.type === 'success' ? 'check_circle' : 'error'}
                        </span>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">

                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">person</span>
                            Údaje o dieťati
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-text-main dark:text-gray-300">Meno a priezvisko</label>
                                <input
                                    type="text"
                                    name="student_name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    value={formData.student_name}
                                    onChange={handleChange}
                                    placeholder="Janko Hraško"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-text-main dark:text-gray-300">Dátum narodenia</label>
                                <input
                                    type="date"
                                    name="birth_date"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    value={formData.birth_date}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">pool</span>
                            Výber programu (Aquapark Delňa Prešov)
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-text-main dark:text-gray-300">O aký kurz máte záujem?</label>
                                <select
                                    name="program"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
                                    value={formData.program}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Vyberte program</option>
                                    <option value="Kurz pre 3 - 4 ročné deti">Kurz pre 3 - 4 ročné deti</option>
                                    <option value="Skupinové plávanie">Skupinové plávanie (od 4-5 rokov)</option>
                                    <option value="Kondičné plávanie">Kondičné plávanie</option>
                                    <option value="Plávanie 11+">Plávanie 11+</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-text-main dark:text-gray-300">Vyberte si deň a čas</label>
                                <select
                                    name="time_slot"
                                    required
                                    disabled={!formData.program}
                                    className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    value={formData.time_slot}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>
                                        {formData.program ? "Vyberte termín" : "Najprv vyberte kurz"}
                                    </option>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">medical_services</span>
                            Zdravotný stav
                        </h4>
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-text-main dark:text-gray-300">Má dieťa nejaké zdravotné obmedzenia? *</label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="health_restrictions"
                                        value="yes"
                                        checked={formData.health_restrictions === 'yes'}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-primary focus:ring-primary"
                                    />
                                    <span className="text-text-main dark:text-white">Áno</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="health_restrictions"
                                        value="no"
                                        checked={formData.health_restrictions === 'no'}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-primary focus:ring-primary"
                                    />
                                    <span className="text-text-main dark:text-white">Nie</span>
                                </label>
                            </div>

                            {formData.health_restrictions === 'yes' && (
                                <div className="animate-fade-in mt-4">
                                    <label className="block text-sm font-bold text-text-main dark:text-gray-300 mb-2">Ak ste uviedli "áno", uveďte prosím aké:</label>
                                    <textarea
                                        name="health_details"
                                        rows="3"
                                        className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                        value={formData.health_details}
                                        onChange={handleChange}
                                        placeholder="Popíšte zdravotné obmedzenia..."
                                    ></textarea>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-text-main dark:text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">family_restroom</span>
                            Kontaktné údaje
                        </h4>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-text-main dark:text-gray-300">Meno rodiča / kontaktnej osoby</label>
                                <input
                                    type="text"
                                    name="parent_name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    value={formData.parent_name}
                                    onChange={handleChange}
                                    placeholder="Meno zákonného zástupcu"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-text-main dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="vas@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-text-main dark:text-gray-300">Telefón</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+421 9xx xxx xxx"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-text-main dark:text-gray-300">Ostatné informácie o dieťati, na ktoré by Ste nás chceli upozorniť? (napr. alergie, užívanie liekov, neobvyklé návyky....)</label>
                            <textarea
                                name="notes"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Vaša správa..."
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                Odosielam...
                            </>
                        ) : (
                            <>
                                Odoslať prihlášku
                                <span className="material-symbols-outlined">send</span>
                            </>
                        )}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ApplyKids;
