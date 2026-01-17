import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getSetting, updateSetting } from '../services/settingsService';
import { Check, X, Clock, Search, LogOut, Filter, Settings } from 'lucide-react';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('kids_applications'); // 'kids_applications', 'individual_applications', 'camp_applications'
    const [currentSeason, setCurrentSeason] = useState('Zimný');
    // We keep currentDates for backward compatibility/display on frontend, 
    // but in admin we will primarily use startDate and endDate for editing
    const [currentDates, setCurrentDates] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [savingSeason, setSavingSeason] = useState(false);
    const [counts, setCounts] = useState({
        kids_applications: 0,
        individual_applications: 0,
        camp_applications: 0
    });
    const [campDates, setCampDates] = useState([]);
    const [savingCampDates, setSavingCampDates] = useState(false);
    const [coursePrices, setCoursePrices] = useState({
        preschool: { price1: '120 €', price2: '225 €' },
        group: { price1: '110 €', price2: '210 €' },
        conditioning: { price1: '100 €', price2: '195 €' },
        teens: { price1: '100 €', price2: '195 €' }
    });
    const [savingPrices, setSavingPrices] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            fetchApplications();
            fetchSettings();
            fetchCounts();

            // Subscribe to real-time changes
            const channels = ['kids_applications', 'individual_applications', 'camp_applications'].map(table => {
                return supabase
                    .channel(table)
                    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: table }, handleNewApplication)
                    .subscribe();
            });

            return () => {
                channels.forEach(channel => supabase.removeChannel(channel));
            };
        }
    }, [isAuthenticated, activeTab]);

    const handleNewApplication = (payload) => {
        // Update counts
        const table = payload.table;
        if (payload.new.status === 'pending') {
            setCounts(prev => ({
                ...prev,
                [table]: prev[table] + 1
            }));

            // Play notification sound if desired, or just show visual indicator
        }

        // If the new application belongs to the active tab, add it to the list
        if (table === activeTab) {
            setApplications(prev => [payload.new, ...prev]);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Nesprávne heslo');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
        setApplications([]);
    };

    const fetchApplications = async () => {
        setLoading(true);
        try {
            let tableName = activeTab;

            const { data, error } = await supabase
                .from(tableName)
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setApplications(data || []);
        } catch (err) {
            console.error('Error fetching applications:', err);
            setError('Nepodarilo sa načítať prihlášky.');
        } finally {
            setLoading(false);
        }
    };

    const fetchCounts = async () => {
        const categories = ['kids_applications', 'individual_applications', 'camp_applications'];
        const newCounts = {};

        for (const category of categories) {
            const { count, error } = await supabase
                .from(category)
                .select('*', { count: 'exact', head: true })
                .eq('status', 'pending');

            if (!error) {
                newCounts[category] = count || 0;
            }
        }
        setCounts(newCounts);
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const { error } = await supabase
                .from(activeTab)
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            setApplications(prev => prev.map(app =>
                app.id === id ? { ...app, status: newStatus } : app
            ));

            // Update counts if status changed from/to pending
            if (activeTab) {
                // Re-fetch counts to be accurate or manually adjust
                fetchCounts();
            }
        } catch (err) {
            alert('Nepodarilo sa aktualizovať status');
        }
    };

    const fetchSettings = async () => {
        const [season, dates, loadedCampDates, loadedPrices] = await Promise.all([
            getSetting('current_course_season', 'Zimný'),
            getSetting('current_course_dates', '1. Február - 30. Apríl'),
            getSetting('camp_dates', []),
            getSetting('course_prices', {
                preschool: { price1: '120 €', price2: '225 €' },
                group: { price1: '110 €', price2: '210 €' },
                conditioning: { price1: '100 €', price2: '195 €' },
                teens: { price1: '100 €', price2: '195 €' }
            })
        ]);
        setCurrentSeason(season);
        setCurrentDates(dates);
        setCampDates(loadedCampDates || []);
        setCoursePrices(loadedPrices || {
            preschool: { price1: '120 €', price2: '225 €' },
            group: { price1: '110 €', price2: '210 €' },
            conditioning: { price1: '100 €', price2: '195 €' },
            teens: { price1: '100 €', price2: '195 €' }
        });
    };

    const handleSeasonChange = async (season) => {
        setSavingSeason(true);
        try {
            await updateSetting('current_course_season', season);
            setCurrentSeason(season);
        } catch (err) {
            alert('Nepodarilo sa aktualizovať sezónu');
        } finally {
            setSavingSeason(false);
        }
    };

    const formatSlovakDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}. ${month}. ${year}`;
    };

    const handleDatesChange = async (e) => {
        e.preventDefault();

        if (!startDate || !endDate) {
            alert('Prosím vyberte oba dátumy');
            return;
        }

        const formattedDateString = `${formatSlovakDate(startDate)} - ${formatSlovakDate(endDate)}`;

        setSavingSeason(true);
        try {
            await updateSetting('current_course_dates', formattedDateString);
            setCurrentDates(formattedDateString); // Update local state to reflect change
            alert('Dátum aktualizovaný: ' + formattedDateString);
        } catch (err) {
            alert('Nepodarilo sa aktualizovať dátum');
        } finally {
            setSavingSeason(false);
        }
    };

    const handleCampDateChange = (index, field, value) => {
        const newDates = [...campDates];
        newDates[index] = { ...newDates[index], [field]: value };
        setCampDates(newDates);
    };

    const addCampDate = () => {
        setCampDates([...campDates, { start: '', end: '', isFull: false }]);
    };

    const removeCampDate = (index) => {
        const newDates = campDates.filter((_, i) => i !== index);
        setCampDates(newDates);
    };

    const saveCampDates = async () => {
        setSavingCampDates(true);
        try {
            // Filter out empty dates
            const validDates = campDates.filter(d => d.start && d.end);
            await updateSetting('camp_dates', validDates);
            alert('Termíny táborov uložené');
            // Reload to ensure clean state (optional)
            fetchSettings();
        } catch (err) {
            alert('Nepodarilo sa uložiť termíny táborov');
            console.error(err);
        } finally {
            setSavingCampDates(false);
        }
    };

    const handlePriceChange = (category, type, value) => {
        setCoursePrices(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [type]: value
            }
        }));
    };

    const saveCoursePrices = async () => {
        setSavingPrices(true);
        try {
            await updateSetting('course_prices', coursePrices);
            alert('Ceny kurzov uložené');
        } catch (err) {
            alert('Nepodarilo sa uložiť ceny');
            console.error(err);
        } finally {
            setSavingPrices(false);
        }
    };



    if (!isAuthenticated) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-background-light dark:bg-background-dark px-4">
                <div className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-3xl shadow-2xl max-w-md w-full border border-gray-100 dark:border-gray-800">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                        </div>
                        <h2 className="text-3xl font-black text-text-main dark:text-white">Admin Login</h2>
                        <p className="text-text-secondary dark:text-gray-400 mt-2">Vstúpte do administračného rozhrania</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-text-main dark:text-gray-300 mb-2">Heslo</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-xl bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-mono"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Prihlásiť sa
                            <span className="material-symbols-outlined">login</span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="layout-container py-12 px-4 md:px-8 max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-black text-text-main dark:text-white mb-2">Prehľad prihlášok</h1>
                    <p className="text-text-secondary dark:text-gray-400">Správa všetkých prijatých prihlášok</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={fetchApplications}
                        className="p-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm"
                        title="Obnoviť"
                    >
                        <span className="material-symbols-outlined">refresh</span>
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-3 rounded-xl bg-red-50 text-red-600 font-bold hover:bg-red-100 transition-colors flex items-center gap-2"
                    >
                        <LogOut size={18} />
                        Odhlásiť
                    </button>
                </div>
            </div>

            {/* Settings Section */}
            <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <Settings className="text-primary" size={24} />
                    <h2 className="text-xl font-bold text-text-main dark:text-white">Nastavenie kurzov</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div>
                        <label className="block text-sm font-bold text-text-secondary dark:text-gray-400 mb-2">Sezóna</label>
                        <div className="flex gap-4">
                            {['Zimný', 'Jarný', 'Jesenný'].map((season) => (
                                <button
                                    key={season}
                                    onClick={() => handleSeasonChange(season)}
                                    disabled={savingSeason}
                                    className={`px-4 py-2 rounded-xl font-bold transition-all ${currentSeason === season
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-gray-100 dark:bg-gray-800 text-text-secondary dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {season}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 max-w-md">
                        <label className="block text-sm font-bold text-text-secondary dark:text-gray-400 mb-2">Dátum konania</label>
                        <form onSubmit={handleDatesChange} className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="text-xs text-text-secondary dark:text-gray-500 mb-1 block">Od</label>
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-medium"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="text-xs text-text-secondary dark:text-gray-500 mb-1 block">Do</label>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-medium"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 p-2 rounded-lg">
                                <span className="material-symbols-outlined text-lg">preview</span>
                                Náhľad: <span className="font-bold text-text-main dark:text-white">
                                    {startDate && endDate
                                        ? `${formatSlovakDate(startDate)} - ${formatSlovakDate(endDate)}`
                                        : currentDates || 'Zvoľte dátumy'
                                    }
                                </span>
                            </div>

                            <button
                                type="submit"
                                disabled={savingSeason}
                                className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-bold transition-colors w-full"
                            >
                                Uložiť
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Camp Settings Section */}
            <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-orange-500 text-2xl">camping</span>
                    <h2 className="text-xl font-bold text-text-main dark:text-white">Nastavenie letných táborov</h2>
                </div>

                <div className="space-y-4">
                    {Array.isArray(campDates) && campDates.map((date, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 items-end border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                            <div className="flex-1">
                                <label className="text-xs font-bold text-orange-500 mb-1 block">{index + 1}. Turnus - Od</label>
                                <input
                                    type="date"
                                    value={date.start}
                                    onChange={(e) => handleCampDateChange(index, 'start', e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-medium"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-xs text-text-secondary dark:text-gray-500 mb-1 block">Do</label>
                                <input
                                    type="date"
                                    value={date.end}
                                    onChange={(e) => handleCampDateChange(index, 'end', e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-medium"
                                />
                            </div>
                            <div className="flex items-center gap-2 pb-2">
                                <input
                                    type="checkbox"
                                    id={`full-${index}`}
                                    checked={date.isFull || false}
                                    onChange={(e) => handleCampDateChange(index, 'isFull', e.target.checked)}
                                    className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                                />
                                <label htmlFor={`full-${index}`} className="text-sm font-bold text-text-main dark:text-white cursor-pointer select-none">
                                    Obsadené
                                </label>
                            </div>
                            <div className="pb-1">
                                <button
                                    onClick={() => removeCampDate(index)}
                                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                    title="Odstrániť"
                                >
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <button
                            onClick={addCampDate}
                            className="px-4 py-2 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">add</span>
                            Pridať termín
                        </button>
                        <button
                            onClick={saveCampDates}
                            disabled={savingCampDates}
                            className="px-6 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors flex items-center gap-2 ml-auto"
                        >
                            <span className="material-symbols-outlined">save</span>
                            {savingCampDates ? 'Ukladám...' : 'Uložiť zmeny'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Price Settings Section */}
            <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-green-500 text-2xl">payments</span>
                    <h2 className="text-xl font-bold text-text-main dark:text-white">Cenník kurzov</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Preschool */}
                    <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-blue-600 dark:text-blue-400">3-4 ročné deti</h3>
                        <div>
                            <label className="text-xs text-text-secondary block mb-1">1x týždenne</label>
                            <input
                                type="text"
                                value={coursePrices.preschool.price1}
                                onChange={(e) => handlePriceChange('preschool', 'price1', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-text-secondary block mb-1">2x týždenne</label>
                            <input
                                type="text"
                                value={coursePrices.preschool.price2}
                                onChange={(e) => handlePriceChange('preschool', 'price2', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Group */}
                    <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-cyan-600 dark:text-cyan-400">Skupinové plávanie</h3>
                        <div>
                            <label className="text-xs text-text-secondary block mb-1">1x týždenne</label>
                            <input
                                type="text"
                                value={coursePrices.group.price1}
                                onChange={(e) => handlePriceChange('group', 'price1', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-text-secondary block mb-1">2x týždenne</label>
                            <input
                                type="text"
                                value={coursePrices.group.price2}
                                onChange={(e) => handlePriceChange('group', 'price2', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Conditioning */}
                    <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-indigo-600 dark:text-indigo-400">Kondičné plávanie</h3>
                        <div>
                            <label className="text-xs text-text-secondary block mb-1">1x týždenne</label>
                            <input
                                type="text"
                                value={coursePrices.conditioning.price1}
                                onChange={(e) => handlePriceChange('conditioning', 'price1', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-text-secondary block mb-1">2x týždenne</label>
                            <input
                                type="text"
                                value={coursePrices.conditioning.price2}
                                onChange={(e) => handlePriceChange('conditioning', 'price2', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Teens */}
                    <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-orange-600 dark:text-orange-400">Plávanie 11+</h3>
                        <div>
                            <label className="text-xs text-text-secondary block mb-1">1x týždenne</label>
                            <input
                                type="text"
                                value={coursePrices.teens.price1}
                                onChange={(e) => handlePriceChange('teens', 'price1', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-text-secondary block mb-1">2x týždenne</label>
                            <input
                                type="text"
                                value={coursePrices.teens.price2}
                                onChange={(e) => handlePriceChange('teens', 'price2', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        onClick={saveCoursePrices}
                        disabled={savingPrices}
                        className="px-6 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">save</span>
                        {savingPrices ? 'Ukladám...' : 'Uložiť ceny'}
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-gray-100 dark:border-gray-800 p-2 gap-2 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('kids_applications')}
                        className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-2 relative ${activeTab === 'kids_applications'
                            ? 'bg-primary text-white shadow-md'
                            : 'text-text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                            }`}
                    >
                        <span className="material-symbols-outlined">pool</span>
                        Detské kurzy
                        {counts.kids_applications > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white ring-2 ring-white dark:ring-surface-dark">
                                {counts.kids_applications}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('individual_applications')}
                        className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-2 relative ${activeTab === 'individual_applications'
                            ? 'bg-primary text-white shadow-md'
                            : 'text-text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                            }`}
                    >
                        <span className="material-symbols-outlined">person</span>
                        Individuálne hodiny
                        {counts.individual_applications > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white ring-2 ring-white dark:ring-surface-dark">
                                {counts.individual_applications}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('camp_applications')}
                        className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-2 relative ${activeTab === 'camp_applications'
                            ? 'bg-primary text-white shadow-md'
                            : 'text-text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                            }`}
                    >
                        <span className="material-symbols-outlined">camping</span>
                        Letné tábory
                        {counts.camp_applications > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white ring-2 ring-white dark:ring-surface-dark">
                                {counts.camp_applications}
                            </span>
                        )}
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="p-12 text-center text-text-secondary dark:text-gray-400">
                            <span className="material-symbols-outlined animate-spin text-4xl mb-4">progress_activity</span>
                            <p>Načítavam dáta...</p>
                        </div>
                    ) : error ? (
                        <div className="p-8 m-8 bg-red-50 text-red-800 rounded-2xl text-center">
                            {error}
                        </div>
                    ) : applications.length === 0 ? (
                        <div className="p-12 text-center text-text-secondary dark:text-gray-400">
                            <span className="material-symbols-outlined text-6xl mb-4 opacity-20">inbox</span>
                            <p className="text-xl font-bold">Žiadne prihlášky v tejto kategórii</p>
                        </div>
                    ) : (
                        <table className="w-full min-w-[1000px]">
                            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                                <tr>
                                    <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Dátum</th>
                                    <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Študent</th>

                                    {activeTab === 'kids_applications' && (
                                        <>
                                            <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Program</th>
                                            <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Čas</th>
                                        </>
                                    )}
                                    {activeTab === 'camp_applications' && (
                                        <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Termín tábora</th>
                                    )}
                                    {activeTab === 'individual_applications' && (
                                        <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Úroveň</th>
                                    )}

                                    <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Rodič</th>
                                    <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Kontakt</th>
                                    <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Status</th>
                                    <th className="p-6 text-left text-sm font-bold text-text-secondary dark:text-gray-400">Akcie</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {applications.map(app => (
                                    <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="p-6 text-text-main dark:text-white font-medium">
                                            {new Date(app.created_at).toLocaleDateString('sk-SK')}
                                            <div className="text-xs text-text-secondary dark:text-gray-500 mt-1">
                                                {new Date(app.created_at).toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <div className="font-bold text-text-main dark:text-white text-lg">{app.student_name}</div>
                                            <div className="text-sm text-text-secondary dark:text-gray-400 flex items-center gap-1 mt-1">
                                                <small className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">
                                                    {app.birth_date ? `Nar: ${new Date(app.birth_date).toLocaleDateString('sk-SK')}` : `Vek: ${app.age}`}
                                                </small>
                                            </div>
                                            {(app.health_restrictions === 'yes' || app.notes) && (
                                                <div className="mt-2 text-xs text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400 p-2 rounded max-w-[200px]">
                                                    {app.health_restrictions === 'yes' && <div className="font-bold">⚠️ Zdravotné obmedzenia</div>}
                                                    {app.notes && <div className="italic truncate" title={app.notes}>{app.notes}</div>}
                                                </div>
                                            )}
                                        </td>

                                        {activeTab === 'kids_applications' && (
                                            <>
                                                <td className="p-6 text-text-main dark:text-white">{app.program}</td>
                                                <td className="p-6 text-text-main dark:text-white">
                                                    <div className="flex items-center gap-2">
                                                        <Clock size={16} className="text-primary" />
                                                        {app.time_slot}
                                                    </div>
                                                </td>
                                            </>
                                        )}
                                        {activeTab === 'camp_applications' && (
                                            <td className="p-6 text-text-main dark:text-white font-medium">{app.camp_date}</td>
                                        )}
                                        {activeTab === 'individual_applications' && (
                                            <td className="p-6 text-text-main dark:text-white">
                                                <span className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-medium">
                                                    {app.skill_level}
                                                </span>
                                            </td>
                                        )}

                                        <td className="p-6 text-text-main dark:text-white">{app.parent_name}</td>
                                        <td className="p-6">
                                            <div className="text-sm font-medium text-text-main dark:text-white flex items-center gap-2">
                                                <span className="material-symbols-outlined text-gray-400 text-sm">mail</span>
                                                <a href={`mailto:${app.email}`} className="hover:text-primary transition-colors">{app.email}</a>
                                            </div>
                                            <div className="text-sm text-text-secondary dark:text-gray-400 mt-1 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-gray-400 text-sm">call</span>
                                                <a href={`tel:${app.phone}`} className="hover:text-primary transition-colors">{app.phone}</a>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold border ${app.status === 'approved'
                                                ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900'
                                                : app.status === 'rejected'
                                                    ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900'
                                                    : 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-900'
                                                }`}>
                                                <span className={`w-2 h-2 rounded-full ${app.status === 'approved' ? 'bg-green-500' : app.status === 'rejected' ? 'bg-red-500' : 'bg-yellow-500'
                                                    }`}></span>
                                                {app.status === 'approved' ? 'Potvrdené' : app.status === 'rejected' ? 'Zamietnuté' : 'Čaká'}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => updateStatus(app.id, 'approved')}
                                                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/40 transition-colors border border-green-200 dark:border-green-900"
                                                    title="Schváliť"
                                                >
                                                    <Check size={18} />
                                                </button>
                                                <button
                                                    onClick={() => updateStatus(app.id, 'rejected')}
                                                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 transition-colors border border-red-200 dark:border-red-900"
                                                    title="Zamietnuť"
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
