/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                gray: {
                    600: "#444",
                    700: "#333",
                    800: "#222",
                    900: "#111",
                },
            },
            cursor: {
                "left-arrow": "url('./assets/cursor-svgs/arrow-left.svg') 24 24, pointer",
                "right-arrow": "url('./assets/cursor-svgs/arrow-right.svg') 24 24, pointer",
            },
        },
    },
    plugins: [],
};
