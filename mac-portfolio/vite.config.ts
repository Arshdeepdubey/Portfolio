// mac-portfolio/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Ensures correct asset routing for github.io/portfolio/
});