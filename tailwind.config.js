module.exports = (isProd) => ({
  prefix: '',
  purge: {
    enabled: isProd,
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'xs': { 'max': '639px' }
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms')
  ],
});
