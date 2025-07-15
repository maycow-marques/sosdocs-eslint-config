import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          $schema: 'https://json.schemastore.org/prettierrc',
          semi: true,
          useTabs: false,
          tabWidth: 2,
          endOfLine: 'lf',
          printWidth: 100,
          singleQuote: true,
          plugins: ['prettier-plugin-organize-imports'],
          organizeImportsSkipDestructiveCodeActions: true,
        },
      ],
    },
  },
];
