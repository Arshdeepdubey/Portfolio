import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  let base = '/'
  
  if (command === 'build') {
    // Use environment variable set by the deployment workflow
    const deployFolder = process.env.DEPLOY_FOLDER || '.'
    base = deployFolder === '.' ? '/Portfolio/' : '/Portfolio/resume/'
  }

  return {
    plugins: [react()],
    base,
  }
})