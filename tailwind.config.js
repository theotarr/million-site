const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.md',
    './components/**/*.js',
    './pages/**/*.mdx',
    './theme.config.js',
    './styles.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`"Inter"`, 'sans-serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        dark: '#000',
        gray: colors.trueGray,
        blue: colors.blue,
        orange: colors.orange,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        betterhover: { raw: '(hover: hover)' },
      },
    },
  },
  darkMode: 'class',
};
