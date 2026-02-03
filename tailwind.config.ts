import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: { 
        "variable-collection-color": "var(--variable-collection-color)", 
        "x-95-6b-4b": "var(--x-95-6b-4b)", 
      }, 
      fontFamily: { 
        title: ["var(--font-handicrafts)", "Helvetica", "sans-serif"], 
        handicrafts: ["var(--font-handicrafts)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
