// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["OpenSans", "Arial", "sans-serif"],
      },
      lineHeight: {
        "extra-loose": "4rem",
      },
      backgroundColor: {
        "theme-green": "#48AA39",
      },
      colors: {
        "theme-green": "#48AA39",
      },
      animation: {
        floating: "floating 3s linear infinite ease-in-out",
        colorChange: "colorChange 24s infinite ease-in-out",
        colorChange2: "colorChange 50s infinite ease-in-out",
        gradient: "gradient 100s infinite ease-in-out",
        spinAnime: "spin 200s infinite linear",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0,  0px)" },
          " 50%": { transform: "translate(0, 5px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        spin: {
          from: {
            transform: " rotate(0deg)",
          },
          to: {
            transform: "rotate(359deg)",
          },
        },
        gradient: {
          "0%": {
            background:
              "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))",
          },
          " 10%": {
            background:
              "linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
          },
          " 20%": {
            background:
              "linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))",
          },
          " 30%": {
            background:
              "linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
          },
          " 40%": {
            background:
              "linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195))",
          },
          " 50%": {
            background:
              "linear-gradient(to right, rgb(254, 249, 195), rgb(253, 224, 71), rgb(234, 179, 8))",
          },
          " 60%": {
            background:
              "linear-gradient(to right, rgb(254, 240, 138), rgb(187, 247, 208), rgb(34, 197, 94))",
          },
          " 70%": {
            background:
              "linear-gradient(to right, rgb(254, 202, 202), rgb(252, 165, 165), rgb(254, 240, 138))",
          },
          " 80%": {
            background:
              "linear-gradient(to right, rgb(187, 247, 208), rgb(134, 239, 172), rgb(59, 130, 246))",
          },
          " 90%": {
            background:
              "linear-gradient(to right, rgb(187, 247, 208), rgb(74, 222, 128), rgb(126, 34, 206))",
          },
          "100%": {
            background:
              "linear-gradient(to right, rgb(134, 239, 172), rgb(253, 224, 71), rgb(249, 168, 212))",
          },
        },
        colorChange: {
          "0%": { backgroundColor: "#f44336" },
          " 10%": { backgroundColor: "#e91e63" },
          " 20%": { backgroundColor: "#9c27b0" },
          " 30%": { backgroundColor: "#673ab7" },
          " 40%": { backgroundColor: "#3f51b5" },
          " 50%": { backgroundColor: "#2196f3" },
          " 60%": { backgroundColor: "#00bcd4" },
          " 70%": { backgroundColor: "#009688" },
          " 80%": { backgroundColor: "#4caf50" },
          " 90%": { backgroundColor: "#ff9800" },
          "100%": { backgroundColor: "#795548" },
        },
      },
    },
  },
  variants: {
    extend: {
      animationDelay: ["responsive", "hover"],
      fontFamily: ["hover", "focus"],
    },
  },
  corePlugins: {
    fontFamily: true,
  },
};
