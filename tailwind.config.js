module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                backgroundOverlay: 'rgba(0, 0, 0, 0.5)',
                text: '#f3f4f6',
                primary: {
                    100: '#8E05C2',
                    200: '#700B97',
                    300: '#3E065F'
                }
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')
    ]
}
