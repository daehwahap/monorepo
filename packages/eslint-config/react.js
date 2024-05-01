// Workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ['*.js?(x)', '*.ts?(x)'] },
  ],
  rules: {
    'import/prefer-default-export': 'off',
    rules: {
      'import/prefer-default-export': 'off',
      'react/function-component-definition': [
        2,
        { namedComponents: ['arrow-function', 'function-declaration'] },
      ],
    },
  },
}
