module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2 rem'
    },
    fontFamily: {
      'myfont': 'Avenir, Helvetica, Arial, sans-serif'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
