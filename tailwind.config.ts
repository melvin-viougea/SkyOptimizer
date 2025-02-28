import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        darkblue: "var(--darkblue)",
        sidebar: "var(--sidebar)",
        sidebarlight: "var(--sidebarlight)",
        yellow: "var(--yellow)",
        darkyellow: "var(--darkyellow)",
      },
    },
  },
  plugins: [],
};

export default config;
