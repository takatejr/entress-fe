module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./shared/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mainTheme: "#fafafa",
                asideTheme: "#041B29",
            },
        },

    },
    plugins: [],
};
