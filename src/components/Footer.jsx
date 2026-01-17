import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-[#e7edf3] dark:bg-background-dark dark:border-white/10 pt-16 pb-8">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-primary">
                            <img src="/logo.png" alt="SwimShark Logo" className="h-10 w-auto" />
                            <span className="text-xl font-bold text-text-main dark:text-white">SwimShark</span>
                        </div>
                        <p className="text-sm leading-relaxed text-text-muted dark:text-gray-400">
                            Vaša cesta k bezpečnému a radostnému plávaniu začína tu. Pridajte sa k nám a objavte svet pod hladinou.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="text-text-muted hover:text-primary transition-colors"><span className="material-symbols-outlined">thumb_up</span></a>
                            <a href="#" className="text-text-muted hover:text-primary transition-colors"><span className="material-symbols-outlined">photo_camera</span></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">Kurzy</h4>
                        <ul className="flex flex-col gap-3 text-sm text-text-muted dark:text-gray-400">
                            <li><Link to="/classes" className="hover:text-primary transition-colors">Pre deti</Link></li>
                            <li><Link to="/classes" className="hover:text-primary transition-colors">Pre juniorov</Link></li>
                            <li><Link to="/classes" className="hover:text-primary transition-colors">Pre dospelých</Link></li>
                            <li><Link to="/classes" className="hover:text-primary transition-colors">Individuálne lekcie</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">Spoločnosť</h4>
                        <ul className="flex flex-col gap-3 text-sm text-text-muted dark:text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">O nás</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Náš tím</Link></li>
                            <li><Link to="/career" className="hover:text-primary transition-colors">Kariéra</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">Ostaňte v obraze</h4>
                        <p className="mb-4 text-sm text-text-muted dark:text-gray-400">Prihláste sa na odber noviniek a získajte tipy na plávanie.</p>
                        <div className="flex flex-col gap-2">
                            <input className="h-10 w-full rounded-lg border border-[#cfdbe7] bg-background-light px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white" placeholder="Váš email" type="email" />
                            <button className="h-10 w-full rounded-lg bg-primary text-sm font-bold text-white hover:bg-primary-dark transition-colors">Odoberať</button>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#e7edf3] pt-8 dark:border-white/10 md:flex-row">
                    <p className="text-sm text-text-muted dark:text-gray-500">© 2023 SwimShark. Všetky práva vyhradené.</p>
                    <div className="flex gap-6 text-sm text-text-muted dark:text-gray-500">
                        <a href="#" className="hover:text-primary transition-colors">Ochrana súkromia</a>
                        <a href="#" className="hover:text-primary transition-colors">Podmienky používania</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
