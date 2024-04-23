const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
    'react-native/react-native': true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
}
