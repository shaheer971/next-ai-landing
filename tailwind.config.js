module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "next-ai-3framerwebsiteabbey": "var(--next-ai-3framerwebsiteabbey)",
        "next-ai-3framerwebsiteapple": "var(--next-ai-3framerwebsiteapple)",
        "next-ai-3framerwebsiteatlantis":
          "var(--next-ai-3framerwebsiteatlantis)",
        "next-ai-3framerwebsiteblack": "var(--next-ai-3framerwebsiteblack)",
        "next-ai-3framerwebsiteblack-pearl":
          "var(--next-ai-3framerwebsiteblack-pearl)",
        "next-ai-3framerwebsitebrick-red":
          "var(--next-ai-3framerwebsitebrick-red)",
        "next-ai-3framerwebsitecerulean":
          "var(--next-ai-3framerwebsitecerulean)",
        "next-ai-3framerwebsitecrimson": "var(--next-ai-3framerwebsitecrimson)",
        "next-ai-3framerwebsitedenim": "var(--next-ai-3framerwebsitedenim)",
        "next-ai-3framerwebsiteecstasy": "var(--next-ai-3framerwebsiteecstasy)",
        "next-ai-3framerwebsiteendeavour":
          "var(--next-ai-3framerwebsiteendeavour)",
        "next-ai-3framerwebsitefun-blue":
          "var(--next-ai-3framerwebsitefun-blue)",
        "next-ai-3framerwebsitegreen-haze":
          "var(--next-ai-3framerwebsitegreen-haze)",
        "next-ai-3framerwebsiteheliotrope":
          "var(--next-ai-3framerwebsiteheliotrope)",
        "next-ai-3framerwebsitejade": "var(--next-ai-3framerwebsitejade)",
        "next-ai-3framerwebsitemine-shaft":
          "var(--next-ai-3framerwebsitemine-shaft)",
        "next-ai-3framerwebsitepersimmon":
          "var(--next-ai-3framerwebsitepersimmon)",
        "next-ai-3framerwebsitepistachio":
          "var(--next-ai-3framerwebsitepistachio)",
        "next-ai-3framerwebsitepurple-heart":
          "var(--next-ai-3framerwebsitepurple-heart)",
        "next-ai-3framerwebsitered-orange":
          "var(--next-ai-3framerwebsitered-orange)",
        "next-ai-3framerwebsitescience-blue":
          "var(--next-ai-3framerwebsitescience-blue)",
        "next-ai-3framerwebsitewhite": "var(--next-ai-3framerwebsitewhite)",
        "next-ai-3framerwebsitewhite-10":
          "var(--next-ai-3framerwebsitewhite-10)",
        "next-ai-3framerwebsitewhite-20":
          "var(--next-ai-3framerwebsitewhite-20)",
        "next-ai-3framerwebsitewhite-5": "var(--next-ai-3framerwebsitewhite-5)",
        "next-ai-3framerwebsitewhite-50":
          "var(--next-ai-3framerwebsitewhite-50)",
        "next-ai-3framerwebsitewhite-70":
          "var(--next-ai-3framerwebsitewhite-70)",
        "next-ai-3framerwebsitewhite-80":
          "var(--next-ai-3framerwebsitewhite-80)",
        "next-ai-3framerwebsitewhite-black-pearl-black-pearl":
          "var(--next-ai-3framerwebsitewhite-black-pearl-black-pearl)",
        "next-ai-3framerwebsitewoodsmoke":
          "var(--next-ai-3framerwebsitewoodsmoke)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
        "next-ai-3-framer-website-inter-bold":
          "var(--next-ai-3-framer-website-inter-bold-font-family)",
        "next-ai-3-framer-website-inter-light":
          "var(--next-ai-3-framer-website-inter-light-font-family)",
        "next-ai-3-framer-website-inter-regular":
          "var(--next-ai-3-framer-website-inter-regular-font-family)",
        "next-ai-3-framer-website-semantic-heading-1":
          "var(--next-ai-3-framer-website-semantic-heading-1-font-family)",
        "next-ai-3-framer-website-semantic-heading-2":
          "var(--next-ai-3-framer-website-semantic-heading-2-font-family)",
        "next-ai-3-framer-website-semantic-heading-3":
          "var(--next-ai-3-framer-website-semantic-heading-3-font-family)",
        "next-ai-3-framer-website-semantic-heading-6":
          "var(--next-ai-3-framer-website-semantic-heading-6-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
