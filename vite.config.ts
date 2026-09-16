import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@black': path.resolve(__dirname, './src/apps/crysa-black'),
      '@white': path.resolve(__dirname, './src/apps/crysa-white'),
    },
  },
  css: {
    postcss: './postcss.config.mjs',
  },
})
