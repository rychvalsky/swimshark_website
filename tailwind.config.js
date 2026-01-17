/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00C2CB", // Vibrant Turquoise
                "primary-light": "#33E0E8",
                "primary-dark": "#009FA6",
                "secondary": "#FF3366", // Vibrant Coral/Rose
                "accent": "#FFD100", // Sun Yellow
                "accent-dark": "#E6BC00",
                "neon-primary": "#00FFFF", // Electric Cyan
                "neon-secondary": "#FF00FF", // Hot Magenta
                "neon-accent": "#CCFF00", // Electric Lime
                "background-light": "#FFFFFF",
                "background-dark": "#0B1120", // Deep Navy
                "surface-light": "#F8FAFC",
                "surface-dark": "#1E293B",
                "text-main": "#0F172A",
                "text-muted": "#64748B",
                "text-secondary": "#64748B",
            },
            fontFamily: {
                "display": ["Nunito", "sans-serif"],
                "sans": ["Outfit", "sans-serif"],
                "body": ["Outfit", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",   // More rounded
                "xl": "1.5rem", // Modern smooth curves
                "2xl": "2rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
