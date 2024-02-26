import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        grid: "linear-gradient(0deg, #101010 7.05%, rgba(16, 16, 16, 0) 44.44%), url(/light-grid.png)",
        card: "linear-gradient(122.71deg, rgba(128, 128, 128, 0.05) 0%, rgba(128, 128, 128, 0) 52.38%, rgba(128, 128, 128, 0.15) 100%)",
        "google-button": "linear-gradient(111.34deg, #9F8BFF 0%, #7053FF 100%)",
        "google-button-active":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(111.34deg, #9F8BFF 0%, #7053FF 100%)",
        "input-gradient":
          "linear-gradient(168.47deg, rgba(54, 54, 54, 0.6) 47.33%, rgba(127, 67, 255, 0.6) 91.53%)",
      },
      boxShadow: {
        "card-parent":
          "0px 0px 1px 0px #80808033, 0px 2px 30px 0px #80808014, 0px 0px 15px 0px #80808008",
        "social-item-active": "0px 0px 14px 0px #FFFFFF40 inset",
      },
      colors: {
        light: {
          10: "rgba(255, 255, 255, 0.1)",
          50: "rgba(255, 255, 255, 0.5)",
          80: "rgba(255, 255, 255, 0.8)",
          100: "#808080",
          400: "rgba(250, 250, 250, 0.04)",
          800: "rgba(250, 250, 250, 0.08)",
          DEFAULT: "rgba(250, 250, 250, 1)",
          primary: "rgba(250, 250, 250, 0.16)",
          secondary: "rgba(250, 250, 250, 0.7)",
          tertiary: "rgba(255, 255, 255, 0.3)",
        },
        dark: {
          500: "rgba(128, 128, 128, 0.05)",
          40: "rgba(0, 0, 0, 0.4)",
        },
        surface: {
          black: "#101010",
          700: "#333331",
          900: "#1A1A1A",
        },
      },
      borderRadius: {
        "2.5xl": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
