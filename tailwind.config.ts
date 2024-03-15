import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-green': '#00b156',
        'text-es1': '#212529',
        'text-sub': '#757575',
        'primary-white': '#F9FAFA'
      },
      screens: {
        'app-c1-min' : '992px',
        'app-c1-max' : {'max': '991px'},
        'max-md': {'max': '768px'},
        'custom-home': '470px',
        'middle-carousel': '1780px',
        'xsm-productCard': {'max': '450px'},
        'md-productCard': {'min':'451px','max': '767px'},
        'footer-screen1': {'max': '876px'},
        'footer-screen2': {'max': '987px'},
        'overlay-screen1': {'min': '993px','max': '1500px'},
        'overlay-screen2': {'max': '600px'},
        'small-screen-400': {'max': '465px'},
      }
    },
  },
  plugins: [],
};
export default config;
