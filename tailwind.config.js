/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          50: '#FAF6F0',
          100: '#F4ECE1',
          200: '#E8D7C3',
          300: '#D7BC9F',
          400: '#C49E7C',
          500: '#AD7F5A',
          600: '#8E603E',
          700: '#6E452B',
          800: '#4E2F1B',
          900: '#2E190E',
          950: '#1A0E08',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          warm: '#F7F3EB',
          card: '#FFFFFF',
          border: '#EBE3D5',
        },
        amberGold: {
          DEFAULT: '#D48D3B',
          hover: '#BA772A',
          light: '#FDF4E7',
        },
        boba: {
          matcha: '#708238',
          taro: '#9B72AA',
          tiger: '#78350F',
          berry: '#B9385C',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(46, 25, 14, 0.08)',
        'warm-md': '0 8px 24px -4px rgba(46, 25, 14, 0.10)',
        'warm-lg': '0 16px 36px -6px rgba(46, 25, 14, 0.14)',
        'warm-glow': '0 0 25px rgba(212, 141, 59, 0.25)',
      }
    },
  },
  plugins: [],
}
