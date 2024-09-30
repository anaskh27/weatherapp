/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sunny-bg":
          "url('/Users/sardaranas/Desktop/weather app/weather-app/public/bg-weather (1).png')",
        "rainy-bg":
          "url('/Users/sardaranas/Desktop/weather app/weather-app/public/bg-weather (1).png')",
        "cloudy-bg":
          "url('/Users/sardaranas/Desktop/weather app/weather-app/public/bg-weather (3).png')",
      },
    },
  },
  plugins: [],
};
