import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: '1024px'
      },
      colors: {
        primary: {
          10: 'hsl(263, 55%, 52%)', // moderate violet
          20: 'hsl(217, 19%, 35%)', // dark gray blue
          30: 'hsl(219, 29%, 14%)', // dark blackish blue
        },
        neutral: {
          10: 'hsl(0, 0%, 81%)', // light gray
          20: 'hsl(210, 46%, 95%)' // light gray blue
        }
      },
      backgroundImage: {
        'quotation-mark': "url('/bg-pattern-quotation.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
