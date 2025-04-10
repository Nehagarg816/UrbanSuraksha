export default {
    content: [
        "./index.html", // HTML file
        "./src/**/*.{js,jsx,ts,tsx}", // JS and JSX files
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffc0cb",
                secondary: "#ffc0ca",
            },
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
