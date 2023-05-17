/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      backgroundColor: {
        primary: "#118ab2",
        secondary: "#073b4c",
        tertiary: "#06d6a0",
        quaternary: "#ffd166",
        fifth: "#1A659E",
        lightblack: "#1A1A1A",
        lightwhite: "#F8F8F8",
      },
      textColor: {
        lightblack: "#1A1A1A",
        lightwhite: "#F8F8F8",
        primary: "#118ab2",
        secondary: "#073b4c",
        tertiary: "#06d6a0",
        quaternary: "#ffd166",
        fifth: "#1A659E",
      },
      borderColor: {
        lightblack: "#1A1A1A",
        lightwhite: "#F8F8F8",
      },
    },
  },
  plugins: [],
}
