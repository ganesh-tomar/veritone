/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      cosmos: "#212121",
      ember: "#FA524D",
      softRiptide: "#DEE8E8",
      softEmber: "#EEE3E3",
      emberDark: "#D63632",
      lightning: "#E3F730",
      lightningDark: "#D5EC06",
      riptide: "#42CFC9",
      riptideWeb: "#2AA29C",
      ultraviolet: "#8257EF",
      ultravioletDark: "#663FCA",
      purple: "#875EF0",
      gray: "#D9D9D9",
    },
    screens: {
      largedesktop: { min: "1920px", max: "2560px" },
      "xxl-up": { min: "1595px" },
      "xxl-down": { max: "1594px" },
      desktop: { min: "1281px", max: "1595px" },
      desktopMid: { min: "1366px", max: "1595px" },
      continerDesktop: { min: "1281px", max: "1594px" },
      xl: { max: "1280px" },
      "xl-up": { min: "1281px" },

      ipad: { max: "1024px" },
      "ipad-up": { min: "1025px" },
      //short height
      "laptop-landscape": {
        raw: "(min-width: 1200px) and (max-height: 950px)",
      },
      laptopmid: { min: "1281px", max: "1366px" },
      laptop: { min: "992px", max: "1280px" },
      laptopsmall: { min: "1024px", max: "1280px" },
      "laptop-portrait": { min: "1025px", max: "1280px" },
      lg: { max: "991px" },
      "lg-up": { min: "992px" },

      tabletlarge: { min: "992px", max: "1024px" },
      tablet: { min: "768px", max: "991px" },
      md: { max: "767px" },
      "md-up": { min: "768px" },

      phablet: { min: "596px", max: "767px" },
      sm: { max: "595px" },
      "sm-up": { min: "596px" },

      phone: { min: "376px", max: "595px" },
      xs: { max: "375px" },
      "xs-up": { min: "376px" },

      xxs: { max: "360px" },
    },
  },
  plugins: [],
};
