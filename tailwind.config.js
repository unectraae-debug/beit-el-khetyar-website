/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f2efe3',
        paper: '#fbf5e8',
        sage: '#72835b',
        olive: '#4e6139',
        deep: '#1f2a1f',
        ink: '#2b3028',
        beige: '#ded3bd',
        terracotta: '#a95635',
        gold: '#d9ad67',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        arabic: ['Cairo', 'Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        book: '0 30px 80px rgba(31,42,31,.24)',
        soft: '0 18px 45px rgba(31,42,31,.12)',
        lift: '0 35px 90px rgba(31,42,31,.28)',
      },
    },
  },
  plugins: [],
};
