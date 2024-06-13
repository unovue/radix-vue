import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
  },
  {
    ignores: ['*.js'],
  },
  {
    rules: {
      'ts/no-non-null-asserted-optional-chain': 'off',
      'ts/ban-ts-comment': 'warn',
      'ts/consistent-type-definitions': 'off',
      'symbol-description': 'off',
      'no-console': 'warn',
      'max-statements-per-line': ['error', { max: 2 }],
      'vue/one-component-per-file': 'off',
      'unicorn/prefer-dom-node-text-content': 'off',
      'unicorn/prefer-number-properties': 'off',
      'regexp/no-super-linear-backtracking': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': ['error', {
        singleline: 1,
        multiline: 1,
      }],
    },
  },
  {
    files: ['*.story.vue'],
    rules: {
      'no-console': 'off',
      'no-alert': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
)
