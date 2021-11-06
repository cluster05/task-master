module.exports = {
  purge: [],
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

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

          accent: "#8b5cf6",
          "accent-focus": "#8858f8",
          "accent-content": "#ffffff",

          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",

          info: "#2094f3",
          success: "#09c372",
          warning: "#fb9865",
          error: "#ff3860",
        },
      },
    ],
  },
};
