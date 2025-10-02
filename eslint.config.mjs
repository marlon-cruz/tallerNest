// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-misused-promises': 'error', 
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error', 
        '@typescript-eslint/no-unsafe-return': 'error',
        
        // Reglas generales de ESLint
        'no-console': 'error', 
        'no-debugger': 'error', 
        'no-unused-expressions': 'error', 
        'no-var': 'error', 
        'prefer-const': 'error', 
        'eqeqeq': 'error', 
        'no-multiple-empty-lines': ['error', { max: 1 }], 
        'no-trailing-spaces': 'error', 
        'quotes': ['error', 'single'], 
        'semi': ['error', 'always'], 
    },
  },
);