/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#eef0e5',
        paper: '#f4f3e8',
        sage: '#6f7b55',
        olive: '#4f5e38',
        deep: '#2d3525',
        ink: '#2f3328',
        beige: '#dbd8c6'
      },
      boxShadow: {
        book: '0 30px 80px rgba(47,51,40,.22)',
        soft: '0 18px 45px rgba(47,51,40,.12)'
      }
    }
  },
  plugins: []
};
