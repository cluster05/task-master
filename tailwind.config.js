module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#498afb",
          "primary-focus": "#2674fa",
          "primary-content": "#ffffff",
          secondary: "#ff4088",
          "secondary-focus": "#ff649e",
          "secondary-content": "#ffffff",
          info: "#2094f3",
          success: "#0be586",
          warning: "#fb9865",
          error: "#ff3860",
        },
      },
    ],
  },
};
