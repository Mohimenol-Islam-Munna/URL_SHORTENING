/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        boost: "url('/images/bg-boost-desktop.svg')",
      }),
    },
  },
  plugins: [],
};
