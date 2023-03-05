/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `${__dirname}/src/`,
      },
    ],
  },
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
