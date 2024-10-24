import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: "15px"
      },
      colors: {
        accent: "#08E95E",
        custom: '#c3376d',
      },
    },
  },
  plugins: [],
};
export default config;
