import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  define: {
    'window.jQuery': 'jQuery',
    'window.$': 'jQuery',
  },
  optimizeDeps: {
    include: ['jquery'],
  },
})
