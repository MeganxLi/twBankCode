/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            light: {
               FFFFFF: "var(--light-0)",
               F6F8FC: "var(--light-100)",
               ACD5ED: "var(--light-300)",
               "2C698D": "var(--light-600)",
               272643: "var(--light-800)",
            },
            dark: {
               E3F6F5: "var(--dark-0)",
               BAE8E8: "var(--dark-100)",
               "4A84A6": "var(--dark-300)",
               "2E3A50": "var(--dark-600)",
               "242E42": "var(--dark-800)",
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
