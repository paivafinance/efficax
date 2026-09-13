/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base relativa: o build em dist/ funciona em qualquer pasta da hospedagem
// (inclusive a atual, /Efficax_Landing/), sem reconfigurar.
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
})
