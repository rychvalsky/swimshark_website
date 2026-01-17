import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { sendEmail } from '../services/emailService';

const Apply = () => {
    const [formData, setFormData] = useState({
        student_name: '',
        age: '',
        skill_level: 'Začiatočník',
        parent_name: '',
        email: '',
        phone: '',
        notes: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: '' }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // ... (existing helper setup)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const { error } = await supabase
                .from('individual_applications')
                .insert([
                    { ...formData, status: 'pending' }
                ]);

            if (error) throw error;

            // Send Email Confirmation
            await sendEmail(
                import.meta.env.VITE_EMAILJS_TEMPLATE_KIDS,
                {
                    to_name: formData.student_name,
                    to_email: formData.email,
                    message: `Dobrý deň, ďakujeme za Vašu prihlášku na individuálny kurz. Budeme Vás čoskoro kontaktovať.`,
                    details: `Vek: ${formData.age}, Úroveň: ${formData.skill_level}`
                }
            );

            setMessage({ type: 'success', text: 'Prihláška bola úspešne odoslaná! Čoskoro vás budeme kontaktovať.' });
            setFormData({
                student_name: '',
                age: '',
                skill_level: 'Začiatočník',
                parent_name: '',
                email: '',
                phone: '',
                notes: ''
            });
        } catch (error) {
            console.error('Error submitting application:', error);
            setMessage({ type: 'error', text: 'Nepodarilo sa odoslať prihlášku. Skúste to prosím znova alebo nás kontaktujte.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="layout-container py-20 px-4 md:px-10 lg:px-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-text-main dark:text-white mb-4">Prihláška na kurz</h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-text-secondary dark:text-gray-400 text-lg">
                        Vyplňte formulár nižšie a my sa vám ozveme s detailmi o vašom kurze.
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
                            Údaje o plavcovi
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-text-main dark:text-gray-300">Meno a priezvisko plavca</label>
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
                                <label className="block text-sm font-bold text-text-main dark:text-gray-300">Vek</label>
                                <input
                                    type="number"
                                    name="age"
                                    required
                                    min="0"
                                    max="100"
                                    className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="napr. 6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="space-y-2">
                            <label className="block text-sm font-bold text-text-main dark:text-gray-300">Úroveň plavca</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { id: 'Začiatočník', label: 'Začiatočník', sub: 'Necíti sa vo vode isto / Neplavec' },
                                    { id: 'Mierne pokročilý', label: 'Mierne pokročilý', sub: 'Prepláva 25m, základy techniky' },
                                    { id: 'Pokročilý', label: 'Pokročilý', sub: 'Dobrá technika, chce sa zlepšiť' },
                                    { id: 'Expert / Pretekár', label: 'Expert / Pretekár', sub: 'Súťažné plávanie a triatlon' }
                                ].map((level) => (
                                    <div
                                        key={level.id}
                                        onClick={() => setFormData(prev => ({ ...prev, skill_level: level.id }))}
                                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.skill_level === level.id
                                            ? 'border-primary bg-primary/5'
                                            : 'border-gray-100 dark:border-gray-700 hover:border-primary/30'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.skill_level === level.id ? 'border-primary' : 'border-gray-300'
                                                }`}>
                                                {formData.skill_level === level.id && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                            </div>
                                            <span className={`font-bold ${formData.skill_level === level.id ? 'text-primary' : 'text-text-main dark:text-white'}`}>
                                                {level.label}
                                            </span>
                                        </div>
                                        <p className="text-xs text-text-secondary dark:text-gray-400 pl-6">{level.sub}</p>
                                    </div>
                                ))}
                            </div>
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
                            <label className="block text-sm font-bold text-text-main dark:text-gray-300">Poznámka (voliteľné)</label>
                            <textarea
                                name="notes"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                value={formData.notes}
                                onChange={handleChange}
                                placeholder="Zdravotné obmedzenia, preferované časy, atď..."
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

export default Apply;
