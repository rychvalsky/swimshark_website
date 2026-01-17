import { useState } from 'react';

export default function Photos() {
    // Placeholder images for now
    const photos = [
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAqnyhFtnjRR-ft1EwE3ZMr8Q5ddUC2EtnUjToJAJQ43-vZg4PzOsbn1GaNXflKDmrx676u2wSCqsuhpG3SBQ998c491xdvGyKC46l1UUnEC964RNMH4RRqiGowCo4NG10MiVKpACXD5ZjaVVyo8Dd6uNbRY_aygs7F-x3kjBXwFrKeHHJeULcOho_hUc4h_5l0gZrmDcJOtGxmSGsTi9Qtfy9AjqxTWO87q9xBGX5KGnkkr_oFbE2cmNy9e2oYYk18tUktpaRe-e8",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB1mjsNc527ZzpI8rseamdb5vuJzdBU7h1XM5rE-U11H5guqYMGc-XTiICcRihufKGx-HLBjv15ixUdro5fJvEnn8ZDUoyGXfzT1-BLziBib585h0GNJ6B3kp5nAU72smFBRHCk0SLd1_A0gxhBvs9nYeII2qwsZFVzTJ8m6S-0zNnUrZ8OdrP1pSL4h5ONBPCB-C5x730QsX-JvfRgccJgZRb5EYk1OPRFbAhDfKJnKZGPmKQXl3v2ZyMDrWmAVex2KXyKSIdsDQk",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDtG053A9OE8rIlXEJG_cZrPoJhylQ-id0Jyzhz_UaN-OFDuYzWJ8e2sUESFDsWnDtaru30-IBqnXWCSbw7lpBTj7tfNr2EKCD_dUfZpqml17baNAbrm0u10zM7gtEC-k4CxjpBd8jp26Zi6Zluc0IcZloXS7C0pCH5Kp7N3gTOlYbfaulMnNoB4XYgQHdn7haTJvk_ziYkVfre3Y221ZsOP21BeR0D2a_h4eyFiKtA_r36_RD2gdbbAsXyD0cjIRzf3YoxGviWFbk",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjw8P9T-XXaPY37tfoGpK-PqhZb5DZsHkkMvhaw4x-RT8Fm9mpD752JGwvCqPMhgKHxIgIcoiBpA22fBI353vNFJrZ_UbhZOJHiWuV419dU3tycRfJTXSDO0MDDKGkYIBxoabrtdjLW9TrR8fjy8mkSqHeh7Ia5mdOQIsXCR6lRPW4avE21N0EXHhTL5welrAZcpxx1ncN7ESbF3jBmzpkF72ob-BTH-FVqr_6jqlJ55EHUJT2gk4tHmMeQjDsUT4568hMoEgmjj8"
    ];

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <>
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-background-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20 mb-8">
                            <span className="material-symbols-outlined text-sm text-primary-dark dark:text-primary">photo_library</span>
                            <span className="text-sm font-bold uppercase tracking-widest text-primary-dark dark:text-primary">Galéria</span>
                        </div>
                        <h1 className="mb-6 font-display font-black leading-tight tracking-tight text-text-main dark:text-white drop-shadow-sm">
                            <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Život v</span>
                            <span className="block text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-secondary">
                                Swim Shark
                            </span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <img
                                    src={photo}
                                    alt={`Gallery photo ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="material-symbols-outlined text-white text-4xl drop-shadow-lg">zoom_in</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>
                    <img
                        src={selectedPhoto}
                        alt="Full size"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}
