import js from '@eslint/js'
import globals from 'globals'
// Note: react-hooks and react-refresh configs caused nested-extends runtime errors in ESLint v10.
// If you want to enable those plugin recommended configs later, add them carefully as top-level
// string-based extends or import specific rule sets. For now keep a minimal, working config.
import tseslint from '@typescript-eslint/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.url ? new URL('.', import.meta.url).pathname : process.cwd()
      },
      globals: globals.browser,
    },
  },
])
