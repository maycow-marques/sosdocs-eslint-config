import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          name: 'next/link',
          message: 'Please import from `@/i18n/navigation` instead.',
        },
        {
          name: 'next/navigation',
          importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
          message: 'Please import from `@/i18n/navigation` instead.',
        },
      ],
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
          plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
          organizeImportsSkipDestructiveCodeActions: true,
        },
      ],
    },
  },
]