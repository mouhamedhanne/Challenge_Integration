/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_primary: "#FFFFFF",
        bg_button: "#3482FF",
        bg_hover_button: "#F89E52",
      },
    },
  },
  plugins: [],
};
