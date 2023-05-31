/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        stripes:
          "repeating-linear-gradient(to bottom, #90CAF9  0px,#90CAF9  4px,#cee6f1  4px,#cee6f1  10px)",
      },
    },
  },
  plugins: [],
};
