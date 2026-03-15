import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12213a",
        sand: "#f7f3ea",
        sun: "#f7c768",
        leaf: "#7aa37a",
        coral: "#e97b63"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(18, 33, 58, 0.12)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(247, 199, 104, 0.45), transparent 35%), radial-gradient(circle at top right, rgba(122, 163, 122, 0.4), transparent 32%), linear-gradient(135deg, #fffdf8 0%, #f7f3ea 100%)"
      }
    }
  },
  plugins: []
};

export default config;