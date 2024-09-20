import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },

    fontFamily: {
      oswald: 'var(--font-oswald)',
      roboto: 'var(--font-roboto)',
    },
    backgroundImage: {
      hero: 'url(/assets/img/hero/bg.png)',
      membership: 'url(/assets/img/membership/bg.png)',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#333',
          100: '#484848',
          200: '#151515',
          300: '#111',
        },
        accent: '#7A45E2',
        secondary: '#b996ff',
      }
    },
  },
  plugins: [],
};
export default config;
