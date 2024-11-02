import daisyui from "daisyui";

const coursemateTheme = {
  coursemate: {
    primary: "#039BE5",
    secondary: "#E9F8FF",
    accent: "#37cdbe",
    neutral: "#3d4451",
    "base-100": "#ffffff",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [coursemateTheme, "dark", "light"],
  },
  plugins: [daisyui],
};
