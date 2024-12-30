import pluginJs from '@eslint/js'
import parserTs from '@typescript-eslint/parser'
import parserAstro from 'astro-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'
import globals from 'globals'
import neostandard, { plugins } from 'neostandard'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['.astro/*', 'dist/*', 'src/components/PostHog.astro'] },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...neostandard({
    noJsx: true,
    noStyle: true
  }),
  {
    plugins: {
      '@stylistic': plugins['@stylistic']
    },
    rules: {
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never',
          importAttributes: 'never',
          dynamicImports: 'never'
        }
      ],
      '@stylistic/no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false
        }
      ]
    }
  },
  ...plugins['typescript-eslint'].config({
    extends: [...plugins['typescript-eslint'].configs.recommended],
    rules: {
      '@typescript-eslint/space-before-function-paren': ['error', 'never'],
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  }),
  {
    files: ['src/**/*.astro'],
    languageOptions: {
      globals: eslintPluginAstro.environments.astro.globals,
      parser: parserAstro,
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: parserTs
      }
    },
    rules: {
      'astro/jsx-a11y/anchor-is-valid': 'warn'
    }
  },
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn'
    }
  },
  eslintConfigPrettier
]
