import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "tracking-in-contract": "tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
      },
      keyframes: {
        "tracking-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            opacity: "0"
          },
          "40%": {
            opacity: ".6"
          },
          to: {
            "letter-spacing": "normal",
            opacity: "1"
          }
        }
      },
      fontFamily: {
        'slogan': ['SourceHanSerif', "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
