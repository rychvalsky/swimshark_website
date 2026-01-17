import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#e7edf3]/50 bg-background-light/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background-light/60 dark:bg-background-dark/80 dark:border-white/5">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 md:h-32 items-center justify-between transition-all duration-300">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group md:self-start">
                        <img src="/logo.png" alt="SwimShark Logo" className="h-16 md:h-44 w-auto transition-transform group-hover:scale-110" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['O nás', 'Galéria', 'Skupinové kurzy pre deti a dorast', 'Kurzy', 'Tábory', 'Rozvrh', 'Kontakt'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item === 'Kurzy' ? 'classes' : item === 'O nás' ? 'about' : item === 'Rozvrh' ? 'schedule' : item === 'Tábory' ? 'camps' : item === 'Skupinové kurzy pre deti a dorast' ? 'kids-courses' : item === 'Galéria' ? 'photos' : 'contact'}`}
                                className="text-sm font-bold text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors uppercase tracking-wide"
                            >
                                {item === 'Kurzy' ? 'Dospelí' : item}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">


                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-text-main hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isMobileMenuOpen && (
                    <div className="md:hidden border-t border-[#e7edf3] dark:border-white/10 bg-background-light/95 backdrop-blur-xl dark:bg-background-dark/95">
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            <Link to="/about" className="block rounded-lg px-3 py-3 text-base font-bold text-text-main hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">O nás</Link>
                            <Link to="/photos" className="block rounded-lg px-3 py-3 text-base font-bold text-text-main hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">Galéria</Link>
                            <Link to="/kids-courses" className="block rounded-lg px-3 py-3 text-base font-bold text-text-main hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">Kurzy pre deti</Link>
                            <Link to="/classes" className="block rounded-lg px-3 py-3 text-base font-bold text-text-main hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">Dospelí</Link>
                            <Link to="/camps" className="block rounded-lg px-3 py-3 text-base font-bold text-text-main hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">Tábory</Link>
                            <Link to="/schedule" className="block rounded-lg px-3 py-3 text-base font-bold text-text-main hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">Rozvrh</Link>
                            <Link to="/contact" className="block rounded-lg px-3 py-3 text-base font-bold text-text-main hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">Kontakt</Link>

                        </div>
                    </div>
                )
            }
        </header >
    );
}
