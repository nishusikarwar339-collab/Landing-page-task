/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D5DFC",
        "primary-hover": "#5B4AF7",
        "heading": "#0F172A",
        "body": "#64748B",
        "muted": "#94A3B8",
        "border": "#E5E7EB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "20px",
        "xl": "14px",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(0,0,0,0.07)",
        "dashboard": "0 24px 64px rgba(109,93,252,0.15), 0 8px 32px rgba(0,0,0,0.08)",
        "pricing": "0 8px 32px rgba(0,0,0,0.08)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
