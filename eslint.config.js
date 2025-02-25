import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      'jsx-a11y': jsxA11y,
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // react编码规范
      "react/jsx-pascal-case": ['warn', { allowAllCaps: true, allowNamespace: true, allowLeadingUnderscore: true, ignore: [] }],
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx','.tsx'] }],
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'react/self-closing-comp': 'error',
      'jsx-quotes': ['error', 'prefer-double'],
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'proportional-always' }],
      'react/jsx-wrap-multilines': 'error',
      'react/no-string-refs': 'error',
      'react/display-name': 'off',
      'react/prop-types': 'error',
      'react/default-props-match-prop-types': 'error',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/no-access-key': 'warn',
      'react/jsx-props-no-spreading': ['error', { html: 'enforce', custom: 'enforce', explicitSpread: 'ignore' }],
      'react/jsx-no-bind': ['error', { ignoreRefs: true, allowArrowFunctions: true, allowFunctions: false, allowBind: false }],
      'react/no-array-index-key': 'error',
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-max-props-per-line': ['error', { maximum: 3 }],

      // javascript编码规范
      'no-object-constructor': 'error',
      'array-callback-return': 'warn',
      '@stylistic/js/semi': ["error", "always"],
      '@stylistic/js/semi-style': ['error', 'last'],
      '@stylistic/js/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
)
