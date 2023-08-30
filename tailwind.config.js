/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-bg": "#081229",
            },
            animation: {
                flash: 'fakeFadeOut 3s ease-in-out forwards',
                fadeOut: 'fadeOut .25s ease-in-out forwards',
                fadeIn: 'fadeIn .25s ease-in-out forwards',
            },
            keyframes: () => ({
                fakeFadeOut: {
                    '0%': {opacity: 1},
                    '75%': {opacity: 1},
                    '100%': {opacity: 0},
                },
                fadeIn: {
                    '0%': {opacity: 1},
                    '100%': {opacity: 0},
                },
                fadeOut: {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1},
                }
            }),
        },
    },
    plugins: [],
}

