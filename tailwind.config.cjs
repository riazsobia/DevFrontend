/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    backgroundImage: {
      profile: "url('https://avatars.githubusercontent.com/u/127951878?v=4')",
    },
  },
  plugins: [],
};
