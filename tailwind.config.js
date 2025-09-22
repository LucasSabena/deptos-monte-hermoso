/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A8DADC',
        secondary: '#F1DABF', 
        accent: '#E6A4B4',
        background: '#FDF8F0',
        'card-bg': '#FFFFFF',
        'text-primary': '#4A4A4A',
        'text-secondary': '#7E7E7E'
      },
      fontFamily: {
        'headings': ['Satoshi', 'sans-serif'],
        'body': ['Satoshi', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px', 
        'md': '16px',
        'lg': '32px',
        'xl': '64px'
      },
      boxShadow: {
        'card': '0 8px 16px rgba(0, 0, 0, 0.08)',
        'button': '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      borderRadius: {
        'card': '12px',
        'button': '8px'
      }
    },
  },
  plugins: [],
}