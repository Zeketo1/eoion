import type { Config } from "tailwindcss";
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#0A0A0A", // Deep black for the main background
        "background-secondary": "#141414", // Slightly lighter black for secondary sections
        highlight: "#1E90FF", // Vivid blue for buttons or accent text
        accent: "#63B3ED", // Softer light blue for interactive elements
        "soft-blue": "#A3D8F4", // Subtle blue for minor highlights
        "border-color": "#1C1C1C", // Almost black for borders
        "gradient-start": "#0A0A0A", // Gradient start (deep black)
        "gradient-end": "#1E90FF", // Gradient end (vivid blue)
        "text-primary": "#E5E5E5", // Soft white for readable text
        "text-secondary": "#9CA3AF", // Muted gray for less prominent text
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Ubuntu", "system-ui"],
        text: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [
    animate,
  ],
};

export default config;
