/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A1EA6",
        background: "#00041c",
      },
      fontFamily: {
        AnekDevanagari: ["AnekDevanagari Regular", "sans-serif"],
        AnekDevanagariBold: ["AnekDevanagari Bold", "sans-serif"],
        AnekDevanagariMedium: ["AnekDevanagari Medium", "sans-serif"],
        AnekDevanagariSemiBold: ["AnekDevanagari SemiBold", "sans-serif"],
        AnekDevanagariLight: ["AnekDevanagari Light", "sans-serif"],
        AnekDevanagariExtraLight: ["AnekDevanagari ExtraLight", "sans-serif"],
        LatoThin: ["Lato Light", "sans-serif"],
        LatoLight: ["Lato Light", "sans-serif"],
        LatoRegular: ["Lato Regular", "sans-serif"],
        LatoMedium: ["Lato Medium", "sans-serif"],
        LatoBold: ["Lato Bold", "sans-serif"],
        LatoBlack: ["Lato Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
