/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3366ff",
        disabled: "rgba(99, 115, 129, 0.5)",
        srcPrimary: "#1939B7",
        srcSecondary: "#5C8DFF",
        light: "#212B36",
        lightSecondary: "#637381",
        error: "#FF5630",
      },
      backgroundImage: {
        "login-bg": "url('/images/login_bg.png')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
