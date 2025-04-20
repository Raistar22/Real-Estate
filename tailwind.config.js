/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          500: 'rgb(var(--color-gold) / <alpha-value>)',
          600: 'rgb(var(--color-gold) / 0.9)',
          300: 'rgb(var(--color-gold) / 0.8)',
        },
        navy: {
          900: 'rgb(var(--color-navy) / <alpha-value>)',
          800: 'rgb(var(--color-navy) / 0.9)',
          700: 'rgb(var(--color-navy) / 0.8)',
          600: 'rgb(var(--color-navy) / 0.7)',
          50: 'rgb(var(--color-navy) / 0.1)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};