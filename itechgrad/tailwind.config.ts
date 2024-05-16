import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./node_modules/primereact/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        screens: {
            xxxs: "320px",
            // => @media (min-width: 640px) { ... }

            xxs: "448px",
            // => @media (min-width: 640px) { ... }

            xs: "576px",
            // => @media (min-width: 640px) { ... }

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                sans: "var(--font-noto-sans)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                marquee: "marquee 50s linear infinite",
                marquee2: "marquee2 50s linear infinite",
                slideL: "slideL 1s ease-in ",
                slideR: "slideR 1s ease-in ",
                slideB: "slideB 0.8s ease-in ",
                fadeIn: "fadeIn 1s ease-in forwards ",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                slideL: {
                    "0%" : { opacity : "0%" ,transform : "translateX(-10%)" },
                    "100%" : { opacity : "100%" ,transform: "translateX(0%) " },
                },
                slideR: {
                    "0%" : { opacity : "0%" ,transform : "translateX(10%) " },
                    "100%" : { opacity : "100%" ,transform: "translateX(0%) " },
                },
                slideB: {
                    "0%" : { opacity : "0%" ,transform : "translateY(10%) " },
                    "100%" : { opacity : "100%" ,transform: "translateY(0%) " },
                },
                fadeIn: {
                    "0%" : { opacity : "0%" },
                    "100%" : { opacity : "100%" },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
});
export default config;
