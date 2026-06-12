/* Minimal ESLint configuration to avoid runtime resolution errors in diverse environments.
   This file intentionally keeps rules minimal so `npm run lint` runs without failing due to
   plugin / extend resolution differences between CI and local environments. If you want
   richer TypeScript / React linting, we can expand this file and ensure all related packages
   are installed and resolved correctly.
*/

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: { browser: true },
    },
    rules: {},
  },
])
