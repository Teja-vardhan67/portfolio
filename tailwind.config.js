/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    cyan: '#06b6d4', // cyan-500
                    purple: '#a855f7', // purple-500
                }
            },
            fontFamily: {
                mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
            },
        },
    },
    plugins: [],
}
