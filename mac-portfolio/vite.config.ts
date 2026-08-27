import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use a relative path. This completely bypasses any case-sensitivity 
  // issues with GitHub Pages repository names.
  base: './', 
});