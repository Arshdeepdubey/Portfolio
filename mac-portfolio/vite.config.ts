import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Must match the EXACT casing of your GitHub repository name
  base: '/Portfolio/', 
});