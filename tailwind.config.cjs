/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            light: {
               FFFFFF: "#FFFFFF",
               F6F8FC: "#F6F8FC",
               ACD5ED: "#ACD5ED",
               "2C698D": "#2c698d",
               272643: "#272643",
               E2EAF1: "#E2EAF1",
               BACDDB: "#BACDDB",
               ACD5EDBF: "#ACD5EDBF",
            },
            dark: {
               E3F6F5: "#E3F6F5",
               BAE8E8: "#BAE8E8",
               "4A84A6": "#4A84A6",
               "2E3A50": "#2E3A50",
               "242E42": "#242E42",
               "263A51": "#263A51",
               355070: "#355070",
            },
         },
         dropShadow: {
            serch: ["0px 1px 2px rgba(0, 0, 0, 0.06)", "0px 1px 3px rgba(0, 0, 0, 0.1)"],
            LightList: "0px 8px 8px rgba(0, 0, 0, 0.05)",
            DarkList: "0px 10px 10px rgba(14, 14, 14, 0.1)",
         },
         screens: {
            "2xs": { max: "320px" },
            xs: { max: "480px" },
            sm: { max: "640px" },
            md: { max: "768px" },
            lg: { max: "960px" },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
