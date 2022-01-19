module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                primary: {
                    100: '#8E05C2',
                    200: '#700B97',
                    300: '#3E065F'
                }
            }
        },
    },
    plugins: [],
}
