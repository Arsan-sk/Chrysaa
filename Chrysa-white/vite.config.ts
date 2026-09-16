import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const workspacePath = (relativePath: string) =>
  decodeURIComponent(new URL(relativePath, import.meta.url).pathname).replace(
    /^\/(\w:)/,
    '$1',
  )

export default defineConfig({
  plugins: [react()],
  publicDir: workspacePath('../public'),
  resolve: {
    alias: {
      '@shared': workspacePath('../shared'),
    },
  },
})
