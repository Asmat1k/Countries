import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      css: '/src/css',
      js: '/src/js',
    },
  },
});
