const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu',

  rules: {
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'import/first': 'off',
    'import/order': 'off',
    'symbol-description': 'off',
    'no-console': 'warn',
    'max-statements-per-line': ['error', { max: 2 }],
    'vue/one-component-per-file': 'off',
  },

  overrides: [
    {
      files: ['*.story.vue'],
      rules: {
        'no-console': 'off',
        'no-alert': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
  ],
}
