import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{html,js}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
