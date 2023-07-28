/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-bg": "#081229",
            },

            animation: {
                flash: 'fadeOut 3s ease-in-out',
            },

            keyframes: theme => ({
                fadeOut: {
                    '0%': {
                        opacity: 1,
                    },
                    '100%': {
                        opacity: 1,
                    },
                },
            }),
        },
    },
    plugins: [],
}

