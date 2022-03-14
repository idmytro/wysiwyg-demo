import { defineConfig } from 'windicss/helpers';

const colors = require('./config/windicss/colors');

export default defineConfig({
  theme: {
    extend: {
      colors: {
        ...colors,
        inherit: 'inherit',
        transparent: 'transparent',
      },
    },
  },
});
