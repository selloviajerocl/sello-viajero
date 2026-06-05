import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: "#064f67",
        deepPetrol: "#003447",
        turquoise: "#00a9b3",
        softGold: "#d2b76f",
        ivory: "#f7fbfb",
      },
      boxShadow: {
        elegant: "0 24px 80px rgba(0, 52, 71, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
