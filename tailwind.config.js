/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            md: "768px",
            lg: "1024px",
            xlg: "1440px",
        },
        fontFamily: {
            sans: ["var(--font-inter)"],
            mono: ["var(--font-source-code-pro)"],
            delaGothicOne: ["var(--font-dela-gothic-one)"],
        },
        extend: {
            colors: {
                gray: {
                    4: "#444",
                    3: "#333",
                    2: "#222",
                    1: "#111",
                },
                pink: "#FF1493",
                lime: "#14FF82",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(closest-side, var(--tw-gradient-stops))",
            },
            cursor: {
                "left-arrow": "url('./assets/cursor-svgs/arrow-left.svg') 24 24, pointer",
                "right-arrow": "url('./assets/cursor-svgs/arrow-right.svg') 24 24, pointer",
            },
            grid: {
                maxWidth: "1480px",
                contentRight: "content-right",
            },
            gridColumn: {
                // "start-content-left": "start-content-left",
                // "end-content-right": "end-content-left",
                content: "content-left / content-right",
                screen: "screen-left / screen-right",
            },
            gridColumnStart: {
                "content-left": "content-left",
                "screen-left": "screen-left",
            },
            gridColumnEnd: {
                "content-right": "content-right",
                "screen-right": "screen-right",
            },
            maxWidth: {
                grid: "1480px",
            },
        },
    },
    plugins: [],
};
