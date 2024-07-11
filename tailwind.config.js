/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "slide-in": {
        "0%": { transform: "translateY(-20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      "slide-from-left": {
        "0%": { transform: "translateX(-40px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
    },
    animation: {
      "fade-in": "fade-in 1s ease-in-out forwards",
      "slide-in": "slide-in 0.2s ease-in-out forwards",
      "slide-in-slow": "slide-in 0.5s ease-in-out forwards",
      "slide-from-left": "slide-from-left 0.5s ease-in-out forwards",
    },
  },
  plugins: [],
};
