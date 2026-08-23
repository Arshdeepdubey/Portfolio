import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Use '/' for local dev, and '/Portfolio/' for your GitHub repository production build
    base: command === 'serve' ? '/' : '/Portfolio/',
  }
})