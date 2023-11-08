/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background": "#FAF6EB",
      "primary": "#DE9697",
      "beige": "#F4D7C9",
      "brown": "#D7AC9A",
      "dark-brown": "#D7886D",
      "title": "#B06F6F",
      "pink": "#F4C5C6",
      "text": "#442C2E",
      "gray" : "#AEAEAE",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-frank)"],
      },
    },
  },
  plugins: [],
};
