import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      animation: {
        'bg-slide': 'bgSlide 20s linear infinite alternate',
      },
      keyframes: {
        bgSlide: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      backgroundSize: {
        'full': '100% 100%',
        'cover': 'cover',
      },
      backgroundAttachment: {
        'fixed': 'fixed',
      },      cursor: {
        'none': 'none',
        'custom-default': 'url(/cursor-sniper.png), default',
        'custom-pointer': 'url(/cursor-sniper.png), pointer',
        'custom-text': 'url(/cursor-sniper.png), text',
        'custom-wait': 'url(/cursor-sniper.png), wait',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

export default config;