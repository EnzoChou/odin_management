/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "spaceMono": ["SpaceMono-Regular"],
        "vinque": ["vinque"],
        "MoriaCitadel": ["MoriaCitadel"],
        "Norse": ["Norse"],
        'Norsebold': ["Norsebold"],
      }
    },
  },
  plugins: [],
}

