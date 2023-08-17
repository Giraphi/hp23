/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            md: "768px",
            lg: "1024px",
            xl: "1440px",
        },
        fontFamily: {
            sans: ["var(--font-inter)"],
            mono: ["var(--font-source-code-pro)"],
            delaGothicOne: ["var(--font-dela-gothic-one)"],
            bungee: ["var(--font-bungee)"],
        },
        extend: {
            colors: {
                gray: {
                    e: "#eee",
                    c: "#ccc",
                    4: "#444",
                    3: "#333",
                    2: "#222",
                    1: "#111",
                },
                pink: {
                    50: "#fff0fb",
                    100: "#ffe3fa",
                    200: "#ffc6f6",
                    300: "#ff98ec",
                    400: "#ff58dc",
                    500: "#ff27c9",
                    600: "#ff00aa",
                    700: "#df0089",
                    800: "#b80071",
                    900: "#980360",
                    950: "#5f0036",
                },
                lime: {
                    50: "#edfff8",
                    100: "#d5fff2",
                    200: "#aeffe4",
                    300: "#70ffd1",
                    400: "#2bfdb7",
                    500: "#00ffaa",
                    600: "#00c07b",
                    700: "#009664",
                    800: "#067551",
                    900: "#076045",
                    950: "#003725",
                },
                aqua: {
                    50: "#eafffe",
                    100: "#cbfffe",
                    200: "#9effff",
                    300: "#5bfcff",
                    400: "#00eeff",
                    500: "#00d1e5",
                    600: "#00a7c0",
                    700: "#03849b",
                    800: "#0d697d",
                    900: "#105769",
                    950: "#033a49",
                },
            },
            aspectRatio: {
                image: "1.618 / 1",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(closest-side, var(--tw-gradient-stops))",
            },
            cursor: {
                "left-arrow": "url('/cursor-svgs/arrow-left.svg') 24 24, pointer",
                "right-arrow": "url('/cursor-svgs/arrow-right.svg') 24 24, pointer",
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
                text: "content-left / 11",
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
            height: {
                lvh: ["100vh /* fallback for Opera, IE and etc. */", "100lvh"],
            },
        },
    },
    plugins: [],
};
