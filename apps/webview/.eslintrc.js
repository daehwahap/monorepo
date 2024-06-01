/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@pinit/eslint-config/next.js'],
  parserOptions: {
    project: true,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'internal'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@pinit/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
}
